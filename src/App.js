import { Routes, Route } from 'react-router-dom'

import Home from './pages/home'
import Search from './pages/search'
import NotFound from './pages/notfound'

function App() {
  return (
   <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/search" element={<Search />} />
     <Route element={<NotFound />} />
   </Routes>
  );
}

export default App;
