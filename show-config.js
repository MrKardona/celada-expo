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
const GAL_MS = 3200; /* ⏱️ milisegundos que dura cada foto en la galería de historia (3200 = 3,2s) */

/* ============================================================
   🧠 PREGUNTAS (quiz = tiene respuesta correcta y da puntos;
                 encuesta = solo opinión, da puntos por participar)
   - correcta: posición de la respuesta correcta (0 = primera)
   - puntos: cuántos puntos gana
   Puedes agregar más: copia un bloque, cambia el id y agrégalo a la ESCALETA.
============================================================ */
const IX = {
  tepaso: {
    tipo: 'encuesta', puntos: 50,
    pregunta: '¿Te ha pasado? 😅',
    opciones: ['🙋 Sí, me ha pasado', '👀 Nunca']
  },
  miedo: {
    tipo: 'encuesta', puntos: 50,
    pregunta: '¿Cuál es tu mayor miedo al importar?',
    opciones: ['😱 Que me estafen', '🛃 Que la DIAN lo retenga', '💸 Que salga más caro', '📦 Que nunca llegue']
  },
  mito1: {
    tipo: 'quiz', puntos: 100, correcta: 0,
    pregunta: '"Importar un celular a Colombia es ilegal"',
    opciones: ['🚫 Mito', '✅ Realidad']
  },
  precio: {
    tipo: 'quiz', puntos: 100, correcta: 1,
    pregunta: 'iPhone 16 Pro 256GB nuevo en USA: ¿precio aproximado?',
    opciones: ['$999 USD', '$1.099 USD', '$1.299 USD', '$1.499 USD']
  },
  dificil: {
    tipo: 'encuesta', puntos: 50,
    pregunta: '¿Crees que importar un celular es difícil?',
    opciones: ['😰 Sí', '😎 No']
  },
  impuestos: {
    tipo: 'quiz', puntos: 100, correcta: 1,
    pregunta: '¿Cuánto paga aprox. de impuestos un celular de $1.000 USD?',
    opciones: ['0%', '19%', '35%', '50%']
  },
  mito2: {
    tipo: 'quiz', puntos: 100, correcta: 0,
    pregunta: '"Si la DIAN revisa tu paquete, lo pierdes"',
    opciones: ['🚫 Mito', '✅ Realidad']
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
  /* tipo 'revelado': las frases aparecen UNA POR UNA — cada frase es un paso en la escaleta (control total del timing) */
  manos:      { tipo:'revelado', kicker:'LEVANTA LA MANO 🙋', frases:[
                 '¿Has visto un iPhone en Amazon…',
                 '…y pensaste…',
                 '"seguro aquí me sale MUCHO más barato" 🤑'
               ] },
  quitamiedo: { emoji:'🔥', kicker:'HOY', titulo:'Vamos a quitarles ese miedo.', texto:'Saquen el celular: durante toda la charla ustedes van a jugar.' },
  /* 'galeria' = texto fijo a la IZQUIERDA + fotos/videos que pasan solos a la DERECHA.
     Pon los nombres de tus archivos dentro de 'fotos' (deben estar en la misma carpeta).
     Acepta imágenes (.webp/.jpg/.png) y videos (.mp4). Vacío [] = solo texto. */
  historia:   { tipo:'galeria', emoji:'📦', kicker:'NUESTRA HISTORIA', titulo:'Nosotros también tuvimos miedo de importar.', texto:'Primeros paquetes, primeros errores, primeros clientes… +7 años después: miles de entregas.', fotos:['historia-1.webp','video1.mp4','historia-2.webp'] },
  diego:      { emoji:'🎤', kicker:'CON USTEDES', titulo:'DIEGO CELADA', texto:'La persona que les va a enseñar a importar celulares. 👏👏👏' },
  oferta:     { emoji:'🎁', kicker:'SOLO POR HOY EN EXPOMOBILE', titulo:'5 LIBRAS GRATIS', texto:'Activa tu casillero en el stand de Celada Shopper y estrena tu beneficio.' }
};

/* ============================================================
   🎬 ESCALETA — el ORDEN del show (el botón SIGUIENTE sigue esta lista)
   - Diapositivas: 'slide:' + nombre del SLIDE
   - Preguntas: el id de IX
   - Especiales: 'espera' (QR gigante) y 'final' (ranking)
============================================================ */
const ESCALETA = [
  { id:'slide:portada',    t:'🎬 Portada: IMPORT CHALLENGE' },
  { id:'espera',           t:'🏠 QR gigante: que entren al reto' },
  { id:'slide:manos.1',    t:'🙋 Frase 1: "¿Has visto un iPhone en Amazon…"' },
  { id:'slide:manos.2',    t:'🎭 Frase 2: "…y pensaste…"' },
  { id:'slide:manos.3',    t:'🤑 Frase 3: "seguro me sale MUCHO más barato"' },
  { id:'tepaso',           t:'🙋 ENCUESTA relámpago: ¿Te ha pasado?' },
  { id:'slide:quitamiedo', t:'🔥 "Hoy vamos a quitarles ese miedo"' },
  { id:'miedo',            t:'📊 ENCUESTA: ¿tu mayor miedo al importar?' },
  { id:'slide:historia',   t:'📦 Historia de Celada Shopper' },
  { id:'mito1',            t:'🧠 QUIZ: "Importar es ilegal" (Mito)' },
  { id:'precio',           t:'🧠 QUIZ: adivina el precio del iPhone' },
  { id:'dificil',          t:'📊 ENCUESTA: ¿importar es difícil?' },
  { id:'slide:diego',      t:'🎤 Entrada de DIEGO' },
  { id:'impuestos',        t:'🧠 QUIZ: impuestos de un celular (19%)' },
  { id:'mito2',            t:'🧠 QUIZ: "La DIAN lo retiene" (Mito)' },
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
