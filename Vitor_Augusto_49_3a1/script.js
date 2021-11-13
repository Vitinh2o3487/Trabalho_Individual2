const calcular = document.getElementById('calcular');


function loja () {
    const renda = document.getElementById('renda').value;
    const valor = document.getElementById('valor').value;
    const taxa = document.getElementById('taxa').value;
    const prestacoes = document.getElementById('prestacoes').value;
    const resultado = document.getElementById('resultado');


    if (renda !== '' && valor !== '' && taxa !== '' && prestacoes !== '' && (renda*(30/100))>(valor*((1+taxa/100)^prestacoes)/(1+taxa/100)^prestacoes-1)) {

        const valormensal = (valor*((1+taxa/100)^prestacoes)/(1+taxa/100)^prestacoes-1);
       
        
    

        resultado.textContent = `O valor mensal será de ${valormensal}`;
        




    }else {
        resultado.textContent = 'O valor da prestação ultrapassa 30% do valor de seu salário mensal, certifique-se de ter preenchido todos os campos';
    }

}
calcular.addEventListener('click', loja);
