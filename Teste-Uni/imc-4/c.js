
var calcular = document.getElementById('calcular');
var nome = document.getElementById('nome');
var altura = document.getElementById('altura');
var peso = document.getElementById('peso');
var nascimento = document.getElementById('nascimento');
var sexo = document.getElementById('sexo');

function imc(){
    
        const valorIMC=(peso/(altura*altura)).toFixed(1); 
        //let classificacao='';

        if (valorIMC < 15 && sexo =='F'){
             classificacao= 'Muito abaixo do peso'
        }else if(valorIMC < 17 && sexo=='M'){
            classificacao= 'Muito abaixo do peso'
        }else if(valorIMC <= 15 && valorIMC <=16.99 && sexo=='F'){
            classificacao= 'Abaixo do peso'
        } else if(valorIMC >17 && valorIMC <=18.49 && sexo=='M'){
            classificacao= 'Abaixo do peso'
        }else if(valorIMC >=17 && valorIMC <=25.99 && sexo=='F'){
            classificacao= 'Peso Normal'
        }else if(valorIMC >18.5 && valorIMC <=24.99 && sexo=='M'){
            classificacao= 'Peso Normal'
        }else if(valorIMC >26 && valorIMC <30.99 && sexo=='F'){
            classificacao= 'Acima do peso'
        } else if(valorIMC > 25 && valorIMC <=29.99 && sexo=='M'){
            classificacao= 'Acima do peso'
        } else if(valorIMC > 31 && valorIMC <=35.99 && sexo=='F'){
            classificacao= 'Obesidade I'
        }  else if(valorIMC > 30 && valorIMC <=34.99 && sexo=='M'){
            classificacao= 'Obesidade I'
        } else if(valorIMC > 36 && valorIMC <=37.99 && sexo=='F'){
            classificacao= 'Obesidade II'
        } else if(valorIMC > 35 && valorIMC <=39.99 && sexo=='M'){
            classificacao= 'Obesidade II'
        }  else if(valorIMC > 38 && sexo=='F'){
            classificacao= 'Obesidade III'
        }  else if(valorIMC > 40 && sexo=='M'){
            classificacao= 'Obesidade III'
        }   
        resultado.textContent ='${nome} voce tem ${nascimento}seu IMC e ${valorIMC} e voce esta ${classificacao}';                                                 
    }
    
calcular.addEventListener('click',imc);

Function calcularIdade(dataNasc){
    var dataAtual = new Date();
    var anoAtual = dataAtual.getFullYear();
    var anoNascParts = dataNasc.split('/');
    var diaNasc =anoNascParts[0];
    var mesNasc =anoNascParts[1];
    var anoNasc =anoNascParts[2];
    var idade = anoAtual - anoNasc;
    var mesAtual = dataAtual.getMonth() + 1; 
    //Se mes atual for menor que o nascimento, nao fez aniversario ainda;  
    if(mesAtual < mesNasc){
    idade--; 
    } else {
    //Se estiver no mes do nascimento, verificar o dia
    if(mesAtual == mesNasc){ 
    if(new Date().getDate() < diaNasc ){ 
    //Se a data atual for menor que o dia de nascimento ele ainda nao fez aniversario
    idade--; 
 }
 }
 } 
 return idade; 
}
console.log(calculaIdade('31/12/1970'));
