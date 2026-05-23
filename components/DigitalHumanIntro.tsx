"use client"

import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Volume2, VolumeX } from "lucide-react"
import IntroLeftPanel from "./intro/IntroLeftPanel"
import IntroSubtitleOverlay from "./intro/IntroSubtitleOverlay"

export default function DigitalHumanIntro() {
  const [visible, setVisible] = useState(true)
  const [isSoundOn, setIsSoundOn] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  // 进入页面时锁定背景滚动，避免开场页期间能滚动正式首页
  useEffect(() => {
    if (!visible) return
    const original = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = original
    }
  }, [visible])

  // 声音开关：开启时从头播，关闭时保持播放但静音
  const handleToggleSound = () => {
    const video = videoRef.current
    if (!video) return

    try {
      if (isSoundOn) {
        video.muted = true
        setIsSoundOn(false)
      } else {
        video.muted = false
        video.volume = 1
        video.currentTime = 0
        const playPromise = video.play()
        if (playPromise && typeof playPromise.then === "function") {
          playPromise.catch((err) => {
            console.warn("Video play() blocked:", err)
          })
        }
        setIsSoundOn(true)
      }
    } catch (err) {
      console.warn("Toggle sound failed:", err)
    }
  }

  // 跳过：暂停视频并隐藏开场页
  const handleSkip = () => {
    const video = videoRef.current
    if (video) {
      try {
        video.pause()
      } catch {
        /* noop */
      }
    }
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="digital-human-intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-40 overflow-hidden bg-[#071B68]"
        >
          {/* 背景柔光，呼应站点浅蓝白主题 */}
          <div className="intro-aurora-bg absolute inset-0 -z-10">
            <div className="intro-aurora-orb intro-aurora-orb-1" />
            <div className="intro-aurora-orb intro-aurora-orb-2" />
            <div className="intro-aurora-orb intro-aurora-orb-3" />
            <div className="intro-aurora-orb intro-aurora-orb-4" />
            <div className="intro-aurora-vignette" />
          </div>

          {/* 左侧信息面板（仅 lg+ 显示） */}
          <IntroLeftPanel />

          {/* 数字人视频：PC 居中偏右，移动端居中缩小；外层包裹用于字幕浮层定位 */}
          <div className="relative h-full w-full flex items-center justify-center md:justify-end md:pr-[12vw] lg:pr-[18vw]">
            <div className="relative flex items-center justify-center h-[60vh] sm:h-[70vh] md:h-[85vh] lg:h-[90vh]">
              <video
                ref={videoRef}
                src="/videos/1.webm"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="h-full w-auto max-w-[90vw] object-contain pointer-events-none select-none"
              />
              {/* 数字人说话浮层卡片 — 强绑定到 videoRef */}
              <IntroSubtitleOverlay videoRef={videoRef} />

              {/* 数字人底部控制条：开启声音 / 跳过 */}
              <motion.div
                initial={{ opacity: 0, x: "-50%", y: 14 }}
                animate={{ opacity: 1, x: "-50%", y: 0 }}
                exit={{ opacity: 0, x: "-50%", y: 8 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-[4%] left-1/2 z-50 flex items-center overflow-hidden rounded-full border border-white/70 bg-white/90 text-[13px] font-medium text-[#2f2f35] shadow-[0_12px_30px_rgba(21,22,72,0.18)] backdrop-blur-xl"
              >
                <button
                  type="button"
                  onClick={handleToggleSound}
                  aria-label={isSoundOn ? "关闭声音" : "开启声音"}
                  className="inline-flex h-[44px] items-center gap-1.5 px-5 transition-colors hover:bg-white/35"
                >
                  {isSoundOn ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                  {isSoundOn ? "关闭声音" : "开启声音"}
                </button>
                <div className="h-5 w-px bg-[#d7d0d0]" />
                <button
                  type="button"
                  onClick={handleSkip}
                  aria-label="跳过开场"
                  className="inline-flex h-[44px] items-center px-5 transition-colors hover:bg-white/35"
                >
                  跳过
                </button>
              </motion.div>
            </div>
          </div>

          <style jsx global>{`
            .intro-aurora-bg {
              background:
                radial-gradient(circle at 6% 6%, rgba(78, 165, 255, 0.88), transparent 34%),
                radial-gradient(circle at 45% 74%, rgba(13, 170, 145, 0.5), transparent 34%),
                radial-gradient(circle at 22% 72%, rgba(46, 113, 205, 0.52), transparent 42%),
                radial-gradient(circle at 88% 42%, rgba(3, 8, 54, 0.92), transparent 40%),
                linear-gradient(135deg, #2B7CE8 0%, #0A45A8 24%, #063080 48%, #02083A 76%, #06155B 100%);
              overflow: hidden;
            }

            .intro-aurora-orb {
              position: absolute;
              border-radius: 9999px;
              filter: blur(86px);
              mix-blend-mode: screen;
              will-change: transform;
            }

            .intro-aurora-orb-1 {
              left: -12vw;
              top: -12vh;
              width: 58vw;
              height: 58vw;
              opacity: 0.62;
              background: radial-gradient(circle, #3B82F6 0%, rgba(59, 130, 246, 0.62) 35%, transparent 70%);
              animation: intro-orb-one 9s ease-in-out infinite;
            }

            .intro-aurora-orb-2 {
              left: 24vw;
              top: 34vh;
              width: 46vw;
              height: 42vw;
              opacity: 0.54;
              background: radial-gradient(circle, #22D3EE 0%, rgba(34, 211, 238, 0.42) 30%, rgba(18, 160, 140, 0.28) 48%, transparent 74%);
              animation: intro-orb-two 10s ease-in-out infinite;
            }

            .intro-aurora-orb-3 {
              right: -14vw;
              top: 4vh;
              width: 52vw;
              height: 52vw;
              opacity: 0.34;
              background: radial-gradient(circle, #050A3F 0%, rgba(10, 16, 82, 0.66) 34%, rgba(99, 102, 241, 0.26) 56%, transparent 76%);
              animation: intro-orb-three 11s ease-in-out infinite;
            }

            .intro-aurora-orb-4 {
              left: 4vw;
              bottom: -26vh;
              width: 70vw;
              height: 38vw;
              opacity: 0.4;
              background: radial-gradient(circle, rgba(165, 94, 210, 0.72) 0%, rgba(103, 232, 249, 0.34) 34%, transparent 72%);
              animation: intro-orb-four 8s ease-in-out infinite;
            }

            .intro-aurora-vignette {
              position: absolute;
              inset: 0;
              background:
                radial-gradient(circle at 44% 48%, transparent 0%, rgba(4, 14, 58, 0.06) 42%, rgba(1, 5, 35, 0.42) 100%),
                linear-gradient(180deg, rgba(3, 9, 44, 0.02), rgba(1, 4, 26, 0.28));
              pointer-events: none;
            }

            @keyframes intro-orb-one {
              0% { transform: translate3d(0, 0, 0) scale(1) rotate(0deg); }
              50% { transform: translate3d(10vw, 7vh, 0) scale(1.12) rotate(16deg); }
              100% { transform: translate3d(2vw, -2vh, 0) scale(1.04) rotate(32deg); }
            }

            @keyframes intro-orb-two {
              0% { transform: translate3d(0, 0, 0) scale(1) rotate(0deg); }
              50% { transform: translate3d(-7vw, -7vh, 0) scale(1.16) rotate(-14deg); }
              100% { transform: translate3d(5vw, 4vh, 0) scale(1.06) rotate(-28deg); }
            }

            @keyframes intro-orb-three {
              0% { transform: translate3d(0, 0, 0) scale(1) rotate(0deg); }
              50% { transform: translate3d(-9vw, 8vh, 0) scale(1.12) rotate(14deg); }
              100% { transform: translate3d(-4vw, -3vh, 0) scale(1.05) rotate(28deg); }
            }

            @keyframes intro-orb-four {
              0% { transform: translate3d(0, 0, 0) scale(1) rotate(0deg); }
              50% { transform: translate3d(8vw, -9vh, 0) scale(1.18) rotate(-12deg); }
              100% { transform: translate3d(-2vw, -4vh, 0) scale(1.08) rotate(-24deg); }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
