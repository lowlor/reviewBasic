import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import NewReview from './components/createReviewPage';
import AuthPage from './components/authPage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ReviewPage from './components/reviewPage';
import { GlobalStyles } from './globalStyles';
import React, { useEffect, useState } from 'react';
import { reAuth } from './utils/sessionAuth';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [update, setUpdate] = useState(false);
  useEffect(()=>{
    console.log('useEffect in app');
    
    const auth = async()=>{
                return await reAuth();
            }
    const check = async ()=>{
      const checkAuth = await auth();

      if(checkAuth.status){
        setIsLogin(true);
      }
    }
    check()
    setUpdate(false);
  },[update,isLogin])

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home setIsLogin = {setIsLogin} isLogin = {isLogin}/>}/>
        <Route path='/CreateReview' element={<NewReview setIsLogin = {setIsLogin} isLogin = {isLogin}/>}/>
        <Route path='/:reviewName' element={<ReviewPage setIsLogin = {setIsLogin} isLogin = {isLogin}/>}/> 
        <Route path='/auth' element={<AuthPage setUpdate = {setUpdate}/>}/>
      </Routes>
      <GlobalStyles/>
    </Router>

  );
}

export default App;
