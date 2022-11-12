

function CalcularSalario(salarioAtual){
    typeof salarioAtual === "string" && console.error("Não é possível calcular um texto, por favor insira um número")
    try{
        let salarioFinal
        salarioAtual <= 1500 && (salarioFinal = salarioAtual * 1.20)
        salarioAtual > 1500 && salarioAtual <= 2000  && (salarioFinal = salarioAtual * 1.15)
        salarioAtual > 2000 && salarioAtual <= 3000  && (salarioFinal = salarioAtual * 1.10)
        salarioAtual > 3000 && (salarioFinal = salarioAtual * 1.05)

        typeof salarioAtual !== 'string' && (console.log(salarioFinal))
    }
    catch(error){
    }
}

CalcularSalario("ASdaSDASD")