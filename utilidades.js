const codigo = ([r,g,b]) => `#${[r,g,b].map(valor => {
	return (parseInt(valor) < 16 ? "0" : "") + parseInt(valor).toString(16);
}).join("")}`;