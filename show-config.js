/* ============================================================
   🎬 IMPORT CHALLENGE — CONFIGURACIÓN DEL SHOW
   Este es el ÚNICO archivo que editas para cambiar la presentación:
   preguntas, diapositivas, orden del show y premios.
   Lo usan las 3 pantallas: jugar.html, pantalla.html y panel.html
============================================================ */

/* — Conexión (no tocar) — */
const SB_URL = 'https://igijeqhyppvpennjdkiu.supabase.co';
const SB_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlnaWplcWh5cHB2cGVubmpka2l1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYwMDc5NTksImV4cCI6MjA5MTU4Mzk1OX0.5JdsyKQ3Mscpun1efjKarvcz9q032n-TpYOHaszQ5qw';
const URL_JUGAR = 'https://expo.celadashopper.com/jugar.html';
const GAL_MS = 3200;   /* ⏱️ milisegundos que dura cada foto en la galería de historia (3200 = 3,2s) */
const FRASE_MS = 2200; /* ⏱️ milisegundos entre cada frase del gancho animado antes del carrusel de productos */
const TIEMPO_PREGUNTA = 30; /* ⏱️ segundos del temporizador de cada pregunta (0 = sin temporizador; una pregunta puede llevar sinTimer:true para no tener) */
const QUIZ_IMG_MS = 12000;  /* ⏱️ milisegundos que dura cada imagen grande en el quiz visual (12000 = 12s) */

