
import { Warrior, Mage, Ranger, Character } from './../src/character';
import { Rat } from './../src/monster';
//import { woodSword, woodBow, woodWand } from './../src/item';


describe('RPG', function() {
  let character;
  let monster; 
  const bob = 'Bob';

  // beforeEach(function() {
  //   foo = 0;
  //   foo += 1;
  // });

  afterEach(function() {
    character = undefined;
    monster = undefined;
  });    

  it('should return a positive integer for character health after single combat between rat and warrior', function() {
    monster = new Rat;
    character = new Warrior;
    expect(Character.combat(character, monster)).toBeGreaterThan(0);
  });

  it('should return a positive integer for character health after single combat between rat and mage', function() {
    monster = new Rat;
    character = new Mage;
    expect(Character.combat(character, monster)).toBeGreaterThan(0);
  });

  it('should return a positive integer for character health after single combat between rat and ranger', function() {
    monster = new Rat;
    character = new Ranger;
    expect(Character.combat(character, monster)).toBeGreaterThan(0);
  });

  it('should return starting array for attributes when levelUp is run', function() {
    character = new Ranger;
    let arr = [1, 0];
    expect(Character.levelUp(character)).toEqual(arr);
  });

  it('should return array of 5 5 for attributes when levelUp is run and character experience is 230', function() {
    character = new Ranger;
    character.experience = 230;
    character.level = 4;
    let arr = [5, 5];
    expect(Character.levelUp(character)).toEqual(arr);
  });

  it('should create a new warrior object', function() {
    character = new Warrior(bob);
    expect(character).toEqual(jasmine.any(Object));
  });

  it('should create a new mage object', function() {
    character = new Mage(bob);
    expect(character).toEqual(jasmine.any(Object));
  });

  it('should create a new ranger object', function() {
    character = new Ranger(bob);
    expect(character).toEqual(jasmine.any(Object));
  });





  // it('should correctly determine if all vertical columns fit the requirement', function() {
  //   const bigArray = ['4','1','5','6','3','8','9','7','2','3','6','2','4','7','9','1','8','5','7','8','9','2','1','5','3','6','4','9','2','6','3','4','1','7','5','8','1','3','8','7','5','6','4','2','9','5','7','4','9','8','2','6','3','1','2','5','7','1','6','4','8','9','3','8','4','3','5','9','7','2','1','6','6','9','1','8','2','3','5','4','7'];
  //   expect(Sudoku.checkVertical(bigArray)).toEqual(true);
  // });

  // it('should correctly determine if all 3x3 grids fit the requirement', function() {
  //   const bigArray = ['4','1','5','6','3','8','9','7','2','3','6','2','4','7','9','1','8','5','7','8','9','2','1','5','3','6','4','9','2','6','3','4','1','7','5','8','1','3','8','7','5','6','4','2','9','5','7','4','9','8','2','6','3','1','2','5','7','1','6','4','8','9','3','8','4','3','5','9','7','2','1','6','6','9','1','8','2','3','5','4','7'];
  //   expect(Sudoku.checkBox(bigArray)).toEqual(true);
  // });

  // it('should correctly determine if both diagonals fit the requrement', function() {
  //   const bigArray = ['4','1','5','6','3','8','9','7','2','3','6','2','4','7','9','1','8','5','7','8','9','2','1','5','3','6','4','9','2','6','3','4','1','7','5','8','1','3','8','7','5','6','4','2','9','5','7','4','9','8','2','6','3','1','2','5','7','1','6','4','8','9','3','8','4','3','5','9','7','2','1','6','6','9','1','8','2','3','5','4','7'];
  //   expect(Sudoku.checkDiagonals(bigArray)).toEqual(true);
  // });

});