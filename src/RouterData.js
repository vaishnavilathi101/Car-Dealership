import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import App from "./App";


function RouterData() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<App />} />

      </Routes>
    </Router>
  )
}
export default RouterData;
