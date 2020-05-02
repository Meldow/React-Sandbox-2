import React from "react";
import {connect} from "react-redux";

class UserHeader extends React.Component {
    render() {
        const {user} = this.props;

        if (!user) {
            return null;
        }

        return <div className='header'>{user.name}</div>
    }
}

// we should only pass the necessary data into the component
// some apps have one big mapStateToProps! in a single file
const mapStateToProps = (state, ownProps) => {
    return {user: state.users.find((user) => user.id === ownProps.userId)}
};

export default connect(mapStateToProps)(UserHeader);