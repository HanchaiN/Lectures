window.addEventListener("load", () => {
	const splitter = new GraphemeSplitter();
	const fixation_ratio = 0.4;
	function processText(node, callback) {
		if (node.nodeName === "SCRIPT") return;
		switch (node.nodeType) {
			case Node.ELEMENT_NODE:
				for (let i = 0; i < node.childNodes.length; i++)
					processText(node.childNodes[i], callback);
				break;
			case Node.TEXT_NODE:
				callback(node);
				break;
			default:
		}
	}
	processText(document.querySelector("main"), function (textNode) {
		const frag = document.createElement("span");
		span.classList.add("better-reading");
		textNode.textContent.split(/(\s*)/gmiu).forEach(function (word) {
			if (word.trim() === "")
				return frag.appendChild(document.createTextNode(word));
			const charArray = splitter.splitGraphemes(word);
			const fixationPoint = Math.ceil(charArray.length * fixation_ratio);
			const word_elm = document.createElement("span");
			const fixation = document.createElement("span");
			word_elem.classList.add("better-reading-word");
			fixation.classList.add("better-reading-fixation");
			fixation.appendChild(document.createTextNode(charArray.slice(0, fixationPoint).join("")));
			word_elm.appendChild(fixation);
			word_elm.appendChild(document.createTextNode(charArray.slice(fixationPoint).join("")));
			frag.appendChild(word_elm);
		});
		textNode.replaceWith(frag);
	});
});
