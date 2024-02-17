import { Suspense, memo } from "react";
import AppHeader from "./components/app-header";
import Footer from "./components/app-footer";
import { useRoutes } from "react-router-dom";
import routes from "./router";

const App = memo(() => {
  return (
    <div className="app">
      <div className="header">
        <AppHeader />
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
