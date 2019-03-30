
class Ext{
	constructor(){}
	Ext_m1(){
		console.log("Ext_m1");
	}
	
}

class A{
	constructor(){}
	
	A_m1(){
		console.log("A_m1");
	}
	
	get Ext(){
		return Ext;
	}
}

class B extends A{
	constructor(){
		super();
	}
	
	B_m1(){
		console.log("B_m1");
	}
	
	test(){
		const data = new (super.Ext)().Ext_m1();
		console.log(data);
	}
}

const beginTest = ()=>{
	const output = new B();
	console.log(output.test());
}

beginTest();
