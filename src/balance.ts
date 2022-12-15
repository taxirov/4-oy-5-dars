import { Request, Response } from "express"
type User = {
    name: string
    balance: number
}

const user: User = {
    name: 'Joshqin',
    balance: 17000
}

export function getBalance(req: Request, res: Response){
    res.status(200).send(user)
}

export function postBalance(req: Request, res: Response){
    user.balance = user.balance + req.body.amount
    res.status(201).send('Amount succesful added balance')
}

export function deleteBalance(req: Request, res: Response){
    user.balance = user.balance - req.body.yolhaqi
    res.status(204).send('Deleted')
}