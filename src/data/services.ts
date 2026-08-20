export interface ProblemCard {
  text: string;
  icon: 'chat' | 'alert' | 'sync' | 'search';
}

export const problems: ProblemCard[] = [
  { text: 'Todo se coordina entre WhatsApp y Excel', icon: 'chat' },
  { text: 'Nadie sabe en qué estado quedó cada solicitud', icon: 'alert' },
  { text: 'Tareas repetitivas que consumen el día', icon: 'sync' },
  { text: 'Información dispersa, difícil de encontrar', icon: 'search' },
];

export interface SolutionCard {
  title: string;
  description: string;
  icon: 'bolt' | 'apps' | 'network';
  accent: 'emerald' | 'violet';
}

export const solutionCards: SolutionCard[] = [
  {
    title: 'Automatización de tareas y flujos',
    description:
      'Eliminamos tareas repetitivas y conectamos acciones para que el trabajo avance con menos intervención manual.',
    icon: 'bolt',
    accent: 'emerald',
  },
  {
    title: 'Sistemas y aplicaciones a medida',
    description: 'Creamos herramientas web y móviles para gestionar los procesos específicos de cada operación.',
    icon: 'apps',
    accent: 'violet',
  },
  {
    title: 'Integraciones e IoT',
    description:
      'Conectamos herramientas, sistemas y dispositivos para que la información fluya de manera continua y segura.',
    icon: 'network',
    accent: 'violet',
  },
];

export const wideSolution = {
  title: 'Datos, paneles y visibilidad',
  description:
    'Centralizamos la información y la convertimos en indicadores claros para controlar la operación y tomar mejores decisiones.',
  chips: ['Dashboards', 'Indicadores', 'Centralización de datos'],
};
