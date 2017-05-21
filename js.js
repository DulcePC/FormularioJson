var DATOS=[];

function save(){
	fila={};
	campos = document.getElementsByName('inf');
	for(i=0; i < campos.length; i++){
		cmp = campos[i];
		fila[cmp.id] = cmp.value;
	}
	console.log(fila);
	DATOS.push(fila);
	localStorage.setItem('DATOS', JSON.stringify(DATOS));	
}
