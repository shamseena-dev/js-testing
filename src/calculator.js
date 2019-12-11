class Calculator {
	constructor(){
		
	}
	add(a, b){
		try{
			return a+b;
		}
		catch(err){
			console.log(err);
		}
	}
	sub(a,b){
		try{
			return a-b;
		}
		catch(err){
			console.log(err);
		}
	}
	mul(a, b){
		try{
			return a*b;
		}
		catch(err){
			console.log(err);
		}
	}
	div(a,b){
		try{
			return a/b;
		}
		catch(err){
			console.log(err);
		}
	}

 }
/*
const calc = new Calculator();
calc.add(2,3);
console.log(calc.add(2,3));
*/
export default Calculator;
//module.exports = Calculator;