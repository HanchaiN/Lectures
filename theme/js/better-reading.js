// TODO
window.addEventListener("load", () => {
	const splitter = new GraphemeSplitter();
	const fixation_ratio = 0.4;

	document.querySelector("main").classList.add("better-reading");
	document.querySelectorAll("main _").forEach(function (element) {
		let text = element.textContent ?? "";
		let paragraphs = text.split(/[\n]/gmiu);
		paragraphs.map(function (paragraph) {
			let words = paragraph.split(/[ ]/gmiu);
			words.map(function (word) {
				if (word.trim() === "") return;
				const charArray = splitter.splitGraphemes(word);
				const fixationPoint = Math.ceil(charArray.length * fixation_ratio);
				return `<span class="better-reading-fixation">${charArray.slice(0, fixationPoint).join("")}</span>${charArray.slice(fixationPoint).join("")}`;
			});
			return words.join(" ");
		});
		return paragraphs.join("\n");
	});
});
