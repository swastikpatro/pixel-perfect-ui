import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components';
import { ErrorPage } from './pages';
import { NAV_LINKS } from './constants';

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Navbar />

        <Routes>
          {NAV_LINKS.map(({ id, url, Component }) => (
            <Route key={id} path={url} element={<Component />} />
          ))}

          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;

// navbar;
