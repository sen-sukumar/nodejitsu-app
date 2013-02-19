
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express is great' });
	//res.send("Hello Express!!");
};