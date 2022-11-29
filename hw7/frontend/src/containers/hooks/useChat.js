import { useState, useEffect, createContext, useContext } from "react";
import { message } from "antd";
const client = new WebSocket('ws://localhost:4000')

const LOCALSTORAGE_KEY = "save-me";
const savedMe = localStorage.getItem(LOCALSTORAGE_KEY);
const ChatContext = createContext({
    status: {},
    me: "",
    signedIn: false,
    messages: [],
    sendMessage: () => {},
    clearMessages: () => {},
})

const ChatProvider = (props) => {
    const [messages, setMessages] = useState([]);
    const [status, setStatus] = useState({});
    const [me, setMe] = useState(savedMe || "");
    const [signedIn, setSignedIn] = useState(false);
    const displayStatus = (s) =>{
        if(s.msg){
          const {type, msg} = s;
          const content = {content: msg, duration: 0.5}
          switch(type){
            case 'success':
              message.success(content);
              break;
            case 'error':
            default:
              message.error(content);
              break;
          }
        }
      }
    useEffect(() => {
      displayStatus(status)
    }, [status])
    const sendData = async (data) =>{
        await client.send(JSON.stringify(data));
    }
    const sendMessage = (payload) =>{
        sendData(["input", payload]);
        console.log(payload);
    }
    const clearMessages = () =>{
        sendData(["clear"]);
    };

    client.onmessage = (byteString) => {
        const { data } = byteString;
        const [task, payload] = JSON.parse(data);
        switch(task){
            case "output":{
                setMessages(() => [...messages, payload]);
                break;
            }
            case "status":{
                setStatus(payload);
                break;
            }
            case "init":{
                setMessages(payload);
                break;
            }
            case "cleared":{
                setMessages([]);
                break;
            }
            default: break;
        }
    }
    useEffect(() => {
        if(signedIn){
            localStorage.setItem(LOCALSTORAGE_KEY, me);
        }
    }, [signedIn])
    return(
        <ChatContext.Provider
            value={{
                status, me, signedIn, messages, setMe, setSignedIn, sendMessage, clearMessages, displayStatus
            }}{...props}/>
    );
};

const useChat = () => useContext(ChatContext);

export { ChatProvider, useChat }