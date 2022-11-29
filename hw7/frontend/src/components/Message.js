import styled from "styled-components";

const StyledMessage = styled.div`
    display: flex;
    align-items: center;
    flex-direction: ${({isMe}) => (isMe ? 'row-reverse' : 'row')};
    margin: 8px 10px;
    & p:first-child {
        margin: 0 5px;
    }
    & p:last-child {
        padding: 2px 5px;
        border-radius: 5px;
        background: ${({isMe}) => (isMe ? '#eee' : 'blue')};
        color: ${({isMe}) => (isMe ? 'black' : 'white')};
        margin: auto 0;
    }
`;

const Message = ({name, message, isMe}) => {
    return (
        <StyledMessage isMe={isMe}>
            <p>{message}</p>
        </StyledMessage>
    )
}

export default Message;