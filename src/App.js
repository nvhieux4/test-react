
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import ListRouter from "./routers"
import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {
            ListRouter.map(item =>{
              const Page = item.component;
              const Layout = DefaultLayout;
              return (
                <Route
                  key={item.path}
                  path={item.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
              })
          }
        </Routes>
      </Router>
    </div>
  );
}

export default App;
