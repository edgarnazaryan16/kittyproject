import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MyRoute from './components/Routing';

function App() {
  return (
    <BrowserRouter>
      <MyRoute />
    </BrowserRouter>
  );
}

export default App;
