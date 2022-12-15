import express from 'express'
import { getName, postName } from './name'

const server = express()

server.use(express.json())

server.get('/name', getName)
server.post('/name', postName)

server.listen(8080, () => {
    console.log('Server is running');
    
})