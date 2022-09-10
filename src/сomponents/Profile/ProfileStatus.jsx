import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    
    turnOnEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    turnOffEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status);
        this.props.getStatus(22798);

    }

    onStatusChange = (e) => {
        this.setState({
            status: e.target.value
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status != this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return <div>
            {this.state.editMode
                ? <input autoFocus onChange={this.onStatusChange} onBlur={this.turnOffEditMode} value={this.state.status} />
                : <span onDoubleClick={this.turnOnEditMode} >{this.props.status || '------'}</span>}
        </div>
    }
}

export default ProfileStatus;