"use client"

import type React from "react"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { User } from "lucide-react"

export default function LoginPage() {
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    alert("¡Simulación de Inicio de Sesión exitosa! Redirigiendo a tu Dashboard de Aprendizaje.")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center py-20 bg-gray-50">
        <Card className="max-w-md w-full p-6 shadow-xl border-t-4 border-blue-600">
          <CardHeader className="text-center pb-8">
            <User className="w-10 h-10 text-blue-600 mx-auto mb-3" />
            <CardTitle className="text-3xl font-bold text-gray-900">Bienvenido de Nuevo</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <Label htmlFor="email" className="text-sm font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tucorreo@hablamundo.com"
                  required
                  className="mt-1 min-h-[44px] focus:ring-blue-600"
                />
              </div>
              <div>
                <Label htmlFor="password" className="text-sm font-medium">
                  Contraseña
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="********"
                  required
                  className="mt-1 min-h-[44px] focus:ring-blue-600"
                />
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 min-h-[44px] font-bold text-lg">
                Iniciar Sesión
              </Button>
            </form>
            <div className="mt-4 text-center text-sm">
              <a href="/register" className="text-blue-600 hover:underline">
                ¿No tienes cuenta? Regístrate aquí
              </a>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
