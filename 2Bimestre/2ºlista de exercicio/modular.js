	function exercicio2(){
		//recuper dados do usuario
		var nro1 = parseFloat(document.getElementById("nro1").value);
		var nro2 = parseFloat(document.getElementById("nro2").value);
		//processamento
		var media;
		var mensagem;
		media = (nro1 + nro2) /2;
			if ((media>=0) && (media < 3)){
			mensagem = "Reprovado";
			}
			else if ((media >=3) && (media < 7)){
				mensagem = "Exame";
			}
				else if ((media >= 7) && (media <=10)){
					mensagem = "Aprovado";
				}
			
					else {
						mensagem = "Média Inválida";
					}
			//mostra resultado
			document.getElementById("mensagem").innerHTML = mensagem;
	}
	function exercicio1(){
		//recuper dados do usuario
		var nro1 = parseFloat(document.getElementById("nro1").value);
		var nro2 = parseFloat(document.getElementById("nro2").value);
		var nro3 = parseFloat(document.getElementById("nro3").value);
		var nro4 = parseFloat(document.getElementById("nro4").value);
		//processamento
		var media;
		var mediam;
		media = (nro1 + nro2 + nro3 + nro4) /4;
			if ((media >= 7)){
			mediam = "Você foi aprovado";
			}
			else{
				mediam = "Voce foi reprovado.";
			}
			//mostra resultado
			document.getElementById("mediam").innerHTML = mediam;
	}
	function exercicio3(){
		//recuper dados do usuario
		var nro11 = parseFloat(document.getElementById("nro11").value);
		var nro22 = parseFloat(document.getElementById("nro22").value);
		//processamento
		var mensagem;
			if (nro11 > nro22){
			mensagem = "O primeiro numero é o maior";
			}
			else if (nro11 < nro22){
			mensagem = "O segundo numero é  o maior";
			}
			else {
				mensagem = "Os números são iguais";
			}
	document.getElementById("mensagens").innerHTML = mensagem;
	}
	function exercicio4(){
		//recuper dados do usuario
		var nro111 = parseFloat(document.getElementById("nro111").value);
		var nro222 = parseFloat(document.getElementById("nro222").value);
		var nro333 = parseFloat(document.getElementById("nro333").value);
		//processamento
		var mensagem;
			if ((nro111 > nro222) && (nro111 > nro333)){
			mensagem = "O primeiro numero é o maior";
			}
			else if ((nro222 > nro111) && (nro222 > nro333)){
			mensagem = "O segundo numero é o maior";
			}
			else {
				mensagem = "O terceiro número é o maior";
			}
	document.getElementById("maiorr").innerHTML = mensagem;
	}
	function exercicio7(){
		//recuper dados do usuario
		var salario = parseFloat(document.getElementById("sala").value);
		var salariorea
		//processamento
		var mensagem;
			if (salario < 500){
			salariorea = salario + ((salario/100)*30);
			mensagem = "Seu salário foi reajustado 30% e passou a ser:" + salariorea;
			}
			else {
				mensagem = "Seu salário não recebe reajuste e continua sendo:" + salario;
			}
	document.getElementById("salario").innerHTML = mensagem;
	}
	function exercicio5(){
		var opcao = parseInt(document.getElementById("opcao").value);
		var nro1 = parseInt(document.getElementById("1n").value);
		var nro2 = parseInt(document.getElementById("2n").value);
		var resultado;
		switch(opcao){
			case 1: resultado = (nro1+nro2)/2;
			break;
			case 2: if (nro1 > nro2){
				resultado = nro1 - nro2;
			}
			else{
				resultado = nro2 - nro1;
			}
			break;
			case 3: resultado = nro2 * nro1;
			break;
			case 4: resultado = nro2/nro1;
			break;
			default: resultado = "Opção invalida";
		}
		document.getElementById("mostrar").innerHTML = resultado;
	}
	function exercicio8(){
		//recuper dados do usuario
		var salario = parseFloat(document.getElementById("sala2").value);
		var salariorea
		//processamento
		var mensagem;
			if (salario <= 300){
			salariorea = salario + ((salario/100)*35);
			mensagem = "Seu salário foi reajustado 35% e passou a ser:" + salariorea;
			}
			else {
				salariorea = (salario + (salario/100)*15)
				mensagem = "Seu salário foi reajustado 15% e passou a ser:" + salariorea;
			}
	document.getElementById("salario2").innerHTML = mensagem;
	}
	function exercicio9(){
		//recuper dados do usuario
		var saldo = parseFloat(document.getElementById("saldo").value);
		var saldocred;
		//processamento
		var mensagem;
			if (saldo > 400){
			saldocred = ((saldo/100)*30);
			mensagem = "Seu crédito pessoal é de 30% sendo ele:" + saldocred;
			}
			else if (saldo > 300){
				saldocred = ((saldo/100)*25);
				mensagem = "Seu crédito pessoal é de 25% sendo ele:" + saldocred;
			}
			else if (saldo > 200){
				saldocred = ((saldo/100)*20);
				mensagem = "Seu crédito pessoal é de 20% sendo ele:" + saldocred;
			}
			else {
				saldocred = ((saldo/100)*10);
				mensagem = "Seu crédito pessoal é de 10% sendo ele:" + saldocred;
			}		
	document.getElementById("banco").innerHTML = mensagem;
	}
	function exercicio10(){
		//recuper dados do usuario
		var valorcarro = parseFloat(document.getElementById("carro").value);
		var valornovo;
		//processamento
		var mensagem;
			if (valorcarro <= 12000){
			valornovo = valorcarro +((valorcarro/100)*5);
			mensagem = "O carro vai sair no valor de: " + valornovo;
			}
			else if (valorcarro <=  25000){
				valornovo = valorcarro +((valorcarro/100)*10)+((valorcarro/100)*15);
				mensagem = "O carro vai sair no valor de:" + valornovo;
			}
			else {
				valornovo = valorcarro +((valorcarro/100)*15)+((valorcarro/100)*20);
				mensagem = "O carro vai sair no valor de:" + valornovo;
			}	
	document.getElementById("consumidor").innerHTML = mensagem;
	}
		function exercicio6(){
		var opcao = parseInt(document.getElementById("opcao").value);
		var n1 = parseInt(document.getElementById("1n").value);
		var n2 = parseInt(document.getElementById("2n").value);
		var resultado;
		var resultado1;
		switch(opcao){
			case 1: resultado = Math.pow(n1, n2);
			document.getElementById("mostrar").innerHTML = "O primeiro número elevado ao segundo é: " + resultado;
			break;
			case 2: resultado = Math.sqrt(n1);
					resultado1 = Math.sqrt(n2);
		document.getElementById("mostrar").innerHTML = "A raiz quadrada do 1 número é:" + resultado;
		document.getElementById("mostrar1").innerHTML = "A raiz quadrada do 2 número é:" + resultado1;
			break;
			case 3: resultado = Math.cbrt(n1);
					resultado1 = Math.cbrt(n2);
		document.getElementById("mostrar").innerHTML = "A raiz cúbica do 1 número é:" + resultado;
		document.getElementById("mostrar1").innerHTML = "A raiz cúbica 2 número é:" + resultado1;
			break;
			default: resultado = "Opção invalida";
					document.getElementById("mostrar").innerHTML = resultado;
		}
	}
	function exercicio11(){
		//recuper dados do usuario
		var salario = parseFloat(document.getElementById("salario").value);
		var salarionovo;
		//processamento
		var mensagem;
			if (salario <= 300){
			salarionovo = salario +((salario/100)*15);
			mensagem = "O seu salário vai passar a ser: " + salarionovo;
			}
			else if (salario <  600){
				salarionovo = salario +((salario/100)*10);
				mensagem = "O seu salário vai passar a ser: " + salarionovo;
			}
			else if (salario <= 900){
				salarionovo = salario +((salario/100)*5);
				mensagem = "O seu salário vai passar a ser: " + salarionovo;
			}
			else {
			mensagem = "O seu salário não receberá ajuste e continuará sendo: " + salario;	
			}	
	document.getElementById("salariofinal").innerHTML = mensagem;
	}
	function exercicio12(){
		//recuper dados do usuario
		var salario = parseFloat(document.getElementById("salario").value);
		var salarionovo;
		//processamento
		var mensagem;
			if (salario <= 350){
			salarionovo = (salario + 100) - (((salario + 100)/100)*7);
			mensagem = "O seu salário vai passar a ser: " + salarionovo;
			}
			else if (salario <  600){
			salarionovo = (salario + 75) - (((salario + 75)/100)*7);
			mensagem = "O seu salário vai passar a ser: " + salarionovo;
			}
			else if (salario <= 900){
			salarionovo = (salario + 50) - (((salario + 50)/100)*7);
			mensagem = "O seu salário vai passar a ser: " + salarionovo;
			}
			else {
			salarionovo = (salario + 35) - (((salario + 35)/100)*7);
			mensagem = "O seu salário vai passar a ser: " + salarionovo;	
			}	
	document.getElementById("salariofinal").innerHTML = mensagem;
	}
	function exercicio13(){
		//recuper dados do usuario
		var valor = parseFloat(document.getElementById("preco").value);
		var valornovo;
		//processamento
		var mensagem;
			if (valor <= 50){
			valornovo = valor + ((valor/100)*5);
			mensagem = "O novo preço será de: " + valornovo + ", esta barato";
			}
			else if (valor <  100){
			valornovo = valor + ((valor/100)*10);
				if (valornovo <= 80){
				mensagem = "O novo preço será de: " + valornovo +", esta barato";
				}
				else {
				mensagem = "O novo preço será de: " + valornovo +", esta normal";
				}
			}
			else if (valor <= 100){
			valornovo = valor + ((valor/100)*10);
				if (valornovo <= 80){
				mensagem = "O novo preço será de: " + valornovo +", esta barato";
				}				
				else if (valornovo <= 120){
				mensagem = "O novo preço será de: " + valornovo +", esta normal";
				}
				else if(valornovo <= 200){
				mensagem = "O novo preço será de: " + valornovo +", esta caro";
				}
			}
			else {
			valornovo = valor + ((valor/100)*15);
				 if (valornovo <= 120){
				mensagem = "O novo preço será de: " + valornovo +", esta normal";
				}
				else if (valornovo <= 200){
				mensagem = "O novo preço será de: " + valornovo +", esta caro";
				}
				else{
				mensagem = "O novo preço será de: " + valornovo +", esta muito caro";
			}	
			}	
	document.getElementById("precofinal").innerHTML = mensagem;
	}
	function exercicio14(){
		//recuper dados do usuario
		var salario = parseFloat(document.getElementById("salario").value);
		var salarionovo;
		//processamento
		var mensagem;
			if (salario <= 300){
			salarionovo = salario +((salario/100)*50);
			mensagem = "O seu salário vai passar a ser: " + salarionovo;
			}
			else if (salario <=  500){
				salarionovo = salario +((salario/100)*40);
				mensagem = "O seu salário vai passar a ser: " + salarionovo;
			}
			else if (salario <= 700){
				salarionovo = salario +((salario/100)*30);
				mensagem = "O seu salário vai passar a ser: " + salarionovo;
			}
			else if (salario <= 800){
				salarionovo = salario +((salario/100)*20);
				mensagem = "O seu salário vai passar a ser: " + salarionovo;
			}
			else if (salario <= 1000){
				salarionovo = salario +((salario/100)*10);
				mensagem = "O seu salário vai passar a ser: " + salarionovo;
			}
			else {
				salarionovo = salario +((salario/100)*5);
				mensagem = "O seu salário vai passar a ser: " + salarionovo;
			}	
	document.getElementById("salariofinal").innerHTML = mensagem;
	}
		function exercicio15(){
		var opcao = parseInt(document.getElementById("opcao").value);
		var saldo = parseInt(document.getElementById("saldo").value);
		var resultado;
		switch(opcao){
			case 1: resultado = saldo + ((saldo/100)*3);
			document.getElementById("mostrar").innerHTML = "O seu saldo corrigido é de: " + resultado;
			break;
			case 2: resultado = saldo + ((saldo/100)*4);
			document.getElementById("mostrar").innerHTML = "O saldo corrigido é de: " + resultado;
			break;
			default: resultado = "Opção inválida";
					document.getElementById("mostrar").innerHTML = resultado;
		}
	}
	function exercicio16(){
		//recuper dados do usuario
		var codigo = parseInt(document.getElementById("codigo").value);
		var valor = parseFloat(document.getElementById("valor").value);
		var valornovo;
		//processamento
		var mensagem1;
		var mensagem;
			if (valor <= 30){
				mensagem = "O código desse produto: " + codigo;
				mensagem1 = "Esse valor não tem desconto: " + valor;
				document.getElementById("mensagem").innerHTML = mensagem;			
				document.getElementById("mensagem1").innerHTML = mensagem1;
			}
			else if (valor <=  100){
				valornovo = valor -((valor/100)*10);
				mensagem = "O código desse produto: " + codigo;
				mensagem1 = "Esse valor com desconto de 10% é de: " + valornovo;
				document.getElementById("mensagem").innerHTML = mensagem;			
				document.getElementById("mensagem1").innerHTML = mensagem1;
			}
			else {
				valornovo = valor -((valor/100)*15);
				mensagem = "O código desse produto: " + codigo;
				mensagem1 = "Esse valor com desconto de 15% é de: " + valornovo;
				document.getElementById("mensagem").innerHTML = mensagem;			
				document.getElementById("mensagem1").innerHTML = mensagem1;
			}	
	}
	function exercicio17(){
		//recuper dados do usuario
		var senha = parseInt(document.getElementById("senha").value);
		//processamento
		var mensagem;
			if (senha == 4531){
			mensagem = "Senha correta, acesso permitido ";
			}
			else {
			mensagem = "Senha incorreta, acesso negado";	
			}	
	document.getElementById("resp").innerHTML = mensagem;
	}
	function exercicio18(){
		//recuper dados do usuario
		var idade = parseFloat(document.getElementById("idade").value);
		//processamento
		var mensagem;
			if (idade < 18){
			mensagem = "Você ainda não atingiu a maioridade ";
			}
			else {
			mensagem = "Você atingiu a maioridade";	
			}	
	document.getElementById("resp").innerHTML = mensagem;
	}
		function exercicio19(){
		var opcao = parseInt(document.getElementById("opcao").value);
		var altura = parseFloat(document.getElementById("altura").value);
		var resultado;
		switch(opcao){
			case 1: resultado = "O seu peso ideal é:" + ((72.7*altura) - 58);
			break;
			case 2: resultado = "O seu peso ideal é:" + ((62.1*altura) - 44.7);
			break;
			default: resultado = "Opção invalida";
		}
		document.getElementById("mostrar").innerHTML = resultado;
	}
	function exercicio20(){
		//recuper dados do usuario
		var idade = parseFloat(document.getElementById("idade").value);
		//processamento
		var mensagem;
			if (idade < 5){
			mensagem = "Não tem classificação";
			}
			else if(idade <= 7){
			mensagem = "Infantil";	
			}
			else if(idade <= 10){
			mensagem = "Juvenil";	
			}
			else if(idade <= 15){
			mensagem = "Adolescente";	
			}
			else if(idade <= 30){
			mensagem = "Adulto";	
			}			
			else {
			mensagem = "Sênior";	
			}
	document.getElementById("categoria").innerHTML = mensagem;
	}
	function exercicio21(){
		//recuper dados do usuario
		var cod = parseInt(document.getElementById("cod").value);
		//processamento
		var mensagem;
			if (cod == 1){
			mensagem = "Sul";
			}
			else if (cod == 2){
			mensagem = "Norte";	
			}
			else if (cod == 3){
			mensagem = "Leste";	
			}
			else if (cod == 4){
			mensagem = "Oeste";	
			}
			else if (cod <=6){
			mensagem = "Nordeste";	
			}
			else if (cod <= 9){
			mensagem = "Sudeste";	
			}
			else if (cod <= 20){
			mensagem = "Centro-Oeste";	
			}
			else if (cod <=30){
			mensagem = "Nordeste";	
			}
			else{
			mensagem = "Não se encontra na lista de precedência";
			}
	document.getElementById("procedencia").innerHTML = mensagem;
	}
	function exercicio22(){
		//recuper dados do usuario
		var peso = parseFloat(document.getElementById("peso").value);
		var idade = parseInt(document.getElementById("idade").value);
		//processamento
		var mensagem;
			if (idade < 20){
				if (peso <= 60){
					mensagem = "Area de risco 9";
				}
				else if (peso <= 90){
					mensagem = "Area de risco 8";
				}
				else{
					mensagem = "Area de risco 7";
				}
			}
			else if(idade <= 50){
				if (peso <= 60){
					mensagem = "Area de risco 6";
				}
				else if (peso <= 90){
					mensagem = "Area de risco 5";
				}
				else{
					mensagem = "Area de risco 4";
				}	
			}
			else{
				if (peso <= 60){
					mensagem = "Area de risco 3";
				}
				else if(peso <= 90){
					mensagem = "Area de risco 2";
				}
				else{
					mensagem = "Area de risco 1";
				}	
			}
	document.getElementById("area").innerHTML = mensagem;
	}
	function exercicio23(){
		//recuper dados do usuario
		var quant = parseInt(document.getElementById("quant").value);
		var cod = parseFloat(document.getElementById("cod").value);
		var preco ;
		//processamento
		var mensagem;
			if (cod <= 10){
			preco = 10 * quant;	
				if (preco <= 250){
					mensagem = "Você recebeu 5% de desconto e vai pagar: "+(preco -((preco/100)*5));
				}
				else if (preco <= 500){
					mensagem = "Você recebeu 10% de desconto e vai pagar: "+(preco -((preco/100)*10));
				}
				else{
					mensagem = "Você recebeu 15% de desconto e vai pagar: "+(preco -((preco/100)*15));
				}
			}
			else if(cod <= 20){
			preco = 15 * quant;
				if (preco <= 250){
					mensagem = "Você recebeu 5% de desconto e vai pagar: "+(preco -((preco/100)*5));
				}
				else if (preco <= 500){
					mensagem = "Você recebeu 10% de desconto e vai pagar: "+(preco -((preco/100)*10));
				}
				else{
					mensagem = "Você recebeu 15% de desconto e vai pagar: "+(preco -((preco/100)*15));
				}
			}
			else if (cod <= 30){
			preco = 20 * quant;
				if (preco <= 250){
					mensagem = "Você recebeu 5% de desconto e vai pagar: "+(preco -((preco/100)*5));
				}
				else if (preco <= 500){
					mensagem = "Você recebeu 10% de desconto e vai pagar: "+(preco -((preco/100)*10));
				}
				else{
					mensagem = "Você recebeu 15% de desconto e vai pagar: "+(preco -((preco/100)*15));
				}
			}
			else if (cod <= 40){
			preco = 30 * quant;
				if (preco <= 250){
					mensagem = "Você recebeu 5% de desconto e vai pagar: "+(preco -((preco/100)*5));
				}
				else if (preco <= 500){
					mensagem = "Você recebeu 10% de desconto e vai pagar: "+(preco -((preco/100)*10));
				}
				else{
					mensagem = "Você recebeu 15% de desconto e vai pagar: "+(preco -((preco/100)*15));
				}
			}
			else{
				mensagem = "Código invalido";
			}
	document.getElementById("valor").innerHTML = mensagem;
	}
	function exercicio24(){
	var preco = parseFloat(document.getElementById("preco").value);
	var categoria = parseInt(document.getElementById("cate").value);
	var situacao = document.getElementById("situ").value;
	var aumento;
	if (preco <= 25){
		switch (categoria){
			case 1: aumento = preco*0.05;
					break;
			case 2: aumento = preco*0.08;
					break;
			case 3: aumento = preco*0.10;
					break;	
			default: aumento = 0;
			}
	}
	else {
		switch(categoria){
			case 1: aumento = preco*0.12;
					break;
			case 2: aumento = preco*0.15;
					break;
			case 3: aumento = preco*0.18;
					break;	
			default: aumento = 0;
		}
	
	}
	var imposto;
	if((categoria ==2) || (situacao == 'R')){
		imposto = preco*0.05;
	}
	else {
		imposto = preco*0.08;
	}
	var novo;
	novo = preco + aumento + imposto;
	var classificaçao;
	if (novo <= 50.00){
		classificacao = "Barato";
	}
	else if(novo < 120) {
		classificacao = "Normal";
	}
	else {
		classificacao = "Muito caro";
	}
	document.getElementById("resultado").innerHTML = "O aumento foi de: "+ aumento + "<br>O Imposto foi de : " + imposto + "<br>O preço passou a ser: " + novo + "<br>Sua classificação é: " + classificacao;
}
	function exercicio25(){
		//recuper dados do usuario
		var hre = parseFloat(document.getElementById("hre").value);
		var hrfa = parseFloat(document.getElementById("hrfa").value);
		var valor;
		var hrm;
		//processamento
		var mensagem;
		valor = hre - (2/3 * (hrfa));
		hrm = valor * 60;
			if (hrm < 600){
				mensagem = "Você receberá uma gratificação de 100 reias";
			}
			else if(hrm < 1200){
				mensagem = "Você receberá uma gratificação de 200 reias";
			}
			else if (hrm < 1800){
				mensagem =  "Você receberá uma gratificação de 300 reias";
			}
			else if(hrm < 2400){
				mensagem =  "Você receberá uma gratificação de 400 reias";
			}
			else{
				mensagem =  "Você receberá uma gratificação de 500 reias";
			}	
	document.getElementById("valor").innerHTML = mensagem;
	}
