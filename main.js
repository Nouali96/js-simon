const numberCasual = [
    RandomNr(0,99),
    RandomNr(0,99),
    RandomNr(0,99),
    RandomNr(0,99),
    RandomNr(0,99)
] 

let game = document.getElementById("game");
game.innerHTML = `<div>`+numberCasual[0]+"-"+numberCasual[1]+"-"+numberCasual[2]+"-"+numberCasual[3]+"-"+numberCasual[4]+'</div>';

setTimeout(prova, 3000);

let number =[];
function prova() {
    game.innerHTML = "";
    for(let i =1; i <= 5; i++) {
        number.push(parseInt(prompt("Scrivi un numero che ti ricordi")))
    }
    control()
}

let risultato =[];
function control() {
    numberCasual.forEach(element => {
        if(number.includes(element)){
            risultato.push(element)
        }
    })
    risultatoFinale()
}

function risultatoFinale() {
    alert("Numeri indovinati: "+risultato.length +'\n'+ stampaArray(risultato))
}

function RandomNr(start, end){
    end -= start;
    return Math.floor(Math.random() * end) + start;
}

function stampaArray(array){
    let tempstring =""
    for (let i=0; i < array.length; i++) {
        tempstring += array[i]
    }
    return tempstring
}
