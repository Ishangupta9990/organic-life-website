import Image from "next/image"
import { Playfair_Display } from "next/font/google"

const playfair = Playfair_Display({ subsets: ["latin"] })

interface LogoWithTextProps {
  textColor?: string
  size?: "sm" | "md" | "lg"
  showText?: boolean
}

export default function LogoWithText({
  textColor = "text-green-800",
  size = "md",
  showText = true,
}: LogoWithTextProps) {
  const sizes = {
    sm: {
      container: "h-8 w-8",
      text: "text-lg",
    },
    md: {
      container: "h-12 w-12",
      text: "text-xl",
    },
    lg: {
      container: "h-16 w-16",
      text: "text-2xl",
    },
  }

  return (
    <div className="flex items-center">
      <div className={`relative ${sizes[size].container}`}>
        <Image src="/images/new-logo.png" alt="Organic Life Enterprises Logo" fill className="object-contain" />
      </div>
      {showText && (
        <div className="ml-3">
          <h3 className={`font-bold ${sizes[size].text} ${textColor} ${playfair.className}`}>
            ORGANIC LIFE ENTERPRISES
          </h3>
        </div>
      )}
    </div>
  )
}
