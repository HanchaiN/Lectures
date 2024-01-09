window.addEventListener("load", () => {
	let smilesDrawer = new SmilesDrawer.Drawer({ width: 250, height: 250 });
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
	document.querySelectorAll('script[type="text/SMILES"]').forEach(function (smiles) {
		smiles.innerHTML
			.split("\n")
			.filter(line => line.length !== "")
			.forEach(function (smilesText, i) {
			const canvasId = smiles.id ? smiles.id + '-canvas' + i : 'smiles-canvas-' + stringToHash(smilesText);
			SmilesDrawer.parse(smilesText, function (tree) {
				let canvas = document.createElement('canvas', { 
					width: 250, 
					height: 250,
				});
				canvas.id = canvasId;
				smiles.replaceWith(canvas, smiles);
				smilesDrawer.draw(tree, canvasId);
			}, function (err) {
				console.log(err, smilesText);
			});
		});
	});
});
