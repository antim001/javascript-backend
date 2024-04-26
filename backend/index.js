const express = require('express')
const app = express()
const port =process.env.port || 4000


app.get('/', (req, res) => {
  res.send('server is ready')
})
app.get('/students',(req,res)=>{
  const students=  [
        {
          "id": "123456",
          "name": "John Doe",
          "age": 20,
          "gender": "male",
          "grade": "A"
        },
        {
          "id": "234567",
          "name": "Jane Smith",
          "age": 21,
          "gender": "female",
          "grade": "B+"
        },
        {
          "id": "345678",
          "name": "Alice Johnson",
          "age": 19,
          "gender": "female",
          "grade": "A-"
        },
        {
          "id": "456789",
          "name": "Bob Williams",
          "age": 22,
          "gender": "male",
          "grade": "B"
        },
        {
          "id": "567890",
          "name": "Emily Brown",
          "age": 20,
          "gender": "female",
          "grade": "A+"
        }
      ]
      res.send(students)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})