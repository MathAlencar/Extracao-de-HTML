const button_h6=document.querySelector("#h6"),
button_li=document.querySelector("#li"),
corpo=document.querySelector("#corpo"),
text_input=document.querySelector("#text-value"),
button_copy = document.querySelector('#copiar'),
button_clear = document.querySelector('#clear'),
button_clearAll = document.querySelector('#clearAll');


function criandoH6(a){
    return`<h6 style="font-size: 1rem"> <b> ${a} </b> </h6>`
}

function criandoLi(a){
    return`<li style="font-size: 1rem"> ${a} </li>`
}

button_h6.addEventListener("click", (e) =>{
    e.preventDefault();
    let b=text_input.value;
    corpo.innerHTML+=criandoH6(b)
    text_input.value=""
})

button_li.addEventListener("click",(e)=>{
    e.preventDefault();
    let b=text_input.value;
    corpo.innerHTML+=criandoLi(b);
    text_input.value=""
});

button_copy.addEventListener('click', (e) => {

    const elements = document.querySelectorAll("h6, li");
    console.log(elements);

    let htmlcontent = "";

    elements.forEach(elements => {
        htmlcontent += elements.outerHTML;
    })

    if(htmlcontent == ""){
        mostrarAlertaError('Por favor insira um valor dentro da caixa!');
    }else {
        navigator.clipboard.writeText(htmlcontent)
        .then(() => {
            corpo.innerHTML = ""
            mostrarAlertaSucesso('texto copiado com sucesso!');
        })
        .catch((error) => {
            mostrarAlertaError('Erro, contate o Matheus');
        })
    }
})

button_clear.addEventListener('click', (e) => {
    e.preventDefault();

    const elements = document.querySelectorAll("h6, li");
    
    if(elements.length > 0) {
        const lastElement = elements[elements.length - 1];
        lastElement.remove();
        mostrarAlertaSucesso("Último item removido com sucesso!");
    }else {
        mostrarAlertaError("Nenhum item para remover!");
    }
})

button_clearAll.addEventListener('click', (e) => {
    const elements = document.querySelectorAll("h6, li");
    
    if(elements.length > 0) {
        for(let i=0; i<elements.length; i++){
            let lastElement = elements[i];
            lastElement.remove();
        }
        mostrarAlertaSucesso("Todos os itens foram apagados com sucesso!");
    }else {
        mostrarAlertaError("Está vazio!");
    }
})

function mostrarAlertaSucesso(mensagem) {
    alertify.success(mensagem);
}

function mostrarAlertaError(mensagem) {
    alertify.error(mensagem);
}
