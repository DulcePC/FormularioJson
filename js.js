var DATOS=[];
function save(){
	fila={};
	campos = document.getElementsByName('inf');
	for(i=0; i < campos.length; i++){
		cmp = campos[i];
		fila[cmp.id] = cmp.value;
		cmp.value='';
	}
	console.log(fila);
	DATOS.push(fila);
	localStorage.setItem('DATOS', JSON.stringify(DATOS));
	mostrarDatos();
}
window.onload= function(){
	tmp= localStorage.getItem('DATOS');
	if(tmp != null){
		DATOS=JSON.parse(tmp);
		mostrarDatos();	
	}
}
function _dce(idd,extra){
	tmp=document.createElement(idd);
	if(extra){
		for(k in extra){
			tmp.setAttribute(k, extra[k]);
		}
	}
	return tmp;
}
function mostrarDatos(){

	tbl=_dce('table');
	thead=_dce('thead');
	tbody=_dce('tbody');
	tbl.appendChild(thead);
	tbl.appendChild(tbody);
	tr=_dce('tr');
	if(DATOS[0]){
		fila=DATOS[0];
		fila.edad='edad';
		for(k in fila){
			th = _dce('th');
			th.innerHTML=k;
			tr.appendChild(th);
		}

		thead.appendChild(tr);

		for(k in DATOS){
			fila=DATOS[k];

			Y_a=(new Date()).getFullYear();
			Y_d=fila.fecha_nacimiento.split('-')[0];
			fila.edad= Y_a - Y_d;



			tr=_dce('tr');
			for(y in fila){
				th=_dce('td');
				th.innerHTML=fila[y];
				tr.appendChild(th);
			}
			tbody.appendChild(tr);
		}
	}

	document.getElementById('listaDatos').innerHTML = tbl.innerHTML;
}