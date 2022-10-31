import axios from 'axios'

const instance = axios.create({baseURL: 'http://localhost:4000/api/guess'});

const startGame = async() => {
    try{
        const {data: {msg}} = await instance.post('/start');
        return msg;
    }
    catch(error){
        return "HTTP 500(Server not responding). Please try restarting the server.";
    }
}

const guess = async(input) => {
    try{
        try{
            const {data: {msg}} = await instance.get('/guess',{ params: {input}});
            return msg;
        }
        catch(error){
            if(error.response.status === 406){
                return ""+ input +" is not a valid number (1-100)";
            }
            return "HTTP 500(Server not responding). Please try restarting the server.";
        }
    }
    catch(error){
        return "HTTP 500(Server not responding). Please try restarting the server.";
    }
}

const restart = async() => {
    try{
        const {data: {msg}} = await instance.post('/restart');
        return msg;
    }
    catch(error){
        return "HTTP 500(Server not responding). Please try restarting the server.";
    }
}

export {startGame, guess, restart};