import Message from "./models/message";

const sendData = (data, ws) => {
    ws.send(JSON.stringify(data));
}

const sendStatus = (payload, ws) => {
    sendData(["status", payload], ws);
}

const broadcastMessage = (wss, data, status) => {
    wss.clients.forEach((client) => {
        sendData(data, client);
        sendStatus(status, client);
    });
}

export default {
    initData: (ws) => {
        console.log("init")
        Message.find().sort({created_at: -1}).limit(100).exec((err, res) =>{
            if(err){
                throw err;
            }
            sendData(["init", res], ws);
            console.log(res)
        });
    },
    onMessage: (ws, wss) => {
        console.log("onMessage");
        ws.onmessage = async (byteString) => {
            console.log("on")
            console.log(byteString);
            const { data } = byteString;
            const [task, payload] = JSON.parse(data);
            switch(task){
                case 'clear':{
                    Message.deleteMany({}, () => {
                        broadcastMessage(wss, ['cleared'], {type: 'info', msg: 'Message cache cleared.'});
                        //sendData(['cleared'], ws);
                        //sendStatus({type: 'info', msg: 'Message cache cleared.'}, ws)
                    })
                    break;
                }
                case 'input':{
                    const {name, body} = payload;
                    const message = new Message({name, body});
                    try{
                        await message.save();
                    }catch(e){
                        throw new Error("Message DB save error: "+e);
                    }
                    broadcastMessage(wss, ['output', payload], {type: 'success', msg: 'Message sent.'});
                    //sendData(['output', payload], ws)
                    //sendStatus({type: 'success', msg: 'Message sent.'}, ws);
                    break;
                }
                default: break;
            }
        }
    }
}