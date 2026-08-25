export interface Project {
  id: string;
  tabLabel: string;
  category: string;
  title: string;
  reto: string;
  solucion: string;
  impact: string;
  /** 'lg' = big single-line emerald stat, 'md' = smaller multi-line emerald sentence */
  impactSize: 'lg' | 'md';
  chips: string[];
  /** Optional real project screenshot shown below the compare/pipeline mockup */
  screenshot?: { src: string; alt: string };
  visual:
    | { type: 'compare'; beforeLabel: string; afterLabel: string; beforeValue: string; afterValue: string; caption: string }
    | { type: 'pipeline'; steps: { label: string; active?: boolean }[]; statusLabel: string }
    | { type: 'image'; src: string; alt: string };
}

export const projects: Project[] = [
  {
    id: 'gases',
    tabLabel: 'Sistema IoT de monitoreo de gases',
    category: 'INDUSTRIA Y MINERÍA',
    title: 'Monitoreo de gases conectado en tiempo real.',
    reto: 'La supervisión de gases en entornos industriales requería capturar información en campo y conservar un historial para analizar variaciones y riesgos.',
    solucion:
      'Se desarrolló un sistema IoT que integra sensores, comunicación por radiofrecuencia, software de monitoreo y registro histórico de datos.',
    impact: 'Supervisión remota e historial centralizado para apoyar la seguridad operativa.',
    impactSize: 'md',
    chips: ['IoT', 'C++', 'MQTT', 'Integración industrial'],
    screenshot: {
      src: '/assets/gases_project.jpeg',
      alt: 'Panel de monitoreo en tiempo real con el estado de los sensores de gases',
    },
    visual: {
      type: 'pipeline',
      steps: [
        { label: 'Sensores en campo' },
        { label: 'Transmisión RF' },
        { label: 'Almacenamiento de datos' },
        { label: 'Panel de supervisión', active: true },
      ],
      statusLabel: 'MONITOREO ACTIVO',
    },
  },
  {
    id: 'planos',
    tabLabel: 'Automatización de planos',
    category: 'INGENIERÍA Y PROYECTOS',
    title: 'De 3 minutos a 2.17 segundos por plano.',
    reto: 'El llenado manual de membretes generaba un cuello de botella durante la preparación de entregables de ingeniería.',
    solucion:
      'Se desarrolló un complemento que automatiza la gestión y el llenado de información en los planos, manteniendo la estructura requerida por el equipo.',
    impact: '97.5% menos tiempo por plano.',
    impactSize: 'lg',
    chips: ['Automatización', 'C#', 'WinForms', 'Flujos de ingeniería'],
    screenshot: {
      src: '/assets/plugin_project.jpeg',
      alt: 'Herramienta Title Block Batch Update procesando el llenado automático de membretes en lote',
    },
    visual: {
      type: 'compare',
      beforeLabel: 'ANTES · MANUAL',
      afterLabel: 'AHORA · AUTOMÁTICO',
      beforeValue: '3 min',
      afterValue: '2.17 s',
      caption: 'TIEMPO POR PLANO',
    },
  },
  {
    id: 'kusikay',
    tabLabel: 'Aplicación web instalable',
    category: 'EDUCACIÓN Y VOLUNTARIADO',
    title: 'La gestión de clases, en el bolsillo de cada docente.',
    reto: 'Asistencias, clases y coordinación docente se gestionaban en distintos canales.',
    solucion: 'Creamos una aplicación web instalable que centraliza la gestión diaria de cada docente.',
    impact: 'Clases y asistencia accesibles desde el celular, en un solo lugar.',
    impactSize: 'md',
    chips: ['Aplicación web instalable', 'Gestión de asistencia', 'Experiencia móvil', 'Diseño centrado en usuarios'],
    visual: {
      type: 'image',
      src: '/assets/kusikay-mockup.png',
      alt: 'Mockup de la aplicación instalable: inicio de sesión y listado de clases con registro de asistencia',
    },
  },
];
