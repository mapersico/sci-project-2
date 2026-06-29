export const sections = [
  { id: 'hero',       label: 'Inicio' },
  { id: 'problema',  label: 'El Problema' },
  { id: 'ciencia',   label: 'La Ciencia' },
  { id: 'proceso',   label: 'El Proceso' },
  { id: 'receta',    label: 'La Receta' },
  { id: 'productos', label: 'Los Productos' },
  { id: 'conclusion',label: 'Conclusión' },
]

export const problemStats = [
  { value: '400+', label: 'años para degradarse', sub: 'un vaso plástico descartable', color: '#ef4444' },
  { value: '8M',   label: 'toneladas de plástico', sub: 'ingresan al océano cada año', color: '#f97316' },
  { value: '100%', label: 'compostable', sub: 'nuestra biovajilla vuelve a la tierra', color: '#5cb84e' },
]

export const plasticProblems = [
  'Tardan cientos de años en degradarse',
  'Contaminan el suelo y el agua',
  'Producen microplásticos en la cadena alimentaria',
  'Pueden ser ingeridos por animales',
  'Generan enormes cantidades de residuos',
]

export const bioVentajas = [
  'Se degradan naturalmente',
  'Generan menos residuos',
  'Reducen la contaminación ambiental',
  'Favorecen el uso responsable de recursos naturales',
]

export const scienceFacts = [
  {
    icon: '🌾',
    title: 'Gelatinización del almidón',
    body: 'Las harinas contienen almidón, un polisacárido que al mezclarse con agua y calentarse absorbe líquido y expande sus gránulos.',
    detail: 'Esta transformación convierte la mezcla en una consistencia espesa y moldeable que, al secarse, forma un material sólido y resistente.',
  },
  {
    icon: '💧',
    title: 'Glicerina como plastificante',
    body: 'La glicerina actúa como plastificante, aportando flexibilidad al biomaterial para evitar que se quiebre fácilmente.',
    detail: 'Sin glicerina, el material resultaría demasiado rígido y frágil. Con ella, el producto final tiene la elasticidad necesaria para su uso cotidiano.',
  },
  {
    icon: '💪',
    title: 'Sémola: firmeza y estructura',
    body: 'La sémola, de molienda gruesa del trigo duro, posee mayor tamaño de partícula que la harina común y contiene gluten.',
    detail: 'El gluten forma redes proteicas que brindan mayor firmeza, resistencia mecánica y estructura a la masa final del biomaterial.',
  },
  {
    icon: '🧪',
    title: 'Vinagre: estabilidad',
    body: 'El vinagre, gracias a su ácido acético, contribuye a mejorar la conservación y estabilidad de la mezcla.',
    detail: 'El entorno levemente ácido que genera el vinagre influye en la textura final del biomaterial y ayuda a preservarlo durante más tiempo.',
  },
]

export const processSteps = [
  {
    id: 1,
    title: 'Mezclar las harinas',
    description: 'Combinar harina de trigo, harina de maíz y sémola en las cantidades correspondientes a cada versión.',
    image: null,
  },
  {
    id: 2,
    title: 'Agregar agua',
    description: 'Incorporar el agua (135 ml) y mezclar hasta obtener una preparación homogénea sin grumos.',
    image: null,
  },
  {
    id: 3,
    title: 'Incorporar glicerina y aceite',
    description: 'Agregar 2 ml de glicerina y 5 ml de aceite vegetal para aportar flexibilidad y evitar que la mezcla se adhiera.',
    image: null,
  },
  {
    id: 4,
    title: 'Agregar vinagre',
    description: 'Incorporar el vinagre para mejorar la conservación y estabilidad química de la mezcla.',
    image: null,
  },
  {
    id: 5,
    title: 'Llevar al fuego',
    description: 'Cocinar la mezcla a fuego medio, revolviendo constantemente para evitar que se pegue.',
    image: null,
  },
  {
    id: 6,
    title: 'Gelatinización',
    description: 'Continuar el calentamiento hasta que la mezcla espese notablemente. Es la gelatinización del almidón en acción.',
    image: null,
  },
  {
    id: 7,
    title: 'Retirar del fuego',
    description: 'Una vez lograda la consistencia deseada, retirar la preparación del calor.',
    image: null,
  },
  {
    id: 8,
    title: 'Colocar en moldes',
    description: 'Distribuir la masa caliente en los moldes con cuidado, presionando para que tome la forma deseada.',
    image: '/media/proceso_moldeado_1.jpg',
  },
  {
    id: 9,
    title: 'Dar forma',
    description: 'Modelar la superficie de cada pieza con manos y espátula para obtener la forma final de cuenco o cuchara.',
    image: '/media/proceso_moldeado_2.jpg',
  },
  {
    id: 10,
    title: 'Secar y hornear',
    description: 'Dejar secar completamente en el horno antes de desmoldar. El calor seco consolida la estructura del biomaterial.',
    image: '/media/proceso_horno.jpg',
  },
]

