//São declaradas variáveis que serão utilizadas para fazer calculos.
c = 0
soma = 0
maior = 0
menor = 100

//É declarado um array que será utilizado para armazenar os números informados.
var numerosarray = []

function selecionar(){ //É atribuida a função de adicionar um número ao botão selecionar.
    //Obtém o elemento de input do HTML com o id "numeros" e extrai o valor inserido convertendo-o para um número. 
    let num = document.getElementById('numeros');
    num = Number(numeros.value);

    //É verificado se o número já existe no array.  
    if(numerosarray.includes(num)){ //Se existir, exibe um alerta informando que o número já foi inserido.
        return alert('Esse número já foi inserido');
    }else{ //Caso contrário, adiciona o número ao array e chama a função add().
        numerosarray.push(num)
    }

    add(num);
}

function add(num1){ // É responsável por adicionar o número ao elemento select do HTML com o id "itens" e realizar algumas atualizações nas variáveis maior, menor, c e soma. 

    //verifica se o número num1 é vazio.
    if(num1 == ''){//Se for, exibe um alerta informando que é necessário inserir um número.
        return alert('Insira um número')

    //É verificado se o número está dentro do intervalo permitido.
    }else if(num1 > 100 || num1 < 0){ //Se estiver fora, exibe um alerta informando que apenas números entre 0 e 100 devem ser inseridos.
        return alert('Insisra apenas números entre 0 e 100')
    }else{//Se o número estiver dentro do intervalo, cria um elemento de opção com o valor num1 e adiciona-o ao elemento select com o id "itens" no HTML.
        let  item = document.createElement('option');
        item.text = `${num1}`
        item.value = num1;
        
        var selectitens = document.getElementById('itens');
        selectitens.appendChild(item);

        //verifica se o num1 é maior ou menor que o valor atual, se for o caso, atualiza as variáveis maior ou menor com o valor num1.
        }if(num1 < menor){
            menor = num1
        }

        //incrementa a variável c e adiciona o valor num1 à variável soma.
        if(num1 > maior){
            maior= num1
        }

        c++
        soma = soma + num1
    }
    

function finalizar(){ //A função finalizar é chamada quando o usuário clica em um botão para finalizar o programa.
    //calcula a média dos números inseridos e armazena o resultado na variável media.
    media = soma / c
    respostas = document.getElementById('respostas');

    //Exibe informações sobre a quantidade de números inseridos, a soma deles, o maior número, o menor número e a média.
    respostas.innerHTML += `<br>Você inseriu ${c} números.`;
    respostas.innerHTML += `<br>A soma deles é ${soma}.`;
    respostas.innerHTML += `<br>O maior número é ${maior}.`;
    respostas.innerHTML += `<br>O menor número è ${menor}.`;
    respostas.innerHTML += `<br>A média é ${media}.`;

    //Exibe os números inseridos no aaray.
    console.log(numerosarray)
}