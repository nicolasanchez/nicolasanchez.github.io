export const contact = {
  email: 'nicolas.sanchez.torre@gmail.com',
  github: 'https://github.com/nicolasanchez',
  linkedin: 'https://www.linkedin.com/in/nicol%C3%A1s-s%C3%A1nchez-torregrosa-06a819222/',
};

/** abre Gmail en una pestaña nueva con un borrador . */
export const gmailCompose = (to: string): string => {
  const params = new URLSearchParams({ view: 'cm', fs: '1', to });
  return `https://mail.google.com/mail/?${params.toString()}`;
};

export const emailUrl = gmailCompose(contact.email);

export const sections = [
  { id: 'about', label: './about' },
  { id: 'stack', label: './stack' },
  { id: 'projects', label: './projects' },
  { id: 'contacto', label: './contacto' },
];

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillGroup {
  dir: string;
  items: Skill[];
}

const skill = (name: string, icon: string): Skill => ({ name, icon: `/icons/${icon}.svg` });

export const skills: SkillGroup[] = [
  {
    dir: 'lenguajes',
    items: [
      skill('Python', 'python'),
      skill('Java', 'java'),
      skill('Kotlin', 'kotlin'),
      skill('JavaScript', 'javascript'),
    ],
  },
  {
    dir: 'frameworks',
    items: [skill('Django', 'django'), skill('Angular', 'angular'), skill('Astro', 'astro')],
  },
  { dir: 'movil', items: [skill('Android Studio', 'androidstudio'), skill('Kotlin', 'kotlin')] },
  {
    dir: 'datos',
    items: [
      skill('MySQL', 'mysql'),
      skill('Bases de datos relacionales', 'database'),
      skill('Firebase', 'firebase'),
    ],
  },
  { dir: 'automatizacion', items: [skill('make.com', 'make'), skill('n8n', 'n8n')] },
  {
    dir: 'infra',
    items: [skill('Cloudflare', 'cloudflare'), skill('GitHub Pages', 'githubpages')],
  },
  {
    dir: 'seguridad',
    items: [
      skill('Kali Linux', 'kalilinux'),
      skill('Nmap', 'nmap'),
      skill('Burp Suite', 'burpsuite'),
      skill('Metasploit', 'metasploit'),
      skill('Wireshark', 'wireshark'),
    ],
  },
  {
    dir: 'herramientas',
    items: [
      skill('Git', 'git'),
      skill('GitHub', 'github'),
      skill('GitLab CI/CD', 'gitlab'),
      skill('Docker', 'docker'),
    ],
  },
];

export interface Project {
  file: string;
  first: string;
  rest: string;
  description: string;
  tags: string[];
  /** Ruta a la captura en /public (opcional). */
  image?: string;
  url?: string;
}

export const projects: Project[] = [
  {
    file: 'nicosantor.com',
    first: 'Portfolio',
    rest: 'personal',
    description:
      'Esta misma web: portfolio estático con Astro, dominio propio gestionado en Cloudflare y despliegue automático.',
    tags: ['Astro', 'JavaScript', 'Cloudflare', 'GitHub Pages'],
    image: '/portfolio.png',
    url: 'https://nicosantor.com',
  },
  {
    file: 'proyecto-02',
    first: '[NOMBRE]',
    rest: 'del proyecto',
    description: '[Qué es y qué problema resuelve, en 2–3 líneas.]',
    tags: ['[stack]', '[stack]', '[stack]'],
  },
];
