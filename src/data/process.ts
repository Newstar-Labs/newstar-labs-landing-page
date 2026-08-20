export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  /** Only the final step carries a supporting label ("Mejora continua"). */
  label?: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Entendemos',
    description: 'Tu operación, las personas involucradas y los objetivos del negocio.',
  },
  {
    number: '02',
    title: 'Detectamos',
    description: 'Cuellos de botella, tareas repetitivas e información dispersa.',
  },
  {
    number: '03',
    title: 'Priorizamos',
    description: 'El problema que puede generar mayor impacto.',
  },
  {
    number: '04',
    title: 'Construimos',
    description: 'Una solución útil, simple y adaptable.',
  },
  {
    number: '05',
    title: 'Validamos',
    description: 'Probamos, ajustamos y mejoramos con el uso real.',
    label: 'Mejora continua',
  },
];
