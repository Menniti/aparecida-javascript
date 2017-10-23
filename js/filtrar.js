var campoFiltro = document.querySelector('#filtrar-tabela');

campoFiltro.addEventListener('input', function () {

	var pacientes = document.querySelectorAll('.paciente')

	pacientes.forEach(function(paciente){
		var nome = paciente.querySelector('.info-nome').textContent;
		var expressao = new RegExp(campoFiltro.value, 'i');

		if(campoFiltro.value.length != 0){

			if(!expressao.test(nome)){
				paciente.classList.add('invisivel')
			} else {
				paciente.classList.remove('invisivel')
			}
		} else {
			pacientes.forEach(function(paciente){
				paciente.classList.remove('invisivel')
			})
		}
	});
})