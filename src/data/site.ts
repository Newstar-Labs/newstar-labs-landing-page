// Centralized contact/social configuration. These are the real values used by
// Newstar Labs today — update here to change them everywhere on the site.
export const site = {
  name: 'Newstar Labs',
  tagline: 'Tecnología creada para tu operación real.',
  locale: 'es',
  url: 'https://newstarlabs.pe',
  email: 'newstarlabs@gmail.com',
  whatsappNumber: '51991127593',
  whatsappMessage:
    'Hola, vi la página de Newstar Labs y me gustaría mejorar los procesos de mi empresa. ¿Podemos conversar?',
  location: 'Lima, Perú · Atención remota',
  social: {
    facebook: 'https://www.facebook.com/NewstarLabs',
    instagram: 'https://www.instagram.com/newstarlabs',
    linkedin: 'https://www.linkedin.com/company/newstar-labs',
  },
} as const;

const waDigits = site.whatsappNumber.replace(/[^0-9]/g, '');
export const whatsappHref = `https://wa.me/${waDigits}?text=${encodeURIComponent(site.whatsappMessage)}`;
export const mailHref = `mailto:${site.email}`;

export const navLinks = [
  { href: '#resolvemos', label: 'Qué resolvemos' },
  { href: '#proceso', label: 'Cómo trabajamos' },
  { href: '#casos', label: 'Casos' },
  { href: '#nosotros', label: 'Nosotros' },
] as const;