/* ============================================================
   🧠 PREGUNTAS (quiz = tiene respuesta correcta y da puntos;
                 encuesta = solo opinión, da puntos por participar)
   - correcta: posición de la respuesta correcta (0 = primera)
   - puntos: cuántos puntos gana
   Puedes agregar más: copia un bloque, cambia el id y agrégalo a la ESCALETA.
============================================================ */
const IX = {
  frenaste: {
    tipo: 'encuesta', puntos: 25,
    pregunta: '¿Alguna vez quisiste comprar teléfonos en el exterior?',
    opciones: ['🙋 Sí, pero me dio miedo', '💭 Sí, pero no supe cómo', '😎 Sí, y ya lo hago', '🚀 Nunca, pero quiero'],
    puntosPorOpcion: [25, 25, 0, 25]
  },
  miedo: {
    tipo: 'encuesta', puntos: 25,
    pregunta: '¿Cuál es tu mayor miedo al importar de otro país a Colombia?',
    opciones: ['😱 Que me estafen', '🛃 Que la DIAN lo retenga', '💸 Que salga más caro', '📦 Que nunca llegue']
  },
  legal: {
    tipo: 'quiz', puntos: 100, correcta: 0,
    pregunta: '"Importar un celular a Colombia es ILEGAL"',
    opciones: ['🚫 Mito', '✅ Realidad'],
    dato: 'Importar tu propio celular a Colombia es 100% legal.'
  },
  experto: {
    tipo: 'quiz', puntos: 100, correcta: 0,
    pregunta: '"Comprar en USA es solo para expertos en tecnología"',
    opciones: ['🚫 Mito', '✅ Realidad'],
    dato: 'Si sabes pedir un domicilio, sabes importar. Celada hace lo difícil.'
  },
  tarjeta: {
    tipo: 'quiz', puntos: 100, correcta: 0,
    pregunta: '"Para comprar en USA necesitas tarjeta internacional sí o sí"',
    opciones: ['🚫 Mito', '✅ Realidad'],
    dato: 'No necesitas tarjeta internacional: Celada compra por ti.'
  },
  imei: {
    tipo: 'quiz', puntos: 100, correcta: 0,
    pregunta: 'Traes tu celular de USA. Para que NO te lo bloqueen a los 20 días, ¿qué debes hacer?',
    opciones: ['📲 Registrar el IMEI (gratis)', '😎 Nada, funciona solo', '🔁 Comprar otro chip', '🙏 Rezar'],
    dato: 'Registrar el IMEI es gratis y se hace con la factura. Celada te la entrega.'
  },
  dian: {
    tipo: 'quiz', puntos: 100, correcta: 0,
    pregunta: '"Si la DIAN revisa tu paquete, lo pierdes"',
    opciones: ['🚫 Mito', '✅ Realidad'],
    dato: 'Aunque la DIAN lo revise, tu paquete NO se pierde.'
  },
  tiempo: {
    tipo: 'quiz', puntos: 100, correcta: 2,
    pregunta: '¿Cuánto tarda en llegar tu paquete de USA a Colombia?',
    opciones: ['Más de 1 mes', '3-4 semanas', '10 a 15 días', '2-3 días'],
    dato: 'Tu paquete llega en solo 10 a 15 días.'
  },
  precio: {
    tipo: 'quiz', puntos: 200, correcta: 1,
    pregunta: 'En Colombia un iPhone 16 Pro cuesta ~$6.000.000. ¿Cuánto cuesta NUEVO en USA? (¡DOBLE PUNTOS!)',
    opciones: ['~$5,5 millones', '~$4 millones (US$999)', '~$2,5 millones', '~$800 mil'],
    dato: 'US$999 ≈ $4 millones. Trayéndolo tú te ahorras casi $2 millones.'
  },
  traer: {
    tipo: 'encuesta', puntos: 50,
    pregunta: '¿Qué traerías primero con tu casillero?',
    opciones: ['📱 Tecnología', '👟 Sneakers', '👕 Ropa', '🎮 Gadgets / consolas']
  },
  personalidad: {
    tipo: 'encuesta', puntos: 50,
    pregunta: 'Te llega un iPhone nuevo mañana. ¿Qué haces primero? 😏',
    opciones: ['📸 Story presumido', '💰 Lo revendo', '🙈 Se lo escondo a mi pareja', '👶 Lo cuido como un bebé']
  },
  dondepoll: {
    tipo: 'encuesta', puntos: 25,
    pregunta: '¿Dónde comprarías tú?',
    opciones: ['🛒 Amazon', '🏷️ eBay', '🤝 Swappa', '🍏 Apple', '♻️ Back Market', '🏭 Mayoristas']
  },
  tipoimport: {
    tipo: 'encuesta', puntos: 25, estilo: 'tarjetas', /* estilo tarjetas: en pantalla salen tarjetas grandes con el % abajo */
    pregunta: '⚖️ Comprar ≠ importar. Cuando cambia el propósito, cambian las reglas. ¿Tú para qué importarías?',
    opciones: ['📱 Con fines personales', '🏪 Con fines comerciales']
  },
  /* JUEGO 'tienda': las ofertas aparecen UNA POR UNA en el celular con botones COMPRAR / IGNORAR.
     La imagen pasa a la siguiente cuando el usuario responde. En pantalla: carrusel con conteo en vivo.
     - correcta: 'comprar' o 'ignorar' (acierto = puntos, error = puntosError)
     - siCompra / siIgnora: mensaje que ve el usuario en su celular según lo que elija
     - resumen: texto corto que sale en pantalla al REVELAR */
  comprarias: {
    tipo: 'tienda', puntos: 100, puntosError: 25, sinTimer: true,
    pregunta: '¿La compras o la ignoras?',
    items: [
      { nombre:'iPhone 14 Pro Max', imgPantalla:'comprar-p1.webp', imgCelular:'comprar-c1.webp', correcta:'ignorar',
        siCompra:'📉 Perdiste el 70% de tu inversión: está bloqueado por AT&T y solo te sirve para redes sociales con WiFi, no para llamadas ni datos.',
        siIgnora:'🛡️ ¡Bien visto! Evitaste perder el 70% de tu inversión: estaba bloqueado por AT&T.',
        resumen:'Bloqueado por AT&T · comprarlo era perder el 70%' },
      { nombre:'iPhone 13 Pro Max', imgPantalla:'comprar-p2.webp', imgCelular:'comprar-c2.webp', correcta:'ignorar',
        siCompra:'🔋 Perdiste el 10% de tu inversión: la batería estaba con fallas y había que repararla.',
        siIgnora:'✅ Bien visto: la batería tenía fallas, evitaste perder el 10% en la reparación.',
        resumen:'Batería con fallas · comprarlo era perder el 10%' },
      { nombre:'iPhone 15 Pro Max', imgPantalla:'comprar-p3.webp', imgCelular:'comprar-c3.webp', correcta:'comprar',
        siCompra:'🚀 ¡Ganaste un 15% de tu inversión! El equipo está en óptimas condiciones.',
        siIgnora:'😅 Era una buena oferta: pudiste ganar el 15% de lo invertido.',
        resumen:'Óptimas condiciones · comprarlo era ganar el 15%' }
    ]
  }
};

