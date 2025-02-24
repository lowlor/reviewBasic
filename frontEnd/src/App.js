import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import NewReview from './components/createReviewPage';
import AuthPage from './components/authPage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ReviewPage from './components/reviewPage';
import { GlobalStyles } from './globalStyles';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/CreateReview' element={<NewReview/>}/>
        <Route path='/:reviewName' element={<ReviewPage/>}/> 
        <Route path='/auth' element={<AuthPage/>}/>
      </Routes>
      <GlobalStyles/>
    </Router>

  );
}

export default App;
