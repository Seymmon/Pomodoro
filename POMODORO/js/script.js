console.log("alou")
var tempo = 0;
var intervalo

function startTimer(duration, display){
    var timer = duration, minutes, seconds;
   intervalo = setInterval(function() {
        minutes = parseInt(timer /60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        if(--timer<0){
            display.textContent = "00:00";
        }

    },1000);
}

function pause(){
    clearInterval(intervalo);
}

function stop(){
    clearInterval(intervalo);
    
}

function valueTime(){
    var timeTofocus = 0;
    timeTofocus = document.querySelector("#tempo")
    tempo = Number(timeTofocus.value)
    console.log(tempo)
    return tempo
} 

function start(){
    valueTime()
    var duration = 60 * tempo;
    startTimer(duration, display)
    
}

window.onload = function(){   
    var button = document.querySelector('#button-start')
    display = document.querySelector('#timer')
    display.textContent = "00:00";
    button.addEventListener('click', start)    
}

function selecionarPausa(selecionado){
    switch(selecionado){
        case 0:
            definirFundoPomodoro()
            break;
        case 1:
            definirFundoShortBreak()
            break;
        case 2:
            definirFundoLongBreak()
            break;
    }
        
}

function definirFundoPomodoro(){
    limpar();
    fundoBotaoPomodoro();
    fundoContadorPomodoro();
    fundoBodyPomodoro();
}

function definirFundoShortBreak(){
    limpar();
    fundoBotaoShortBreak();
    fundoContadorShortBreak();
    fundoBodyShortBreak();
}

function definirFundoLongBreak(){
    limpar();
    fundoBotaoLongBreak(); // falta completar
    fundoContadorLongBreak(); // falta completar
    fundoBodyLongBreak();    
}

function limpar(){
    var botaoPomodoro = document.getElementById('botaoPomodoro')
    var botaoShortBreak = document.getElementById('botaoShortBreak')
    var botaoLongBreak = document.getElementById('botaoLongBreak')
    
    botaoPomodoro.classList.remove('botaoSelecionado')
    botaoShortBreak.classList.remove('botaoSelecionado')
    botaoLongBreak.classList.remove('botaoSelecionado')

    botaoPomodoro.classList.add('button-contador')
    botaoShortBreak.classList.add('button-contador')
    botaoLongBreak.classList.add('button-contador')

}

function fundoBotaoPomodoro(){
    resetarBotoes();
    var botaoPomodoro = document.getElementById('botaoPomodoro')
    botaoPomodoro.classList.remove('button-contador')
    botaoPomodoro.classList.add('botaoSelecionadoPomodoro')
}

function fundoContadorPomodoro(){
    var fundoContador = document.getElementById('contador')
    fundoContador.classList.remove('fundoContadorLongBreak')
    fundoContador.classList.remove('fundoContadorShotBreak')
    fundoContador.classList.add('fundoContadorPomodoro')
}

function fundoBodyPomodoro(){
    var fundoHeader = document.getElementById('fundoHeader')
    fundoHeader.classList.remove('fundoHeaderShortBreak')
    fundoHeader.classList.remove('fundoHeaderLongBreak')
    fundoHeader.classList.add('fundoHeaderPomodoro')
}

function fundoBotaoShortBreak(){
    resetarBotoes();
    var botaoShortBreak = document.getElementById('botaoShortBreak')
    botaoShortBreak.classList.remove('button-contador')
    botaoShortBreak.classList.add('botaoSelecionadoShortBreak')
}

function fundoContadorShortBreak(){
    var fundoContador = document.getElementById('contador')
    fundoContador.classList.remove('fundoContadorLongBreak')
    fundoContador.classList.remove('fundoContadorPomodoro')
    fundoContador.classList.add('fundoContadorShotBreak')
}

function fundoBodyShortBreak(){
    var fundoHeader = document.getElementById('fundoHeader')
    fundoHeader.classList.remove('fundoHeaderPomodoro')
    fundoHeader.classList.remove('fundoHeaderLongBreak')
    fundoHeader.classList.add('fundoHeaderShortBreak')
}

function fundoBotaoLongBreak(){
    resetarBotoes();
    var botaoLongBreak = document.getElementById('botaoLongBreak')
    botaoLongBreak.classList.remove('button-contador')
    botaoLongBreak.classList.add('botaoSelecionadoLongBreak')
}

function fundoContadorLongBreak(){
    var fundoContador = document.getElementById('contador')
    fundoContador.classList.remove('fundoContadorShotBreak')
    fundoContador.classList.remove('fundoContadorPomodoro')
    fundoContador.classList.add('fundoContadorLongBreak')
}

function fundoBodyLongBreak(){
    var fundoHeader = document.getElementById('fundoHeader')
    fundoHeader.classList.remove('fundoHeaderShortBreak')
    fundoHeader.classList.remove('fundoHeaderPomodoro')
    fundoHeader.classList.add('fundoHeaderLongBreak')
}

function resetarBotoes(){
    document.getElementById('botaoPomodoro').removeAttribute('class')
    document.getElementById('botaoShortBreak').removeAttribute('class')
    document.getElementById('botaoLongBreak').removeAttribute('class')

    document.getElementById('botaoPomodoro').classList.add('button-contador')
    document.getElementById('botaoShortBreak').classList.add('button-contador')
    document.getElementById('botaoLongBreak').classList.add('button-contador')
}