/* ============================================================
   🖼️ DIAPOSITIVAS (lo que se ve en la pantalla grande)
   - kicker: frase pequeña dorada arriba
   - titulo: texto gigante
   - texto: párrafo de apoyo
   - emoji: ícono grande superior
============================================================ */
const SLIDES = {
  /* Si una diapositiva tiene "img", se muestra la imagen a pantalla completa */
  portada:    { img:'portada-show.webp' },
  /* tipo 'gancho': UNA sola slide que se reproduce sola. Primero muestra las 'frases'
     una por una (cada FRASE_MS), y luego arranca un carrusel a pantalla completa con las
     'fotos' de productos (precios ya incluidos en la imagen), cada una dura GAL_MS.
     Deja 'fotos' vacío [] para mostrar solo las frases. */
  gancho:     { tipo:'gancho', kicker:'LEVANTA LA MANO 🙋', frases:[
                 '¿Has visto un iPhone en Amazon…',
                 '…y pensaste…',
                 '"seguro aquí me sale MUCHO más barato" 🤑'
               ], fotos:['producto-1.webp','producto-2.webp','producto-3.webp','producto-4.webp','producto-5.webp'] },
  /* un slide normal puede llevar 'gif' o 'img' pequeña (reemplaza el emoji de arriba) */
  quitamiedo: { gif:'tengo-miedo.mp4', titulo:'Hoy le perdemos el miedo a importar celulares de Estados Unidos para Colombia.', texto:'Ese miedo es normal… y hoy te vamos a demostrar que no hay nada que temer.' },
  /* 'galeria' = texto fijo a la IZQUIERDA + fotos/videos que pasan solos a la DERECHA.
     Pon los nombres de tus archivos dentro de 'fotos' (deben estar en la misma carpeta).
     Acepta imágenes (.webp/.jpg/.png) y videos (.mp4). Vacío [] = solo texto. */
  historia:   { tipo:'galeria', emoji:'📦', kicker:'NUESTRA HISTORIA', titulo:'Nosotros también tuvimos miedo… al principio.', texto:'Primeros paquetes, primeros errores, primeros clientes. Con el tiempo, estos fueron los resultados: +7 años importando y miles de entregas. 📦', fotos:['historia-1.webp','video1.mp4','historia-2.webp'] },
  aprendimos: { tipo:'galeria', emoji:'🚀', kicker:'CON EL TIEMPO', titulo:'Con el paso del tiempo, aprendimos poco a poco cómo hacerlo.', texto:'', fotos:['historia-vid-1.mp4','historia-vid-2.mp4','historia-vid-3.mp4'] },
  /* 'presenta' = slide de presentación del presentador: nombre grande arriba, video (aplausos) abajo, luces de escenario animadas */
  diego:      { tipo:'presenta', gif:'aplausos.mp4', kicker:'CON USTEDES', titulo:'DIEGO CELADA', texto:'La persona que les va a enseñar a importar celulares.' },
  /* 'logos' = grilla de logos que aparecen en orden aleatorio con animación (también en el celular) */
  dondecomprar: { tipo:'logos', kicker:'DÓNDE COMPRAR', titulo:'¿Dónde comprar en Estados Unidos?', texto:'Las tiendas donde conseguimos todo por ti.', fotos:['logo-1.webp','logo-2.webp','logo-3.webp','logo-4.webp','logo-5.webp','logo-6.webp'] },


  /* ── BLOQUE EDUCATIVO: de comprador a importador ── */
  /* tipo 'mito': pregunta + PALABRA gigante animada (NO/SÍ) + dato. Muy visual. */
  limite: {
    tipo:'mito', kicker:'MITO FRECUENTE', qaCajita:true,
    titulo:'¿Existe un límite de celulares al mes?',
    palabra:'NO',
    texto:'La ley colombiana no establece un número máximo mensual.',
    dato:'No importa solo cuántos importas, sino para qué los importas.'
  },
  dianobserva: {
    tipo:'checklist', kicker:'ASÍ TE VE LA DIAN', qaCajita:true,
    titulo:'¿Qué observa la DIAN?',
    texto:'',
    items:[
      { e:'📅', t:'Frecuencia', d:'De tus importaciones.' },
      { e:'📦', t:'Cantidad', d:'De equipos por envío.' },
      { e:'💰', t:'Valor', d:'De las operaciones.' },
      { e:'🏪', t:'Destino', d:'Comercial de la mercancía.' }
    ],
    dato:'La DIAN analiza el comportamiento del importador, no únicamente el contenido del paquete.'
  },
  uvt: {
    tipo:'checklist', kicker:'EL NÚMERO CLAVE', qaCajita:true,
    titulo:'Las 22 UVT',
    texto:'',
    items:[
      { e:'✅', t:'Hasta 22 UVT', d:'Puede conservar beneficios tributarios.' },
      { e:'💰', t:'Más de 22 UVT', d:'Se puede importar, pagando los tributos que correspondan.' }
    ],
    dato:'22 UVT NO significa que esté prohibido importar.'
  },
  nosolocaja: {
    tipo:'checklist', kicker:'EL PROCESO COMPLETO', qaCajita:true,
    titulo:'Importar no es solo traer una caja',
    texto:'',
    items:[
      { e:'✈️', t:'1. Transporte internacional', d:'De USA a Colombia.' },
      { e:'📑', t:'2. Declaración', d:'De la mercancía.' },
      { e:'🏛️', t:'3. Nacionalización', d:'Ingreso legal al país.' },
      { e:'💰', t:'4. Pago de tributos', d:'Los que correspondan.' },
      { e:'📦', t:'5. Entrega al cliente', d:'El último paso.' }
    ],
    dato:'Importar comienza donde termina la compra.'
  },
  nacionalizar: {
    tipo:'checklist', kicker:'LA PALABRA CLAVE', qaCajita:true,
    titulo:'¿Qué significa nacionalizar?',
    texto:'Es el proceso que legaliza tu mercancía ante la DIAN, paso a paso:',
    items:[
      { e:'📑', t:'1. Declaración de importación', d:'Se presenta ante la DIAN cuando llega la mercancía.' },
      { e:'🔍', t:'2. Inspección', d:'La DIAN revisa documentos y, si aplica, la carga física.' },
      { e:'💰', t:'3. Pago de tributos', d:'Arancel e IVA que correspondan.' },
      { e:'✅', t:'4. Levante', d:'La DIAN autoriza retirar la mercancía.' },
      { e:'📦', t:'5. Ya es legal', d:'Queda oficialmente nacionalizada y la puedes vender.' }
    ],
    dato:'Sin el “levante” de la DIAN, la mercancía no puede salir ni venderse. Con Celada, ese proceso lo hacemos por ti.'
  },
  couriervs: {
    tipo:'checklist', kicker:'DOS CAMINOS', qaCajita:true,
    titulo:'Courier vs Importación Ordinaria',
    texto:'',
    items:[
      { e:'📬', t:'Courier (casillero)', d:'Uso personal · pocas unidades · proceso simple.' },
      { e:'🏗️', t:'Importación ordinaria', d:'Uso comercial · grandes cantidades · agente de aduanas · operación estructurada.' }
    ],
    dato:'Cada modalidad responde a una necesidad diferente.'
  },
  importador: {
    tipo:'checklist', kicker:'EL SALTO', qaCajita:true,
    titulo:'¿Cuándo te conviertes en importador?',
    texto:'Cuando dejas de comprar para ti… y comienzas a importar para vender. Necesitas:',
    items:[
      { e:'🤝', t:'Proveedor', d:'Confiable en USA.' },
      { e:'🚚', t:'Logística', d:'Transporte y tiempos claros.' },
      { e:'🏛️', t:'Nacionalización', d:'Todo en regla.' },
      { e:'📊', t:'Inventario', d:'Control de tu mercancía.' },
      { e:'🧠', t:'Planeación', d:'Números antes que impulsos.' }
    ],
    dato:'Ya no eres solo un comprador. Ahora eres un importador.'
  },
  costoreal: {
    tipo:'checklist', kicker:'¿REALMENTE ESTÁS GANANDO?', qaCajita:true,
    titulo:'El costo real de importar',
    texto:'Costo del celular ➕ envío ➕ seguro ➕ tributos ➕ otros costos 🟰 COSTO REAL',
    items:[
      { e:'📱', t:'Costo del celular', d:'Precio de compra en USA.' },
      { e:'✈️', t:'Envío', d:'Flete internacional.' },
      { e:'🛡️', t:'Seguro', d:'Protege tu inversión.' },
      { e:'🏛️', t:'Tributos', d:'Lo que corresponda pagar.' },
      { e:'➕', t:'Otros costos', d:'Comisiones, últimas millas…' }
    ],
    dato:'La utilidad se calcula, no se adivina.'
  },
  /* tipo 'ejemplos': en el CELULAR se elige un caso (Menor/Mayor a 22 UVT) y se ve el desglose,
     con botón ⬅ Atrás para cambiar de caso. En pantalla salen los 2 casos lado a lado. */
  ejemplos: {
    tipo:'ejemplos', kicker:'EJEMPLO REAL',
    titulo:'¿Cuánto cuesta de verdad importar un celular?',
    texto:'Elige un caso en tu celular y mira los números reales 👇',
    tasa:'Valores en USD · 22 UVT 2026 = $1.152.228 (≈ USD 281) · importación legal vía courier: 1 equipo por envío, con IMEI homologado ante la CRC',
    casos:[
      { id:'menor', emoji:'📱', etiqueta:'Menor a 22 UVT', sub:'Uso personal · sin impuestos',
        producto:'iPhone SE 3ª gen 64GB usado (comprado en USA)',
        lineas:[
          { c:'📱 Precio del celular en USA', v:'USD 100' },
          { c:'✈️ Envío (casillero Celada)', v:'USD 22' },
          { c:'🛡️ Seguro tecnología (4%)', v:'USD 4' },
          { c:'🏛️ Arancel', v:'USD 0' },
          { c:'🏛️ IVA', v:'USD 0' }
        ],
        nota:'Es un smartphone y vale menos de 22 UVT → EXCLUIDO de IVA. Como cuesta menos de USD 200, tampoco paga arancel (TLC con USA). Legal: 1 equipo por envío, IMEI declarado y homologado ante la CRC.',
        total:'≈ USD 126', totalCop:'~$517.000 COP' },
      { id:'mayor', emoji:'💼', etiqueta:'Mayor a 22 UVT', sub:'Reventa · con impuestos',
        producto:'iPhone 15 128GB usado (comprado en USA)',
        lineas:[
          { c:'📱 Precio del celular en USA', v:'USD 360' },
          { c:'✈️ Envío (casillero Celada)', v:'USD 22' },
          { c:'🛡️ Seguro tecnología (4%)', v:'USD 14' },
          { c:'🏛️ Arancel (10% s/ valor+flete+seguro)', v:'USD 40' },
          { c:'🏛️ IVA (19%)', v:'USD 83' }
        ],
        nota:'Supera 22 UVT y USD 200 → paga arancel + IVA (todo legal). Un equipo por envío vía courier. OJO: para volumen de reventa (varias unidades) ya es importación ordinaria con agencia de aduanas y RUT importador. Se vende en Colombia ~$2.700.000: sin contar los impuestos crees que ganas más de lo real.',
        total:'≈ USD 519', totalCop:'~$2.128.000 COP' }
    ],
    dato:'La utilidad se calcula, no se adivina — y siempre por el camino legal.'
  },
  /* Slide 23: gran importador (10 unidades, importación ordinaria) */
  granimportador: {
    tipo:'checklist', kicker:'NIVEL PRO',
    titulo:'Gran importador: 10 unidades, 100% legal',
    texto:'Traer volumen para revender ya NO es courier: es importación ordinaria. Esto necesitas:',
    items:[
      { e:'🧾', t:'RUT importador', d:'Con responsabilidad aduanera y código de comercio.' },
      { e:'🏢', t:'Cámara de Comercio', d:'Matrícula mercantil de tu negocio.' },
      { e:'🧑‍💼', t:'Agencia de aduanas', d:'Obligatoria desde USD 1.000 de mercancía.' },
      { e:'📲', t:'Homologación CRC + IMEI', d:'Cada equipo homologado y verificado ante MinTIC.' },
      { e:'📄', t:'Registro de importación (VUCE)', d:'+ factura, transporte y certificado de origen (TLC).' },
      { e:'💰', t:'Pago de tributos', d:'Antes del levante. Celulares: 0% arancel · IVA 19% descontable.' }
    ],
    dato:'Ejemplo: 10 iPhone 15 usados (USD 360 c/u) → costo real ≈ USD 4.194 (~$1.720.000 c/u). El IVA se recupera y todo es deducible.'
  },

  revisar: {
    tipo:'checklist',
    kicker:'ANTES DE COMPRAR',
    titulo:'9 cosas que debes revisar',
    texto:'Antes de pagar por un celular, revisa esto:',
    items:[
      { e:'🔓', t:'Que esté desbloqueado', d:'Factory Unlocked, sin operador que lo limite.' },
      { e:'📶', t:'Compatible con Colombia', d:'Bandas 4G/5G de aquí y homologado en el país.' },
      { e:'🆔', t:'IMEI limpio', d:'Sin reporte de robo, pérdida o bloqueo.' },
      { e:'🔒', t:'Sin bloqueo iCloud/Google', d:'Con activación bloqueada, no sirve.' },
      { e:'🔋', t:'Batería sana', d:'En iPhone, idealmente arriba del 80%.' },
      { e:'📱', t:'Estado físico', d:'Pantalla, cámaras, Face ID, golpes y sin piezas cambiadas.' },
      { e:'📦', t:'Nuevo o usado', d:'Cambia precio, garantía e importación.' },
      { e:'💵', t:'Precio real del mercado', d:'Compara en varias plataformas antes de pagar.' },
      { e:'🛡️', t:'Reputación del vendedor', d:'Mira calificaciones e historial de ventas.' }
    ],
    dato:'Con Celada revisamos todo esto por ti antes de comprar.'
  },
  /* 'oferta' = slide especial estilo $100M Offers: título + stack de valor + urgencia + CTA */
  oferta:     { tipo:'oferta', kicker:'SOLO HOY · SOLO EN EXPOMOBILE',
                titulo:'Estrena tu casillero con 5 LIBRAS GRATIS',
                subtitulo:'Todo lo que viste hoy… ahora hecho POR TI. Empieza a importar sin riesgo.',
                bullets:[
                 'Tu casillero propio en Miami, USA — 100% GRATIS',
                 '5 libras de envío GRATIS en tu primer pedido',
                 'Compramos por ti: sin tarjeta internacional',
                 'Asesoría 1 a 1 para tu primera importación'
               ], urgencia:'Cupos limitados · solo para los asistentes de HOY', cta:'Actívalo YA en el stand de Celada Shopper 👉' }
};

