import json
import sys
import re

def process_content(content):
    content = re.sub(r'\\\\', r'\\\\\\\\', content, re.DOTALL)
    content = re.sub(r'(?<!\\)\$\$([\s\S]*?)(?<!\\)\$\$', r'\\\\[\1\\\\]', content, re.DOTALL)
    content = re.sub(r'(?<!\\)\$([\s\S]*?)(?<!\\)\$', r'\\\\(\1\\\\)', content, re.DOTALL)
    return content

def process_item(item):
    if (not "Chapter" in item):
        return
    item['Chapter']['content'] = process_content(item['Chapter']['content']);
    for sub_item in item['Chapter']['sub_items']:
        process_item(sub_item)

if __name__ == '__main__':
    if len(sys.argv) > 1:
        if sys.argv[1] == "supports":
            sys.exit(0)

    context, book = json.load(sys.stdin)
    for section in book['sections']:
        process_item(section)
    print(json.dumps(book))
