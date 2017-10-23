var adicionaBotao = document.querySelector('#adicionar-paciente');

adicionaBotao.addEventListener('click', function(event){
	event.preventDefault();
	
	form = document.querySelector('#form-adiciona');

	var paciente = obtemPacienteDoForm(form)

	var erros = validaPaciente(paciente);

	if(erros.length > 0){
		exibeMensagensDeErro(erros);
		return;
	} 

	adicionaPacientesNaTabela(paciente);

	form.reset();
	var ul = document.querySelector('ul');
	ul.innerHTML = '';

})

function adicionaPacientesNaTabela(paciente){
	var trPaciente = montarTr(paciente);
	var tabelaPacientes = document.querySelector('#tabela-pacientes');
	tabelaPacientes.appendChild(trPaciente)
}

function obtemPacienteDoForm(form){

	paciente = {
		nome:form.nome.value,
		peso:form.peso.value,
		altura:form.altura.value,
		gordura:form.gordura.value,
		imc: calculaImc(form.peso.value, form.altura.value)
	}
	return paciente;
}

function montarTr(paciente){

	var trPaciente = document.createElement('tr');
	trPaciente.classList.add('paciente');

	trPaciente.appendChild(montaTd(paciente.nome, 'info-nome'));
	trPaciente.appendChild(montaTd(paciente.peso, 'info-peso'));
	trPaciente.appendChild(montaTd(paciente.altura, 'info-altura'));
	trPaciente.appendChild(montaTd(paciente.gordura, 'info-gordura'));
	trPaciente.appendChild(montaTd(paciente.imc, 'info-imc'));
	
	return trPaciente;
}

function montaTd(dado, classe){
	td = document.createElement('td');
	td.textContent = dado;
	td.classList.add(classe);

	return td;
}

function validaPaciente(paciente){
	var erros = [];
	if(paciente.nome.length == 0){
		erros.push("O nome nao pode ser em branco")
	}
	if(paciente.altura.length == 0){
		erros.push("A altura nao pode ser em branco")
	}
	if(paciente.peso.length == 0){
		erros.push("O peso nao pode ser em branco")
	}
	if(paciente.gordura.length == 0){
		erros.push("A gordura nao pode ser em branco")
	}
	if(!validaPeso(paciente.peso)){
		erros.push("Peso e invalido")
	}
	if(!validaAltura(paciente.altura)){
		erros.push("Altura invalida")
	}
	return erros;
}

function exibeMensagensDeErro(erros){
	var ul = document.querySelector('#messagens-erro');
	ul.innerHTML = "";

	erros.forEach(function(erro){
		var li = document.createElement('li');
		li.textContent = erro;
		ul.appendChild(li);
	})
}