import Home from './home';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
