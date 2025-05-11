"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ShoppingCart, User, Menu, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="md:hidden mr-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-5 w-5" />
            </Button>
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center">
                <span className="text-white font-bold">دک</span>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex flex-1 mx-6">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="جستجو در محصولات..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
          </div>

          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <div className="hidden md:block h-8 w-px bg-gray-300"></div>
            <Button variant="outline" size="sm" className="hidden md:flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>ورود / ثبت نام</span>
            </Button>
          </div>
        </div>

        <div className="md:hidden py-2">
          <div className="relative w-full">
            <Input
              type="text"
              placeholder="جستجو در محصولات..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>
        </div>

        <nav className="hidden md:flex py-2 overflow-x-auto">
          <ul className="flex space-x-6 rtl:space-x-reverse">
            {[
              "دسته بندی کالاها",
              "پرفروش ترین",
              "تخفیف دار",
              "سوپرمارکت",
              "کارت هدیه",
              "پیشنهاد ویژه",
              "سوالات متداول",
            ].map((item, index) => (
              <li key={index}>
                <Link href="#" className="text-sm text-gray-700 hover:text-red-500 whitespace-nowrap">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden py-2 border-t">
            <ul className="space-y-2">
              {[
                "دسته بندی کالاها",
                "پرفروش ترین",
                "تخفیف دار",
                "سوپرمارکت",
                "کارت هدیه",
                "پیشنهاد ویژه",
                "سوالات متداول",
              ].map((item, index) => (
                <li key={index}>
                  <Link href="#" className="block text-sm text-gray-700 hover:text-red-500 py-1">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}

