"use client"

import { motion } from "framer-motion"
import { Phone, Sparkles } from "lucide-react"
import HeroVoicePanel from "./HeroVoicePanel"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export default function HeroSection() {

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden pt-24 lg:pt-28 pb-12 lg:pb-16"
      style={{ background: "#0A0E27" }}
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <HeroAuroraBlobs />
      </div>

      <div className="relative z-10 max-w-[75rem] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="grid min-h-[calc(100vh-7rem)] grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-6 lg:space-y-7 pt-4 text-left">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 shadow-soft"
            >
              <Sparkles className="w-4 h-4 text-[#22D3EE]" />
              <span className="text-xs font-medium text-white/70">
                基于大模型的 AI 电话数字员工
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0.08 }}
              className="text-[2.75rem] sm:text-[3.5rem] lg:text-[5rem] font-bold leading-[1.1] tracking-tight text-white"
            >
              不要招聘了，
              <br className="hidden sm:block" />
              直接
              <span
                className="text-white"
              >
                雇佣
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0.16 }}
              className="max-w-2xl text-[1.125rem] lg:text-[1.25rem] text-white/65 leading-relaxed"
            >
              像真人一样对话、判断意向、推进业务的 AI 电话数字员工
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0.24 }}
              className="max-w-xl text-[0.95rem] lg:text-[1rem] text-white/55 leading-relaxed"
            >
              WhoBOT 帮企业批量触达客户，自动完成意向识别、通话摘要、客户标签和后续跟进，让销售只对接已经预热的高意向客户。
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0.32 }}
              className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 pt-2"
            >
              <a
                href="tel:01052107595"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-white text-[0.95rem] font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110"
                style={{
                  background: "linear-gradient(135deg, #7B4FFF 0%, #4F8FFF 100%)",
                  boxShadow: "0 10px 30px rgba(123, 79, 255, 0.35)",
                }}
              >
                <Sparkles className="w-4 h-4" />
                立即免费体验
              </a>
              <a
                href="tel:01052107595"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-white/10 border border-white/20 text-white text-[0.95rem] font-medium backdrop-blur-md transition-all duration-200 hover:bg-white/15 hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4 text-[#22D3EE]" />
                拨打体验：010-52107595
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <HeroVoicePanel />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============= B 端氛围层：柔和呼吸光晕，靠近中间更亮 ============= */
function HeroAuroraBlobs() {
  return (
    <div className="hero-aurora absolute inset-0">
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />
      <div className="hero-blob hero-blob-3" />
      <div className="hero-blob hero-blob-4" />
      <svg className="hero-noise" aria-hidden>
        <filter id="hero-fractal-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.78"
            numOctaves="4"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-fractal-noise)" />
      </svg>
      <style jsx>{`
        .hero-aurora {
          overflow: hidden;
          background:
            radial-gradient(circle at 50% 18%, rgba(255, 255, 255, 0.08), transparent 28%),
            linear-gradient(180deg, rgba(10, 14, 39, 0) 0%, rgba(4, 7, 24, 0.48) 100%);
        }
        .hero-blob {
          position: absolute;
          border-radius: 9999px;
          filter: blur(60px);
          mix-blend-mode: screen;
          will-change: transform, opacity;
          pointer-events: none;
        }
        .hero-blob-1 {
          left: -14vw;
          top: -18vh;
          width: 62vw;
          height: 62vw;
          opacity: 0.62;
          background: radial-gradient(
            circle,
            #2563EB 0%,
            rgba(37, 99, 235, 0.55) 36%,
            rgba(37, 99, 235, 0) 72%
          );
          animation: hero-aurora-1 24s ease-in-out infinite;
        }
        .hero-blob-2 {
          left: 24vw;
          top: 36vh;
          width: 54vw;
          height: 44vw;
          opacity: 0.52;
          background: radial-gradient(
            circle,
            #06B6D4 0%,
            rgba(6, 182, 212, 0.46) 34%,
            rgba(6, 182, 212, 0) 74%
          );
          animation: hero-aurora-2 30s ease-in-out infinite;
        }
        .hero-blob-3 {
          right: -16vw;
          top: -8vh;
          width: 58vw;
          height: 58vw;
          opacity: 0.56;
          background: radial-gradient(
            circle,
            #6366F1 0%,
            rgba(99, 102, 241, 0.5) 35%,
            rgba(99, 102, 241, 0) 74%
          );
          animation: hero-aurora-3 26s ease-in-out infinite;
        }
        .hero-blob-4 {
          left: 42vw;
          bottom: -22vh;
          width: 68vw;
          height: 44vw;
          opacity: 0.5;
          background: radial-gradient(
            circle,
            #22D3EE 0%,
            rgba(34, 211, 238, 0.44) 30%,
            rgba(34, 211, 238, 0) 72%
          );
          animation: hero-aurora-4 22s ease-in-out infinite;
        }
        .hero-noise {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          opacity: 0.08;
          mix-blend-mode: overlay;
          pointer-events: none;
        }
        @keyframes hero-aurora-1 {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50%      { transform: translate3d(9vw, 8vh, 0) scale(1.12); }
        }
        @keyframes hero-aurora-2 {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50%      { transform: translate3d(-8vw, -7vh, 0) scale(1.14); }
        }
        @keyframes hero-aurora-3 {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50%      { transform: translate3d(-10vw, 9vh, 0) scale(1.1); }
        }
        @keyframes hero-aurora-4 {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50%      { transform: translate3d(-7vw, -8vh, 0) scale(1.16); }
        }
      `}</style>
    </div>
  )
}

