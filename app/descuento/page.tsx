"use client"

import { CheckCircle, Zap, TrendingUp, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react" 
import Link from "next/link" // ¡IMPORTACIÓN CLAVE!

export default function DescuentoPage() {

  const benefits = [
    { icon: Zap, text: "Acceso al Modelo Híbrido 3.0 con 20% OFF" },
    { icon: TrendingUp, text: "Sesión de nivelación GRATIS" },
    { icon: CheckCircle, text: "Flexibilidad horaria (Presencial/Virtual)" },
  ]

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario a tu base de datos o email.
    alert("¡Tu descuento del 20% ha sido solicitado! Revisa tu email para los detalles.");
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* NAVEGACIÓN Y LOGO (NUEVA SECCIÓN) */}
      <header className="py-4 px-4 sm:px-6 lg:px-8 border-b border-gray-200 bg-white shadow-sm">
        <div className="max-w-4xl mx-auto">
          {/* Logo/Brand - HECHO CLICKABLE A INICIO (/) */}
          <Link 
            href="/" 
            className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg transition-colors duration-150 w-fit"
            aria-label="Volver a la página principal de Habla Mundo 3.0"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <span className="font-bold text-primary-foreground text-lg">HM</span>
            </div>
            <span className="font-bold text-xl text-foreground hidden sm:inline">Habla Mundo 3.0</span>
          </Link>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL DE LA LANDING */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Encabezado y Titular Llamativo */}
          <div className="text-center space-y-4">
            
            {/* Mensaje de origen */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 rounded-full border border-pink-400">
              <Instagram size={18} className="text-pink-600" />
              <span className="text-sm font-medium text-pink-700">Oferta Exclusiva para la Comunidad de Instagram</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
              Asegura tu <span className="text-6xl sm:text-7xl">20% OFF</span> en el <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Modelo Híbrido 3.0
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Válido para nuevos estudiantes que deseen comenzar a dominar idiomas con nuestro plan 3.0.
            </p>
          </div>

          {/* Sección Principal (Formulario y Beneficios) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            
            {/* Columna 1: Formulario */}
            <Card className="shadow-2xl border-t-4 border-primary"> 
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-gray-800">
                  Tu 20% de Descuento te Espera
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-lg">Nombre Completo</Label>
                    <Input id="name" type="text" placeholder="Tu Nombre" required className="py-6 text-base" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-lg">Email</Label>
                    <Input id="email" type="email" placeholder="tu@email.com" required className="py-6 text-base" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-lg">Teléfono (WhatsApp)</Label>
                    <Input id="phone" type="tel" placeholder="+54 9 11 XXXX-XXXX" required className="py-6 text-base" />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full text-xl font-bold py-7 h-auto 
                               bg-gradient-to-r from-primary to-secondary 
                               hover:from-primary/90 hover:to-secondary/90 
                               shadow-lg shadow-primary/50"
                  >
                    ¡VALIDAR Y RECLAMAR MI 20% OFF!
                  </Button>
                  <p className="text-xs text-center text-gray-500">
                    Tu descuento se aplica automáticamente al enviar el formulario.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Columna 2: Puntos Clave / Beneficios */}
            <div className="space-y-6 pt-4 lg:pt-0">
              <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">Beneficios Exclusivos para ti:</h2>
              {benefits.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md border-l-4 border-primary">
                  <item.icon size={28} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-lg font-medium text-gray-800">{item.text}</p>
                    <p className="text-sm text-gray-500">Comienza a estudiar el idioma que elijas bajo nuestro modelo híbrido.</p>
                  </div>
                </div>
              ))}
              
              {/* Banner de Confianza / Contacto */}
              <div className="p-6 bg-blue-50 border-2 border-blue-300 rounded-xl text-center shadow-inner">
                  <p className="text-xl font-bold text-blue-800">
                      ¿Preguntas?
                  </p>
                  <p className="text-sm text-blue-700">Contáctanos vía WhatsApp para atención inmediata.</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}