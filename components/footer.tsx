import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground/5 border-t border-border py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="font-bold text-primary-foreground text-lg">HM</span>
              </div>
              <span className="font-bold text-lg">Habla Mundo 3.0</span>
            </div>
            <p className="text-foreground/70 text-sm leading-relaxed">
              Transformando vidas a través del aprendizaje híbrido de idiomas con inteligencia artificial.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">Producto</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  Cursos
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  Planes
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  Tutor IA
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  Certificaciones
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  Acerca de
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  Empleo
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  Prensa
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors cursor-pointer">
                <Mail size={16} />
                <span>info@hablamundo.com</span>
              </li>
              <li className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors cursor-pointer">
                <Phone size={16} />
                <span>+54 (11) 4567 8901</span>
              </li>
              <li className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors cursor-pointer">
                <MapPin size={16} />
                <span>Buenos Aires, Argentina</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social and Copyright */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-foreground/60">© 2025 Habla Mundo 3.0. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all"
            >
              <Twitter size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