/* ============================================================
   🎬 ESCALETA — el ORDEN del show (el botón SIGUIENTE sigue esta lista)
   - Diapositivas: 'slide:' + nombre del SLIDE
   - Preguntas: el id de IX
   - Especiales: 'espera' (QR gigante) y 'final' (ranking)
============================================================ */
const ESCALETA = [
  { id:'espera',           t:'🏠 QR gigante: que entren al reto (PRIMERO)' },
  { id:'slide:portada',    t:'🎬 Portada de la presentación' },
  { id:'slide:gancho',     t:'🎣 Gancho + precios USA (se reproduce solo)' },
  { id:'frenaste',         t:'📊 ENCUESTA: ¿quisiste comprar en USA y te frenaste?' },
  { id:'miedo',            t:'📊 ENCUESTA: ¿tu mayor miedo al importar?' },
  { id:'slide:quitamiedo', t:'🔥 "Hoy te quitamos el miedo"' },
  { id:'slide:historia',   t:'📦 Historia de Celada Shopper' },
  { id:'slide:aprendimos', t:'🚀 Con el tiempo aprendimos a hacerlo (fotos/videos)' },
  { id:'slide:diego',      t:'🎤 Entrada de DIEGO (el guía que enseña)' },
  { id:'slide:revisar',    t:'✅ Qué revisar antes de comprar (informativo)' },
  { id:'slide:dondecomprar', t:'🛒 Dónde comprar en USA (logos + votación en vivo)' },
  { id:'comprarias',       t:'🛍️ JUEGO: ¿comprar o ignorar? (3 iPhones, feedback al responder)' },
  { id:'tipoimport',       t:'⚖️ ENCUESTA: comprar ≠ importar, ¿uso personal (1-9) o comercial (10+)?' },
  { id:'slide:limite',     t:'🚫 ¿Límite de celulares al mes? NO — qué analiza la DIAN' },
  { id:'slide:dianobserva', t:'👀 ¿Qué observa la DIAN? (comportamiento, no solo paquete)' },
  { id:'slide:uvt',        t:'💰 Las 22 UVT (no es prohibición)' },
  { id:'slide:nosolocaja', t:'📦 Importar no es solo traer una caja (5 pasos)' },
  { id:'slide:nacionalizar', t:'🏛️ ¿Qué significa nacionalizar?' },
  { id:'slide:couriervs',  t:'📬 Courier vs importación ordinaria' },
  { id:'slide:importador', t:'🚀 ¿Cuándo te conviertes en importador?' },
  { id:'slide:costoreal',  t:'🧮 El costo real de importar (la utilidad se calcula)' },
  { id:'slide:ejemplos',   t:'📊 EJEMPLO REAL: elige mayor/menor a 22 UVT y ve los números (celular)' },
  { id:'slide:granimportador', t:'🏢 GRAN IMPORTADOR: 10 unidades legal (requisitos + costos)' },
  { id:'preguntas',        t:'🎤 Q&A: el público escribe preguntas; tú eliges cuáles mostrar y responder' },
  { id:'slide:oferta',     t:'🎁 Oferta: 5 libras gratis en el stand' },
  { id:'final',            t:'🏆 PODIO: ganador deja sus datos, el resto activa sus libras' }
];

