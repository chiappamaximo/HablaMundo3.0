// app/descuento/layout.tsx

// ¡IMPORTANTE! Importamos los estilos globales de la raíz
import '../../app/globals.css' // Ajusta la ruta si tu globals.css no está en app/

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Oferta Exclusiva", // Título específico para esta página
  description: "Reclama tu descuento exclusivo del Modelo 3.0 Híbrido.",
}

export default function DescuentoLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // Es posible que necesites el tag <html> y <body> para que TailwindCSS funcione correctamente
    <html lang="es">
      <body>
        {/* Aquí va el contenido de tu app/descuento/page.tsx */}
        {children}
      </body>
    </html>
  )
}