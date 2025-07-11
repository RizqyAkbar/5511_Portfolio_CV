export default function handler(req, res) {
  res.status(200).json([
    { name: 'Vue.js', logoUrl: '/public/Vue.js.png' },
    { name: 'Tailwind CSS', logoUrl: '/public/web.png' },
    { name: 'JavaScript', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Node.js', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' }
  ]);
} 