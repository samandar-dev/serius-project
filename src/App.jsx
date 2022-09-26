import HomePage from './companents/HomePage';
import { Route, Routes } from 'react-router-dom';
import NotFound from './companents/NotFound/NotFound';
import './App.scss';
import Navbar from './companents/Navbar/Navbar';

function App() {
  return (
    <>
      <section className='serius'>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </div>
      </section>
    </>
  );
}

export default App;
