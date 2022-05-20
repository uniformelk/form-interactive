const option = document.querySelectorAll('#options button');
const submit = document.querySelector("#submit");
const question = document.querySelector('#question');
const thanks = document.querySelector('#thanks');
const textothanks = document.querySelector('#thanks .response p');

submit.addEventListener('click', response);
var optionSelected = 0;

option.forEach(boton => {
    boton.addEventListener('click', seleccion);
    
});

function seleccion(e){
    e.preventDefault();
    optionSelected = this.value;
    remove();
    e.target.classList.add('active');
}
function remove(){
    option.forEach(boton => {
        boton.classList.remove('active');
    });
}

function response(e){
    e.preventDefault();
    if(optionSelected!=0){
        textothanks.innerHTML = `You selected ${optionSelected} out of 5`;
        question.classList.add('oculto');
        thanks.classList.remove('oculto');
    }else{
        
    }
    
}



