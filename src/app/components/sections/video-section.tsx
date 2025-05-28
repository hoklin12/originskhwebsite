

'use client';
import { useRef, useState, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import React from 'react';

interface VideoSectionProps {
  videoSrc: string;
  videoType?: string;
  id?: string;
  className?: string;
  sectionClassName?: string;
  videoClassName?: string;
  minHeight?: string;
  backgroundColor?: string;
  paddingTop?: string;
  marginBottom?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  showControls?: boolean;
  children?: React.ReactNode;
  showTopSpacer?: boolean;
  topSpacerClassName?: string;
}

const VideoSection = React.forwardRef<HTMLElement, VideoSectionProps>(
  (
    {
      videoSrc,
      videoType = 'video/mp4',
      id = 'video-section',
      className = '',
      sectionClassName = '',
      videoClassName = '',
      minHeight = 'min-h-screen',
      backgroundColor = 'bg-white',
      marginBottom = 'mb-20',
      autoPlay = false,
      loop = false,
      muted = false,
      playsInline = true,
      showControls = true,
      children,
      showTopSpacer = true,
      topSpacerClassName = 'w-full flex justify-center items-center mb-8',
    },
    ref
  ) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const progressBarRef = useRef<HTMLDivElement>(null);

    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState<number | null>(null);
    const [showControlsOverlay, setShowControlsOverlay] = useState(true);

    const formatTime = (time: number): string => {
      if (isNaN(time) || time < 0 || time === Infinity) return '0:00';
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60).toString().padStart(2, '0');
      return `${minutes}:${seconds}`;
    };

    const togglePlay = () => {
      if (!videoRef.current) return;

      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch((err) =>
          console.error('Playback failed:', err)
        );
      }
      setIsPlaying(!isPlaying);
    };

    const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!progressBarRef.current || !videoRef.current || duration === null) return;

      const rect = progressBarRef.current.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      const newTime = pos * duration;

      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    };

    useEffect(() => {
      const video = videoRef.current;
      if (!video) return;

      const handleLoadedMetadata = () => {
        console.log('Metadata loaded:', video.duration);
        if (!isNaN(video.duration)) {
          setDuration(video.duration);
        }
      };

      const handleTimeUpdate = () => {
        setCurrentTime(video.currentTime);
      };

      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);

      video.addEventListener('loadedmetadata', handleLoadedMetadata);
      video.addEventListener('timeupdate', handleTimeUpdate);
      video.addEventListener('play', handlePlay);
      video.addEventListener('pause', handlePause);

      // Fallback retry mechanism
      let retryCount = 0;
      const retryLoad = setInterval(() => {
        if (!isNaN(video.duration) && video.duration > 0) {
          setDuration(video.duration);
          clearInterval(retryLoad);
        } else if (retryCount++ > 10) {
          console.warn('Failed to load duration after retries');
          clearInterval(retryLoad);
        }
      }, 1000);

      return () => {
        video.removeEventListener('loadedmetadata', handleLoadedMetadata);
        video.removeEventListener('timeupdate', handleTimeUpdate);
        video.removeEventListener('play', handlePlay);
        video.removeEventListener('pause', handlePause);
        clearInterval(retryLoad);
      };
    }, []);

    useEffect(() => {
      const progressBar = progressBarRef.current;
      const video = videoRef.current;
      if (!progressBar || !video || duration === null) return;

      const handleWheel = (e: WheelEvent) => {
        e.preventDefault();
        const delta = e.deltaY;
        const timeChange = (delta / 100) * (duration / 100);
        const newTime = Math.min(Math.max(video.currentTime + timeChange, 0), duration);
        video.currentTime = newTime;
        setCurrentTime(newTime);
      };

      progressBar.addEventListener('wheel', handleWheel, { passive: false });
      return () => {
        progressBar.removeEventListener('wheel', handleWheel);
      };
    }, [duration]);

    return (
      <section
        ref={ref}
        id={id}
        className={`${minHeight} ${backgroundColor} m-0 p-0 ${sectionClassName} ${className}`}
      >
        {showTopSpacer && <div className={topSpacerClassName}></div>}

        <div
          className={`w-full relative group ${marginBottom}`}
          onMouseEnter={() => setShowControlsOverlay(true)}
          onMouseLeave={() => setShowControlsOverlay(false)}
        >
          <video
            ref={videoRef}
            className={`w-full h-auto object-cover cursor-pointer ${videoClassName}`}
            autoPlay={autoPlay}
            loop={loop}
            muted={muted}
            playsInline={playsInline}
            onClick={togglePlay}
            preload="auto"
            controlsList="nodownload noplaybackrate nofullscreen"
          >
            <source src={videoSrc} type={videoType} />
            Your browser does not support the video tag.
          </video>

          {showControls && (
            <div
              className={`absolute inset-0 transition-opacity duration-300 ${
                showControlsOverlay ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* Center Play/Pause Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePlay();
                  }}
                  className="bg-black/50 hover:bg-black/70 text-white rounded-full p-4 transition-all duration-200"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? (
                    <Pause className="w-8 h-8" />
                  ) : (
                    <Play className="w-8 h-8 ml-1" />
                  )}
                </button>
              </div>

              {/* Bottom Controls */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                {/* Progress Bar */}
                <div
                  ref={progressBarRef}
                  className="h-1 bg-gray-600 rounded-lg mb-2 cursor-pointer"
                  onClick={handleProgressClick}
                >
                  <div
                    className="h-full bg-blue-500 rounded-lg"
                    style={{
                      width: `${
                        duration !== null && duration > 0
                          ? (currentTime / duration) * 100
                          : 0
                      }%`,
                    }}
                  ></div>
                </div>

                {/* Time Info & Play Button */}
                <div className="flex items-center justify-between text-white text-sm">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePlay();
                    }}
                    className="p-1 hover:bg-gray-700 rounded"
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  </button>
                  <span>
                    {formatTime(currentTime)} / {duration !== null ? formatTime(duration) : '0:00'}
                  </span>
                </div>
              </div>
            </div>
          )}

          {children}
        </div>
      </section>
    );
  }
);

VideoSection.displayName = 'VideoSection';

export default VideoSection;