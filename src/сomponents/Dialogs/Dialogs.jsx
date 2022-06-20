import style from './Dialogs.module.css';
import Comrade from './Comrade/Comrade';
import NewMessage from './Message/NewMessage';

const Dialogs = ({ comradesData, messagesData, newMessageText, sendMessage, onMessageChange }) => {

    let comradesElements = comradesData.map(c =>
        <Comrade comradeImg={c.comradeImg} comradeName={c.comradeName} comradeId={c.comradeId} lastMessage={c.lastMessage} key={c.id} />);

    let messagesElements = messagesData.map(m =>
        <div className={style.message} key={m.id}>
            {m.message}
        </div>)

    return (
        <div className={style.dialogsPage}>
            <div className={style.comrades}>
                {comradesElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <div className={style.new_message}>
                    <NewMessage newMessageText={newMessageText} sendMessage={sendMessage} onMessageChange={onMessageChange} />
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
