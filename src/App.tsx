import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from 'layout/Navbar';
import Page1 from 'components/Page1';
import Page2 from 'components/Page2';
import Page3 from 'components/Page3';
import Page4 from 'components/Page4';
import Page5 from 'components/Page5';

function App() {
  return (
    <BrowserRouter >
      <Navbar />
      <Routes>
        <Route path="/pg1" element={<Page1 />} />
        <Route path="/pg2"><Route path=":movieId" element={<Page2 />} /></Route>
        <Route path="/pg3" element={<Page3 />} />
        <Route path="/pg4" element={<Page4 />} />
        <Route path="/pg5" element={<Page5 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;