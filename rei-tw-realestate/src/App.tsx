import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout';
import Home from './pages/Home';
import Terms from './pages/Terms';
import Plans from './pages/Plans';
import Flow from './pages/Flow';
import QA from './pages/QA';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/flow" element={<Flow />} />
          <Route path="/qa" element={<QA />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
