var mongoose=require('mongoose');

exports.startdb=function()
{
	mongoose.connect('mongodb://localhost/MEAN');
}