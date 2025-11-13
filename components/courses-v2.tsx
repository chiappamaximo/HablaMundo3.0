import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Layers, Users, MessageCircle, Gift } from "lucide-react" 
import Link from "next/link" // ¡AQUÍ: Importamos Link para la funcionalidad!

const courses = [
  { flag: "🇺🇸", name: "Inglés", description: "Presencial y Virtual" },
  { flag: "🇩🇪", name: "Alemán", description: "Presencial y Virtual" },
  { flag: "🇫🇷", name: "Francés", description: "Presencial y Virtual" },
  { flag: "🇧🇷", name: "Portugués", description: "Presencial y Virtual" },
]

const features = [
  { icon: Layers, text: "Niveles Básicos a Avanzados" },
  { icon: Users, text: "Aprende con Nativos" },
  { icon: MessageCircle, text: "Conversación Fluida" },
]

export default function Courses() {
  return (
    <section id="clases" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-bold text-gray-900 mb-4" style={{ fontSize: "clamp(1.875rem, 4vw, 2.5rem)" }}>
            Nuestros Cursos
          </h2>
          <p className="text-gray-600 mb-8" style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)" }}>
            Ofrecemos clases de Inglés, Alemán, Francés y Portugués, con un enfoque en el **Modelo 3.0 Híbrido** que combina lo mejor de lo presencial y lo virtual.
          </p>
          <div className="flex justify-center flex-wrap gap-4 max-w-2xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-700 bg-gray-100 px-3 py-1 rounded-full text-sm font-medium">
                <feature.icon size={16} className="text-primary"/>
                {feature.text}
              </div>
            ))}
          </div>
        </div>

        {/* Cajas de Cursos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {courses.map((course, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="text-5xl mb-3">{course.flag}</div>
                <CardTitle className="text-2xl font-bold text-gray-900">{course.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <Button
                  variant="default"
                  className="w-full bg-primary hover:bg-primary/90 min-h-[44px] focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  asChild
                >
                  {/* AQUÍ: Usamos Link de Next.js para un desplazamiento suave */}
                  <Link href="#planes" aria-label={`Ver planes para clases de ${course.name}`}>
                    Ver Planes y Precios
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA FINAL (Reclama Descuento) */}
        <div className="flex justify-center mt-12">
          <Button
            asChild
            size="lg"
            className="
              relative overflow-hidden 
              px-12 py-7 h-auto 
              text-xl sm:text-2xl font-extrabold 
              text-white rounded-xl 
              transition-all duration-300 
              transform hover:scale-[1.03] active:scale-[0.98]
              bg-gradient-to-r from-primary to-secondary /* Usando los colores del tema */
              shadow-2xl shadow-primary/50 hover:shadow-primary/80
              focus:outline-none focus:ring-4 focus:ring-primary focus:ring-offset-2
            "
          >
            {/* ENLACE FUNCIONAL A /descuento */}
            <Link href="/descuento" aria-label="Reclama tu Descuento Híbrido">
              <span className="relative z-10 flex items-center gap-3">
                <Gift size={28} className="animate-pulse" />
                ¡Reclama tu Descuento Híbrido!
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}