import $ from 'jquery';

export class Character {
    static combat(character, monster) {
        while(character.health > 0 && monster.health > 0) {
            let damage = Math.floor((Math.random() * character.attack) + 1);
            $('#combatText').prepend(`${character.name} attacks ${monster.name} for ${damage} damage \n`);
            monster.health -= damage;
            if (monster.health <= 0) {
                $('#combatText').prepend(`${character.name} has won the battle! ${character.health} remaining health. \n`);
                $('#combatText').prepend(`${character.name} is level ${character.level} \n`);
                $('#currentHealth').text(`Current Health: ${character.health}`);
                return character.health;
            }
            damage = Math.floor((Math.random() * monster.attack) + 1);
            $('#combatText').prepend(`${monster.name} attacks ${character.name} for ${damage} damage. \n`);
            character.health -= damage;
            if (character.health <= 0) {
                $('#combatText').prepend(`${character.name} has lost the battle! ${character.health} remaining health. \n`);
                return character.health;
            }
        }
    }
    static showStats(charClass, char) {
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
    }
    static levelUp(character) {
        if (character.experience < 30) {
            let attributes = [1, 0];
            return attributes;
        }
        else if (character.experience < 60 && character.experience >= 30 && character.level === 1) {
            let points = 5;
            let level = 2;
            let attributes = [level, points];
            return attributes;
        }
        else if (character.experience < 100 && character.experience >= 60 && character.level === 2) {
            let points = 5;
            let level = 3;
            let attributes = [level, points];
            return attributes;
        }
        else if (character.experience < 150 && character.experience >= 100 && character.level === 3) {
            let points = 5;
            let level = 4;
            let attributes = [level, points];
            return attributes;
        }
        else if (character.experience < 250 && character.experience >= 150 && character.level === 4) {
            let points = 5;
            let level = 5;
            let attributes = [level, points];
            return attributes;
        }
        else if (character.experience < 500 && character.experience >= 250 && character.level === 5)  {
            let points = 10;
            let level = 6;
            let attributes = [level, points];
            return attributes;
        }
        else if (character.experience < 1000 && character.experience >= 500 && character.level === 6) {
            let points = 10;
            let level = 7;
            let attributes = [level, points];
            return attributes;
        }
        else if (character.experience < 2000 && character.experience >= 1000 && character.level === 7) {
            let  points = 10;
            let level = 8;
            let attributes = [level, points];
            return attributes;
        }
        else if (character.experience < 3000 && character.experience >= 2000 && character.level === 8) {
            let  points = 10;
            let level = 9;
            let attributes = [level, points];
            return attributes;
        }
        else if (character.experience < 4000 && character.experience >= 3000 && character.level === 9) {
            let  points = 10;
            let level = 10;
            let attributes = [level, points];
            return attributes;
        }
        else if (character.experience < 5000 && character.experience >= 4000 && character.level === 10) {
            let  points = 15;
            let level = 11;
            let attributes = [level, points];
            return attributes;
        }
        else if (character.experience >= 5000 && character.level === 11) {
            let  points = 15;
            let level = 12;
            let attributes = [level, points];
            return attributes;
        }
        else {
            let attributes = [character.level, 0];
            return attributes;
        }
    }

}

export class Warrior extends Character {
    constructor(name) {
        super();
        this.name = name;
        this.level = 1;
        this.stamina = 10;
        this.maxHealth = this.stamina * 10;
        this.health = 100;
        this.strength = 5;
        this.attack = this.strength;
        this.experience = 0;
        this.points = 0;
        this.gold = 0;
        this.inventory = {
            "sword" : undefined
        }
    }
}

export class Mage extends Character {
    constructor(name) {
        super();
        this.name = name;
        this.level = 1;
        this.stamina = 7;
        this.maxHealth = this.stamina * 10;
        this.health = 70;
        this.intellect = 5;
        this.attack = this.intellect;
        this.experience = 0;
        this.points = 0;
        this.gold = 0;
        this.inventory = {
            "wand" : undefined
        }
    }
}

export class Ranger extends Character {
    constructor(name) {
        super();
        this.name = name;
        this.level = 1;
        this.stamina = 9;
        this.maxHealth = this.stamina * 10;
        this.health = 85;
        this.agility = 5;
        this.attack = this.agility;
        this.experience = 0;
        this.points = 0;
        this.gold = 0;
        this.inventory = {
            "bow" : undefined
        }
    }
}