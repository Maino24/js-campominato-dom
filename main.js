let difficolta = document.getElementById('difficolta');
const griglia = document.getElementById('griglia');
let bombe = [];
let bomba;
let frase = document.getElementById('punteggio');
let contatore = 0;
let isGameOver = false;

//creiamo una funzione per creare un div quadrato dentro la griglia
function creazioneQuadrato(num) {
  const div = document.createElement('div');
  div.classList.add('quadrato');
  //inseriamo il numero dentro il div
  div.innerHTML = `<span>${num}</span>`;
  return div; 
}

//Attivo il gioco quando cambio difficoltÃ 
difficolta.addEventListener('change', function () {
  let difficoltaValue = difficolta.value;
  creaGioco(difficoltaValue)
})

//creo una funzione che in base alla difficolta cambia il numero di celle
function creaGioco(livelloDiDifficolta) {
  if (livelloDiDifficolta == 'easy') {
    //100celle
    //invocazione funzione per generare le bombe nell'array
    bombe = [];
    generaBombe(1,100)
    console.log(bombe)
    creaCelle(100)
  } else if (livelloDiDifficolta == 'medium') {
    bombe = [];
    generaBombe(1,81)
    console.log(bombe)
    
    creaCelle(81)
  } else if (livelloDiDifficolta == 'hard') {
    bombe = [];
    generaBombe(1,49)
    console.log(bombe)
    creaCelle(49)
  }
}


//funzione crea celle
function creaCelle(numeroCelle) {

  //Pulisco la griglia
  griglia.innerHTML = '';
  frase.innerHTML = '';
  isGameOver = false;

  for (let i = 1; i <= numeroCelle; i++) {

    let elementoCorrente = creazioneQuadrato(i);
    //console.log(elementoCorrente);

    elementoCorrente.addEventListener('click', function () {

      let numeroNellaCella = parseInt(this.firstChild.innerHTML)

      if ( !isGameOver ) {
        if ( bombe.includes(numeroNellaCella )) {
          
          this.classList.toggle('bomba');

          for (let y = 0; y < numeroCelle; y++) {
            if ( bombe.includes( parseInt(griglia.children[y].firstChild.innerHTML )) ) {
              griglia.children[y].classList.add('bomba');
            }
          }

          isGameOver = true;

          frase.innerHTML = `<p>La partita Ã¨ terminata hai perso, il tuo punteggio finale Ã¨: ${contatore}</p>`
        } else {
          
          this.classList.toggle('salvo');
          contatore++;
        }
      }


    })

    griglia.append(elementoCorrente);

  }
}

function generaBombe(bombaMin, bombaMax) {

  for (let k = 0; k < 16; k++) {
    do {
      bomba = getRandomInt(bombaMin, bombaMax)
    } while (bombe.includes(bomba));

    bombe.push(bomba);

  }
}


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



/* PRIMO 

let difficolta = document.getElementById(`difficolta`)
let griglia = document.getElementById(`griglia`)

let bomba

let bombe = []

let frase = document.getElementById(`punteggio`)

let contatore = 0

let isGameOver = false


function creazioneQuadrato(num){
    const div = document.createElement(`div`)
    div.classList.add(`quadrato`)
    div.innerHTML = `<span> ${num} </span>`
    return div
}

difficolta.addEventListener(`change`, function(){

    let difficoltaValue = difficolta.value
    creaGioco(difficoltaValue)
})


function creaGioco (livelloDifficolta){

    if( livelloDifficolta = `facile` ){
        bombe = []
        generaBombe(1,100)
        creaCelle(100)

    }else if( livelloDifficolta = `medio` ){
        bombe = []
        generaBombe(1,81)
        creaCelle(81)
    }else if( livelloDifficolta = `difficile` ){
        bombe = []
        generaBombe(1,49)
        creaCelle(49)
    }

}

function creaCelle(numeroCelle){

    griglia.innerHTML = ``
    frase.innerHTML = ``
    isGameOver = false

    for(let i = 1; i <= numeroCelle; i++){

        let elementoCorrente = creazioneQuadrato(i)

        elementoCorrente.addEventListener(`click`, function() {

            let numeroCella = parseInt(this.firstChild.innerHTML)

            if(!isGameOver){

                if(bombe.includes(numeroNellaCella)){

                    this.classList.toggle(`bomba`)

                    for ( let y = 0; y = numeroCella; y++){

                        if(bombe.includes(parseInt(griglia.children[y].firstChild.innerHTML))) {
                            griglia.children[y].classList.add(`bomba`)
                        }
                    }


                    isGameOver = true;
                    frase.innerHTML = `<p>La partita Ã¨ finita, il tuo punteggio Ã¨: ${contatore}</p>`

                }else {
                    this.classList.toggle(`salvo`)
                    contatore++
                }
            }

        })

    }

}


function generaBombe(bombaMin, bombaMax){

    for (let k = 0; k < 16; k++){
        do{
            bomba = getRandomInt(bombaMin, bombaMax)

        }while(bombe.includes(bomba))

        bombe.push(bomba)
    }

}


function getRandomInt(min, max){

    return Math.floor(Math.random()* ( max - min + 1 )) + min

}

*/









