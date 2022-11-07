import { Router } from "express";
import ScoreCard from "../models/ScoreCard";
const router = Router();

const add = async(name, subject, score) => {
    const exist = await ScoreCard.findOne({ name: name, subject: subject });
    if(exist){
        await ScoreCard.updateOne({ name: name, subject: subject}, {score: score});
        return 'updating';
    }
    else{
        const newCard = new ScoreCard({name: name, subject: subject, score: score});
        return newCard.save();
    }
}

const query = async(type, queryString) => {
    var exist;
    var output = [];
    if(type === 'name'){
        exist = await ScoreCard.find({ name: queryString });
        if(exist.length === 0){
            return false;
        }
        else{
            for(var i = 0; i < exist.length; i++){
                output[i] = `Found card with name: (${exist[i].name}, ${exist[i].subject}, ${exist[i].score})`;
            }
            return output;
        }
    }
    else{
        exist = await ScoreCard.find({ subject: queryString });
        if(exist.length === 0){
            return false;
        }
        else{
            for(var i = 0; i < exist.length; i++){
                output[i] = `Found card with subject: (${exist[i].name}, ${exist[i].subject}, ${exist[i].score})`;
            }
            return output;
        }
    }
}

const clear = async() => {
    try {
        await ScoreCard.deleteMany({});
        return ("Database cleared");
    }
    catch(e){
        return ("Clear error");
    }
}

router.post('/card', async(req, res) => {
    const name = req.body.name;
    const subject = req.body.subject;
    const score = req.body.score;

    const card = await add(name, subject, score);
    if(card === 'updating'){
        res.json({ message: `Updating (${name}, ${subject}, ${score})`,card: card });
    }
    else{
        res.json({ message: `Adding (${name}, ${subject}, ${score})`,card: card });
    }
})

router.get('/cards', async(req, res) => {
    const type = req.query.type;
    const queryString = req.query.queryString;

    const result = await query(type, queryString);
    if(!result){
        res.json({ message: `${type} (${queryString}) not found` })
    }
    else{
        res.json({ messages: result });
    }
})

router.delete('/cards', async(_, res) => {
    const result = await clear();
    res.json({ message: result });
})

export default router;