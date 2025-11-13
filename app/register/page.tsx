"use client"

import type React from "react"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { UserPlus } from "lucide-react"

export default function RegisterPage() {
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    alert("¡Simulación de Registro exitoso! Revisa tu email para verificar tu cuenta.")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <Card className="max-w-md w-full p-6 shadow-2xl border-t-4 border-green-500">
          <CardHeader className="text-center pb-8">
            <UserPlus className="w-10 h-10 text-green-500 mx-auto mb-3" />
            <CardTitle className="text-3xl font-bold text-gray-900">Únete a Habla Mundo 3.0</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleRegister} className="space-y-6">
              <div>
                <Label htmlFor="nombre" className="text-sm font-medium">
                  Nombre Completo
                </Label>
                <Input
                  id="nombre"
                  placeholder="Tu Nombre"
                  required
                  className="mt-1 min-h-[44px] focus:ring-green-500"
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
                  required
                  className="mt-1 min-h-[44px] focus:ring-green-500"
                />
              </div>
              <div>
                <Label htmlFor="password" className="text-sm font-medium">
                  Contraseña
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Crea una contraseña segura"
                  required
                  className="mt-1 min-h-[44px] focus:ring-green-500"
                />
              </div>
              <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 min-h-[44px] font-bold text-lg">
                Crear Cuenta
              </Button>
            </form>
            <div className="mt-4 text-center text-sm">
              <a href="/login" className="text-blue-600 hover:underline">
                ¿Ya tienes una cuenta? Iniciar Sesión
              </a>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