//document.getElementById(`griglia`).style.display = "none";
/*let button = document.getElementById(`paly`)
let inputLivello = document.getElementById(`generaLivelloUNo`)
//let inputLivelloUno = document.getElementById(`generaLivelloUno`) 
//let inputLivelloDue = document.getElementById(`generaLivelloDue`) 
//let inputLivelloTre = document.getElementById(`generaLivelloTre`) 



//button.addEventListener(`click`, function(){
document.getElementById(`play`).onclick = function() {genera()}
//function genera(){
//const valueLivello = inputLivello.value;
//const valueLivelloUno = inputLivelloUno.value;
//const valueLivelloDue = inputLivelloDue.value;
//const valueLivelloTre = inputLivelloTre.value;
//console.log(valueLivello)

//}
if(inputLivello = `uno`){
    function genera(){
        //document.getElementById(`generaLivelloUno`).style.display = "none";
        document.getElementById(`generaLivelloDue`).style.display = "none";
        document.getElementById(`generaLivelloTre`).style.display = "none";
        document.getElementById(`titolo`).style.display = "none";
        document.getElementById(`griglia`).style.display = "flex";
    let griglia = document.getElementById(`griglia`);
    
    function creazioneQuadratino(){
    
     const divQ = document.createElement(`div`);
     divQ.classList.add(`quadrato`);
     
     return divQ
    
    }
    console.log(creazioneQuadratino)
    
    
    
    
    //inseriamo il quadrato creato dalla funzione nella griglia
    //creo ciclo for che mi crea i 100 quadratini
    for(let i = 0; i < 100; i++){
            let elemento = creazioneQuadratino()
            console.log(elemento);
            elemento.addEventListener(`click`, function(){
                console.log(this);
                this.classList.toggle(`attivazione`)
                somma = i
                somma = somma + 1
               console.log(somma)
               
        })
        
    
    
       
        griglia.append(elemento)
    
    }
    
    }
}else if(inputLivello = `due`){

    function generaDue(){
        document.getElementById(`generaLivelloUno`).style.display = "none";
        //document.getElementById(`generaLivelloDue`).style.display = "none";
        document.getElementById(`generaLivelloTre`).style.display = "none";
        document.getElementById(`titolo`).style.display = "none";
        document.getElementById(`griglia`).style.display = "flex";
        let griglia = document.getElementById(`griglia`);
    
    
    
    function creazioneQuadratino(){
    
     const divQ = document.createElement(`div`);
     divQ.classList.add(`quadratoDue`);
     
     return divQ
    
    }
    console.log(creazioneQuadratino)
    
    
    
    
    //inseriamo il quadrato creato dalla funzione nella griglia
    //creo ciclo for che mi crea i 100 quadratini
    for(let i = 0; i < 81; i++){
            let elemento = creazioneQuadratino()
            console.log(elemento);
            elemento.addEventListener(`click`, function(){
                console.log(this);
                this.classList.toggle(`attivazione`)
                somma = i
                somma = somma + 1
               console.log(somma)
               
        })
        
    
    
       
        griglia.append(elemento)
    
    }
    }
}else{

    function generaTre(){
        document.getElementById(`generaLivelloUno`).style.display = "none";
        document.getElementById(`generaLivelloDue`).style.display = "none";
        //document.getElementById(`generaLivelloTre`).style.display = "none";
        document.getElementById(`titolo`).style.display = "none";
        document.getElementById(`griglia`).style.display = "flex";
    
        let griglia = document.getElementById(`griglia`);
        
    }
    
    function creazioneQuadratino(){
    
     const divQ = document.createElement(`div`);
     divQ.classList.add(`quadratoTre`);
     
     return divQ
    
    }
    console.log(creazioneQuadratino)
    
    
    //inseriamo il quadrato creato dalla funzione nella griglia
    //creo ciclo for che mi crea i 100 quadratini
    for(let i = 0; i < 49; i++){
            let elemento = creazioneQuadratino()
            console.log(elemento);
            elemento.addEventListener(`click`, function(){
                console.log(this);
                this.classList.toggle(`attivazione`)
                somma = i
                somma = somma + 1
               console.log(somma)
              
        })  
    
        griglia.append(elemento)
    
    }
}
//})
*/



