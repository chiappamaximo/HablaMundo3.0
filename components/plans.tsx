import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Zap, Cpu, Users, X } from "lucide-react"
import Link from "next/link" // ¡IMPORTACIÓN CLAVE AÑADIDA!

// Definición de los planes con el foco en el modelo Híbrido e IA
const pricingPlans = [
  {
    name: "Plan Virtual IA",
    price: "ARS 8.900 / mes",
    description: "Ideal para la práctica diaria y el autoaprendizaje flexible.",
    features: [
      { text: "Acceso 24/7 al Tutor IA personalizado", icon: Cpu, available: true },
      { text: "Clases virtuales en grupo (4/mes)", icon: Users, available: true },
      { text: "Materiales y ejercicios digitales", icon: Check, available: true },
      { text: "Tutorías presenciales personalizadas", icon: Zap, available: false },
    ],
    highlight: false,
    cta: "Comenzar", // <-- CAMBIO DE TEXTO: "Comenzar Virtual" -> "Comenzar"
    isFunctional: false, // <-- NUEVO: Deshabilitado
    link: "/checkout/virtual",
  },
  {
    name: "Plan Híbrido Pro",
    price: "ARS 21.900 / mes",
    description: "Nuestro modelo completo: lo mejor de la IA y el contacto humano.",
    features: [
      { text: "Acceso 24/7 al Tutor IA personalizado", icon: Cpu, available: true },
      { text: "Clases virtuales ILIMITADAS", icon: Users, available: true },
      { text: "Materiales y ejercicios digitales", icon: Check, available: true },
      { text: "1 Clase presencial semanal garantizada", icon: Zap, available: true },
    ],
    highlight: true,
    cta: "¡Prueba Híbrida!", // <-- MANTIENE TEXTO ORIGINAL
    isFunctional: true, // <-- NUEVO: Habilitado (funcional)
    link: "/prueba-gratuita", // <-- MANTIENE ENLACE ORIGINAL
  },
  {
    name: "Plan Full Immersion",
    price: "ARS 39.900 / mes",
    description: "Máxima inmersión con clases presenciales diarias y tutoría dedicada.",
    features: [
      { text: "Acceso 24/7 al Tutor IA personalizado", icon: Cpu, available: true },
      { text: "Clases virtuales ILIMITADAS", icon: Users, available: true },
      { text: "Materiales y ejercicios digitales", icon: Check, available: true },
      { text: "Clases presenciales diarias ILIMITADAS", icon: Zap, available: true },
    ],
    highlight: false,
    cta: "Comenzar", // <-- CAMBIO DE TEXTO: "Contactar Ventas" -> "Comenzar"
    isFunctional: false, // <-- NUEVO: Deshabilitado
    link: "/contacto",
  },
]

// Componente principal de Precios
export default function Plans() {
  return (
    <section id="planes" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-bold text-gray-900 mb-4" style={{ fontSize: "clamp(1.875rem, 4vw, 2.5rem)" }}>
            Elige tu Modelo de Aprendizaje 3.0
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)" }}>
            Máxima flexibilidad. Paga solo por el nivel de inmersión y la mezcla que necesitas.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`p-6 flex flex-col transition-all duration-300 ${
                plan.highlight
                  ? "border-4 border-blue-600 shadow-2xl scale-105"
                  : "border border-gray-200 hover:shadow-lg"
              }`}
            >
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-3xl font-bold text-gray-900 mb-2">{plan.name}</CardTitle>
                <CardDescription
                  className={`text-sm mb-4 ${plan.highlight ? "text-blue-600 font-semibold" : "text-gray-600"}`}
                >
                  {plan.description}
                </CardDescription>
                <p className="text-4xl font-extrabold text-blue-600">{plan.price}</p>
              </CardHeader>
              <CardContent className="p-0 flex-grow">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      {feature.available ? (
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                      ) : (
                        <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                      )}
                      <span className={!feature.available ? "line-through opacity-60" : ""}>{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              {/* LÓGICA DE BOTONES CORREGIDA */}
              {plan.isFunctional ? (
                // Botón FUNCIONAL (Híbrido Pro)
                <Button
                  asChild
                  className={`w-full min-h-[50px] font-bold text-lg ${
                    plan.highlight ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-700 hover:bg-gray-800"
                  }`}
                >
                  <Link href={plan.link}>{plan.cta}</Link>
                </Button>
              ) : (
                // Botones DESHABILITADOS (Virtual IA y Full Immersion)
                <Button
                  disabled // <-- ¡AQUÍ SE DESHABILITA!
                  // Mantiene el estilo de color, pero añade opacidad y desactiva el cursor
                  className={`w-full min-h-[50px] font-bold text-lg ${
                    plan.highlight ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-700 hover:bg-gray-800"
                  } disabled:opacity-50 disabled:cursor-not-allowed`} 
                >
                  {plan.cta} {/* Mostrará "Comenzar" */}
                </Button>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
