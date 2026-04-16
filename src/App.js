import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddQuote from './Components/AddQuote';
import ViewAllQuotes from './Components/ViewAllQuotes';
import Login from './Components/Login';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/Add" element={<AddQuote />} />
      <Route path="/ViewAll" element={<ViewAllQuotes />} />
      <Route path="/" element={<Login />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
