import { memo, useEffect, useRef, useState } from "react";
import type { ReactNode, FC } from "react";
import {
  AppPlayerBarWrapper,
  BarControl,
  BarOperator,
  BarPlayerInfo
} from "./style";
import { Link } from "react-router-dom";
import { Slider } from "antd";
import { useAppDispath, useAppSelector } from "@/store";
import { formatImgSize, formatTime } from "@/utils/format";
import { getSongUrl } from "@/utils/handle-player";
import { shallowEqual } from "react-redux";
import {
  changeLyricIndexAction,
  changePlayModeAction,
  fetchChangeMusic
} from "@/store/module/player";

interface Iprops {
  children?: ReactNode;
}
/**
 * 整个组件使用的是毫秒为单位
 * playbar 播放逻辑 分层结构管理播放数据
 * 其他页面播放歌曲时，把要播放的歌曲保存到 redux中
 * playbar组件 获取redux 的 currentSong 数据
 */
const AppPlayerBar: FC<Iprops> = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isDraging, setIsDraging] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const [volumeIsHidden, setVolumeIsHidden] = useState(true);
  const [vBarLength, setVBarLength] = useState(80);

  const dispath = useAppDispath();

  const {
    currentSong,
    lyricSong: lyrics,
    lyricIndex,
    playList,
    playMode
  } = useAppSelector(
    (state) => ({
      currentSong: state.player.currentSong,
      lyricSong: state.player.lyricSong,
      lyricIndex: state.player.lyricIndex,
      playList: state.player.playList,
      playMode: state.player.playMode
    }),
    shallowEqual
  );
  useEffect(() => {
    audioRef.current!.src = getSongUrl(currentSong?.id);
    setDuration(currentSong?.dt);
  }, [currentSong]);

  // 监听currentTime和duration是否相近
  useEffect(() => {
    if (Math.abs(currentTime - duration) < 1000) {
      console.log("结束");

      // audioRef.current!.src = "";
    }
  }, [currentTime, duration]);
  // 播放/暂停
  function handlePlay() {
    setIsPlaying(!isPlaying);
    // 歌曲总时长
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play().catch(() => setIsPlaying(false));
    }
  }

  // 播放器 进度条处理
  function timeUpdate() {
    const currentTime = audioRef.current!.currentTime * 1000;
    // 播放器的监听回调也在设置 进度条长度和 当前播放时间。 拖拽时会冲突
    if (!isDraging) {
      // 计算进度条进度
      const progress = (currentTime / duration) * 100;
      setProgress(progress);
      setCurrentTime(currentTime);
    }

    // 根据进度条当前时间进行匹配歌词
    let index = lyrics.length - 1;
    for (let i = 0; i < lyrics.length; i++) {
      const lyric = lyrics[i];
      if (lyric.time > currentTime) {
        index = i - 1;
        break;
      }
    }

    // 匹配歌词的索引可能其他组件也要使用，存到redux中 (频繁调用dispath - 待优化)
    if (lyricIndex === index) return; // 慢一个index
    dispath(changeLyricIndexAction(index));
    console.log(lyrics[lyricIndex + 1]);
  }

  // 进度条拖拽时change事件
  const DragProgressChange = (value: number) => {
    // 设置是否拖拽中 和 进度条时长
    setIsDraging(true);
    setProgress(value);

    // 播放器音乐列表为0时，只展示ui交互，不设置currentTime/duration
    if (currentTime !== 0) {
      //当前时长在拖拽中根据进度条的变化而变化
      const currTime = (value / 100) * duration;
      setCurrentTime(currTime);
    }
  };

  // mouseup keyup 结束后的回调
  const handleDragChanged = (value: number) => {
    setProgress(value);
    // 获取当前位置时间
    const progressCurrentTime = (value / 100) * duration;

    // 根据拖拽结束后的长度 计算出 拖拽结束后的当前时间
    if (currentTime !== 0) {
      audioRef.current!.currentTime = progressCurrentTime / 1000;
      setCurrentTime(progressCurrentTime / 1000);
    }

    setIsDraging(false);
  };
  const handleRouteJump = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    console.log(currentSong);
  };
  // 音量条显示/隐藏
  const volumeBarIsHidden = () => {
    setVolumeIsHidden(!volumeIsHidden);
  };
  // 处理音量条长度
  const handleVBarLength = () => {
    // setVBarLength()
  };
  // 切换歌曲
  const handleChangeMusic = (isNext: boolean) => {
    dispath(fetchChangeMusic(isNext));
    if (isPlaying) {
      console.log("true", audioRef);
      audioRef.current?.play();
    }
    setIsPlaying(false);
  };
  // 切换播放模式
  const checkPlayMode = () => {
    let index = playMode + 1;
    if (index >= 3) index = 0;
    dispath(changePlayModeAction(index));
  };
  const handleTimeEnded = () => {
    console.log("end");
    if (playMode === 2) {
      audioRef.current!.currentTime = 0;
      audioRef.current?.play();
    }
  };
  return (
    <AppPlayerBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <BarControl $isPlaying={isPlaying}>
          <button
            className="sprite_playbar btn prev"
            title="上一首"
            onClick={() => handleChangeMusic(false)}
          >
            上一首
          </button>
          <button
            className="sprite_playbar btn play"
            title="播放/暂停"
            onClick={() => handlePlay()}
          >
            播放/暂停
          </button>
          <button
            className="sprite_playbar btn next"
            title="下一首"
            onClick={() => handleChangeMusic(true)}
          >
            下一首
          </button>
        </BarControl>
        <BarPlayerInfo>
          <Link to="/player" onClick={handleRouteJump}>
            <div className="bg sprite_playbar">
              <img
                className="image "
                src={formatImgSize(currentSong?.al?.picUrl, 34, 34)}
                alt=""
              />
            </div>
          </Link>
          <div className="info">
            <div className="song">
              <div className="song-name text">{currentSong?.al.name}</div>
              <div className="singer-name text">{currentSong?.ar[0].name}</div>
            </div>
            <div className="progress">
              <Slider
                value={progress}
                tooltip={{ formatter: null }}
                step={0.5}
                onChange={DragProgressChange}
                onChangeComplete={handleDragChanged}
              />
              <div className="time">
                <div className="current">
                  {currentTime !== 0 ? formatTime(currentTime) : "00:00"}
                </div>
                <div className="duration">
                  / {duration ? formatTime(duration) : "00:00"}
                </div>
              </div>
            </div>
          </div>
        </BarPlayerInfo>
        <BarOperator $playMode={playMode}>
          <div className="left">
            <button className="btn pip_icon"></button>
            <button className="btn sprite_playbar favor"></button>
            <button className="btn sprite_playbar share"></button>
          </div>
          <div className="right sprite_playbar">
            <div
              className="volume_bar"
              style={{ display: volumeIsHidden ? "none" : "block" }}
            >
              <div className="bar_bg sprite_playbar" />
              <div className="vbg">
                <div className="current"></div>
                <div
                  onClick={handleVBarLength}
                  style={{ top: `${vBarLength}px` }}
                  className="circle sprite_icon"
                ></div>
              </div>
            </div>
            <div className="ctrl">
              <button
                className="btn sprite_playbar volume"
                onClick={volumeBarIsHidden}
              ></button>
              <button
                className="btn sprite_playbar loop"
                onClick={checkPlayMode}
              ></button>
              <button className="btn sprite_playbar playlist">
                {playList.length}
              </button>
            </div>
          </div>
        </BarOperator>
      </div>
      <audio
        ref={audioRef}
        onTimeUpdate={() => timeUpdate()}
        onEnded={handleTimeEnded}
      ></audio>
    </AppPlayerBarWrapper>
  );
};

export default memo(AppPlayerBar);
