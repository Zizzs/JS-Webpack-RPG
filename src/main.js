import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Warrior, Mage, Ranger, Character } from './character';
import { Rat, Kobold, Goblin } from './monster';




$(document).ready(function() {
    let char;
    let monster;
    let charClass;
    $("#characterForm").submit(function(event) {
        event.preventDefault();
        let charName = $('#charName').val();
        charClass = $('#class').val();
        if (charClass === "warrior") {
            char = new Warrior(charName);
        }
        if (charClass === "ranger") {
            char = new Ranger(charName);
        }
        if (charClass === "mage") {
            char = new Mage(charName);
        }
        console.log(char);
    });
    $("#combatForm").submit(function(event) {
        event.preventDefault();
        let monsterName = $('#monster').val();
        if (monsterName === "rat") {
            monster = new Rat(monsterName);
        }
        if (monsterName === "kobold") {
            monster = new Kobold(monsterName);
        }
        if (monsterName === "goblin") {
            monster = new Goblin(monsterName);
        }
        console.log(monster);
        if (char.health > 0) {
            char.health = Character.combat(char, monster);
            char.experience += monster.experience;
            let attributes = Character.levelUp(char);
            char.level = attributes[0];
            char.points += attributes[1];
        }
        if (char.health <= 0) {
            console.log(`${char.name} has died.`);
        }
        console.log(`Health: ${char.health}`);
        console.log(`Experience: ${char.experience}`);
        console.log(`Level: ${char.level}`);
        console.log(`Points: ${char.points}`);
    });

    $("#healForm").submit(function(event) {
        event.preventDefault();
        let healthDifference = char.maxHealth - char.health;
        char.health = char.maxHealth;
        console.log(`${char.name} has healed ${healthDifference}.`)
        console.log(`${char.name} has ${char.health} Health.`)
        console.log(`${char.name} has ${char.maxHealth} Max Health.`)
    });

    $("#mainStatForm").submit(function(event) {
        event.preventDefault();
        let mainStat = parseInt($('#mainStat').val());
        if (charClass === "warrior") {
            char.strength += mainStat;
            char.points -= mainStat;
            char.attack = char.strength;
            console.log(`${char.name} has gained ${mainStat} points of strength.`);
            console.log(`${char.name} has ${char.strength} total points of strength.`);
            console.log(`${char.name} has ${char.points} attribute points left to spend.`);
        }
        if (charClass === "ranger") {
            char.agility += mainStat;
            char.points -= mainStat;
            char.attack = char.agility;
            console.log(`${char.name} has gained ${mainStat} points of agility.`);
            console.log(`${char.name} has ${char.agility} total points of agility.`);
            console.log(`${char.name} has ${char.points} attribute points left to spend.`);
        }
        if (charClass === "mage") {
            char.intellect += mainStat;
            char.points -= mainStat;
            char.attack = char.intellect;
            console.log(`${char.name} has gained ${mainStat} points of intellect.`);
            console.log(`${char.name} has ${char.intellect} total points of intellect.`);
            console.log(`${char.name} has ${char.points} attribute points left to spend.`);
        }
    });

    $("#staminaForm").submit(function(event) {
        event.preventDefault();
        let stamina = parseInt($('#stamina').val());
        char.stamina += stamina;
        char.points -= stamina;
        char.maxHealth = char.stamina * 10;
        char.health = char.maxHealth;
        console.log(`${char.name} has gained ${stamina} points of stamina.`);
        console.log(`${char.name} has ${char.stamina} total points of stamina.`);
        console.log(`${char.name} has ${char.points} attribute points left to spend.`);
    });
});