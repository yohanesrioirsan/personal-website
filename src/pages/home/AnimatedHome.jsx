import Index from "./Index";
import { Route, Routes, useLocation } from "react-router-dom";
import Blog from "../blog/Blog";
import Work from "../work/Work";
import Article from "../blog/Article";

import { AnimatePresence } from "framer-motion";

function AnimatedHome() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/writing" element={<Blog />} />
        <Route path="/work" element={<Work />} />
        <Route path="/writing/:slug" element={<Article />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedHome;
