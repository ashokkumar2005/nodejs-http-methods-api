const express =require('express');

const app = express();
app.use(express.json());

const users = [
    {id:1, user_name:'ashok'}, 
    {id:2, user_name:'tamil'}

]

app.get('/users', (req, res) => {
    res.json(users);

    app.get('/users/:id' , (req,res) => {
    const id = users.find((u) => u.id === parseInt(req.params.id))
    res.json(id)
})
});

app.post('/users',(req,res) => {

        const newuser={
            id: users.length+1,
            user_name: req.body.user_name,

        }
        users.push(newuser);
        res.json(newuser)
})


app.listen(3000,() => {
    console.log('server is runing')
})

