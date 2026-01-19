import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import IndexCon from './containers/IndexCon';
import LoginCon from './containers/LoginCon';
import RegCon from './containers/RegCon';
import ListCon from './containers/ListCon';
import InfoCon from './containers/InfoCon';
import ModifyCon from './containers/ModifyCon';

function App() {
  return (<>
    <Routes>
      <Route path="/" element={<IndexCon />}></Route>
      <Route path="/login" element={<LoginCon />}></Route>
      <Route path="/register" element={<RegCon />}></Route>
      <Route path="/list" element={<ListCon />}></Route>
      <Route path="/info/:username" element={<InfoCon />}></Route>
      <Route path="/modify/:username" element={<ModifyCon />}></Route>
    </Routes>
  </>);
}

export default App;
