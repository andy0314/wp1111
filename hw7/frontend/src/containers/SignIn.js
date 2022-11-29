import Title from "../components/Title";
import Login from "../components/Login";
import { useChat } from "./hooks/useChat";

const SignIn = ({me}) => {
    const { setMe, setSignedIn, displayStatus } = useChat();

    const handleLogin = (name) => {
        console.log("login")
        console.log(me);
        if(!name){
            displayStatus({
                type: "error",
                msg: "Missing user name"
            });
        }
        else{
            setSignedIn(true);
        }
    }

    return(
        <>
            <Title me={me}/>
            <Login me={me} setName={setMe} onLogin={handleLogin} />
        </>
    );
}

export default SignIn;