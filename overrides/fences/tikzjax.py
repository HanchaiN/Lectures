from pymdownx.superfences import fence_code_format

def fence_format(source, language, class_name, options, md, **kwargs):
    """Format source as TikZJax blocks."""
    if language != "tikz":
        return fence_code_format(source, language, class_name, options, md, **kwargs)

    classes = kwargs['classes']
    id_value = kwargs['id_value']
    attrs = kwargs['attrs']

    if class_name:
        classes.insert(0, class_name)

    id_value = ' id="{}"'.format(id_value) if id_value else ''
    classes = ' class="{}"'.format(' '.join(classes)) if classes else ''
    attrs = ' ' + ' '.join('{k}="{v}"'.format(k=k, v=v) for k, v in attrs.items()) if attrs else ''

    return f'<script type="text/tikz"{id_value}{classes}{attrs}>{source}</script>'