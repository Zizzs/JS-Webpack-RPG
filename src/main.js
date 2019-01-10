import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Warrior, Mage, Ranger, Character } from './character';
import { Rat, Kobold, Goblin, Brigand } from './monster';
import { woodSword, woodBow, woodWand } from './item';





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
            Character.showStats(charClass, char);
        }
        if (charClass === "ranger") {
            char = new Ranger(charName);
            Character.showStats(charClass, char);
        }
        if (charClass === "mage") {
            char = new Mage(charName);
            Character.showStats(charClass, char);
        }
        console.log(char);
    });
    $("#combatForm").submit(function(event) {
        event.preventDefault();
        let monsterName = $('#monster').val();
        if (monsterName === "rat") {
            monster = new Rat();
        }
        if (monsterName === "kobold") {
            monster = new Kobold();
        }
        if (monsterName === "goblin") {
            monster = new Goblin();
        }
        if (monsterName === "brigand") {
            monster = new Brigand();
        }
        console.log(monster);
        if (char.health > 0) {
            char.health = Character.combat(char, monster);
            char.experience += monster.experience;
            let attributes = Character.levelUp(char);
            char.level = attributes[0];
            char.points += attributes[1];
            char.gold += monster.gold;
            Character.showStats(charClass, char);
        }
        if (char.health <= 0) {
            alert(`${char.name} has died. Page will refresh when you click ok`);
            location.reload();
        }
        console.log(`Health: ${char.health}`);
        console.log(`Experience: ${char.experience}`);
        console.log(`Level: ${char.level}`);
        console.log(`Points: ${char.points}`);
        console.log(`Gold: ${char.gold}`)
    });

    $("#healForm").submit(function(event) {
        event.preventDefault();
        let healthDifference = char.maxHealth - char.health;
        if (healthDifference !=0) {
            if (char.gold >= 25) {
                char.health = char.maxHealth;
                char.gold -= 25;
                console.log(`${char.name} has healed ${healthDifference}.`)
                console.log(`${char.name} has ${char.health} Health.`)
                console.log(`${char.name} has ${char.maxHealth} Max Health.`)
                Character.showStats(charClass, char);
            } else {
                console.log("You don't have enough gold.");
            }
        }
        else{
            console.log("You already have max health");
        }
    });

    $("#mainStatForm").submit(function(event) {
        event.preventDefault();
        let mainStat = parseInt($('#mainStat').val());
        if (charClass === "warrior" && char.points >= mainStat) {
            char.strength += mainStat;
            char.points -= mainStat;
            char.attack = char.strength;
            console.log(`${char.name} has gained ${mainStat} points of strength.`);
            console.log(`${char.name} has ${char.strength} total points of strength.`);
            console.log(`${char.name} has ${char.points} attribute points left to spend.`);
            Character.showStats(charClass, char);
        }
        else if (charClass === "ranger" && char.points >= mainStat) {
            char.agility += mainStat;
            char.points -= mainStat;
            char.attack = char.agility;
            console.log(`${char.name} has gained ${mainStat} points of agility.`);
            console.log(`${char.name} has ${char.agility} total points of agility.`);
            console.log(`${char.name} has ${char.points} attribute points left to spend.`);
            Character.showStats(charClass, char);
        }
        else if (charClass === "mage" && char.points >= mainStat) {
            char.intellect += mainStat;
            char.points -= mainStat;
            char.attack = char.intellect;
            console.log(`${char.name} has gained ${mainStat} points of intellect.`);
            console.log(`${char.name} has ${char.intellect} total points of intellect.`);
            console.log(`${char.name} has ${char.points} attribute points left to spend.`);
            Character.showStats(charClass, char);
        }
        else
            console.log("You do not have enough points");
    });

    $("#staminaForm").submit(function(event) {
        event.preventDefault();
        let stamina = parseInt($('#stamina').val());
        if (char.points >= stamina){
            char.stamina += stamina;
            char.points -= stamina;
            char.maxHealth = char.stamina * 10;
            char.health = char.maxHealth;
            console.log(`${char.name} has gained ${stamina} points of stamina.`);
            console.log(`${char.name} has ${char.stamina} total points of stamina.`);
            console.log(`${char.name} has ${char.points} attribute points left to spend.`);
            Character.showStats(charClass, char);
        }
        else
            console.log("You do not have enough points");
    });

    $("#woodenSword").click(function(event) {
        event.preventDefault();
        if (char.gold >= 150 && char.inventory["sword"] === undefined && charClass === "warrior") {
            let item = new woodSword();
            char.inventory["sword"] = item;
            char.attack += item.attack;
            char.gold -= item.gold;
            Character.showStats(charClass, char);
            console.log(char.inventory["sword"]);
            console.log(char);
        }
    });

    $("#woodenBow").click(function(event) {
        event.preventDefault();
        if (char.gold >= 150 && char.inventory["bow"] === undefined && charClass === "ranger") {
            let item = new woodBow();
            char.inventory["bow"] = item;
            char.attack += item.attack;
            char.gold -= item.gold;
            Character.showStats(charClass, char);
            console.log(char.inventory["bow"]);
            console.log(char);
        }
    });

    $("#woodenWand").click(function(event) {
        event.preventDefault();
        if (char.gold >= 150 && char.inventory["wand"] === undefined && charClass === "mage") {
            let item = new woodWand();
            char.inventory["wand"] = item;
            char.attack += item.attack;
            char.gold -= item.gold;
            Character.showStats(charClass, char);
            console.log(char.inventory["wand"]);
            console.log(char);
        }
    });
});