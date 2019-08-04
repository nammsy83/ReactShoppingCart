import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import './pages/homepage/homepage.styles.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import ShopPage from './pages/shopPage/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';


class App extends React.Component {


  unSubscribeAuth = null;
  componentDidMount() {

    const { setCurrentUser } = this.props;

    this.unSubscribeAuth = auth.onAuthStateChanged(async userAuth => {
      console.log(userAuth);
      // this.setState({ currentUser: user })
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {

          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });


      } else {
        setCurrentUser(userAuth)

      }
    })


  }

  componentWillUnmount() {
    this.unSubscribeAuth();
  }

  render() {
    return (
      <div>

        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/SignInAndSignUp" render={() => this.props.currentUser ? (<Redirect to="/" />) : (<SignInAndSignUp />)} />
        </Switch>
      </div >
    );
  }

}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
