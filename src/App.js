import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalProvider, GlobalContext } from './context/GlobalContex'
import Header from './assets/Header';
import Navigate from './assets/Navigate';
import Home from './components/Home';
import About from './components/About';
import Courses from './components/Courses';
import Services from './components/Services';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route
              path="/courses"
              element={
                <PrivateRoute>
                  <Courses />
                </PrivateRoute>
              }
            />
            <Route
              path="/login"
              element={
                <LoginPrivateRoute>
                  <Login />
                </LoginPrivateRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <LoginPrivateRoute>
                  <Signup />
                </LoginPrivateRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </GlobalProvider>
  );
};

const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useContext(GlobalContext);

  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

const LoginPrivateRoute = ({ children }) => {
  const { isLoggedIn } = useContext(GlobalContext);

  return isLoggedIn ? <Navigate to="/" replace /> : children;
};

export default App;
