import './App.css';
import styled from 'styled-components';
import { AccountBox } from './components/accountBox';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Home } from './components/accountBox/Home';
import { LoginForm } from './components/accountBox/loginForm';
import { SignupForm } from './components/accountBox/signupForm';
import { ResetPassword } from './components/accountBox/resetPassword';

const AppContainer = styled.div`
  width:100%;
  height:100%;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


`;


function App() {
   return (
    
    
     
         <AppContainer>
           <Router>
             <Route path='/home' exact component={Home}/>
             <Route path = "/" exact component={AccountBox}  />
             <Route path = "/auth/resetPassword" exact component = {ResetPassword} />
            
           </Router>
       
          
        </AppContainer>
     
   
      
      
  
       
  ) 
 
}

export default App;
