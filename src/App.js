import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormComponent from './components/form.jsx';
import AcknowledgeComponent from './components/Acknowledge.jsx';
import Nav from './components/Nav.jsx';
import Result from './components/result.jsx';

const App = () => {
  
  return (
    <Router>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<FormComponent/>} />
        <Route path="/acknowledge" element={<AcknowledgeComponent />} />
        <Route path="/displayResponse" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
