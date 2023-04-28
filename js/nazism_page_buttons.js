
var totas_as_divisoes = ["origem", "ascensao", "dinamicas", "fim"];
var todos_os_botoes = ["botao_origem", "botao_ascensao", "botao_dinamicas", "botao_fim"]
var divisao_atual = undefined;
var cor_sessao_ativa = 'purple';
var cor_sessao_off = 'black';

function hide(element_id){
    document.getElementById(element_id).style.display = 'none';
}

function updateButtonCollor(element_id){
    if(element_id === divisao_atual){
        document.getElementById('botao_' + element_id).style.color = cor_sessao_ativa
    }else{
        document.getElementById('botao_' + element_id).style.color = cor_sessao_off
    }

}

function atualizarCorDosBotoes(){
    totas_as_divisoes.forEach(updateButtonCollor)
}

function mudarDivisaoDaPaginaNazismo(element_id){
    divisao_atual = element_id
    totas_as_divisoes.forEach(hide);
    document.getElementById(element_id).style.display = 'block';
    atualizarCorDosBotoes()
    
}

function avançar(){
    if(divisao_atual === 'origem'){
        mudarDivisaoDaPaginaNazismo('ascensao')
    }else if(divisao_atual === 'ascensao'){
        mudarDivisaoDaPaginaNazismo('dinamicas')
    }else if(divisao_atual === 'dinamicas'){
        mudarDivisaoDaPaginaNazismo('fim')
    }
    controlarBotoesVoltarEAvançar()

}

function voltar(){
    if(divisao_atual === 'ascensao'){
        mudarDivisaoDaPaginaNazismo('origem')
    }else if(divisao_atual === 'dinamicas'){
        mudarDivisaoDaPaginaNazismo('ascensao')
    }else if(divisao_atual === 'fim'){
        mudarDivisaoDaPaginaNazismo('dinamicas')
    }
    controlarBotoesVoltarEAvançar()
}


function controlarBotoesVoltarEAvançar(){
    if(divisao_atual === 'origem'){
        document.getElementById('voltar').style.display = 'none'
        document.getElementById('avançar').style.display = 'block'
    }else if(divisao_atual === 'ascensao'){
        document.getElementById('voltar').style.display = 'block'
        document.getElementById('avançar').style.display = 'block'
    }else if(divisao_atual === 'dinamicas'){
        document.getElementById('voltar').style.display = 'block'
        document.getElementById('avançar').style.display = 'block'
    }else if(divisao_atual === 'fim'){
        document.getElementById('voltar').style.display = 'block'
        document.getElementById('avançar').style.display = 'none'
    }
}