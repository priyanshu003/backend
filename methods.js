const express = require('express');
 
const app = express();

//middleware func -> conver fronend data to json
app.use(express.json());
app.listen(3000);

let users = {};
// app.get('/users',(req,res)=>{
// 	res.send(users);
// })

app.post('/users',(req,res)=>{
	console.log(req.body);
	users = req.body 
	res.json({
		message:"data is recived",
		user:req.body 
	})
})

//update

app.patch('/users',(req,res)=>{
	let datatobeupdated = req.body;
	for(key in datatobeupdated){
		users[key] = datatobeupdated[key]
	}
	res.json({
		message:"data is updated",
		user:req.body 
	})
})

app.delete('/users',(req,res)=>{
	users={};
	res.json({
		message:"data is deleted",
		
	})

})

app.get('/users/:id',(req,res)=>{
	res.send("user id is recived");
	console.log(req.params.id);
})

app.get('/users',(req,res)=>{

	console.log(req.query);
	res.send(users);
})
