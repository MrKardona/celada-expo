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
const TIEMPO_PREGUNTA = 30; /* ⏱️ segundos del temporizador de cada pregunta (0 = sin temporizador) */

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
  /* quiz con IMÁGENES: imgsPantalla = las que ve el público (con precio); imgsCelular = las que toca el usuario */
  comprarias: {
    tipo: 'quiz', puntos: 100, correcta: 2,
    pregunta: '¿Cuál de estos celulares comprarías?',
    opciones: ['iPhone 14 Pro Max', 'iPhone 13 Pro Max', 'iPhone 15 Pro Max'],
    imgsPantalla: ['comprar-p1.webp','comprar-p2.webp','comprar-p3.webp'],
    imgsCelular: ['comprar-c1.webp','comprar-c2.webp','comprar-c3.webp'],
    dato: 'El iPhone 15 Pro Max: lo más nuevo, mejor cámara y mejor reventa.'
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
  /* 'oferta' = slide especial estilo $100M Offers: título + stack de valor + urgencia + CTA */
  oferta:     { tipo:'oferta', kicker:'SOLO HOY EN EXPOMOBILE', titulo:'Estrena tu casillero con 5 LIBRAS GRATIS', bullets:[
                 'Tu casillero en Estados Unidos — GRATIS',
                 '5 libras de envío gratis en tu primer pedido',
                 'Compramos por ti: sin tarjeta internacional',
                 'Asesoría 1 a 1 para tu primera importación'
               ], urgencia:'Cupos limitados · solo para los asistentes de hoy', cta:'Actívalo en el stand de Celada Shopper 👉' }
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
  { id:'slide:dondecomprar', t:'🛒 Dónde comprar en USA (logos)' },
  { id:'dondepoll',        t:'📊 ENCUESTA: ¿dónde comprarías tú? (resultados en vivo)' },
  { id:'comprarias',       t:'📱 QUIZ visual: ¿cuál celular comprarías? (15 Pro Max)' },
  { id:'legal',            t:'🧠 QUIZ: "Importar es ilegal" → Mito' },
  { id:'experto',          t:'🧠 QUIZ: "Solo para expertos" → Mito' },
  { id:'tarjeta',          t:'🧠 QUIZ: "Necesitas tarjeta internacional" → Mito' },
  { id:'imei',             t:'💎 QUIZ IMEI: cómo evitar que te lo bloqueen' },
  { id:'personalidad',     t:'😜 ENCUESTA divertida: te llega un iPhone gratis…' },
  { id:'dian',             t:'🧠 QUIZ: "La DIAN lo retiene" → Mito' },
  { id:'tiempo',           t:'🧠 QUIZ: ¿cuánto tarda? (10-15 días)' },
  { id:'precio',           t:'💥 QUIZ DOBLE: precio del iPhone en USA' },
  { id:'traer',            t:'📊 ENCUESTA: ¿qué traerías primero?' },
  { id:'slide:oferta',     t:'🎁 Oferta: 5 libras gratis en el stand' },
  { id:'final',            t:'🏆 RANKING FINAL + premio celular' }
];

/* ============================================================
   🏆 PREMIOS (textos del cierre)
============================================================ */
const PREMIOS = {
  top1: '👑 TOP 1 gana el envío de su celular GRATIS 📱✈️',
  todos: 'Y todos: 5 LIBRAS GRATIS registrándose en el stand 🎁'
};
