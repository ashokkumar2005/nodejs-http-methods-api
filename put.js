 const express = require('express');

 const app = express();

 app.use(express.json());

 const users = [
    {id:1, user_name:'ashok'}, 
    {id:2, user_name:'tamil'}

]
app.get('/users' , (req,res) => {
    res.json(users)
})
 app.put('/users/:id', (req,res) => {

    const index = users.findIndex((u)=> u.id== req.params.id)

    if(index !==-1 ){
    users[index] ={
        id: parseInt(req.params.id),
        user_name: req.body.user_name,
        age : req.body.age
    }
     res.json(users[index]);
    }
    else {
        res.status(404).send("user not found")
    }
 })

 app.listen(3000,()=> {
    console.log('server is running at 3000')
 })