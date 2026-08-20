// Centralized contact/social configuration. These are the real values used by
// Newstar Labs today — update here to change them everywhere on the site.
export const site = {
  name: 'Newstar Labs',
  tagline: 'Tecnología creada para tu operación real.',
  locale: 'es',
  url: 'https://newstarlabs.pe',
  email: 'hola@newstarlabs.pe',
  whatsappNumber: '51999999999',
  whatsappMessage:
    'Hola, vi la página de Newstar Labs y me gustaría conversar sobre un proceso de mi empresa que quiero mejorar.',
  location: 'Lima, Perú · Atención remota',
  social: {
    facebook: 'https://www.facebook.com/gino.calixtow/',
    instagram: 'https://www.instagram.com/gino.calixtow/',
    linkedin: 'https://www.linkedin.com/in/ginoquispecalixto/',
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
