import React, { useState, useEffect } from "react";

const ProfileStatus = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {}, [props.status]);

    const turnOnEditMode = () => {
        setEditMode(true)
    }

    const turnOffEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.target.value)
    }

    return <div>
        {editMode
            ? <input maxlength="15" autoFocus onChange={onStatusChange} onBlur={turnOffEditMode} value={status} />
            : <span onDoubleClick={turnOnEditMode} >{props.status || '------'}</span>}
    </div>
}

export default ProfileStatus;