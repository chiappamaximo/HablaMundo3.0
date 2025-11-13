"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link" // ¡NUEVO: Importa el Link de Next.js!

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/#benefits", label: "Modelo" },
    { href: "/#planes", label: "Planes" }, // ¡CORREGIDO AQUÍ: Apunta a #planes!
    { href: "/#testimonials", label: "Testimonios" },
    { href: "/#contact", label: "Contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo/Brand - HECHO CLICKABLE A INICIO (/) */}
        <Link href="/" className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg -m-2 p-2 transition-colors duration-150">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <span className="font-bold text-primary-foreground text-lg">HM</span>
          </div>
          <span className="font-bold text-xl text-foreground hidden sm:inline">Habla Mundo 3.0</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-foreground hover:text-primary transition-colors">
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground hover:text-primary transition-colors focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Content */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b border-border p-4 flex flex-col gap-4 md:hidden">
            {navItems.map((item) => (
                <Link
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Mobile CTA: Registrarse (Primary) */}
             <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
               <Link href="/register" onClick={() => setIsOpen(false)}>Registrarse</Link>
             </Button>

            {/* Mobile CTA: Iniciar Sesión (Outline/Ghost) */}
             <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary/5" >
               <Link href="/login" onClick={() => setIsOpen(false)}>Iniciar Sesión</Link>
             </Button>
          </div>
        )}

        {/* Desktop CTA: Iniciar Sesión y Registrarse */}
        <div className="hidden md:flex items-center gap-3">
          {/* Iniciar Sesión (Ghost) - HECHO FUNCIONAL */}
          <Button asChild variant="ghost" className="text-primary hover:bg-primary/5">
            <Link href="/login">Iniciar Sesión</Link>
          </Button>
          {/* Registrarse (Primary) - AGREGADO Y FUNCIONAL */}
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/register">Registrarse</Link>
          </Button>
        </div>
      </nav>
    </header>
  )
}