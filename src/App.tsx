import { Suspense, memo, useEffect } from "react";
import AppHeader from "./components/app-header";
import Footer from "./components/app-footer";
import { useRoutes } from "react-router-dom";
import routes from "./router";
import AppPlayerBar from "./views/player/app-player-bar";
import { useAppDispath, useAppSelector } from "./store";
import { fetchCurrentSong, fetchSongLyric } from "./store/module/player";
import { shallowEqual } from "react-redux";

const App = memo(() => {
  const dispath = useAppDispath();
  const { currentSong } = useAppSelector((state) => {
    return {
      currentSong: state.player.currentSong
    };
  }, shallowEqual);
  console.log(currentSong);
  useEffect(() => {
    const songId = currentSong?.id;
    console.log(songId);
    dispath(fetchCurrentSong(2026812798));
    dispath(fetchSongLyric(songId));
  }, [currentSong?.id]);
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
