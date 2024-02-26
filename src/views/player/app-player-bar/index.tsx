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
import { useAppSelector } from "@/store";
import { formatImgSize, formatTime } from "@/utils/format";
import { getSongUrl } from "@/utils/handle-player";

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

  const currentSong = useAppSelector((state) => {
    return state.player.currentSong;
  });

  useEffect(() => {
    audioRef.current!.src = getSongUrl(currentSong.songs.id);
    setDuration(currentSong?.songs.dt);
  }, [currentSong]);

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
  }

  // 进度条拖拽时change事件
  const DragProgressChange = (value: number) => {
    // 设置是否拖拽中 和 进度条时长
    setIsDraging(true);
    setProgress(value);

    //当前时长在拖拽中根据进度条的变化而变化
    const currTime = (value / 100) * duration;
    setCurrentTime(currTime);
  };

  // mouseup keyup 结束后的回调
  const handleDragChanged = (value: number) => {
    setProgress(value);
    // 获取当前位置时间
    const progressCurrentTime = (value / 100) * duration;

    // 根据拖拽结束后的长度 计算出 拖拽结束后的当前时间
    audioRef.current!.currentTime = progressCurrentTime / 1000;
    setCurrentTime(progressCurrentTime / 1000);

    setIsDraging(false);
  };
  return (
    <AppPlayerBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <BarControl $isPlaying={isPlaying}>
          <button className="sprite_playbar btn prev" title="上一首">
            上一首
          </button>
          <button
            className="sprite_playbar btn play"
            title="播放/暂停"
            onClick={() => handlePlay()}
          >
            播放/暂停
          </button>
          <button className="sprite_playbar btn next" title="下一首">
            下一首
          </button>
        </BarControl>
        <BarPlayerInfo>
          <Link to="/player">
            <div className="bg sprite_playbar">
              <img
                className="image "
                src={formatImgSize(currentSong.songs.al.picUrl, 34, 34)}
                alt=""
              />
            </div>
          </Link>
          <div className="info">
            <div className="song">
              <div className="song-name text">{currentSong.songs.al.name}</div>
              <div className="singer-name text">
                {currentSong.songs.ar[0].name}
              </div>
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
                <div className="current">{formatTime(currentTime)}</div>
                <div className="duration">/ {formatTime(duration)}</div>
              </div>
            </div>
          </div>
        </BarPlayerInfo>
        <BarOperator>
          <div className="left">
            <button className="btn pip_icon"></button>
            <button className="btn sprite_playbar favor"></button>
            <button className="btn sprite_playbar share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="btn sprite_playbar volume"></button>
            <button className="btn sprite_playbar loop"></button>
            <button className="btn sprite_playbar playlist"></button>
          </div>
        </BarOperator>
      </div>
      <audio src="" ref={audioRef} onTimeUpdate={() => timeUpdate()}></audio>
    </AppPlayerBarWrapper>
  );
};

export default memo(AppPlayerBar);
