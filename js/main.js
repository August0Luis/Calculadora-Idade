const botao = document.querySelector('#botao');

botao.onclick = function mostraResultado() {
    const dia = parseInt(document.querySelector('#dia').value);
    const mes = parseInt(document.querySelector('#mes').value);
    const ano = parseInt(document.querySelector('#ano').value);

    const dataNascimento = new Date(ano, mes - 1, dia);

    const hoje = new Date();


    const diferencaEmMilissegundos = hoje - dataNascimento;


    const milissegundosEmUmAno = 31536000000; 
    const milissegundosEmUmMes = 2628000000; 

    const anos = Math.floor(diferencaEmMilissegundos / milissegundosEmUmAno);
    const meses = Math.floor((diferencaEmMilissegundos % milissegundosEmUmAno) / milissegundosEmUmMes);
    const dias = Math.floor((diferencaEmMilissegundos % milissegundosEmUmMes) / 86400000);

    const resultadoDia = document.querySelector('#resultadoDia').innerHTML = dias
    const resultadoMes = document.querySelector('#resultadoMes').innerHTML = meses
    const resultadoAno = document.querySelector('#resultadoAno').innerHTML = anos
}
