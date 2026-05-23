import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import PricingHero from "@/components/pricing/PricingHero"
import CostBreakdown from "@/components/pricing/CostBreakdown"
import SeatTiers from "@/components/pricing/SeatTiers"
import ConsumptionFees from "@/components/pricing/ConsumptionFees"
import OtherFees from "@/components/pricing/OtherFees"
import PricingFinalCTA from "@/components/pricing/PricingFinalCTA"

export const metadata: Metadata = {
  title: "价格说明 · 呼波特 WhoBot",
  description:
    "AI 数字员工收费方案：750/950/1350 元/月/坐席，按月计费 + 按需消耗，定价透明。",
}

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-14 lg:pt-[4.5rem] bg-[#F8F8FC]">
        <PricingHero />
        <CostBreakdown />
        <SeatTiers />
        <ConsumptionFees />
        <OtherFees />
        <PricingFinalCTA />
      </main>
      <Footer />
    </>
  )
}
