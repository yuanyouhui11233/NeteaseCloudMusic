import { Suspense, memo, useEffect } from "react";
import AppHeader from "./components/app-header";
import Footer from "./components/app-footer";
import { useRoutes } from "react-router-dom";
import routes from "./router";
import AppPlayerBar from "./views/player/app-player-bar";
import { useAppDispath } from "./store";
import { fetchCurrentSong, fetchSongLyric } from "./store/module/player";

const App = memo(() => {
  const dispath = useAppDispath();
  useEffect(() => {
    dispath(fetchCurrentSong(191248));
    dispath(fetchSongLyric(191248));
  }, []);
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
      <AppPlayerBar />
    </div>
  );
});

export default App;
