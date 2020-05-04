import React from "react";
import {connect} from "react-redux";
import {signIn, signOut} from "../actions";

class GoogleAuth extends React.Component {
    //state = {isSignedIn: null}; // Removed state when adding redux

    componentDidMount() {
        //#1 load google api
        window.gapi.load('client:auth2', () => {
            //#2 callback to init client with our key and set of scopes
            window.gapi.client
                .init({
                    clientId: '916096344583-f0scr7r4r4ke94eag03tmuqcae02fm0a.apps.googleusercontent.com',
                    scope: 'email'
                })
                // #3 after client as been initialized, we store the result of the authentication
                .then(() => {
                    // Removed when added redux
                    // this.auth = window.gapi.auth2.getAuthInstance();
                    // // #4 we update state of the component (component level state)
                    // this.setState({isSignedIn: this.auth.isSignedIn.get()});
                    // // #4 add an event listener for when the user signs out
                    // this.auth.isSignedIn.listen(this.onAuthChange);

                    this.auth = window.gapi.auth2.getAuthInstance();
                    this.onAuthChange(this.auth.isSignedIn.get());
                    this.auth.isSignedIn.listen(this.onAuthChange);
                });
        });
    }

    onAuthChange = isSignedIn => {
        if (isSignedIn) {
            this.props.signIn();
        } else {
            this.props.signOut();
        }
    }

    onSignInClick = () => this.auth.signIn();

    onSignOutClick = () => this.auth.signOut();

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <button className='ui red google button' onClick={this.onSignOutClick}>
                    <i className='google icon'/>
                    Sign out
                </button>
            );
        } else {
            return (
                <button className='ui red google button' onClick={this.onSignInClick}>
                    <i className='google icon'/>
                    Sign in With Google
                </button>
            );
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>
    }
}

const mapStateToProps = (state) => {
    return {isSignedIn: state.auth.isSignedIn}
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);