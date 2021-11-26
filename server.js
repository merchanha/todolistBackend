const express = require ('express');
const cors = require ('cors');
const bodyParser = require('body-parser')
const connection = require('./db');
const { response } = require('express');


const app = express();


app.use(bodyParser.json())

app.use(cors())





app.get('/tasks', (req, res)=>{

    // const task = req.params.task
   
   
    // connection.query(`SELECT * from todotask`)
  

    // res.send(response) 


    let task = req.body.task;
    connection.query(`SELECT * FROM todotask`,[task], (err, results, fields) =>{
        res.send(results)
    
    

})

})

app.post('/addTasks', (req, res)=>{

    const task = req.body.task


    connection.query(`INSERT into todotask (task) values(?)`, [task])

    res.json()           
   
})




app.delete('/deleteTask/:id', (req, res)=>{

    const id = req.params.id

    connection.query(`DELETE FROM todotask WHERE id = ${id}`, (err, results, fields) =>{
        res.send(results)



})

})






app.listen(4000, ()=>{
    console.log('running on port 4000')
})