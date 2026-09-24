import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ChapterReader } from './pages/ChapterReader';
import { NotFound } from './pages/NotFound';
import { SoloFooter } from './pages/SoloFooter';
import PrintBook from './pages/PrintBook';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/capitulo/:chapterId" element={<ChapterReader />} />
        <Route path="/solo-footer" element={<SoloFooter />} />
        <Route path="/print-libro" element={<PrintBook />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}