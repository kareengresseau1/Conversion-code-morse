const latin = 'latin';
const morse = 'morse';
const lettresLatines = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t',
    'u','v','w','x','y','z']; 
const lettreLatineMajuscules = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T',
    'U','V','W','X','Y','Z']
const lettresMorse = ['.-','-...','-.-.','-..','.','..-.',' --.','....','..','.--- ','-.-','.-..','--',
    '-.','---','.--.','--.-','.-.','...','-','..-','...-','.--','-..-','-.--', '--..'];
const chiffreLatin = ['1','2','3','4','5','6','7','8','9','0'];
const chiffreMorse = ['.----','..---','...--','....-','.....','-....','--...','---..','----.','-----'];
const caracteresSpeciauxLatins = ['?','!','.',',',';',':','+','-','='];
const carateresSpeciauxMorse = ['..--..', '-.-.-', '.-.-.-','--..-', '-.-.-.', '---...', '.-.-.', '-....-', 
    '-...-']; 
const separationEntreLettres = ' ';
const separationEntreMots = '/';  


function conversion(){  
    let traduction = '';  
    let caractereTraduit = '';
    let choix = prompt("Est-ce que la phrase est en code morse ou en lettres latines ?"); 
    let phrase = prompt("Ecris la phrase");   
    if(choix === "latin"){
        for(let position = 0; position < phrase.length; position++){
            traduction = traduction + determinerTypeCaratereLatin(phrase.charAt(position));
        }
    } 
    else if(choix === "morse"){ 
        let caractere = '';
        for(let position = 0; position <= phrase.length; position++){   
            if(phrase.charAt(position) != separationEntreMots && phrase.charAt(position) != separationEntreLettres && position < phrase.length){
                caractere = caractere + phrase.charAt(position);
            }else if ((phrase.charAt(position) == separationEntreMots) ^ (phrase.charAt(position) == separationEntreLettres) ^ position === phrase.length){ 
                caractereTraduit = determinerCaractereMorse(caractere);
                traduction = traduction + caractereTraduit; 
                if(phrase.charAt(position) == separationEntreMots){
                    traduction = traduction + ' ';
                }
                caractere = ''; 
            } 
        }
        
    }  
    document.getElementById("traduction").innerHTML = "Traduction: " + traduction;
} 

function determinerTypeCaratereLatin(caractere){
    let index = 0;
    let caractereTraduit = '';
    if((caractere >= "a") && (caractere <= "z")){
        index = trouverLettreTableauLatin(caractere);  
        caractereTraduit = lettresMorse[index] + separationEntreLettres;
    } 
    else if(((caractere >= "A") && (caractere <= "Z"))){
        index = trouverLettreTableauLatinMajuscule(caractere);
        caractereTraduit = lettresMorse[index] + separationEntreLettres;
    }
    else if(caractere >= "0" && caractere <= "9"){
        index = trouverChiffreTableauLatin(caractere); 
        caractereTraduit = chiffreMorse[index] + separationEntreLettres;
    } 
    else if(caractere == ' '){
        caractereTraduit = separationEntreMots;
    }else{
        index = trouverCaractereSpecialTableauLatin(caractere); 
        caractereTraduit = carateresSpeciauxMorse[index] + separationEntreLettres;
    } 
    return caractereTraduit;
} 

function trouverLettreTableauLatin(caractere){  
    return lettresLatines.indexOf(caractere); 
}  

function trouverLettreTableauLatinMajuscule(caractere){
    return lettreLatineMajuscules.indexOf(caractere);
}

function trouverChiffreTableauLatin(caractere){  
    return chiffreLatin.indexOf(caractere);
}

function trouverCaractereSpecialTableauLatin(caractere, caracteresSpeciauxLatin){ 
    return caracteresSpeciauxLatins.indexOf(caractere);
}  


function determinerCaractereMorse(caractere){  
    let caractereMorse = '';  
    let lettre = trouverLettreMorse(caractere);
    let chiffre = trouverChiffreMorse(caractere);
    let special = trouverCaractereSpeciauxMorse(caractere); 

    if(lettre !== -1){
        caractereMorse = lettresLatines[lettre];
    }else if(chiffre !== -1){
        caractereMorse = chiffreLatin[chiffre];
    } else if(special !== -1){
        caractereMorse = caracteresSpeciauxLatins[special];
    }
    return caractereMorse;
} 

function trouverLettreMorse(caractere){
    return lettresMorse.indexOf(caractere);
} 

function trouverChiffreMorse(caractere){
    return chiffreMorse.indexOf(caractere);
} 

function trouverCaractereSpeciauxMorse(caractere){
    return carateresSpeciauxMorse.indexOf(caractere);
}