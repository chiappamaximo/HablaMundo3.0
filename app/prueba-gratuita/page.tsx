"use client"

import type React from "react"
import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Zap, Mic, Globe } from "lucide-react"

export default function PruebaGratuitaPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    idioma: "",
    modalidad: "hibrida",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center py-20 bg-green-50">
          <Card className="max-w-xl w-full p-8 text-center border-green-500 shadow-xl">
            <Zap className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <CardTitle className="text-3xl font-bold text-gray-900 mb-4">¡Tu Prueba Híbrida está Lista!</CardTitle>
            <CardDescription className="text-lg text-gray-600 mb-6">
              **Gracias, {formData.nombre}**. Te enviamos un correo a **{formData.email}** con:
            </CardDescription>
            <ul className="text-left space-y-3 mb-8 bg-green-100 p-4 rounded-lg">
              <li className="flex items-center gap-3 text-gray-700">
                <Mic className="w-5 h-5 text-green-600" /> Acceso inmediato al **Tutor IA 24/7** para práctica.
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <Globe className="w-5 h-5 text-green-600" /> Instrucciones para coordinar tu **Clase Híbrida** de{" "}
                {formData.idioma}.
              </li>
            </ul>
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <a href="/">Volver al Inicio</a>
            </Button>
          </Card>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Zap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h1 className="font-bold text-gray-900 mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
                Prueba el Modelo 3.0 GRATIS
              </h1>
              <p className="text-xl text-gray-600">
                **Sin compromiso**. 7 días de acceso a nuestra IA + 1 clase de prueba.
              </p>
            </div>

            <Card className="p-8 shadow-2xl">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl text-blue-600">Reserva tu Experiencia Híbrida</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="nombre" className="text-sm font-medium">
                      Nombre
                    </Label>
                    <Input
                      id="nombre"
                      placeholder="Tu Nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="mt-1 min-h-[44px]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tucorreo@ejemplo.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1 min-h-[44px]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="idioma" className="text-sm font-medium">
                      Idioma de Interés
                    </Label>
                    <select
                      id="idioma"
                      value={formData.idioma}
                      onChange={handleChange}
                      required
                      className="w-full mt-1 min-h-[44px] border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                    >
                      <option value="">Selecciona un idioma</option>
                      <option value="Inglés">Inglés</option>
                      <option value="Alemán">Alemán</option>
                      <option value="Francés">Francés</option>
                      <option value="Portugués">Portugués</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium block">Modalidad de Prueba</Label>
                    <div className="flex items-center gap-4">
                      <input
                        type="radio"
                        id="modalidad_hibrida"
                        name="modalidad"
                        value="hibrida"
                        defaultChecked
                        className="hidden"
                      />
                      <label
                        htmlFor="modalidad_hibrida"
                        className="flex items-center p-3 border-2 border-blue-600 rounded-lg cursor-pointer bg-blue-50 text-blue-800 font-semibold shadow-sm transition-all"
                      >
                        Modelo Híbrido Pro (Recomendado)
                      </label>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 min-h-[44px] font-bold text-lg"
                    size="lg"
                  >
                    Confirmar Prueba Gratuita
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
