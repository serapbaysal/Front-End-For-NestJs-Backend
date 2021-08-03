import './App.css';
import styled from 'styled-components';
import { AccountBox } from './components/accountBox';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Home } from './components/accountBox/Home';
import { LoginForm } from './components/accountBox/loginForm';
import { SignupForm } from './components/accountBox/signupForm';

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
            
           </Router>
       
          
        </AppContainer>
     
   
      
      
  
       
  ) 
 
}

export default App;
