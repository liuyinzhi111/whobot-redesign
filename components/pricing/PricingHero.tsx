import { Share2 } from "lucide-react"

export default function PricingHero() {
  return (
    <section className="relative w-full pb-12 lg:pb-20 bg-[#F8F8FC] overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 right-0 h-[43.75rem] overflow-hidden z-0">
        <div className="absolute inset-0 bg-[#f0f4fb]" />
        <div
          className="absolute blur-[280px] opacity-50"
          style={{
            background:
              "linear-gradient(145deg, #79e9ff 0%, #a8d4ff 35%, #cdebff 70%)",
            left: "-10%",
            top: "-25%",
            width: "120%",
            height: "120%",
            borderRadius: "40% 60% 55% 45% / 50% 40% 60% 50%",
            transform: "rotate(-15deg)",
          }}
        />
        <div
          className="absolute blur-[240px] opacity-30"
          style={{
            background:
              "linear-gradient(160deg, #b8a5ff 0%, #c9b8ff 40%, #e0d6ff 100%)",
            left: "10%",
            top: "-10%",
            width: "85%",
            height: "90%",
            borderRadius: "55% 45% 50% 50% / 45% 55% 45% 55%",
            transform: "rotate(10deg)",
          }}
        />
        <div
          className="absolute blur-[180px] opacity-[0.35]"
          style={{
            background:
              "linear-gradient(130deg, #79d4ff 0%, #b8e4ff 50%, transparent 100%)",
            left: "0%",
            top: "-10%",
            width: "100%",
            height: "70%",
            borderRadius: "80% 20% 60% 40% / 70% 30% 70% 30%",
            transform: "rotate(-25deg)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(240,244,251,0) 0%, rgba(248,248,252,0.3) 60%, rgba(248,248,252,0.85) 80%, rgba(248,248,252,1) 95%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[75rem] mx-auto flex flex-col items-center px-4 sm:px-8 md:px-12 lg:px-16 pt-28 sm:pt-36">
        <div className="text-center w-full max-w-[75rem]">
          <div className="relative z-20 mb-3 sm:mb-8">
            <h1 className="text-[7vw] sm:text-[2.5rem] font-bold text-[#1A1A1A] tracking-wide sm:whitespace-nowrap">
              数字员工收费方案
            </h1>
            <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2">
              <button className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full border border-[#266FE8] text-[#266FE8] text-[0.9375rem] font-medium hover:bg-blue-50 transition-colors">
                <Share2 className="w-4 h-4" />
                分享
              </button>
            </div>
          </div>
          <p className="text-[0.875rem] sm:text-[1rem] text-[#555555] leading-relaxed mb-6 sm:mb-10">
            <span className="text-blue-600 font-medium">
              官网雇佣的员工 0 元定制费，其它定制需求，收取 2000-5000 元不等
            </span>
            。
          </p>
        </div>
      </div>
    </section>
  )
}
