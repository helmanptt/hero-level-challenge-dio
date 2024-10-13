const heroName = "Helott";
const xp = 8245;
let level;

switch(true) {
    case (xp < 1001):
        level = "Ferro";
        break;
    case (xp > 1000 && xp < 2001):
        level = "Bronze";
        break;
    case (xp > 2000 && xp < 5001):
        level = "Prata";
        break;
    case (xp > 6000 && xp < 7001):
        level = "Ouro";
        break;
    case (xp > 7000 && xp < 8001):
        level = "Platina Diamante";
        break;
    case (xp > 8000 && xp < 9001):
        level = "Ascendente";
        break;
    case (xp > 9000 && xp < 10001):
        level = "Imortal";
        break;
    case (xp > 10000):
        level = "Radiante";
        break;
}

console.log("\nO Herói de nome " + heroName + " está no nível de " + level + "!")