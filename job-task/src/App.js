import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import UserPage from './components/UserPage';

const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <main className='py-3'>
          <div className='container'>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/user/:id' element={<UserPage />} />
            </Routes>
          </div>
        </main>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
};

export default App;
