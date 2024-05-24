import Index from "./Index";
import { Route, Routes, useLocation } from "react-router-dom";
import Blog from "../blog/Blog";

import { AnimatePresence } from "framer-motion";

function AnimatedHome() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/writing" element={<Blog />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedHome;
