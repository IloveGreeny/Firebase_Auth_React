import Navbar from './Components/Navbar/Navbar';
import Protected from './Components/Protected/Protected';
import Account from './Components/Account/Account';
import Home from './Components/Home/Home';
import Signin from './Components/SignIn/Signin';
import { AuthContextProvider } from './Context/AuthContext';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route
            path='/account'
            element={
              <Protected>
                <Account />
              </Protected>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}


