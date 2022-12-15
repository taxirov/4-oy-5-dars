import express from 'express'
import { getBalance, postBalance, deleteBalance } from './balance'

const server = express()

server.use(express.json())

server.get('/balance', getBalance)
server.post('/balance', postBalance)
server.put('/balance', deleteBalance)

server.listen(8080, () => {
    console.log('Server is running');
    
})