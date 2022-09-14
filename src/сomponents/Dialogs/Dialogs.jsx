import React from 'react';

import style from './Dialogs.module.css';
import Comrade from './Comrade/Comrade';

import AddNewTextForm from '../common/FormsControls/AddNewTextForm/AddNewTextForm';

const Dialogs = ({ comradesData, messagesData, sendMessage }) => {

    let comradesElements = comradesData.map(c => <Comrade
        comradeImg={c.comradeImg} comradeName={c.comradeName}
        comradeId={c.comradeId} lastMessage={c.lastMessage} key={c.id} />);

    let messagesElements = messagesData.map(m =>
        <div className={style.message} key={m.id}>
            {m.message}
        </div>)

    let onSubmit = (values) => {
        sendMessage(values.newText)
    }

    return (
        <div className={style.dialogsPage}>
            <div className={style.comrades}>
                {comradesElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <AddNewTextForm onSubmit={onSubmit} />
            </div>
        </div>
    )
}

export default Dialogs;
