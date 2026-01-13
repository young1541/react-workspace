import { Route, Routes } from 'react-router-dom';
import './App.css';
import ReduxCon from './redux-basic/ReduxCon';
import IndexPage from './pages/IndexPage';
import RegPage from './pages/RegPage';
import ListPage from './pages/ListPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (<>
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/list" element={<ListPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegPage />} />
    </Routes>

    {/* <ReduxCon /> */}
  </>);
}
export default App;