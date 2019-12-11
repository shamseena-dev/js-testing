 //const Calculator = require('../src/calculator');
 import Calculator from '../src/calculator';
 //Arrange, Act , Assert
 describe('Calculator', () => {
     describe('add()', () => {
     	const calculator = new Calculator();
     	//ADD
         it('sums two numbers', () => {
             // Arrange
             
             
             // Act
             const result = calculator.add(1, 2);
             
             // Assert
             expect(result).toEqual(3);
         })
         //SUBTRACT
         it('subtracting two numbers', () => {
             // Arrange
            // const calculator = new Calculator();
             
             // Act
             const result = calculator.sub(1, 2);

             // Assert
             expect(result).toEqual(-1);
         })
         it('multiplication of two numbers', () => {
             // Arrange
            // const calculator = new Calculator();
             
             // Act
             const result = calculator.mul(4, 2);
             
             // Assert
             expect(result).toEqual(8);
         })
         it('Division of two numbers', () => {
             // Arrange
             const calculator = new Calculator();
             
             // Act
             const result = calculator.div(4, 2);
             
             // Assert
             expect(result).toEqual(2);
         })



     })
 })



/*
test('add two numbers', () => {
  const result = 1 + 2;
  
  expect(result).toEqual(3);
})
*/
