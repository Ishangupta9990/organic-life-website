"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Playfair_Display } from "next/font/google"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import LogoWithText from "@/components/logo-with-text"

const playfair = Playfair_Display({ subsets: ["latin"] })

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <LogoWithText size="sm" showText={false} />
          <span className={`hidden font-bold text-green-800 md:inline-block ${playfair.className}`}>
            ORGANIC LIFE ENTERPRISES
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium text-green-800 hover:text-green-600 transition-colors">
            Home
          </Link>
          <Link href="/products" className="text-sm font-medium text-green-800 hover:text-green-600 transition-colors">
            Products
          </Link>
          <Link href="/about" className="text-sm font-medium text-green-800 hover:text-green-600 transition-colors">
            About Us
          </Link>
          <Link href="/licenses" className="text-sm font-medium text-green-800 hover:text-green-600 transition-colors">
            Licenses
          </Link>
          <Link href="/contact" className="text-sm font-medium text-green-800 hover:text-green-600 transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button asChild className="bg-green-600 hover:bg-green-700">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="mt-6 mb-8">
              <LogoWithText size="md" />
            </div>
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-lg font-medium text-green-800 hover:text-green-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/products"
                className="text-lg font-medium text-green-800 hover:text-green-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/about"
                className="text-lg font-medium text-green-800 hover:text-green-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/licenses"
                className="text-lg font-medium text-green-800 hover:text-green-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Licenses
              </Link>
              <Link
                href="/contact"
                className="text-lg font-medium text-green-800 hover:text-green-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Button asChild className="mt-4 w-full bg-green-600 hover:bg-green-700">
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  Get in Touch
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
