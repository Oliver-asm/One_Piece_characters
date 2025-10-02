
const categories = ["Pirate", "Marine", "Bounty Hunter","Holy Knight"];
const devilfruits = ["Sand", "Sun God","Dragon","Magma","Invisible Man", "Earthquake"];
const races = ["Tontatta","Mink", "Buccaneer", "Lunarian", "Giant", "Fish-Man", "Human"];
const intentions = ["Money","Power", "Fame", "End Corruption"," being the Greatest Swordsman","the One Piece","Revenge"]


function selectRandomWord(margenArray) {
    return Math.floor(Math.random() * margenArray.length);
}

function createMessage(){
    let race = races[selectRandomWord(races)];
    let category = categories[selectRandomWord(categories)];
    let devilfruit = devilfruits[selectRandomWord(devilfruits)];
    let intention = intentions[selectRandomWord(intentions)];

    let message = `You are a ${race} ${category} with the ${devilfruit} devil fruit, in search of ${intention}.`

    console.log(message);
}

console.log("Your character from the One Piece world is: \n")
createMessage();
