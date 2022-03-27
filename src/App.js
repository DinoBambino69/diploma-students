import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Navbar} from "./components/Navbar";
import {Main} from './pages/Main/index'
import {SecondPage} from "./pages/SecondPage";

export const App = () => {
  return (
    <>
      <Navbar userName={'Макс'}/>
      <Router>
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route path={'/secondPage'} element={<SecondPage />} />
        </Routes>
      </Router>
    </>
  );
}
