const Message = ({ notification }) => {
    return (
        <>
            <div id="notificationHeader">
                <span>{notification.title}</span>
            </div>
            <div id="notificationBody">{notification.body}</div>
        </>
    );
};

export default Message;