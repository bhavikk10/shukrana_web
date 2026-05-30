/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Collections from './pages/Collections';
import Product from './pages/Product';
import Exhibitions from './pages/Exhibitions';
import About from './pages/About';
import Success from './pages/Success';
import DesignShowcase from './pages/DesignShowcase';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="collections" element={<Collections />} />
          <Route path="collections/:slug" element={<Product />} />
          <Route path="exhibitions" element={<Exhibitions />} />
          <Route path="about" element={<About />} />
          <Route path="success" element={<Success />} />
          <Route path="design-showcase" element={<DesignShowcase />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
