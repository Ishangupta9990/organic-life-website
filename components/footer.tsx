"use client"
import { Facebook, Instagram, Mail, Phone } from "lucide-react"
import { Playfair_Display } from "next/font/google"
import Link from "next/link"

import LogoWithText from "@/components/logo-with-text"

const playfair = Playfair_Display({ subsets: ["latin"] })

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <LogoWithText textColor="text-white" size="lg" />
          </div>
          <div className="flex flex-col items-center md:items-end">
            <p className={`text-green-200 mb-2 ${playfair.className} italic`}>Good for nature Good for You</p>
            <div className="flex items-center mb-2">
              <Phone className="w-4 h-4 mr-2" />
              <span>+91-8400640070</span>
            </div>
            <div className="flex items-center mb-2">
              <Phone className="w-4 h-4 mr-2" />
              <span>+91-9555930712</span>
            </div>
            <div className="flex items-center mb-2">
              <Mail className="w-4 h-4 mr-2" />
              <span>aryangupta@live.com</span>
            </div>
            <div className="flex items-center mb-2">
              <Mail className="w-4 h-4 mr-2" />
              <span>aryan@organiclifenow.in</span>
            </div>
            <p>FATEHPUR, U.P-212601</p>

            {/* Social Media Links */}
            <div className="flex items-center space-x-4 mt-4">
              <Link
                href="https://www.facebook.com/share/16LhXZWHag/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-green-200 transition-colors"
              >
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://www.instagram.com/organiclifenow.in?igsh=OG50N25zbXNrZzdp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-green-200 transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>

            <p className="mt-2">&copy; {new Date().getFullYear()} Organic Life Enterprises. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
