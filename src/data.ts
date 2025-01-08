import { debug } from "node_modules/astro/dist/core/logger/core";

export type Options = {
  icon: string;
  option: string;
  title: string;
  description: {
    content?: string;
    pointOne?: string;
    pointOneDescription?: string;
    pointTwo?: string;
    pointTwoDescription: string
  };
  image: string;
};

export const headerData = {
  title: "El Taller Automotriz Más Confiable",
  description: "Descubre cómo en Fana combinamos experiencia y tecnología para ofrecerte un servicio automotriz excepcional. Disfruta de atención personalizada, supervisión experta, y conveniencia con nuestros servicios a domicilio y plataforma tecnológica."
}

export const menuData: Options[] = [
  {
    icon: "Quality",
    option: "Experiencia",
    title: "Experiencia de Clase Mundial",
    description: {
      content: "En Fana sabemos que la experiencia construye confianza, es por eso que nuestro equipo técnico es liderado por un campeón certificado de Toyota.",
      pointOne: "Experiencia de Clase Mundial",
      pointOneDescription: "Cada vehículo es supervisado directamente por Darío Farfán Chira, ex-campeón de GrupoPana con más de 40 años de experiencia en el sector automotriz.",
      pointTwo: "Calidad Garantizada: ",
      pointTwoDescription: "La supervisión y participación activa de Darío asegura diagnósticos precisos y soluciones efectivas, proporcionando una calidad técnica comparable a los mejores concesionarios del país."
    },
    image: "/Photos/experience.webp",
  },
  {
    icon: "Car",
    option: "Especializado",
    title: "Especialización en Autos y Camionetas",
    description: {
      content: "En Fana nos especializamos en autos y camionetas, ofreciendo servicios premium con un conocimiento detallado para asegurar resultados de alta calidad.",
      pointOne: "Atención Exclusiva",
      pointOneDescription: "Nos enfocamos únicamente en autos y camionetas, lo que nos permite desarrollar soluciones específicas y eficientes para cada tipo de vehículo.",
      pointTwo: "Repuestos de Alta Calidad",
      pointTwoDescription: "Utilizamos piezas originales y de marcas reconocidas para garantizar el mejor rendimiento de tu vehículo."
    },
    image: "/Photos/specialized.png"
  },
  {
    icon: "Idea",
    option: "Personalizado",
    title: "Servicios Personalizados",
    description: {
      content: "Entendemos que cada cliente es único, por eso adaptamos nuestros servicios a las necesidades específicas de tu vehículo, garantizando soluciones efectivas.",
      pointOne: "Comodidad en Sala de Espera",
      pointOneDescription: "Contamos con un salón de espera equipado con todo lo que necesitas para que tu experiencia sea cómoda y placentera mientras esperas.",
      pointTwo: "Atención Programada",
      pointTwoDescription: "Trabajamos únicamente con citas agendadas, asegurando que tu tiempo sea respetado y cada servicio sea realizado con total dedicación."
    },
    image: "/Photos/personalized.jpg"
  },
  {
    icon: "Delivery",
    option: "Delivery",
    title: "Servicio de Recojo y Entrega",
    description: {
      content: "Ofrecemos la comodidad de recoger y entregar tu vehículo en tu domicilio, asegurando que disfrutes de un servicio técnico sin complicaciones.",
      pointOne: "Ahorra Tiempo",
      pointOneDescription: "Olvídate de trasladar tu vehículo, nosotros lo recogemos y lo entregamos una vez completado el servicio.",
      pointTwo: "Cobertura Segura",
      pointTwoDescription: "Garantizamos un transporte seguro para tu vehículo, desde tu hogar hasta el taller y viceversa."
    },
    image: "/Photos/delivery.png"
  },
  {
    icon: "Speedometer",
    option: "Innovador",
    title: "Plataforma Tecnológica Innovadora",
    description: {
      content: "Con nuestra plataforma tecnológica, puedes monitorear el estado de tu vehículo en tiempo real, manteniéndote siempre informado del progreso de cada servicio.",
      pointOne: "Seguimiento en Tiempo Real",
      pointOneDescription: "Accede al estado de las reparaciones y mantenimientos desde cualquier lugar, directamente desde nuestra plataforma.",
      pointTwo: "Transparencia Total",
      pointTwoDescription: "Consulta el historial de servicios, costos y diagnósticos de tu vehículo de forma clara y detallada."
    },
    image: "/Photos/innovative.png"
  }
];

export const ServicesData = [
  {
    image: "Oil",
    title: "Mantenimiento General",
    description: "Realizamos un mantenimiento exhaustivo de todos los sistemas de tu auto, tendrás un historial con los cambios y observaciones del servicio",
  },
  {
    image: "Transmission",
    title: "Reparación de Motor",
    description: "Somos especialistas en reparar y mantener todos los componentes del motor, asegurando un rendimiento óptimo y duradero",
  },
  {
    image: "Battery",
    title: "Sistema de arranque",
    description: "¡No te quedes sin energía en un día importante! Nos encargamos de mantener tu alternador, arrancador y batería para evitar sorpresas",
  },
  {
    image: "Speedometer",
    title: "Diagnóstico Automotriz",
    description: "No pierdas tiempo ni dinero con suposiciones, nosotros identificamos los problemas de tu vehículo con tecnología avanzada y precisión quirurgica",
  },
  {
    image: "Paint",
    title: "Planchado y Pintura",
    description: "Restauramos y embellecemos tu auto con servicios de planchado y pintura de alta calidad dándole un acabado renovado y brillante",
  },
  {
    image: "Brake",
    title: "Frenos y Suspensión",
    description: "No permitas que los baches de la carretera te incomoden, maneja cómodamente con una suspensión y frenos en excelente estado"
  }
]
