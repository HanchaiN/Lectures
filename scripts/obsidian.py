import json
import sys
import re


def process_image(content):
    content = re.sub(
        r"!\[(.*?)(?:\|(\d+)(?:x(\d+))?)?\]\((.*?)\)",
        lambda m: "<img"
        + f' src="{m.group(4)}"'
        + (f' width="{m.group(2)}"' if m.group(2) else "")
        + (f' height="{m.group(3)}"' if m.group(3) else "")
        + f' alt="{m.group(1)}"'
        + ">",
        content,
        re.DOTALL,
    )  # May replace 'img' with 'iframe' for embeded webpages
    return content


def process_content(content):
    content = process_image(content)
    return content


def process_item(item):
    if not "Chapter" in item:
        return
    item["Chapter"]["content"] = process_content(item["Chapter"]["content"])
    for sub_item in item["Chapter"]["sub_items"]:
        process_item(sub_item)


if __name__ == "__main__":
    if len(sys.argv) > 1:
        if sys.argv[1] == "supports":
            sys.exit(0)

    context, book = json.load(sys.stdin)
    for section in book["sections"]:
        process_item(section)
    print(json.dumps(book))
