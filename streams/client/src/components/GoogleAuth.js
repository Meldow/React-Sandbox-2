import React from "react";

class GoogleAuth extends React.Component {
    state = {isSignedIn: null};

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
                    this.auth = window.gapi.auth2.getAuthInstance();
                    // #4 we update state of the component (component level state)
                    this.setState({isSignedIn: this.auth.isSignedIn.get()});
                    // #4 add an event listener for when the user signs out
                    this.auth.isSignedIn.listen(this.onAuthChange);
                });
        });
    }

    onAuthChange = () => {
        this.setState({isSignedIn: this.auth.isSignedIn.get()});
    }

    onSignInClick = () => this.auth.signIn();

    onSignOutClick = () => this.auth.signOut();

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return null;
        } else if (this.state.isSignedIn) {
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

export default GoogleAuth;