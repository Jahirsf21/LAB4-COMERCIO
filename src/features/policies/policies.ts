export type PolicySection = {
  id: string
  title: string
  path: string
  items: { id: string; title: string }[]
}

// Fuente compartida por las rutas, el sidebar y los enlaces del footer.
export const policy_sections: PolicySection[] = [
  {
    id: "terms", title: "Términos y Condiciones", path: "/terminos-condiciones",
    items: [
      { id: "uso-sitio", title: "Condiciones de uso del sitio" },
      { id: "compra", title: "Condiciones generales de compra" },
      { id: "responsabilidades-cliente", title: "Responsabilidades del cliente" },
      { id: "responsabilidades-tienda", title: "Responsabilidades de la tienda" },
    ],
  },
  {
    id: "returns", title: "Política de Devoluciones", path: "/politicas-devoluciones",
    items: [
      { id: "plazo", title: "Plazo para solicitar devoluciones" },
      { id: "condiciones", title: "Condiciones para aprobar una devolución" },
      { id: "excepciones", title: "Casos en los que no se aceptan devoluciones" },
      { id: "procedimiento", title: "Procedimiento general para gestionar solicitudes" },
    ],
  },
  {
    id: "shipping", title: "Política de Envíos", path: "/politicas-envios",
    items: [
      { id: "cobertura", title: "Cobertura de entrega" },
      { id: "tiempos", title: "Tiempos estimados de envío" },
      { id: "costos", title: "Costos de envío" },
      { id: "restricciones", title: "Restricciones o condiciones especiales" },
    ],
  },
  {
    id: "privacy", title: "Política de Privacidad", path: "/politicas-privacidad",
    items: [
      { id: "informacion-recopilada", title: "Información que recopila la tienda" },
      { id: "uso-informacion", title: "Uso de la información del cliente" },
      { id: "proteccion-datos", title: "Medidas básicas de protección de datos" },
    ],
  },
  {
    id: "faq", title: "Preguntas Frecuentes (FAQ)", path: "/preguntas-frecuentes",
    items: [
      { id: "compras", title: "Compras" },
      { id: "pagos", title: "Pagos" },
      { id: "envios", title: "Envíos" },
      { id: "devoluciones", title: "Devoluciones" },
      { id: "atencion-cliente", title: "Atención al cliente" },
    ],
  },
]
