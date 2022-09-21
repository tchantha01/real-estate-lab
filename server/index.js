const express = require('express');
const cors = require('cors');
const path = require('path')

require('dotenv').config()

const port = process.env.PORT || 5050
const app = express();

app.use(express.json())
app.use(cors())

const controller = require('./controller')
const { getHouse, deleteHouse, createHouse, updateHouse } = controller

app.get('/api/houses', getHouse)
app.delete('/api/houses/:id', deleteHouse)
app.post('/api/houses', createHouse )
app.put('/api/houses/:id', updateHouse)



app.use('/', express.static(path.join(__dirname, '../client/index.html')))
app.use(express.static(path.join(__dirname, '../client')))
app.use(express.static(path.join(__dirname, '../server')))



app.listen(port, () => {
    console.log('Docked at port ' + port)})