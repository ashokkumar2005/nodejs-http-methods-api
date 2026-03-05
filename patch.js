const express = require("express");

 

 const app = express();

 app.use(express.json());


 const users = [
    {id:1, user_name:'ashok' ,age:20}, 
    {id:2, user_name:'gurumss' ,age:19}

]

app.get('/users', (req, res) => {
    res.json(users);
});

app.patch('/users/:id',(req,res) => {
    const user = users.find(u => u.id ===parseInt(req.params.id))

    if(!user){
        return res.status(404).send("user id is found")
    }

    if(req.body.user_name){
        user.user_name = req.body.user_name;
    }

    if(req.body.age){
        user.age=req.body.age;
    }
        res.json(user);
})

app.listen(3000,() => {
    console.log('server is runing')
})
