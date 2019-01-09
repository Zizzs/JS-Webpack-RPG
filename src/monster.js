export class Monster {
    
}

export class Rat extends Monster {
    constructor() {
        super();
        this.name = "Rat";
        this.health = 25;
        this.attack = 3;
        this.experience = 5;
    }
}

export class Kobold extends Monster {
    constructor() {
        super();
        this.name = "Kobold";
        this.health = 50;
        this.attack = 5;
        this.experience = 15;
    }
}

export class Goblin extends Monster {
    constructor() {
        super();
        this.name = "Goblin";
        this.health = 100;
        this.attack = 10;
        this.experience = 35;
    }
}