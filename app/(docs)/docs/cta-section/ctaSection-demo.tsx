import EnhancedCTASection from "@/components/luminaui/ctaSection"
import { CheckCircle } from "lucide-react"

export default function CTASection() {

  const ctaData = [
    
    {
      icon: <CheckCircle className="text-green-400 w-5 h-5" />,
      text: "Free 30-day trial",
    },
    {
      icon: <CheckCircle className="text-green-400 w-5 h-5" />,
      text: "No credit card required",
    },
    {
      icon: <CheckCircle className="text-green-400 w-5 h-5" />,
      text: "24/7 premium support",
    },
  
  ]

  return <EnhancedCTASection ctaData={ctaData} />

}



