import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import DefaultLayout from "./layouts/DefaultLayout";
import Info from "./pages/Info";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/info"
            element={
              <DefaultLayout>
                <Info />
              </DefaultLayout>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
