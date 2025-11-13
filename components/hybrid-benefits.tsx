import { Card } from "@/components/ui/card"
import { Users, Zap, Globe, Target } from "lucide-react"

const benefits = [
  {
    icon: Users,
    title: "Modelo Híbrido",
    description: "Flexibilidad total: clases presenciales, virtuales o una combinación perfecta para tu ritmo de vida.",
    color: "from-primary to-primary/60",
  },
  {
    icon: Zap,
    title: "Tutor IA 24/7",
    description:
      "Práctica sin límites. Recibe retroalimentación instantánea y asistencia de IA en cualquier momento del día.",
    color: "from-secondary to-secondary/60",
  },
  {
    icon: Globe,
    title: "Clases con Nativos",
    description:
      "Calidad humana garantizada. Aprende de instructores nativos certificados con experiencia internacional.",
    color: "from-accent to-accent/60",
  },
  {
    icon: Target,
    title: "Aprende a tu Ritmo",
    description: "Personalización total. Adaptamos el contenido a tus objetivos, nivel y disponibilidad horaria.",
    color: "from-primary/80 to-secondary/80",
  },
]

export default function HybridBenefits() {
  return (
    <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Los Pilares del Modelo 3.0
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Una combinación única de flexibilidad, tecnología y educación humana diseñada para tu éxito lingüístico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card border-border"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{benefit.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
