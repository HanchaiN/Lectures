window.addEventListener("load", () => {
	function get_scheme(favor) {
		if (getComputedStyle(document.body).getPropertyValue(`--ctp-${favor}-text`) === "")
			return null;
		return {
			C: getComputedStyle(document.body).getPropertyValue(`--ctp-${favor}-text`),
			O: getComputedStyle(document.body).getPropertyValue(`--ctp-${favor}-maroon`),
			N: getComputedStyle(document.body).getPropertyValue(`--ctp-${favor}-blue`),
			F: getComputedStyle(document.body).getPropertyValue(`--ctp-${favor}-green`),
			CL: getComputedStyle(document.body).getPropertyValue(`--ctp-${favor}-teal`),
			BR: getComputedStyle(document.body).getPropertyValue(`--ctp-${favor}-red`),
			I: getComputedStyle(document.body).getPropertyValue(`--ctp-${favor}-mauve`),
			P: getComputedStyle(document.body).getPropertyValue(`--ctp-${favor}-peach`),
			S: getComputedStyle(document.body).getPropertyValue(`--ctp-${favor}-yellow`),
			B: getComputedStyle(document.body).getPropertyValue(`--ctp-${favor}-rosewater`),
			SI: getComputedStyle(document.body).getPropertyValue(`--ctp-${favor}-pink`),
			H: getComputedStyle(document.body).getPropertyValue(`--ctp-${favor}-text`),
			BACKGROUND: getComputedStyle(document.body).getPropertyValue(`--ctp-${favor}-base`)
		}
	}
	function get_theme() {
		var theme;
		try { theme = localStorage.getItem('mdbook-theme'); } catch (e) { }
		if (["mocha", "macchiato", "frappe", "latte"].includes(theme))
			return theme;
		try { theme = localStorage.getItem('mdbook-scheme'); } catch (e) { }
		if (["dark", "light"].includes(theme))
			return theme;
		return "light";
	}
	const options = {
		width: 250,
		height: 250,
		compactDrawing: false,
		terminalCarbons: true,
		explicitHydrogens: true,
		themes: {
			mocha: get_scheme("mocha"),
			macchiato: get_scheme("macchiato"),
			frappe: get_scheme("frappe"),
			latte: get_scheme("latte"),
		}
	};
	function stringToHash(string) {
		let hash = 0;
		if (string.length == 0) return hash;
		for (i = 0; i < string.length; i++) {
			char = string.charCodeAt(i);
			hash = ((hash << 5) - hash) + char;
			hash = hash & hash;
		}
		return hash;
	}

	document.querySelectorAll('script[type="text/SMILES"]').forEach(function (script) {
		const div = document.createElement('div');
		div.dataset.smiles = script.innerHTML;
		script.replaceWith(div);
		div.dataset.smiles
			.split("\n")
			.filter(line => line.length !== "")
			.forEach(function (smilesText, i) {
				const canvasId = script.id ? script.id + '-canvas' + i : 'smiles-canvas-' + stringToHash(smilesText);
				const canvas = document.createElement('canvas');
				canvas.id = canvasId;
				canvas.dataset.smiles = smilesText;
				div.appendChild(canvas);
			});
	});
	function redraw() {
		SmilesDrawer.apply(options, "canvas[data-smiles]", get_theme(), function (err) { console.error(err); });
	}
	redraw();
	window.addEventListener("themeChange", (e) => redraw());
});
