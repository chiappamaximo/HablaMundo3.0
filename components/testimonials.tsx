import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "María García",
    role: "Estudiante de Inglés",
    image: "👩‍💼",
    text: "El modelo híbrido cambió mi vida. Combino clases presenciales con sesiones virtuales y el tutor IA me ayuda cada noche. En 3 meses pasé del A1 al B1.",
    rating: 5,
  },
  {
    name: "Carlos López",
    role: "Profesional - Curso Alemán",
    image: "👨‍💻",
    text: "Perfectamente adaptado a mi horario laboral. La flexibilidad de Habla Mundo 3.0 me permitió cumplir mi objetivo de dominar alemán sin sacrificar mi trabajo.",
    rating: 5,
  },
  {
    name: "Sophie Martin",
    role: "Estudiante de Francés",
    image: "👩‍🎓",
    text: "Los instructores nativos son increíbles, pero lo que más me encanta es el tutor IA 24/7. Puedo practicar conversación cualquier hora sin limitaciones.",
    rating: 5,
  },
  {
    name: "Juan Pérez",
    role: "Emprendedor - Curso Portugués",
    image: "👨‍💼",
    text: "Necesitaba portugués para mi negocio y Habla Mundo 3.0 lo hizo posible. El enfoque personalizado y la IA me convirtió en fluido en 4 meses.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Historias de Éxito</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Cientos de estudiantes han transformado su relación con los idiomas con nuestro modelo 3.0.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 bg-card border-border hover:shadow-lg transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{testimonial.image}</div>
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-foreground/60">{testimonial.role}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>

              <p className="text-foreground/80 leading-relaxed">"{testimonial.text}"</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
