// lembrar de colocar .titulo ->> selecionando pela class
console.log('arquivo carregado com sucesso');
var titulo = document.querySelector('.titulo');

titulo.textContent = 'Aparecida Nutricionista';

var pacientes = document.querySelectorAll('.paciente');

for(i = 0; i < pacientes.length; i++){
	var paciente = pacientes[i]

	var tdPeso = paciente.querySelector('.info-peso');
	var tdAltura = paciente.querySelector('.info-altura');
	var tdImc = paciente.querySelector('.info-imc');

	var peso = tdPeso.textContent;
	var altura = tdAltura.textContent;

	var isValidPeso = validaPeso;
	var isValidAltura = validaAltura;

	if(!isValidPeso){
		console.log('Peso Invalido');
		tdImc.textContent = 'Peso Invalido';
		isValidPeso = false;
		paciente.classList.add('paciente-invalido');
	};
	if(!isValidAltura){
		console.log('Altura Invalida');
		tdImc.textContent = 'Altura Invalida';
		isValidAltura = false;
		paciente.classList.add('paciente-invalido');
	};

	if(isValidAltura && isValidPeso){
		var imc = calculaImc(peso, altura)
		tdImc.textContent = imc;
	};
}

function calculaImc(peso, altura){
	var imc = 0;

	imc = peso / (altura * altura);

	return imc.toFixed(2);
}

function validaPeso(peso){
	if(peso > 0 && peso < 1000){
		return true;
	}
}

function validaAltura(altura){
	if(altura > 0 && altura <= 3){
		return true;
	}
}