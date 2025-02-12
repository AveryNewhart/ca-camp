import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";


export default function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}