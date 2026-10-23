export type PolicyBlock =
  | { type: "paragraph"; text: string }
  | { type: "list" | "steps"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "faq"; question: string; answer: string }

export const policy_document = {
  title: "Políticas de Space Shop",
  updated_at: "2026-10-23",
  updated_label: "23 de octubre de 2026",
  version: "1.0",
}

export const policy_content: Record<string, Record<string, PolicyBlock[]>> = {
  "terms": {
    "uso-sitio": [
      {
        "type": "paragraph",
        "text": "Space Shop es una tienda en línea de ropa, calzado y accesorios deportivos de marcas como Nike, Puma y Adidas, y es distribuidor autorizado de estas marcas en Costa Rica. Las marcas, logotipos y nombres comerciales que aparecen en el sitio pertenecen a sus respectivos dueños."
      },
      {
        "type": "paragraph",
        "text": "El sitio está destinado a la consulta y compra de productos para uso personal. No se permite usarlo para actividades fraudulentas, intentar acceder a sus sistemas sin autorización ni copiar su contenido con fines comerciales. Procuramos que las fotografías, descripciones, tallas y colores sean lo más fieles posible; aun así, el color puede variar levemente según la pantalla de cada dispositivo."
      },
      {
        "type": "paragraph",
        "text": "Al realizar una compra, usted acepta estos Términos y Condiciones marcando de forma expresa la casilla de aceptación del checkout, que siempre aparece desmarcada."
      }
    ],
    "compra": [
      {
        "type": "paragraph",
        "text": "Los precios se muestran en colones costarricenses. El IVA del 13 % se calcula sobre el subtotal de la orden y se muestra por separado en el resumen de compra, junto con el costo de envío y el total final, antes de que usted confirme el pago. No se agregan cargos adicionales después de ese resumen."
      },
      {
        "type": "paragraph",
        "text": "Algunos productos pueden tener descuentos por tiempo limitado. En esos casos indicamos el precio anterior, el precio con descuento y la fecha en que termina la promoción. Los productos con descuento tienen los mismos derechos de cambio, devolución y garantía que cualquier otro producto."
      },
      {
        "type": "paragraph",
        "text": "Aceptamos tarjetas Visa, Mastercard y American Express. El pago se procesa por medio de un proveedor de pagos externo, por lo que Space Shop no almacena los datos de su tarjeta."
      },
      {
        "type": "paragraph",
        "text": "Al finalizar el checkout se genera una orden con estado pendiente, que se confirma únicamente cuando el pago es aprobado. Si el pago es rechazado o se presenta un error, la orden no se confirma, no se realiza ningún cobro y usted puede intentar el pago nuevamente. La orden puede cancelarse sin costo mientras el pago no se haya realizado; una vez aprobado, ya no puede cancelarse, pero puede solicitar un cambio o una devolución según nuestra Política de Devoluciones."
      },
      {
        "type": "paragraph",
        "text": "Todas las compras están sujetas a la disponibilidad de inventario. Si después de aprobado el pago un producto no estuviera disponible, se lo informaremos por correo y le reintegraremos el monto completo de ese producto."
      }
    ],
    "responsabilidades-cliente": [
      {
        "type": "list",
        "items": [
          "Proporcionar información correcta y completa durante el checkout, en especial el correo, el teléfono y la dirección de entrega.",
          "Revisar la talla, el color y la cantidad de cada producto en el resumen de compra antes de confirmar el pago.",
          "Estar disponible para recibir el pedido en la dirección indicada o retirarlo en la tienda dentro del plazo establecido.",
          "Usar el sitio de forma lícita y respetar estas condiciones."
        ]
      }
    ],
    "responsabilidades-tienda": [
      {
        "type": "list",
        "items": [
          "Vender únicamente productos originales, nuevos y en buen estado.",
          "Mostrar el costo total de la compra, incluidos el IVA y el envío, antes de solicitar el pago.",
          "Despachar los pedidos dentro de los plazos indicados en la Política de Envíos.",
          "Ofrecer una garantía de 30 días naturales por defectos de fabricación y atender las solicitudes de cambio y devolución.",
          "Tratar los datos personales según la Política de Privacidad."
        ]
      }
    ]
  },
  "returns": {
    "plazo": [
      {
        "type": "paragraph",
        "text": "Usted cuenta con 30 días naturales a partir de la fecha de entrega, o de la fecha de retiro en tienda, para solicitar un cambio, una devolución o hacer válida la garantía por defectos de fabricación."
      }
    ],
    "condiciones": [
      {
        "type": "paragraph",
        "text": "Para aprobar una devolución o un cambio, el producto debe estar limpio y con todas sus etiquetas originales. El calzado debe devolverse en su caja original, sin daños, y la suela no debe presentar señales de uso. En todos los casos debe indicar el número de orden de su compra."
      },
      {
        "type": "paragraph",
        "text": "Si el producto llegó con un defecto de fabricación o no corresponde a lo que pidió, Space Shop asume todos los costos de envío. Si lo devuelve porque cambió de opinión, el costo del envío de la devolución corre por su cuenta; puede evitarlo entregándolo en cualquiera de nuestras tiendas."
      }
    ],
    "excepciones": [
      {
        "type": "list",
        "items": [
          "Ropa interior, calcetines y trajes de baño, por motivos de higiene, salvo que presenten un defecto de fabricación.",
          "Productos usados, lavados, alterados o dañados después de la entrega.",
          "Productos con desgaste normal por uso, daños por uso inadecuado o accidentes.",
          "Solicitudes presentadas después de los 30 días naturales a la entrega."
        ]
      }
    ],
    "procedimiento": [
      {
        "type": "steps",
        "items": [
          "**Solicitud:** escriba a spaceshop@gmail.com o al WhatsApp +506 8322-6524 con su número de orden, el producto, el motivo y, si se trata de un defecto, fotografías.",
          "**Respuesta:** le responderemos en un máximo de 2 días hábiles con las instrucciones a seguir.",
          "**Entrega del producto:** envíelo por Correos de Costa Rica o entréguelo en cualquiera de nuestras tiendas.",
          "**Revisión:** revisamos el producto en un máximo de 7 días hábiles y le informamos el resultado por correo o el medio utilizado.",
          "**Resolución:** si la solicitud es aprobada, realizamos el cambio o el reembolso."
        ]
      },
      {
        "type": "paragraph",
        "text": "El primer cambio de talla de cada producto no tiene costo; a partir del segundo, el envío cuesta ₡3 000, salvo que el cambio se haga en tienda. Los reembolsos se realizan al mismo método de pago utilizado en la compra. Space Shop los gestiona en un máximo de 3 días hábiles después de aprobar la solicitud, y el tiempo en que el dinero se refleja en su cuenta depende de los plazos de su banco o emisor de la tarjeta."
      }
    ]
  },
  "shipping": {
    "cobertura": [
      {
        "type": "paragraph",
        "text": "Realizamos envíos a las siete provincias de Costa Rica por medio de Correos de Costa Rica. No realizamos envíos fuera del país. También puede retirar su pedido sin costo en nuestras tiendas de Limón, Guápiles, San José y Escazú."
      }
    ],
    "tiempos": [
      {
        "type": "list",
        "items": [
          "**Gran Área Metropolitana (GAM):** de 1 a 3 días hábiles.",
          "**Resto del país:** de 3 a 6 días hábiles.",
          "**Retiro en tienda:** le avisaremos por correo cuando su pedido esté listo, normalmente de 1 a 2 días hábiles."
        ]
      },
      {
        "type": "paragraph",
        "text": "Los tiempos se cuentan a partir de la confirmación del pago. Cuando su pedido sea despachado, le enviaremos por correo el número de guía de Correos de Costa Rica para que pueda darle seguimiento."
      }
    ],
    "costos": [
      {
        "type": "paragraph",
        "text": "El costo de envío es el mismo para cualquier zona del país:"
      },
      {
        "type": "table",
        "headers": [
          "Subtotal de la orden",
          "Costo de envío"
        ],
        "rows": [
          [
            "Menor a ₡35 000",
            "₡3 000"
          ],
          [
            "Igual o mayor a ₡35 000",
            "Gratis"
          ],
          [
            "Retiro en tienda",
            "Gratis"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "El costo de envío se muestra en el carrito y en el resumen de compra antes del pago. No existen cargos adicionales por zona, peso o manejo."
      }
    ],
    "restricciones": [
      {
        "type": "list",
        "items": [
          "Los pedidos confirmados después de las 3:00 p. m., o en domingos y feriados, se procesan el siguiente día hábil.",
          "Los tiempos pueden extenderse por feriados, condiciones climáticas u otras situaciones fuera de nuestro control. Si su pedido se atrasa, se lo informaremos por correo o a los medios de contacto proveídos.",
          "Si el pedido no puede entregarse por una dirección incompleta o porque nadie lo recibe, nos comunicaremos con usted para coordinar un nuevo envío o el retiro en tienda.",
          "Los pedidos para retiro en tienda se guardan durante 15 días naturales. Para retirarlos debe presentar el número de orden y una identificación con el nombre del comprador; si otra persona lo retira, debe presentar una autorización escrita del comprador y su propia identificación.",
          "Si el paquete llega abierto o dañado, tome fotografías y comuníquese con nosotros dentro de las 48 horas siguientes a la entrega."
        ]
      }
    ]
  },
  "privacy": {
    "informacion-recopilada": [
      {
        "type": "paragraph",
        "text": "Durante el checkout solicitamos su número de identificación, nombre completo, correo electrónico, correo electrónico alternativo, número de teléfono, número de teléfono alternativo, provincia, cantón, distrito, dirección exacta, código postal y, si usted la proporciona, información adicional para la entrega. En cada orden también registramos los productos comprados, los montos, el estado del pago y la fecha."
      },
      {
        "type": "paragraph",
        "text": "No solicitamos crear una cuenta ni una contraseña, ya que las compras se realizan como invitado. Tampoco recibimos ni almacenamos el número completo de su tarjeta ni su código de seguridad, pues el pago lo procesa directamente el proveedor de pagos."
      },
      {
        "type": "paragraph",
        "text": "El contenido de su carrito se guarda en el almacenamiento local de su navegador para que no se pierda al cerrar la página. Esta información permanece en su dispositivo y puede eliminarla vaciando el carrito o borrando los datos del sitio en su navegador. No usamos cookies de publicidad ni de rastreo."
      }
    ],
    "uso-informacion": [
      {
        "type": "paragraph",
        "text": "Usamos sus datos únicamente para procesar su orden y su pago, coordinar la entrega o el retiro en tienda, contactarle sobre su pedido y atender cambios, devoluciones y garantías. No enviamos correos promocionales ni boletines."
      },
      {
        "type": "paragraph",
        "text": "Compartimos solo los datos necesarios con Correos de Costa Rica, para realizar la entrega, y con el proveedor de pagos, para procesar el cobro. No vendemos, alquilamos ni cedemos sus datos a otras empresas."
      }
    ],
    "proteccion-datos": [
      {
        "type": "list",
        "items": [
          "El sitio utiliza conexión cifrada (HTTPS).",
          "El acceso a la información de las órdenes está limitado al personal que la necesita para atender su compra.",
          "Conservamos los datos de las órdenes solo durante el tiempo necesario para cumplir con la compra, las garantías y las obligaciones legales y contables.",
          "De acuerdo con la Ley 8968 de Protección de la Persona frente al Tratamiento de sus Datos Personales, usted puede solicitar el acceso, la corrección o la eliminación de sus datos escribiendo a spaceshop@gmail.com. Responderemos en un máximo de 5 días hábiles."
        ]
      }
    ]
  },
  "faq": {
    "compras": [
      {
        "type": "faq",
        "question": "¿Los productos son originales?",
        "answer": "Sí. Space Shop es distribuidor autorizado y todos los productos son originales y nuevos."
      },
      {
        "type": "faq",
        "question": "¿Necesito crear una cuenta para comprar?",
        "answer": "No. Puede comprar como invitado; solo necesita completar sus datos en el checkout."
      },
      {
        "type": "faq",
        "question": "¿Puedo cancelar mi pedido?",
        "answer": "Sí, sin costo, siempre que el pago no se haya realizado. Una vez aprobado el pago, puede solicitar un cambio o una devolución cuando reciba el producto."
      }
    ],
    "pagos": [
      {
        "type": "faq",
        "question": "¿Qué métodos de pago aceptan?",
        "answer": "Tarjetas Visa, Mastercard y American Express."
      },
      {
        "type": "faq",
        "question": "¿El precio incluye el IVA?",
        "answer": "El IVA del 13 % se calcula sobre el subtotal de su orden. Antes de pagar, el resumen de compra le muestra el subtotal, el IVA, el envío y el total final, sin cargos adicionales posteriores."
      },
      {
        "type": "faq",
        "question": "¿Qué pasa si mi pago es rechazado?",
        "answer": "No se realiza ningún cobro y su orden no se confirma. Puede revisar los datos de su tarjeta e intentarlo de nuevo, o usar otra tarjeta."
      }
    ],
    "envios": [
      {
        "type": "faq",
        "question": "¿Cuánto cuesta el envío y cuánto tarda?",
        "answer": "₡3 000 a cualquier parte del país, o gratis si el subtotal de su orden es de ₡35 000 o más. Tarda de 1 a 3 días hábiles en la GAM y de 3 a 6 días hábiles en el resto del país."
      },
      {
        "type": "faq",
        "question": "¿Puedo retirar mi pedido en una tienda?",
        "answer": "Sí, sin costo, en nuestras tiendas de Limón, Guápiles, San José y Escazú."
      }
    ],
    "devoluciones": [
      {
        "type": "faq",
        "question": "¿Cuánto tiempo tengo para devolver un producto?",
        "answer": "30 días naturales desde la entrega, siempre que el producto esté limpio y con sus etiquetas. El primer cambio de talla es gratis."
      },
      {
        "type": "faq",
        "question": "¿Cuándo recibo mi reembolso?",
        "answer": "Lo gestionamos en un máximo de 3 días hábiles después de aprobar la devolución. El tiempo en que se refleja en su cuenta depende de su banco."
      }
    ],
    "atencion-cliente": [
      {
        "type": "faq",
        "question": "¿Cómo me comunico con Space Shop?",
        "answer": "Por correo a spaceshop@gmail.com o por teléfono y WhatsApp al +506 8322-6524, de lunes a sábado de 9:00 a. m. a 7:00 p. m. y domingo de 9:00 a. m. a 1:00 p. m."
      }
    ]
  }
}
