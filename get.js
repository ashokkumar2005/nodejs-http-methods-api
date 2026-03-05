const express =require('express');

const app = express();
app.use(express.json());

const users = [
    {id:1, user_name:'ashok'}, 
    {id:2, user_name:'tamil'}

]


app.get('/users' , (req,res) => {
    res.json(users)
})

app.get('/users/:id' , (req,res) => {
    const id = users.find((u) => u.id === parseInt(req.params.id))
    res.json(id)
})


app.listen(3000,() => {
    console.log('server is runing')
})

