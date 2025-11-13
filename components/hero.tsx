"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Globe, Brain } from "lucide-react"
import Link from "next/link" 

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-20 pb-32 px-4 sm:px-6 lg:px-8">
      {/* Background gradient elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="animate-slide-in-left space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/15 rounded-full border border-accent/30">
              <Zap size={16} className="text-accent" />
              <span className="text-sm font-medium text-accent">Modelo 3.0 - Híbrido & Inteligente</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight text-foreground">
              Domina Idiomas con el{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Modelo Híbrido 3.0
              </span>
            </h1>

            {/* LÍNEA MODIFICADA AQUÍ: Reemplazamos la sintaxis Markdown por etiquetas <strong> */}
            <p className="text-lg text-muted-foreground">
              Clases <strong>Presenciales</strong> y <strong>Virtuales</strong> que se adaptan a tu vida. La IA y la inmersión lingüística te llevan a la fluidez real en menos tiempo.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Botón Principal - Iniciar Prueba Híbrida */}
            <Button asChild size="lg" className="px-8 py-6 text-lg font-semibold bg-primary hover:bg-primary/90">
              <Link href="/register">
                Comienza tu Clase de Prueba Híbrida <ArrowRight size={20} className="ml-2" />
              </Link>
            </Button>

            {/* Botón Secundario - VER PLANES */}
            <Button asChild variant="outline" size="lg" className="px-8 py-6 text-lg border-primary text-primary hover:bg-primary/5">
              <Link href="#planes">
                Ver Planes
              </Link>
            </Button>
          </div>

        </div>

        {/* Right Visuals */}
        <div className="hidden lg:flex justify-center items-center relative h-96">
          <div className="relative w-72 h-72 rounded-full bg-primary/10 flex items-center justify-center">
            {/* Inner Circle (Brain/AI) */}
            <div className="w-40 h-40 rounded-full bg-primary/20 flex items-center justify-center shadow-inner">
              <Brain size={48} className="text-primary animate-pulse" />
            </div>

            {/* Orbiting elements */}
            <div className="absolute w-64 h-64">
              {/* Elemento 1: Globe (Global/Virtual) */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 rounded-lg bg-accent flex items-center justify-center shadow-lg animate-[spin-slow_20s_linear_infinite] origin-[112px_112px]"
              >
                <Globe size={24} className="text-accent-foreground" />
              </div>
              {/* Elemento 2: Zap (Tecnología/Poder) */}
              <div
                className="absolute bottom-8 left-4 w-12 h-12 rounded-lg bg-secondary flex items-center justify-center shadow-lg animate-[spin-slow-reverse_15s_linear_infinite] origin-[112px_112px]"
              >
                <Zap size={24} className="text-secondary-foreground" />
              </div>
              {/* Elemento 3: Graduation Cap (Educación) */}
              <div
                className="absolute bottom-8 right-4 w-12 h-12 rounded-lg bg-primary/80 flex items-center justify-center shadow-lg animate-[spin-slow_25s_linear_infinite] origin-[112px_112px]"
              >
                <span className="text-2xl">🎓</span>
              </div>
            </div>

            {/* Floating particles */}
            <div className="absolute top-10 right-10 w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: "0s" }}></div>
            <div
              className="absolute bottom-20 left-10 w-2 h-2 bg-secondary rounded-full animate-pulse"
              style={{ animationDelay: "0.5s" }}
            ></div>
          </div>
        </div>
      </div>

      {/* Estilos CSS para animaciones */}
      <style jsx global>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes spin-slow-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  )
}