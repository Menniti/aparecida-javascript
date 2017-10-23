var botaoAdicionar = document.querySelector('#buscar-pacientes');

botaoAdicionar.addEventListener('click', function(){
	
	var xhr = new XMLHttpRequest();

	xhr.open('GET', "https://api-pacientes.herokuapp.com/pacientes");
	var erroAjax = document.querySelector('#erroAjax');
		
	xhr.addEventListener('load', function(){
		if(xhr.status == 200){
			erroAjax.classList.add('invisivel');
			var pacientes = JSON.parse(xhr.responseText);	
			pacientes.forEach(function(paciente){
			adicionaPacientesNaTabela(paciente);
			});
		}else{
			console.log(xhr.status)
			erroAjax.classList.remove('invisivel');
		};
	});
	

	xhr.send();
});