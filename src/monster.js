export class Monster {
    constructor(name, health, attack, experience, gold) {
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.experience = experience;
        this.gold = gold;
    }
}

export class Rat extends Monster {
    constructor() {
        super("Rat", 25, 3, 5, 10);
    }
}

export class Kobold extends Monster {
    constructor() {
        super("Kobold", 50, 5, 15, 25);
    }
}

export class Goblin extends Monster {
    constructor() {
        super("Goblin", 100, 10, 35, 45);
    }
}

export class Brigand extends Monster {
    constructor () {
        super("Brigand", 175, 20, 75, 60);
    }
}

