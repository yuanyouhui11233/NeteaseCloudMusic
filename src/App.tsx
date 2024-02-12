import { Suspense, memo } from "react";
import Header from "./views/header";
import Footer from "./views/footer";
import { useRoutes } from "react-router-dom";
import routes from "./router";

const App = memo(() => {
  return (
    <div className="app">
      <div className="header">
        <Header />
      </div>
      <Suspense fallback="">
        <div className="content">{useRoutes(routes)}</div>
      </Suspense>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
});

export default App;
