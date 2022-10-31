import express from 'express';
import { genNumber, getNumber } from '../core/getNumber.js';

const router = express.Router();

router.post('/start', (_, res) => {
    genNumber(); // ⽤亂數產⽣⼀個猜數字的 number，存在 memory DB
    res.json({ msg: 'The game has started.' })
   });

router.get('/guess', (req, res) => {
    var value;
    var ans = getNumber();
    if(isNaN(req.query.input)){
        res.status(406).send({msg:'Not a legal number'});
    }
    else{
        value =  Number(req.query.input);
        if(value < 1 || value > 100){
            res.status(406).send({msg:'Not a legal number'});
        }
        else{
            if(value > ans){
                res.status(200).send({msg:'Smaller'});
            }
            else if(value < ans){
                res.status(200).send({msg:'Bigger'});
            }
            else if(value === ans){
                res.status(200).send({msg:'Equal'});
            }
            else{
                res.status(200).send({msg:'Error'});
            }
        }
    }
})

router.post('/restart', (_, res)=> {
    genNumber(); // ⽤亂數產⽣⼀個猜數字的 number，存在 memory DB
    res.json({ msg: 'The game has restarted.' })
   })

export default router;