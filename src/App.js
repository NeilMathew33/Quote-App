import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddQuote from './Components/AddQuote';
import ViewAllQuotes from './Components/ViewAllQuotes';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddQuote />} />
      <Route path="/ViewAll" element={<ViewAllQuotes />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
