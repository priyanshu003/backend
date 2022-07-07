const http = require('http');
const fs = require('fs');
const _ = require('lodash');
const server = http.createServer((req,res)=>{
	console.log('request has been made from browser to server');
	// console.log(req.method);
	// console.log(req.url);

	//lodash
	let num = _.random(0,40);
	console.log(num );
	 res.setHeader('Content-Type','text/html');
	// res.write('hello,Priyanshu !:)');
	// res.end();
	let path = './views';
	switch(req.url){
		case '/':
		   path += '/index.html'
		   res.statusCode = 200
		   break;
		case '/about':
		   path += '/about.html'
		   res.statusCode = 200
		   break;
		   //redirect route
		case '/about-me ':	
			res.statusCode = 301
			res.setHeader('Location','/about');
			res.end();
			break;   
		default:
		   path+= '/404.html'
		   res.statusCode = 404	
		   break;		  
	};

	fs.readFile(path,(err,file)=>{
		if(err){
			console.log(err);
		}else{
			//res.write(file);
			res.end(file);
		}	
	})

})
server.listen(3000,'localhost',()=>{
	console.log('server is running on localhost');
	
})