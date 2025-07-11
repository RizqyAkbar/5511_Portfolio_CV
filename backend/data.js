// backend/data.js
const educationHistory = [
  { id: 1, period: '2023 - Sekarang', institution: 'Universitas Amikom Yogyakarta', major: 'S1 - Teknik Informatika' },
  { id: 2, period: '2020 - 2023', institution: 'MAN 3 Sleman', major: 'MIPA' }
];

const projects = [
  {
    title: 'Website Toko Online',
    // Menggunakan URL gambar langsung dari web
    image: 'public/web.png', // Contoh URL gambar web
    description: 'Platform e-commerce dengan fitur keranjang belanja.',
    tech: ['Vue.js', 'Laravel', 'MySQL'],
    link: '#',
  },
];

const skills = [
  // Menggunakan URL logo langsung dari web
  { name: 'Vue.js', level: 'Mahir', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg' },
  { name: 'C#', level: 'Mahir', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png' },
  { name: 'Laravel', level: 'Mahir', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg' },
  { name: 'Tailwind CSS', level: 'Mahir', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
  { name: 'Node.js', level: 'Menengah', logoUrl: 'https://nodejs.org/static/images/logo.svg' },
  { name: 'Express.js', level: 'Menengah', logoUrl: 'https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000' },
  { name: 'C++', level: 'Menengah', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg' },
  { name: 'Git & GitHub', level: 'Mahir', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg' }, // Git
  { name: 'HTML5 & CSS3', level: 'Mahir', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' }, // HTML5
  { name: 'Kotlin', level: 'Mahir', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Kotlin_Icon.svg' }
  // Anda bisa mencari URL logo lain di situs seperti Wikimedia Commons, ikon resmi, atau CDN populer.
];

module.exports = { educationHistory, skills, projects };