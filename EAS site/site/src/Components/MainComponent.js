import React, {useEffect, useState} from 'react';
import Home from './HomeComponent';
import Switchboard from './SwitchBoardComponent';
import BusinessRegister from './BusinessRegisterComponent';
import Eas from './EasComponent';
import Records from './RecordComponent';
import ReferenceGuide from './ReferenceGuide';
import Header from './HeaderComponent';
//import Footer from './FooterComponent';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { getSearch, responseSearch, getOldIct, emailSearch, getOldEas, adminData, getRecord, getData, saveRecord, getBusinessISIC} from '../Util/ActionCreators';
import { UserContext } from "../Util/UserProvider"

const Main = (props)=> {
    const [ state, dispatch ] = React.useContext(UserContext) //Global state set up in easReducer
    const [showLogin, setShowLogin] = useState(true);
    const [showSearch, setShowSearch] = useState(false);

    useEffect(()=>{ //Check if user is already logged in
        let checkUserType = require('../Util/CheckUserType').default;
        const user = localStorage.getItem("user");
        if (user) {
            dispatch({type: 'SET_USER', payload: user})
            dispatch({type: 'SET_USERTYPE', payload: checkUserType(user)})
            console.log(state.businesses)
    }
    }, [])

    useEffect( ()=> {   //Set user type after login
        switch (state.userType){
            case 'User':
            setShowLogin(false)
            emailSearch(state.user, dispatch)
        break;
            case 'Admin':
            setShowLogin(false)
            setShowSearch(true)

            getRecord('refs',dispatch)
            getBusinessISIC(dispatch)
        }
    }, [state.userType])
    
    useEffect( ()=> { //Load user data after login
        console.log(state.businesses)
       if (state.businesses) {
        getRecord(state.businesses[0].ReferenceNumber, dispatch)
        getOldIct(state.businesses[0].ReferenceNumber, dispatch)
        getOldEas(state.businesses[0].ReferenceNumber, dispatch)
       }
    }, [state.businesses])

    const handleSearch = ()=> {
        dispatch({type:'HIT_SEARCH'});
    }
    console.log(state)
    return (
        <div>
            <Header search={getSearch} showLogin={showLogin} showSearch={showSearch}/>
            
            <Switch location={props.location}>
            <Route path='/home' component={()=> <Home userType={state.userType}/>} />
            <Route exact path='/businessreg' component={() => <BusinessRegister/>} />
            <Route path='/switchboard' component={() => <Switchboard search={responseSearch}/> }/>
            <Route exact path='/refGuide' component={ReferenceGuide}/>
            <Route exact path='/eas' component={()=> <Eas /> } />
            <Route exact path='/eas/record' component={()=> <Records business={state.businesses[0]} saveRecord={saveRecord} />} /> 
              <Redirect to="/home" />
            </Switch>
        </div>
    )
}

export default withRouter(Main);
