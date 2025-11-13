// components/Contact.tsx
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="font-bold text-gray-900 mb-4" style={{ fontSize: "clamp(1.875rem, 4vw, 2.5rem)" }}>
            ¿Tienes Preguntas? Contáctanos
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Estamos listos para ayudarte a elegir el curso y la modalidad perfectos para ti.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 bg-white rounded-xl shadow-2xl p-8 lg:p-12">
          
          {/* Columna de Información de Contacto (2/3) */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-2xl font-bold text-gray-800">Envíanos un Mensaje</h3>
            
            {/* Formulario de Contacto (Simulado) */}
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Nombre */}
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre Completo</Label>
                  <Input id="name" type="text" placeholder="Tu nombre" />
                </div>
                
                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Correo Electrónico</Label>
                  <Input id="email" type="email" placeholder="tu.email@ejemplo.com" />
                </div>
              </div>

              {/* Teléfono */}
              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono (WhatsApp)</Label>
                <Input id="phone" type="tel" placeholder="+54 (11) 4567 8901" /> {/* Número de ejemplo actualizado */}
              </div>
              
              {/* Mensaje */}
              <div className="space-y-2">
                <Label htmlFor="message">Tu Mensaje o Consulta</Label>
                <Textarea id="message" rows={5} placeholder="Quiero saber más sobre el plan Híbrido Pro..." />
              </div>
              
              {/* Botón de Enviar */}
              <Button 
                type="submit" 
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 min-h-[48px] px-8 text-lg font-semibold"
              >
                <Send size={20} className="mr-2" />
                Enviar Mensaje
              </Button>
            </form>
          </div>

          {/* Columna de Contacto Rápido (1/3) */}
          <div className="space-y-8 bg-gray-50 p-6 rounded-lg lg:order-last">
            <h3 className="text-2xl font-bold text-gray-800">Información de la Sede</h3>
            
            {/* Items de Contacto */}
            <div className="space-y-6">
              
              {/* Teléfono */}
              <div className="flex items-start gap-4">
                <Phone size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-700">Llámanos</p>
                  <p className="text-gray-600">+54 (11) 4567 8901</p> {/* Número actualizado */}
                  <p className="text-sm text-gray-500">Lun-Vie: 9:00 - 18:00</p>
                </div>
              </div>
              
              {/* Email */}
              <div className="flex items-start gap-4">
                <Mail size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-700">Envíanos un Email</p>
                  <p className="text-gray-600">info@hablamundo.com</p>
                </div>
              </div>
              
              {/* Dirección */}
              <div className="flex items-start gap-4">
                <MapPin size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-700">Sede Principal</p>
                  <p className="text-gray-600">Av. Libertador 1234, CABA</p>
                  <p className="text-sm text-gray-500">Buenos Aires, Argentina</p> {/* Ubicación actualizada */}
                </div>
              </div>
            </div>
            
            {/* CTA a WhatsApp o Mapa */}
            <Button 
              asChild 
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold"
            >
              <a href="https://wa.me/541145678901" target="_blank" rel="noopener noreferrer"> {/* Número de WhatsApp actualizado */}
                Escribir por WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}