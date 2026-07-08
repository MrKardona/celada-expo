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

/* ============================================================
   🧠 PREGUNTAS (quiz = tiene respuesta correcta y da puntos;
                 encuesta = solo opinión, da puntos por participar)
   - correcta: posición de la respuesta correcta (0 = primera)
   - puntos: cuántos puntos gana
   Puedes agregar más: copia un bloque, cambia el id y agrégalo a la ESCALETA.
============================================================ */
const IX = {
  frenaste: {
    tipo: 'encuesta', puntos: 50,
    pregunta: '¿Alguna vez quisiste comprar en USA… y te frenaste?',
    opciones: ['🙋 Sí, muchas veces', '😬 Lo intenté una vez', '🤔 No sabía que se podía']
  },
  miedo: {
    tipo: 'encuesta', puntos: 50,
    pregunta: '¿Cuál es tu mayor miedo al importar?',
    opciones: ['😱 Que me estafen', '🛃 Que la DIAN lo retenga', '💸 Que salga más caro', '📦 Que nunca llegue']
  },
  legal: {
    tipo: 'quiz', puntos: 100, correcta: 0,
    pregunta: '"Importar un celular a Colombia es ILEGAL"',
    opciones: ['🚫 Mito', '✅ Realidad']
  },
  tarjeta: {
    tipo: 'quiz', puntos: 100, correcta: 0,
    pregunta: '"Para comprar en USA necesitas tarjeta internacional sí o sí"',
    opciones: ['🚫 Mito', '✅ Realidad']
  },
  ahorro: {
    tipo: 'quiz', puntos: 100, correcta: 3,
    pregunta: 'Trayendo tu iPhone desde USA en vez de comprarlo aquí, ¿cuánto te ahorras?',
    opciones: ['Casi nada', 'Hasta $500 mil', 'Hasta $1 millón', 'Más de $1 millón']
  },
  tiempo: {
    tipo: 'quiz', puntos: 100, correcta: 2,
    pregunta: '¿Cuánto tarda en llegar tu paquete de USA a Colombia?',
    opciones: ['Más de 1 mes', '3-4 semanas', '10 a 15 días', '2-3 días']
  },
  dian: {
    tipo: 'quiz', puntos: 100, correcta: 0,
    pregunta: '"Si la DIAN revisa tu paquete, lo pierdes"',
    opciones: ['🚫 Mito', '✅ Realidad']
  },
  traer: {
    tipo: 'encuesta', puntos: 50,
    pregunta: '¿Qué traerías primero con tu casillero?',
    opciones: ['📱 Tecnología', '👟 Sneakers', '👕 Ropa', '🎮 Gadgets / consolas']
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
               ], fotos:['producto-1.webp','producto-2.webp','producto-3.webp','producto-4.webp','producto-5.webp','producto-6.webp'] },
  quitamiedo: { emoji:'🔥', kicker:'HOY', titulo:'Hoy le perdemos el miedo a importar.', texto:'Saca tu celular: durante toda la charla vas a jugar, aprender y ganar.' },
  /* 'galeria' = texto fijo a la IZQUIERDA + fotos/videos que pasan solos a la DERECHA.
     Pon los nombres de tus archivos dentro de 'fotos' (deben estar en la misma carpeta).
     Acepta imágenes (.webp/.jpg/.png) y videos (.mp4). Vacío [] = solo texto. */
  historia:   { tipo:'galeria', emoji:'📦', kicker:'NUESTRA HISTORIA', titulo:'Nosotros también tuvimos miedo de importar.', texto:'Primeros paquetes, primeros errores, primeros clientes… +7 años después: miles de entregas.', fotos:['historia-1.webp','video1.mp4','historia-2.webp'] },
  diego:      { emoji:'🎤', kicker:'CON USTEDES', titulo:'DIEGO CELADA', texto:'La persona que les va a enseñar a importar celulares. 👏👏👏' },
  oferta:     { emoji:'🎁', kicker:'SOLO HOY EN EXPOMOBILE', titulo:'5 LIBRAS GRATIS', texto:'Activa tu casillero en el stand de Celada Shopper y estrena tu primer envío. Cupos limitados a los asistentes de hoy.' }
};

/* ============================================================
   🎬 ESCALETA — el ORDEN del show (el botón SIGUIENTE sigue esta lista)
   - Diapositivas: 'slide:' + nombre del SLIDE
   - Preguntas: el id de IX
   - Especiales: 'espera' (QR gigante) y 'final' (ranking)
============================================================ */
const ESCALETA = [
  { id:'slide:portada',    t:'🎬 Portada' },
  { id:'espera',           t:'🏠 QR gigante: que entren al reto' },
  { id:'slide:gancho',     t:'🎣 Gancho + precios USA (se reproduce solo)' },
  { id:'frenaste',         t:'📊 ENCUESTA: ¿quisiste comprar en USA y te frenaste?' },
  { id:'slide:quitamiedo', t:'🔥 "Hoy te quitamos el miedo"' },
  { id:'miedo',            t:'📊 ENCUESTA: ¿tu mayor miedo al importar?' },
  { id:'slide:historia',   t:'📦 Historia de Celada Shopper' },
  { id:'legal',            t:'🧠 QUIZ: "Importar es ilegal" → Mito' },
  { id:'tarjeta',          t:'🧠 QUIZ: "Necesitas tarjeta internacional" → Mito' },
  { id:'ahorro',           t:'🧠 QUIZ: ¿cuánto te ahorras? 💥' },
  { id:'slide:diego',      t:'🎤 Entrada de DIEGO' },
  { id:'tiempo',           t:'🧠 QUIZ: ¿cuánto tarda en llegar? (10-15 días)' },
  { id:'dian',             t:'🧠 QUIZ: "La DIAN lo retiene" → Mito' },
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
