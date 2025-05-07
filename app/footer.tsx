import { Mail, Phone } from "lucide-react"

import LogoWithText from "@/components/logo-with-text"

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <LogoWithText textColor="text-white" size="lg" />
          </div>
          <div className="flex flex-col items-center md:items-end">
            <p className="text-green-200 mb-2">Good for nature Good for You</p>
            <div className="flex items-center mb-2">
              <Phone className="w-4 h-4 mr-2" />
              <span>+91-8400640070</span>
            </div>
            <div className="flex items-center mb-2">
              <Mail className="w-4 h-4 mr-2" />
              <span>aryangupta@live.com</span>
            </div>
            <p>FATEHPUR, U.P-212601</p>
            <p className="mt-2">&copy; {new Date().getFullYear()} Organic Life Enterprises. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
