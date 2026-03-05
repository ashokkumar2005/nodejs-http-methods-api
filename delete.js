 const express = require('express');

 const app = express();

 app.use(express.json());

 
 const users = [
    {id:1, user_name:'ashok' ,age:20}, 
    {id:2, user_name:'gurumss' ,age:19}

]

app.get('/users',(req,res)=>{
    res.json(users);
})

app.delete('/users/:id', (req,res) => {
    const id=parseInt(req.params.id);

    if(isNaN(id)){
       return res.status(404).send("ithu number illa boss");
    }

    const userindex= users.findIndex((u)=> u.id ==id) 

    if(userindex==-1){
       return res.status(404).send("veara number poduga boss")
    }
    users.splice(userindex,1);
    res.status(200).send("thuki vealiya aadichachi browww")
})

app.listen(3000,()=>{
    console.log("paalam veali kadysi point nadakuthu")
})
