var randNum = 0;
const genNumber = () => {
    randNum = Math.floor(Math.random()*100) + 1;
}

const getNumber = () => {
    if(!randNum){
        genNum();
    }
    return randNum;
}

export {genNumber, getNumber};