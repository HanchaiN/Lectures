import json
import sys
import re

def process_content(content):
    content = re.sub(r'````tikz([\s\S]*?)````', r'<script type="text/tikz">\1</script>', content, re.DOTALL)
    return content

def process_item(item):
    if (not "content" in item):
        return
    chapter = item['Chapter']
    chapter['content'] = process_content(chapter['content']);
    for sub_item in chapter['sub_items']:
        process_item(sub_item)

if __name__ == '__main__':
    if len(sys.argv) > 1:
        if sys.argv[1] == "supports":
            sys.exit(0)

    context, book = json.load(sys.stdin)
    for section in book['sections']:
        process_item(section)
    print(json.dumps(book))
