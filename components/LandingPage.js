import { FeaturesPreview } from "./FeaturesPreview"
import { Header } from "./Header"
import { PricingPlansPreview } from "./PricingPlansPreview"

function LandingPage() {
	
  return (
    <div className="max-w-6xl mx-auto">
        <Header />
        <FeaturesPreview/>
        <PricingPlansPreview />
    </div>
  )
}
export default LandingPage  