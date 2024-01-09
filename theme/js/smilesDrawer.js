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
	let smilesText = smiles.innerHTML;
	const canvasId = smiles.id ? smiles.id + '-canvas' : 'smiles-canvas-' + stringToHash(smilesText);
	SmilesDrawer.parse(smilesText, function (tree) {
		let canvas = document.createElement('canvas', { width: 250, height: 250 });
		canvas.id = canvasId;
		smiles.parentNode.insertBefore(smilesCanvas, canvas);
		let smilesCanvas = smilesDrawer.draw(tree, canvasId);
	});
});