/* ============================================================
   🏁 CIERRE: qué pasa en el celular cuando termina el show
   - El GANADOR (TOP 1) ve un formulario para reclamar el premio
     (correo + confirmar WhatsApp) que entra directo a los leads.
   - El RESTO ve el paso a paso para activar sus 5 LIBRAS:
     ir al stand → escanear el QR "ACTIVAR LIBRAS" del panel →
     enviar el WhatsApp que se abre prellenado.
============================================================ */
const CIERRE = {
  urlLanding: 'https://expo.celadashopper.com',
  whatsapp: '573001260097',
  /* el mensaje DEBE contener "EXPOMOBILE" para que el bot de Kommo lo active. Sin emojis (iPhone). */
  msgActivar: 'Quiero activar mis 5 LIBRAS GRATIS de EXPOMOBILE',
  msgGanador: 'Soy el GANADOR del show EXPOMOBILE y quiero reclamar el envio gratis de mi celular',
  webhookUrl: 'https://igijeqhyppvpennjdkiu.supabase.co/functions/v1/lead',
  webhookToken: 'celada-expo-2026'
};

/* ============================================================
   🏆 PREMIOS (textos del cierre)
============================================================ */
const PREMIOS = {
  top1: '👑 El TOP 1 gana el ENVÍO de un celular desde Estados Unidos a Colombia — ¡GRATIS! 📱✈️',
  todos: 'Y todos los demás: 5 LIBRAS GRATIS reclamándolas en el stand 🎁'
};
