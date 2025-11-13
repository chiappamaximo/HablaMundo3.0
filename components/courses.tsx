import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

const courses = [
  {
    id: 1,
    name: "Inglés",
    flag: "🇺🇸",
    level: "A1 - C2",
    students: "250+",
    features: ["Clases interactivas", "Certificación oficial", "Conversación diaria"],
  },
  {
    id: 2,
    name: "Alemán",
    flag: "🇩🇪",
    level: "A1 - C1",
    students: "120+",
    features: ["Gramática avanzada", "Cultura alemana", "Inmersión lingüística"],
  },
  {
    id: 3,
    name: "Francés",
    flag: "🇫🇷",
    level: "A1 - B2",
    students: "85+",
    features: ["Pronunciación perfecta", "Literatura francesa", "Habilidades profesionales"],
  },
  {
    id: 4,
    name: "Portugués",
    flag: "🇧🇷",
    level: "A1 - B2",
    students: "95+",
    features: ["Variantes lingüísticas", "Cultura hispanohablante", "Negocios internacionales"],
  },
]

export default function Courses() {
  return (
    <section id="courses" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Nuestros Cursos</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Elige entre nuestros programas diseñados por expertos en educación lingüística.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <Card
              key={course.id}
              className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card border-border flex flex-col"
            >
              <div className="text-5xl mb-4">{course.flag}</div>
              <h3 className="text-2xl font-bold text-foreground mb-1">{course.name}</h3>
              <Badge className="w-fit mb-4 bg-primary/20 text-primary border-primary/30">{course.level}</Badge>

              <div className="space-y-4 flex-1">
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Estudiantes Activos</p>
                  <p className="text-lg font-semibold text-foreground">{course.students}</p>
                </div>

                <div className="space-y-2">
                  {course.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle size={18} className="text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground/70">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="w-full mt-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-semibold rounded-lg">
                Explorar Curso
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