export const recetaSalada = {
  nombre: 'Versión Salada',
  marca: 'NATIVO',
  lema: 'Sabor Natural. Hecho para disfrutar.',
  color: '#5cb84e',
  ingredientes: [
    { nombre: 'Harina de trigo', cantidad: '100 g' },
    { nombre: 'Harina de maíz',  cantidad: '30 g' },
    { nombre: 'Sémola',          cantidad: '55 g' },
    { nombre: 'Sal',             cantidad: '2 g' },
    { nombre: 'Glicerina',       cantidad: '2 ml' },
    { nombre: 'Aceite vegetal',  cantidad: '5 ml' },
    { nombre: 'Agua',            cantidad: '135 ml' },
  ],
}

export const recetaDulce = {
  nombre: 'Versión Dulce',
  marca: 'DULCÉA',
  lema: 'Delicioso. Sustentable. Natural.',
  color: '#d4a843',
  ingredientes: [
    { nombre: 'Harina de trigo', cantidad: '100 g' },
    { nombre: 'Harina de maíz',  cantidad: '50 g' },
    { nombre: 'Sémola',          cantidad: '50 g' },
    { nombre: 'Glicerina',       cantidad: '2 ml' },
    { nombre: 'Aceite vegetal',  cantidad: '5 ml' },
    { nombre: 'Agua',            cantidad: '135 ml' },
  ],
}

export const productos = [
  {
    nombre: 'DULCÉA',
    tipo: 'Cucharita y Potecito Comestibles',
    version: 'Versión Dulce',
    lema: 'Delicioso. Sustentable. Natural.',
    image: '/media/hero_productos.jpg',
    alt: 'Producto DULCÉA — cucharita y potecito comestibles versión dulce',
    color: '#d4a843',
  },
  {
    nombre: 'NATIVO',
    tipo: 'Cucharita y Potecito Comestibles',
    version: 'Versión Salada',
    lema: 'Sabor Natural. Hecho para disfrutar.',
    image: '/media/hero_productos.jpg',
    alt: 'Producto NATIVO — cucharita y potecito comestibles versión salada',
    color: '#5cb84e',
  },
  {
    nombre: 'EcoBocado',
    tipo: 'Cuenco Comestible',
    version: 'Dulce y Salado',
    lema: 'Usalo, disfrutalo... ¡y comételo!',
    image: '/media/producto_ecobocado.jpg',
    alt: 'Producto EcoBocado — cuenco comestible en versión dulce y salada',
    color: '#5cb84e',
  },
  {
    nombre: 'VerdeVida',
    tipo: 'Biovajilla',
    version: 'Comestible · Biodegradable · Compostable',
    lema: 'Disfrutá sin residuos, volvé a la tierra.',
    image: '/media/producto_verdevida.jpg',
    alt: 'Producto VerdeVida Biovajilla — comestible y biodegradable',
    color: '#5cb84e',
  },
  {
    nombre: 'EcoDulce',
    tipo: 'Biovajilla Comestible',
    version: 'Dulce · Biodegradable · Comestible',
    lema: 'Disfrutá, es natural. Cuidá el planeta.',
    image: '/media/producto_ecodulce.jpg',
    alt: 'Producto EcoDulce Biovajilla Comestible',
    color: '#d4a843',
  },
]

export const impactNumbers = [
  { value: '5',     label: 'marcas creadas', sub: 'por estudiantes de 5° Año', color: '#5cb84e' },
  { value: '100%',  label: 'origen vegetal', sub: 'sin plásticos ni conservantes', color: '#d4a843' },
  { value: '0',     label: 'residuos plásticos', sub: 'la vajilla se come o se composta', color: '#5cb84e' },
]

export const resultados = [
  'La composición de las harinas influye directamente en las propiedades del producto.',
  'La presencia de almidón permitió formar una estructura sólida mediante gelatinización.',
  'La glicerina mejoró la flexibilidad del biomaterial.',
  'La sémola incrementó la resistencia mecánica.',
  'El calentamiento fue fundamental para obtener el biomaterial.',
]
