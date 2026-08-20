export interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  bio: string;
  chips: string[];
  avatar: string;
  avatarAlt: string;
  avatarPosition: string;
  linkedin: string;
}

export const team: TeamMember[] = [
  {
    name: 'Italo Sabrera Paucar',
    role: 'Ingeniero Industrial',
    specialty: 'Procesos y estrategia operativa',
    bio: 'Analiza cómo funciona cada operación e identifica oportunidades para reducir fricción, aprovechar mejor los recursos y generar mayor control.',
    chips: ['Mejora de procesos', 'Eficiencia operativa'],
    avatar: '/assets/italo-sm.png',
    avatarAlt: 'Italo Sabrera Paucar',
    avatarPosition: '50% 45%',
    linkedin: 'https://www.linkedin.com/in/italosab/',
  },
  {
    name: 'Anthony Aponte Félix',
    role: 'Ingeniero Mecatrónica',
    specialty: 'Automatización e integración tecnológica',
    bio: 'Diseña soluciones que conectan software, equipos y datos para transformar procesos técnicos en sistemas útiles y confiables.',
    chips: ['Automatización', 'IoT e integración'],
    avatar: '/assets/anthony-sm.png',
    avatarAlt: 'Anthony Aponte Félix',
    avatarPosition: '50% 45%',
    linkedin: 'https://www.linkedin.com/in/helmeanthony/',
  },
  {
    name: 'Gino Quispe Calixto',
    role: 'Ingeniero de Software',
    specialty: 'Productos y soluciones digitales',
    bio: 'Convierte necesidades del negocio en aplicaciones claras, escalables y fáciles de adoptar por las personas que las utilizarán.',
    chips: ['Desarrollo de software', 'Experiencia de usuario'],
    avatar: '/assets/gino-sm.png',
    avatarAlt: 'Gino Quispe Calixto',
    avatarPosition: '50% 30%',
    linkedin: 'https://www.linkedin.com/in/ginoquispecalixto/',
  },
];
