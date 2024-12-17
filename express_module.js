const express = require('express')
const app = express()
const port = 3000

// hello world 출력
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// 데이터 일반 출력
app.get('/dog', (req, res) => {
    res.send({'sound' : '멍멍'}) // json 형태로 출력
})

app.get('/cat', (req, res) => {
    res.send({'sound' : '야옹'}) // json 형태로 출력
})

//"params"를 이용해서 데이터 받기
app.get('/user/:id', (req, res) => { // ':id'를 통해 해당 데이터를 전달
    const id = req.params // 받은 데이터를 'id'라는 변수에 저장

    res.send({'user_id' : id.id}) // 받은 데이터를 저장한 'id'라는 변수에서 'id'라는 데이터를 출력
})

// "query"를 이용해서 데이터 받기
app.get('/user/:name', (req, res) => {
    const name = req.query

    res.send({'name' : name.name})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})