/* PRIMO LIVELLO*/
/*
document.getElementById(`generaLivelloUno`).onclick = function() {genera()}
function genera(){
    document.getElementById(`generaLivelloUno`).style.display = "none";
    document.getElementById(`generaLivelloDue`).style.display = "none";
    document.getElementById(`generaLivelloTre`).style.display = "none";
    document.getElementById(`titolo`).style.display = "none";
    document.getElementById(`griglia`).style.display = "flex";
let griglia = document.getElementById(`griglia`);

function creazioneQuadratino(num){

 const divQ = document.createElement(`div`);
 divQ.classList.add(`quadrato`);
 divQ.innerHTML = num
 if(array.includes(num) ){
    divQ.addEventListener(`click`, function() {
      divQ.classList.add(`quadratobomba`) 
      //document.write('<h1>'+`HAI PERSO!`+'</h1>'); 
      document.getElementById(`output`).innerHTML= `HAI PERSO!`
      
    
    })
 }else{ 
}
 return divQ
}

console.log(creazioneQuadratino)

array = []

//genero e ineririsco nell'array 16 numeri casuali
for( i = 0; i < 17; i++){
    numeroRandom = Math.floor(Math.random() * 100) + 1;
    array.push(numeroRandom)
}

console.log(array)

//inseriamo il quadrato creato dalla funzione nella griglia
//creo ciclo for che mi crea i 100 quadratini
for(let i = 0; i < 100; i++){
        let elemento = creazioneQuadratino( i + 1)
        console.log(elemento);
        
        let check =  array.includes(elemento)
        elemento.addEventListener(`click`, function(){
            console.log(this);
            this.classList.toggle(`attivazione`)
            
            

           })
    

   
    griglia.append(elemento)

}

}

*/
/* SECONDO LIVELLO */
/*
document.getElementById(`generaLivelloDue`).onclick = function() {generaDue()}
function generaDue(){
    document.getElementById(`generaLivelloUno`).style.display = "none";
    document.getElementById(`generaLivelloDue`).style.display = "none";
    document.getElementById(`generaLivelloTre`).style.display = "none";
    document.getElementById(`titolo`).style.display = "none";
    document.getElementById(`griglia`).style.display = "flex";
    let griglia = document.getElementById(`griglia`);



function creazioneQuadratino(num){

 const divQ = document.createElement(`div`);
 divQ.classList.add(`quadratoDue`);
 divQ.innerHTML = num
 return divQ

}
console.log(creazioneQuadratino)




//inseriamo il quadrato creato dalla funzione nella griglia
//creo ciclo for che mi crea i 81 quadratini
for(let i = 0; i < 81; i++){
        let elemento = creazioneQuadratino( i + 1 )
        console.log(elemento);
        elemento.addEventListener(`click`, function(){
            console.log(this);
            this.classList.toggle(`attivazione`)
            
    })
    


   
    griglia.append(elemento)

}
}

*/
/* TERZO LIVELLO */
/*
document.getElementById(`generaLivelloTre`).onclick = function() {generaTre()}
function generaTre(){
    document.getElementById(`generaLivelloUno`).style.display = "none";
    document.getElementById(`generaLivelloDue`).style.display = "none";
    document.getElementById(`generaLivelloTre`).style.display = "none";
    document.getElementById(`titolo`).style.display = "none";
    document.getElementById(`griglia`).style.display = "flex";

    let griglia = document.getElementById(`griglia`);
    


function creazioneQuadratino( num ){

 const divQ = document.createElement(`div`);
 divQ.classList.add(`quadratoTre`);
 divQ.innerHTML = num
 return divQ

}
console.log(creazioneQuadratino)


//inseriamo il quadrato creato dalla funzione nella griglia
//creo ciclo for che mi crea i 100 quadratini
for(let i = 0; i < 49; i++){
        let elemento = creazioneQuadratino( i + 1)
        console.log(elemento);
        elemento.addEventListener(`click`, function(){
            console.log(this);
            this.classList.toggle(`attivazione`)
            somma = i
            somma = somma + 1
           console.log(somma)
           elemento.innerText= `${somma}`

    })  

    griglia.append(elemento)

}
}
*/