// Projects built with Claude Code, each with a public repo. Every figure here was measured locally
// on 2026-11-01 (production build); see portafolio_casos/03_evidencia.md.

export interface Shot {
  src: string;
  alt: string;
  caption: string;
  mobile?: boolean;
  /** Defaults to 1440×900 (desktop) or 390×844 (mobile). */
  width?: number;
  height?: number;
}

export interface Decision {
  title: string;
  what: string;
  alternative: string;
  tradeoff: string;
}

export interface CaseStudy {
  slug: string;
  /** Public GitHub repository with the code. */
  repo: string;
  title: string;
  summary: string;
  tags: string[];
  cover: { src: string; alt: string };
  oneLiner: string;
  role: string[];
  problem: string[];
  architecture: { src: string; width: number; height: number; notes: string[] };
  decisions: Decision[];
  results: { label: string; value: string }[];
  improve: string[];
  videos: { src: string; poster: string; caption: string; mobile?: boolean }[];
  gallery: Shot[];
}

const REPO = (name: string) => `https://github.com/nicho1607/${name}`;

export const caseStudies: CaseStudy[] = [
  {
    slug: "mesa-viva",
    repo: REPO("mesa-viva"),
    title: "Mesa Viva: pedidos por QR en tiempo real",
    summary:
      "El cliente pide desde el móvil escaneando el QR de su mesa y el mesero recibe la ronda al instante en su tablero, sin que nadie se registre.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "SSE"],
    cover: {
      src: "/projects/mesa-viva/1440-04-mesero-plano.png",
      alt: "Plano de mesas del mesero con rondas sin confirmar y una mesa llamando",
    },
    oneLiner:
      "Pedidos desde la mesa por QR para restaurantes: el cliente pide sin crear cuenta y el mesero lo ve en vivo.",
    role: [
      "Construí este proyecto con Claude Code, un agente de programación. Yo definí qué construir y puse dos restricciones: que el cliente pidiera sin crear cuenta y que el tiempo real funcionara sin servicios externos.",
      "El agente escribió el código y los tests a partir de un PRD de 13 historias, en unas 2 horas, como muestra el historial de git: cada commit lleva su firma. Yo revisé el código generado y probé cada flujo a mano; así encontré el error que aparece en «Qué haría distinto». No tuvo usuarios reales.",
    ],
    problem: [
      "El escenario: en un restaurante con pedidos en papel, el cliente espera para pedir y para pagar, y el mesero no sabe qué mesa lo necesita.",
      "Restricciones: el cliente no crea cuenta (el QR identifica la mesa), el tiempo real funciona sin servicios externos, el servidor calcula todos los precios y el dinero se guarda en centavos.",
    ],
    architecture: {
      src: "/projects/mesa-viva/arquitectura.png",
      width: 3200,
      height: 920,
      notes: [
        "Un solo proyecto Next.js sirve el menú del cliente, el tablero del mesero, el admin y el canal de eventos.",
        "Toda escritura pasa por Server Actions dentro de una transacción. Tras el commit, Postgres emite un NOTIFY.",
        "Un único LISTEN por proceso reenvía la señal por Server-Sent Events, y cada navegador vuelve a pedir sus datos.",
      ],
    },
    decisions: [
      {
        title: "Una sola orden abierta por mesa, garantizada por la base de datos",
        what: "Un índice único parcial (WHERE status = 'OPEN') impide dos órdenes abiertas para la misma mesa. Si dos móviles piden a la vez, el segundo choca con el índice, reintenta y se suma a la orden existente; SELECT … FOR UPDATE bloquea la orden mientras se agregan ítems.",
        alternative: "Comprobar en el código si existe una orden y crearla si no: entre la lectura y la escritura se cuela otra petición.",
        tradeoff: "Prisma no soporta índices parciales, así que el índice vive en SQL escrito a mano dentro de la migración.",
      },
      {
        title: "Tiempo real con LISTEN/NOTIFY de Postgres + SSE",
        what: "El evento solo dice qué cambió (orden y versión), nunca precios. El navegador invalida su caché de TanStack Query y vuelve a pedir los datos, con autorización en el servidor.",
        alternative: "Pusher o WebSockets propios: más infraestructura para un flujo que solo va del servidor al cliente.",
        tradeoff: "Necesita un servidor Node de larga duración (no serverless). Si se pierde un evento, la vista queda desactualizada hasta el siguiente.",
      },
      {
        title: "La cuenta como función pura, con precios copiados al pedir",
        what: "computeBill calcula subtotal, IVA y propina para la cuenta en vivo y para el cierre. Cada ítem guarda el nombre y el precio del momento, en centavos.",
        alternative: "Calcular con el precio actual del producto: si el admin lo cambia, cambia la cuenta de una mesa abierta.",
        tradeoff: "Datos duplicados en cada ítem, a cambio de cuentas que no cambian después de pedir.",
      },
    ],
    results: [
      { label: "Tests unitarios + integración", value: "201 / 201 en 13,9 s" },
      { label: "Pruebas E2E (Playwright)", value: "5 / 5, incluida concurrencia" },
      { label: "Lighthouse menú (móvil)", value: "Rendimiento 97, Accesibilidad 100" },
      { label: "Latencia del evento (SSE)", value: "< 1 s" },
    ],
    improve: [
      "Arreglar la cuenta del cliente: en mis pruebas no pasó a “Servido” en vivo, aunque el servidor sí emitió el evento.",
      "Limitar los intentos de login del personal; hoy el límite solo aplica a los pedidos.",
      "Agregar CI y desplegar en un servidor Node con Postgres.",
    ],
    videos: [
      { src: "/projects/mesa-viva/flujo-mesero-1440.webm", poster: "/projects/mesa-viva/1440-04-mesero-plano.png", caption: "Mesero: la ronda llega sin recargar, la confirma y la sirve." },
      { src: "/projects/mesa-viva/flujo-cliente-390.webm", poster: "/projects/mesa-viva/390-01-cliente-menu.png", caption: "Cliente: pide desde el móvil y sigue su cuenta.", mobile: true },
    ],
    gallery: [
      { src: "/projects/mesa-viva/390-01-cliente-menu.png", alt: "Menú del cliente en el móvil", caption: "Menú por categorías desde el QR.", mobile: true },
      { src: "/projects/mesa-viva/390-03-cliente-cuenta.png", alt: "Cuenta en vivo del cliente", caption: "Cuenta por rondas con IVA y propina sugerida.", mobile: true },
      { src: "/projects/mesa-viva/1440-02-cliente-carrito.png", alt: "Carrito con nota para cocina", caption: "Pedido con notas para cocina." },
      { src: "/projects/mesa-viva/1440-05-mesero-detalle-mesa.png", alt: "Detalle de mesa del mesero", caption: "Detalle de mesa: confirmar y servir rondas." },
      { src: "/projects/mesa-viva/1440-07-admin-qr.png", alt: "Códigos QR de las mesas en el admin", caption: "Admin: QR de cada mesa." },
    ],
  },
  {
    slug: "ventas-inventario",
    repo: REPO("ventas-inventario"),
    title: "Ventas e inventario: POS sin sobreventa",
    summary:
      "Punto de venta con inventario y reportes para una tienda de barrio: cada venta descuenta el stock de forma atómica y queda en una bitácora.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Zod"],
    cover: {
      src: "/projects/ventas-inventario/1440-02-pos-carrito.png",
      alt: "Punto de venta con productos y carrito",
    },
    oneLiner:
      "POS, inventario y reportes para una tienda de barrio en pesos colombianos.",
    role: [
      "Construí este proyecto con Claude Code, un agente de programación. Yo definí qué construir y le di las instrucciones; el agente escribió el código y yo lo revisé y probé cada funcionalidad.",
      "Quedó en un solo commit, así que el historial no muestra los pasos intermedios. No tiene tests automatizados ni login, y no tuvo usuarios reales.",
    ],
    problem: [
      "El escenario: una tienda que vende en caja y necesita saber qué stock le queda y cuánto gana.",
      "Restricciones: nada se borra (los productos se archivan y las ventas se anulan), el stock solo cambia mediante movimientos registrados y el dinero se guarda en centavos.",
    ],
    architecture: {
      src: "/projects/ventas-inventario/arquitectura.png",
      width: 3200,
      height: 1074,
      notes: [
        "Next.js con Server Components para leer y Server Actions para escribir; no hay API REST.",
        "Un módulo por dominio (ventas, inventario, productos, análisis) con queries, actions, esquemas Zod y servicios.",
        "Todo cambio de stock pasa por un único servicio, que escribe el movimiento en la misma transacción.",
      ],
    },
    decisions: [
      {
        title: "Descuento de stock condicional dentro de la transacción",
        what: "Cada línea descuenta con UPDATE … WHERE stock >= cantidad; si alguna no se actualiza, se revierte la venta completa. Las líneas se ordenan por producto para que el orden de bloqueo sea estable y no haya deadlocks.",
        alternative: "Leer el stock en la app y luego restar: dos cajas pueden vender la última unidad.",
        tradeoff: "Si algo se agota mientras se arma el carrito, la venta entera falla. Además, no hay un test que lo demuestre.",
      },
      {
        title: "Ventas idempotentes con clientRequestId",
        what: "Cada cobro lleva un id único generado en el navegador. Un reintento por mala conexión devuelve la venta existente en vez de duplicarla.",
        alternative: "Solo deshabilitar el botón de cobrar: no cubre los reintentos de red.",
        tradeoff: "El servidor maneja dos caminos: la verificación previa y el conflicto de la restricción UNIQUE.",
      },
      {
        title: "Bitácora de inventario con stock antes y después",
        what: "Cada venta, compra, ajuste o anulación crea un movimiento con la cantidad con signo y el stock antes y después. Las ventas guardan el precio y el costo del momento.",
        alternative: "Guardar solo el stock del producto: se pierde por qué cambió.",
        tradeoff: "Más escrituras por venta (1.668 ventas generaron 4.213 movimientos), y el stock queda duplicado sin una restricción que lo valide.",
      },
    ],
    results: [
      { label: "Venta en el POS", value: "Stock 22 → 21, verificado" },
      { label: "Datos de ejemplo", value: "1.668 ventas, 4.213 movimientos" },
      { label: "Lighthouse POS (escritorio)", value: "Rendimiento 100, Accesibilidad 96" },
      { label: "Tests automatizados", value: "No tiene" },
    ],
    improve: [
      "Escribir el test de concurrencia: dos ventas simultáneas de la última unidad.",
      "Agregar usuarios y roles: hoy cualquiera con la URL puede anular ventas.",
      "Hacer que el build no dependa de la base de datos.",
    ],
    videos: [
      { src: "/projects/ventas-inventario/flujo-venta-pos-1440.webm", poster: "/projects/ventas-inventario/1440-02-pos-carrito.png", caption: "Venta de tres artículos en efectivo, con cambio." },
    ],
    gallery: [
      { src: "/projects/ventas-inventario/1440-01-resumen.png", alt: "Resumen de ventas del día", caption: "Resumen del día y del mes." },
      { src: "/projects/ventas-inventario/1440-03-ventas.png", alt: "Historial de ventas", caption: "Historial de ventas con filtros." },
      { src: "/projects/ventas-inventario/1440-06-inventario.png", alt: "Bitácora de inventario", caption: "Inventario y bitácora de movimientos." },
      { src: "/projects/ventas-inventario/390-01-resumen.png", alt: "Resumen en el móvil", caption: "Resumen en el móvil.", mobile: true },
      { src: "/projects/ventas-inventario/390-02-pos-carrito.png", alt: "POS en el móvil", caption: "POS en el móvil.", mobile: true },
    ],
  },
  {
    slug: "caudal",
    repo: REPO("caudal"),
    title: "Caudal: finanzas personales que se categorizan solas",
    summary:
      "Registras un gasto escribiendo una frase como “Netflix 44.900 tarjeta nu” y la app deduce el importe, la cuenta y la categoría.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "TanStack"],
    cover: {
      src: "/projects/caudal/1440-06-dashboard-octubre.png",
      alt: "Dashboard de finanzas con indicadores, gráfico de ingresos y gastos y presupuestos",
    },
    oneLiner:
      "Finanzas personales con alta rápida en texto libre y categorización automática que aprende.",
    role: [
      "Construí este proyecto con Claude Code, un agente de programación. Yo definí qué construir y le di las instrucciones.",
      "El agente escribió el código y los tests a partir de un PRD de 17 historias, en unas 4 horas, como muestra el historial de git. Yo revisé el código generado y probé cada funcionalidad a mano. Todavía no tiene login: usa un usuario demo. No tuvo usuarios reales.",
    ],
    problem: [
      "El escenario: registrar gastos tiene que ser lo bastante rápido para hacerlo a diario, sin categorizar a mano cada vez.",
      "Restricciones: el dinero no puede tener errores de coma flotante, la búsqueda debe tolerar errores de escritura sin infraestructura extra y los filtros viven en la URL.",
    ],
    architecture: {
      src: "/projects/caudal/arquitectura.png",
      width: 3048,
      height: 1352,
      notes: [
        "Los Server Components precargan los datos y React Query los mantiene en caché en el cliente.",
        "Las escrituras van por Route Handlers /api/v1 con actualizaciones optimistas.",
        "La lógica vive en servicios que filtran siempre por usuario.",
      ],
    },
    decisions: [
      {
        title: "Categorización por reglas que aprende",
        what: "Normaliza el comercio (sin acentos ni “S.A.S.”) y prueba reglas por prioridad: las del usuario, el comercio conocido, las aprendidas y las semilla. Tras dos correcciones del mismo comercio, crea una regla nueva.",
        alternative: "Un clasificador o un LLM: más costoso, no determinista y difícil de explicar.",
        tradeoff: "Un comercio nuevo queda sin categoría hasta que el usuario la elige.",
      },
      {
        title: "Paginación por cursor con SQL",
        what: "Los movimientos se paginan por (fecha, id) en vez de OFFSET, con búsqueda apoyada en un índice GIN de pg_trgm.",
        alternative: "skip/take de Prisma: cada página es más lenta y salta o repite filas si se inserta algo.",
        tradeoff: "El SQL escrito a mano pierde el tipado de Prisma y no tiene tests contra una base real.",
      },
      {
        title: "Decimal(19,4) en la base de datos",
        what: "Los importes se guardan y escriben como Decimal; solo el dashboard los convierte a número para mostrar agregados redondeados.",
        alternative: "Centavos en enteros, como en los otros proyectos.",
        tradeoff: "Hay dos representaciones del dinero en el código, y conviene saber dónde está el límite.",
      },
    ],
    results: [
      { label: "Tests (Vitest)", value: "250 / 250 en 12,2 s" },
      { label: "Alta rápida", value: "Importe, cuenta y categoría deducidos" },
      { label: "Lighthouse dashboard (escritorio)", value: "Rendimiento 99, Accesibilidad 100" },
      { label: "Lighthouse dashboard (móvil)", value: "Rendimiento 76" },
    ],
    improve: [
      "Agregar autenticación real o aclarar que es un demo de un solo usuario.",
      "Tests de integración contra Postgres para el SQL escrito a mano.",
      "Mejorar el rendimiento del dashboard en móvil.",
    ],
    videos: [
      { src: "/projects/caudal/flujo-alta-rapida-1440.webm", poster: "/projects/caudal/1440-05-alta-rapida.png", caption: "Alta rápida: escribir el gasto, revisar lo que dedujo y guardar." },
    ],
    gallery: [
      { src: "/projects/caudal/1440-05-alta-rapida.png", alt: "Diálogo de alta rápida", caption: "Alta rápida en texto libre." },
      { src: "/projects/caudal/1440-02-movimientos.png", alt: "Tabla de movimientos", caption: "Movimientos con filtros en la URL." },
      { src: "/projects/caudal/1440-04-ajustes-reglas.png", alt: "Categorías y reglas", caption: "Categorías y reglas de categorización." },
      { src: "/projects/caudal/390-06-dashboard-octubre.png", alt: "Dashboard en el móvil", caption: "Dashboard en el móvil.", mobile: true },
      { src: "/projects/caudal/390-05-alta-rapida.png", alt: "Alta rápida en el móvil", caption: "Alta rápida en el móvil.", mobile: true },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