/* ============= 旧：横向正弦波，已不使用 ============= */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function HeroSineWaves() {
  // 7 条波形，振幅 / 波长 / 垂直位置 / 动画时长 / 起始相位偏移各不同
  const lines = [
    { amp: 14, len: 320, yPct: 22, dur: 18, delay: -2 },
    { amp: 22, len: 400, yPct: 34, dur: 24, delay: -7 },
    { amp: 18, len: 280, yPct: 46, dur: 16, delay: -3 },
    { amp: 28, len: 480, yPct: 56, dur: 28, delay: -11 },
    { amp: 16, len: 360, yPct: 66, dur: 20, delay: -5 },
    { amp: 24, len: 420, yPct: 78, dur: 26, delay: -9 },
    { amp: 12, len: 240, yPct: 88, dur: 14, delay: -1 },
  ]

  // 拼接一条横跨 totalWidth 的连续正弦近似（用三次贝塞尔做半波拟合）
  const buildPath = (amp: number, len: number, baseY: number, totalWidth: number) => {
    const segments = Math.ceil(totalWidth / len)
    let d = `M 0 ${baseY}`
    for (let i = 0; i < segments; i++) {
      const x1 = i * len + len / 4
      const y1 = baseY - amp
      const x2 = i * len + (len * 3) / 4
      const y2 = baseY + amp
      const x3 = (i + 1) * len
      d += ` C ${x1} ${y1}, ${x2} ${y2}, ${x3} ${baseY}`
    }
    return d
  }

  const totalWidth = 4000
  const viewH = 800

  return (
    <div className="absolute inset-0">
      {lines.map((line, i) => (
        <svg
          key={i}
          className="hero-wave-svg absolute left-0"
          viewBox={`0 0 ${totalWidth} ${viewH}`}
          preserveAspectRatio="none"
          style={{
            top: `${line.yPct}%`,
            width: "200%",
            height: "120px",
            transform: "translateY(-50%)",
            animation: `hero-wave-flow ${line.dur}s linear infinite`,
            animationDelay: `${line.delay}s`,
            willChange: "transform",
          }}
        >
          <path
            d={buildPath(line.amp, line.len, viewH / 2, totalWidth)}
            stroke="rgba(120, 80, 255, 0.4)"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      ))}
      <style jsx>{`
        @keyframes hero-wave-flow {
          from {
            transform: translate3d(0, -50%, 0);
          }
          to {
            transform: translate3d(-50%, -50%, 0);
          }
        }
      `}</style>
    </div>
  )
}
