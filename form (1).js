
window.onload =function(){
 let nomeFora = document.getElementById("nome");
 nome.focus();
}
//nomeada
function campoNome(){
	let nome = document.getElementById("nome");// referencia html
	let campoOb = document.getElementsByTagName("span");// array


	if(nome.value.length == 0){
		campoOb[0].style.color="red";
		campoOb[0].innerHTML="*";
		nome.focus();
	//	return false;
	}else{
		campoOb[0].innerHTML="";
		
	}

}

function campoNomeChange(){
   let nome = document.getElementById("nome");
   let campoOb = document.getElementsByTagName("span");
   if(nome.value.length < 3){
	    campoOb[0].style.color="red";
		campoOb[0].innerHTML="*";
   }else{
	    campoOb[0].innerHTML="";
   }


}

function campoCpf(){
	let icpf = document.getElementById("icpf");
	let campoOb = document.getElementsByTagName("icpf"); 
	alert(icpf.value);
	console.log(icpf.value);

  
}


//expressao regular:
const regExp1 = /nome/gi;


	


 //function formulario(){
   /// let ret = false;
  //  ret =	campoNome();
 //   return ret;
 //}