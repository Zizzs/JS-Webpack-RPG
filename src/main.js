import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Warrior, Mage, Ranger, Character } from './character';
import { Rat, Kobold, Goblin, Brigand } from './monster';





$(document).ready(function() {
    var textarea = document.getElementById('combatText');
    textarea.scrollTop = textarea.scrollHeight;
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
        }
        else if (charClass === "ranger" && char.points >= mainStat) {
            char.agility += mainStat;
            char.points -= mainStat;
            char.attack = char.agility;
            console.log(`${char.name} has gained ${mainStat} points of agility.`);
            console.log(`${char.name} has ${char.agility} total points of agility.`);
            console.log(`${char.name} has ${char.points} attribute points left to spend.`);
        }
        else if (charClass === "mage" && char.points >= mainStat) {
            char.intellect += mainStat;
            char.points -= mainStat;
            char.attack = char.intellect;
            console.log(`${char.name} has gained ${mainStat} points of intellect.`);
            console.log(`${char.name} has ${char.intellect} total points of intellect.`);
            console.log(`${char.name} has ${char.points} attribute points left to spend.`);
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
        }
        else
            console.log("You do not have enough points");
    });

    $("#statsForm").submit(function(event){
        event.preventDefault();
        $('#statsOne').text(char.name);
        $('#statsTwo').text(char.level);
        $('#statsThree').text(char.experience);
        $('#statsFour').text(char.health);
        if (charClass === "warrior")
            $('#statsFive').text(char.strength);
        if (charClass === "ranger")
            $('#statsFive').text(char.agility);
        if (charClass === "mage")
            $('#statsFive').text(char.intellect);
        $('#statsSix').text(char.stamina);
        $('#statsSeven').text(char.points);
        $('#statsEight').text(char.attack);
        $('#statsNine').text(char.gold);
    });
});