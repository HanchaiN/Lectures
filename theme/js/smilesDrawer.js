window.addEventListener("load", () => {
	function get_scheme() {
		return {
			C: getComputedStyle(document.body).getPropertyValue(`--ctp-text`),
			O: getComputedStyle(document.body).getPropertyValue(`--ctp-maroon`),
			N: getComputedStyle(document.body).getPropertyValue(`--ctp-blue`),
			F: getComputedStyle(document.body).getPropertyValue(`--ctp-green`),
			CL: getComputedStyle(document.body).getPropertyValue(`--ctp-teal`),
			BR: getComputedStyle(document.body).getPropertyValue(`--ctp-red`),
			I: getComputedStyle(document.body).getPropertyValue(`--ctp-mauve`),
			P: getComputedStyle(document.body).getPropertyValue(`--ctp-peach`),
			S: getComputedStyle(document.body).getPropertyValue(`--ctp-yellow`),
			B: getComputedStyle(document.body).getPropertyValue(`--ctp-rosewater`),
			SI: getComputedStyle(document.body).getPropertyValue(`--ctp-pink`),
			H: getComputedStyle(document.body).getPropertyValue(`--ctp-text`),
			BACKGROUND: getComputedStyle(document.body).getPropertyValue(`--ctp-base`)
		}
	}
	function get_theme() {
		var theme;
		if (getComputedStyle(document.body).getPropertyValue(`--ctp-text`) != "")
			return "catppuccin";
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
		SmilesDrawer.apply(
			{
				...options,
				themes: {
					catppuccino: get_scheme(),
				},
			},
			"canvas[data-smiles]",
			get_theme(),
			function (err) { console.error(err); }
		);
	}
	redraw();
	window.addEventListener("themeChange", (e) => redraw());
});
