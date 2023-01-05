
import { useData } from './hooks/useContext'
import SignUp from '../components/SignUp'
import Login from '../components/Login'
import api from "../api"

const bcrypt = require('bcryptjs')

const SignIn = () => {
    const {
        me, 
        setMe,
        signUp, 
        setSignUp,
        setSignIn,
        password,
        setPassword,
        setStatus,
        setMyCourse,
        setSortCourse,
    } = useData()
const encryptPW = async (pass) => {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(pass, salt)
    return hash
}
const getData = async (myname) => {
    const { data: { messages, data } } = await api.post('/course/course',{
        name: myname,
    });
    setMyCourse(data)
    setSortCourse(data)
}
const handleSignUp = async (name, pass) => {
    if(!name){
        setStatus({
            type: "error",
            msg: "Missing user name!",
        })
    }
    else if(!pass){
        setStatus({
            type: "error",
            msg: "Missing password!",
        })
    }
    else{
        const hash = await encryptPW(pass)
        const { data: { messages, data } } = await api.post('/user/signup',{
                name: name,
                password: hash,
        });
        setStatus({
            type: "success",
            msg: "Signed up!",
        })
        console.log("handleSignUp retrieved: ", messages);//
        setSignIn(true)
        getData(name)
    }
}
const handleSignIn = async (name, pass) => {
    if(!name){
        setStatus({
            type: "error",
            msg: "Missing user name!",
        })
    }
    else if(!pass){
        setStatus({
            type: "error",
            msg: "Missing password!",
        })
    }
    else {
        const { data: { messages, data } } = await api.post('/user/login',{
                name: name,
        });
        if(messages === "Doesn'tExist")        
            setStatus({
                type: "error",
                msg: "User doesn't exist!",
            })
        else if(messages === "Hash"){
            const result = bcrypt.compareSync(pass, data)
            if(result){
                setStatus({
                    type: "success",
                    msg: "Logged in.",                   
                })
                setSignIn(true)
                getData(name)
            }
            else{
                setStatus({
                    type: "error",
                    msg: "Wrong password.",
                })                
            }
        }
    }
}
    return (
        <div>
            <div style={{height:'120px' , color: "#91d5ff"}}></div>
            
            {signUp ? (
                <SignUp 
                    onSignUp={handleSignUp}
                    me={me}
                    setName={setMe}
                    password={password}
                    setPassword={setPassword}
                    setSignUp={setSignUp}
                />
            ) : (
                <Login 
                    onSignIn={handleSignIn}
                    me={me}
                    setName={setMe}
                    password={password}
                    setPassword={setPassword}  
                    setSignUp={setSignUp}                                  
                />
            ) }


        </div>
    )
}

export default SignIn