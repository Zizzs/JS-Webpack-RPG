//Put Tests Here
import { Triangle } from '../src/triangle.js';



describe('Triangle', function() {

    it('should test whether a Triangle has three sides', function() {
      var triangle = new Triangle(3,4,5);
      expect(triangle.sideOne).toEqual(3);
      expect(triangle.sideTwo).toEqual(4);
      expect(triangle.sideThree).not.toEqual(6);
    });

    it('should correctly determine whether three lengths can be made into a triangle', function() {
      var notTriangle = new Triangle(3,9,22);
      expect(notTriangle.testTriangle()).toEqual(false);
    });
  
    it('should test for an equilateral triangle', function() {
      var triangle = new Triangle(5, 5, 5);
      expect(triangle.testEquilateral()).toEqual(true);
    });

    it('should test for an isosceles triangle', function() {
      var triangle = new Triangle(5, 2, 5);
      expect(triangle.testIsosceles()).toEqual(true);
    });
  });