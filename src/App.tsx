import { memo } from "react";
import Header from "./views/Header";
import Footer from "./views/Footer";
import { useRoutes } from "react-router-dom";
import routes from "./router";

const App = memo(() => {
  return (
    <div className="app">
      <div className="header">
        <Header />
      </div>
      <div className="content">{useRoutes(routes)}</div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
});

export default App;
