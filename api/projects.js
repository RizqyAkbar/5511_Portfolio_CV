export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'Website portofolio pribadi dengan Vue.js dan Tailwind CSS.',
      tech: ['Vue.js', 'Tailwind CSS', 'Vercel'],
      image: '/public/web.png',
      link: 'https://portfolio-akbar.vercel.app/'
    },
    {
      id: 2,
      title: 'Website Toko Online',
      description: 'Aplikasi manajemen tugas kuliah berbasis web.',
      tech: ['Node.js', 'Express', 'MongoDB'],
      image: '/public/Vue.js.png',
      link: 'https://tugaskuliah-akbar.vercel.app/'
    }
  ]);
} 