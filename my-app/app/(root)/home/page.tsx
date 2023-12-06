"use client"
import FeaturesPanel from "@/components/FeaturePanel/featuresPanel";
import DashboardPage from "@/components/dashboard/page";
import weatherboard from "@/components/weatherboard/page";

export default function Page() {
  return (
    <>
      <div>
        <FeaturesPanel />
      </div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* <DashboardPage /> */}
        {/* <weatherboard/> */}
      </main>
    </>
  )
}