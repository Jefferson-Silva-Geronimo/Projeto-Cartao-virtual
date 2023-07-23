const formulario = document.querySelector('#container-form');
const divNumCartao = document.querySelector('.conteudo-cartao-numero');
const divNomeCartao = document.querySelector('.conteudo-cartao-name');
const divDate = document.querySelector('.conteudo-cartao-date');
const divCvc = document.querySelector('.conteudo-cvc');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const nome = document.querySelector('#name').value;
    const numCartao = document.querySelector('#card-number').value;
    const dataMes = document.querySelector('#data-mes').value;
    const dataAno = document.querySelector('#data-ano').value;
    const cvc = document.querySelector('#info-cvc').value;

    divNumCartao.innerHTML = '';
    let lista = [];
    let contador = 0;
    for(let x of numCartao){
        if(contador == 4){
            divNumCartao.innerHTML += ' ';
            contador = 0;
        }
        divNumCartao.innerHTML += x;
        contador++;
    }

    divNomeCartao.innerHTML = nome;
    divDate.innerHTML = `${dataMes}/${dataAno}`;
    divCvc.innerHTML = cvc;
})

