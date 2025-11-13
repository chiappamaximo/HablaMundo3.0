import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export default function CTA() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-secondary to-accent p-12 md:p-20 text-center">
          {/* Background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -z-10"></div>

          <div className="relative z-10 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full border border-white/30">
              <Sparkles size={16} className="text-white" />
              <span className="text-sm font-medium text-white">Oferta Especial Limitada</span>
            </div>

            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white text-balance leading-tight">
                Tu Primer Mes a Mitad de Precio
              </h2>
              <p className="text-lg text-white/90 text-balance max-w-2xl mx-auto">
                Comienza tu viaje lingüístico hoy con 50% de descuento en tu primer mes. Acceso completo al modelo 3.0
                híbrido e inteligente.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button className="px-8 py-6 bg-white hover:bg-white/90 text-primary font-semibold rounded-xl flex items-center justify-center gap-2 group text-base">
                Reclama tu Descuento
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                className="px-8 py-6 border-2 border-white text-white hover:bg-white/10 font-semibold rounded-xl text-base bg-transparent"
              >
                Ver Planes Completos
              </Button>
            </div>

            <div className="pt-8 space-y-2 text-white/80 text-sm">
              <p>✓ Sin tarjeta de crédito requerida</p>
              <p>✓ Cancela en cualquier momento</p>
              <p>✓ Acceso inmediato a todas las características</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
