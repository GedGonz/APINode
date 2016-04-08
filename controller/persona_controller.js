var Persona=require('../model/persona');

exports.getallPersona=function(req,res)
{
	Persona.find(function(err,persona){
		if(!err)
		{
			res.json(persona);
		}
		else
		{
			res.json(err);
		}
	});
}

exports.getbyidPersona=function(req,res)
{
	Persona.findOne({_id:req.params.id},function(err,persona){
		if(!err)
		{
			res.json(persona);
		}
		else
		{
			res.json(err);
		}
	});
}

exports.postPersona=function(req,res)
{
	Persona.create({Name:req.body.name,Lasname:req.body.lasname,Adress:req.body.adress,Email:req.body.email,Age:req.body.age},
		function(err,persona){
		if(!err)
		{
			res.json({State:'200 OK',Message:'Datos Gurdados!!'});
		}
		else
		{
			res.json(err);
		}
	});
}

exports.putPersona=function(req,res)
{
	Persona.update({_id:req.params.id},{$set:{Name:req.body.name,Lasname:req.body.lasname,Adress:req.body.adress,Email:req.body.email,Age:req.body.age}},
		function(err,persona){
		if(!err)
		{
			res.json({State:'200 OK',Message:'Datos Actualizados!!'});
		}
		else
		{
			res.json(err);
		}
	});
}

exports.deletePersona=function(req,res)
{
	Persona.remove({_id:req.params.id},function(err,persona){
		if(!err)
		{
			res.json({State:'200 OK',Message:'Datos Eliminado!!'});
		}
		else
		{
			res.json(err);
		}
	});
}
