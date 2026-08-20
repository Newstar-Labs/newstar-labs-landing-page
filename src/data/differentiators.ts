export interface Differentiator {
  id: string;
  title: string;
  description: string;
  chipsLabel: string;
  chips: string[];
  icon: 'file' | 'layers' | 'check' | 'gear';
}

export const differentiators: Differentiator[] = [
  {
    id: 'solutions',
    title: 'Soluciones creadas para tu operación real',
    description:
      'Antes de proponer una herramienta, entendemos cómo opera tu negocio. Diseñamos una solución que respete lo que ya funciona y mejore lo que hoy genera fricción.',
    chipsLabel: 'Puede incluir',
    chips: ['Sistemas internos', 'Portales web', 'Automatizaciones', 'Integraciones', 'Paneles de control'],
    icon: 'file',
  },
  {
    id: 'vision',
    title: 'Visión de procesos, automatización y software',
    description:
      'Combinamos análisis operativo, automatización y desarrollo para resolver el problema completo, no solo una parte aislada.',
    chipsLabel: 'Cómo lo abordamos',
    chips: ['Mapeo de procesos', 'Flujos de trabajo', 'Centralización de datos', 'Migración de información'],
    icon: 'layers',
  },
  {
    id: 'validation',
    title: 'Acompañamiento hasta la validación',
    description:
      'Probamos la solución con tu equipo, recogemos lo que ocurre en el uso real y realizamos los ajustes necesarios para que sea útil.',
    chipsLabel: 'Trabajo conjunto',
    chips: ['Validación con usuarios', 'Ajustes iterativos', 'Documentación', 'Soporte inicial'],
    icon: 'check',
  },
  {
    id: 'simplicity',
    title: 'Tecnología simple de adoptar',
    description:
      'Priorizamos soluciones claras y fáciles de usar. Si una herramienta complica más el trabajo de tu equipo, no cumple su propósito.',
    chipsLabel: 'Diseñado para el equipo',
    chips: ['Interfaces claras', 'Adopción gradual', 'Capacitación', 'Mejora continua'],
    icon: 'gear',
  },
];
