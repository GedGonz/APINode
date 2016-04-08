var mongoose=require('mongoose');

var ShemaPersona={
	Name:String,
	Lasname:String,
	Adress:String,
	Email:String,
	Age:Number
}

module.exports=mongoose.model('Persona',ShemaPersona);