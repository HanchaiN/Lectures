window.addEventListener("load", () => {
	const splitter = new GraphemeSplitter();
	const fixation_ratio = 0.4;

	function processText(node, callback) {
		if (node.nodeName === "SCRIPT") return;
		switch (node.nodeType) {
			case Node.ELEMENT_NODE:
				node.childNodes.forEach((n) => processText(n, callback));
				break;
			case Node.TEXT_NODE:
				callback(node);
				break;
		}
	}
	const root = document.querySelector("main");
	processText(root, function (textNode) {
		let text = textNode.textContent;
		let frag = document.createDocumentFragment();
		text.split(/(\s*)/gmiu).forEach(function (word) {
			if (word.trim() === "")
				return frag.appendChild(document.createTextNode(word));
			const charArray = splitter.splitGraphemes(word);
			const fixationPoint = Math.ceil(charArray.length * fixation_ratio);
			const word = document.createElement("span");
			const fixp = document.createElement("span");
			word.classList.add("better-reading");
			fixp.classList.add("better-reading-fixation");
			fixp.appendChild(document.createTextNode(charArray.slice(0, fixationPoint).join("")));
			word.appendChild(fixp);
			word.appendChild(document.createTextNode(charArray.slice(fixationPoint).join("")));
			frag.appendChild(word);
		});
		textNode.replaceWith(frag);
	});
});
