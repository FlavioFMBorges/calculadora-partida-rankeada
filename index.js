let saldoDeRankeadas = derrotaseVitorias(0, 50); //o primeiro parâmetro é derrota e depois vitória
let nivelJogador = nivel(saldoDeRankeadas)

console.log("O Herói tem de saldo " + saldoDeRankeadas + " e está no nível de " + nivelJogador)

function derrotaseVitorias(derrotas, vitorias){
    saldo = vitorias - derrotas
    return saldo
}

function nivel(xpDoHeroi){
    let nivelDoHeroi = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"]
    let ferro = 10
    let bronze = [11, 20]
    let Prata = [21, 50]
    let Ouro = [51, 80]
    let Diamante = [81, 90]
    let Lendario = [91, 100]
    let Imortal = [101]

    if(xpDoHeroi <= ferro){
        x = nivelDoHeroi[0]
    }else if((xpDoHeroi >= bronze[0]) && (xpDoHeroi <= bronze[1])){
        x = nivelDoHeroi[1]
    }else if((xpDoHeroi >= Prata[0]) && (xpDoHeroi <= Prata[1])){
        x = nivelDoHeroi[2]
    }else if((xpDoHeroi >= Ouro[0]) && (xpDoHeroi <= Ouro[1])){
        x = nivelDoHeroi[3]
    }else if((xpDoHeroi >= Diamante[0]) && (xpDoHeroi <= Diamante[1])){
        x = nivelDoHeroi[4]
    }else if((xpDoHeroi >= Lendario[0]) && (xpDoHeroi <= Lendario[1])){
        x = nivelDoHeroi[5]
    }else{
        x = nivelDoHeroi[6]
        return x
    }   
}

