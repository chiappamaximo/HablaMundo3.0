// app/page.tsx
import Header from "@/components/header"
import Hero from "@/components/hero"
import Plans from "@/components/plans"
import Courses from "@/components/courses-v2" // Asumo que usas courses-v2 por la continuidad
import Testimonials from "@/components/testimonials"
import Footer from "@/components/footer"
import Contact from "@/components/Contact" // Importación correcta

export default function Home() {
  return (
    <div>
      <Header />
      <main className="min-h-screen bg-background">
        <Hero />
        
        {/* Usaré Plans, asumo que ya tiene la lógica de botones correcta */}
        <Plans /> 
        
        <Courses /> 
        
        {/* Testimonios, aunque aún no lo hemos creado, mantengámoslo en orden */}
        <Testimonials /> 
        
        {/* ¡AQUÍ ES DONDE DEBES PEGARLO! */}
        <Contact /> 
        
      </main>
      <Footer />
    </div>
  )
}