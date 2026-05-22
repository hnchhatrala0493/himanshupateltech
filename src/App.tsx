import { useState } from 'react';

export default function PortfolioPage() {
  const [darkMode, setDarkMode] = useState(true);

  const projects = [
    {
      title: 'VUF Enterprise Dashboard',
      description: 'Modern enterprise dashboard with analytics and role management.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
      category: 'Full Stack'
    },
    {
      title: 'Laravel CRM Platform',
      description: 'Advanced CRM platform with workflow automation.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
      category: 'CRM'
    },
    {
      title: 'MERN Portfolio Website',
      description: 'Modern animated developer portfolio website.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
      category: 'Portfolio'
    },
    {
      title: 'React Native App',
      description: 'Cross-platform mobile application UI.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop',
      category: 'Mobile App'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Modern ecommerce application with admin dashboard.',
      image: 'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?q=80&w=1200&auto=format&fit=crop',
      category: 'E-Commerce'
    },
    {
      title: 'School ERP System',
      description: 'Comprehensive school management solution.',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop',
      category: 'ERP'
    },
    {
      title: 'Real Estate Website',
      description: 'Property listing platform with advanced search.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop',
      category: 'Real Estate'
    },
    {
      title: 'AI Chat App',
      description: 'AI-powered real-time chat application.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop',
      category: 'AI App'
    }
  ];

  const services = [
    {
      title: 'Web Designing',
      icon: '🎨',
      description: 'Creative modern responsive website design.'
    },
    {
      title: 'Web Development',
      icon: '💻',
      description: 'Professional scalable web application development.'
    },
    {
      title: 'MERN Stack',
      icon: '⚛️',
      description: 'Full stack MERN application development.'
    },
    {
      title: 'React Native',
      icon: '📱',
      description: 'Cross-platform mobile app development.'
    },
    {
      title: 'Laravel Development',
      icon: '🚀',
      description: 'Custom Laravel applications and APIs.'
    },
    {
      title: 'UI/UX Design',
      icon: '✨',
      description: 'Premium modern user interface experiences.'
    }
  ];

  const skills = [
    {
      name: 'React',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    {
      name: 'HTML5',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    },
    {
      name: 'JavaScript',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    {
      name: 'Vue JS',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'
    },
    {
      name: 'Express JS',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
    },
    {
      name: 'Node JS',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
    },
    {
      name: 'MongoDB',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
    },
    {
      name: 'MySQL',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
    },
    {
      name: 'CSS3',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
    },
    {
      name: 'Tailwind CSS',
      logo: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg'
    },
    {
      name: 'Bootstrap',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'
    },
    {
      name: 'PostgreSQL',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
    },
    {
      name: 'REST API',
      logo: 'https://cdn-icons-png.flaticon.com/512/2165/2165004.png'
    }
  ];

  const videos = [
    'JavaScript let vs const Tutorial',
    'React Hooks Complete Guide',
    'MERN Stack Project Tutorial',
    'Node JS REST API Crash Course',
    'Tailwind CSS Complete Tutorial',
    'React Native Mobile App UI'
  ];

  return (
    <>
      <div className={darkMode ? 'bg-[#030712] text-white' : 'bg-white text-gray-900'}>
        <div className={`min-h-screen overflow-x-hidden transition-all duration-500 ${darkMode ? 'bg-[#030712] text-white' : 'bg-white text-gray-900'}`}>
          <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/60 shadow-lg shadow-cyan-500/5 backdrop-blur-2xl">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 lg:px-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-xl font-black text-white shadow-lg shadow-cyan-500/30 transition duration-300 hover:rotate-6 hover:scale-110">
                  H
                </div>

                <div>
                  <h1 className="text-2xl font-black text-white">
                    Himanshu<span className="text-cyan-400">.dev</span>
                  </h1>

                  <p className="text-xs uppercase tracking-[3px] text-gray-400">
                    MERN Developer
                  </p>
                </div>
              </div>

              <div className="flex flex-1 items-center justify-end gap-3 lg:gap-6">
                <ul className="flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs font-medium text-white backdrop-blur-xl sm:gap-5 sm:text-sm lg:gap-8">
                  <li><a href="#home" className="transition duration-300 hover:text-cyan-400">Home</a></li>
                  <li><a href="#projects" className="transition duration-300 hover:text-cyan-400">Projects</a></li>
                  <li><a href="#services" className="transition duration-300 hover:text-cyan-400">Services</a></li>
                  <li><a href="#skills" className="transition duration-300 hover:text-cyan-400">Skills</a></li>
                  <li><a href="#videos" className="transition duration-300 hover:text-cyan-400">Videos</a></li>
                  <li><a href="#contact" className="transition duration-300 hover:text-cyan-400">Contact</a></li>
                </ul>

                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm backdrop-blur-xl transition duration-300 hover:border-cyan-500 hover:bg-cyan-500/20"
                >
                  {darkMode ? '🌙' : '☀️'}
                </button>
              </div>
            </div>
          </nav>

          <section
            id="home"
            className={`relative flex min-h-screen items-center overflow-hidden px-6 pt-20 transition-all duration-500 ${darkMode ? 'bg-[#020617]' : 'bg-gray-100'}`}
          >
            <div
              className="absolute inset-0 animate-[heroZoom_18s_ease-in-out_infinite_alternate] bg-cover bg-center bg-no-repeat opacity-100 scale-110 blur-[1px]"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop')"
              }}
            ></div>

            <div className={`absolute inset-0 backdrop-blur-[1px] ${darkMode ? 'bg-black/65' : 'bg-white/70'}`}></div>
            <div className="absolute left-0 top-0 h-96 w-96 animate-[floatingLights_10s_ease-in-out_infinite] rounded-full bg-cyan-500/20 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 h-96 w-96 animate-[floatingLights_12s_ease-in-out_infinite] rounded-full bg-blue-500/20 blur-3xl"></div>

            <div className="relative z-10 mx-auto grid max-w-7xl gap-16 md:grid-cols-2 md:items-center">
              <div>
                <p className="mb-4 text-lg font-medium text-cyan-400">
                  Hello, I'm
                </p>

                <h2 className="mb-6 text-5xl font-black leading-tight md:text-7xl">
                  <span
                    className="animate-[rainbow_6s_linear_infinite] bg-gradient-to-r from-red-500 via-yellow-400 via-green-400 via-pink-500 to-cyan-400 bg-[length:400%_400%] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,255,255,0.35)]"
                  >
                    Himanshu
                  </span>

                  <style>{`
                    @keyframes heroZoom {
                      0% {
                        transform: scale(1.08) translateX(0px) translateY(0px);
                      }

                      50% {
                        transform: scale(1.15) translateX(-20px) translateY(-10px);
                      }

                      100% {
                        transform: scale(1.1) translateX(20px) translateY(10px);
                      }
                    }

                    @keyframes floatingLights {
                      0% {
                        transform: translateY(0px) translateX(0px);
                        opacity: 0.5;
                      }

                      50% {
                        transform: translateY(-30px) translateX(20px);
                        opacity: 1;
                      }

                      100% {
                        transform: translateY(0px) translateX(0px);
                        opacity: 0.5;
                      }
                    }

                    @keyframes profileFloat {
                      0% {
                        transform: translateY(0px);
                      }

                      50% {
                        transform: translateY(-15px);
                      }

                      100% {
                        transform: translateY(0px);
                      }
                    }

                    @keyframes pulseRing {
                      0% {
                        transform: scale(1);
                        opacity: 0.6;
                      }

                      50% {
                        transform: scale(1.08);
                        opacity: 0.2;
                      }

                      100% {
                        transform: scale(1);
                        opacity: 0.6;
                      }
                    }

                    @keyframes rainbow {
                      0% {
                        background-position: 0% 50%;
                        filter: drop-shadow(0 0 8px #ff0000);
                      }
                      25% {
                        background-position: 50% 50%;
                        filter: drop-shadow(0 0 18px #ffff00);
                      }
                      50% {
                        background-position: 100% 50%;
                        filter: drop-shadow(0 0 22px #00ff88);
                      }
                      75% {
                        background-position: 50% 50%;
                        filter: drop-shadow(0 0 20px #ff00ff);
                      }
                      100% {
                        background-position: 0% 50%;
                        filter: drop-shadow(0 0 10px #00ccff);
                      }
                    }

                    

                      50% {
                        opacity: 1;
                        text-shadow:
                          0 0 20px rgba(255,255,255,0.8),
                          0 0 40px rgba(255,0,255,0.8),
                          0 0 60px rgba(0,255,255,0.9),
                          0 0 80px rgba(255,255,0,0.7);
                      }
                    }
                  `}</style>
                  <span className="ml-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent">
                    Patel
                  </span>
                </h2>

                <div className="mb-8 flex items-center gap-3">
                  <div className="h-1 w-40 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"></div>
                  <div className="flex gap-2">
                    <span className="h-3 w-3 animate-pulse rounded-full bg-cyan-400"></span>
                    <span className="h-3 w-3 animate-pulse rounded-full bg-blue-500"></span>
                    <span className="h-3 w-3 animate-pulse rounded-full bg-cyan-300"></span>
                  </div>
                </div>

                <p className="mb-8 max-w-2xl text-lg leading-8 text-gray-300">
                  MERN Stack & Laravel Developer with 5+ years of experience building scalable applications.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="#projects"
                    className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-4 font-semibold text-white transition hover:scale-105"
                  >
                    View Projects
                  </a>

                  <a
                    href="#contact"
                    className="rounded-2xl border border-cyan-500/50 px-7 py-4 font-semibold text-cyan-400 transition hover:bg-cyan-500 hover:text-white"
                  >
                    Contact Me
                  </a>
                </div>
              </div>

              <div className="relative flex items-center justify-center md:justify-end">
                <div className="group relative overflow-hidden rounded-[50px] border border-cyan-500/20 bg-white/10 p-4 backdrop-blur-2xl shadow-[0_0_80px_rgba(34,211,238,0.15)] transition-all duration-700 hover:scale-[1.02] hover:shadow-[0_0_120px_rgba(34,211,238,0.35)]">
                  <div className="absolute inset-0 animate-[pulseRing_5s_ease-in-out_infinite] bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-transparent"></div>

                  <div className="absolute -left-10 top-10 h-32 w-32 animate-pulse rounded-full bg-cyan-500/20 blur-3xl"></div>
                  <div className="absolute -right-10 bottom-10 h-32 w-32 animate-pulse rounded-full bg-blue-500/20 blur-3xl"></div>

                  {/* <img
                    src="/mnt/data/a_clean_studio_like_portrait_graphic_a_professio.png"
                    alt=""
                    className="h-[520px] w-[390px] animate-[profileFloat_6s_ease-in-out_infinite] rounded-[40px] object-cover object-center transition-all duration-700 group-hover:scale-105 saturate-110 contrast-110"
                  /> */}

                  <div className="absolute inset-0 rounded-[40px] bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                  <div className="absolute right-6 top-6 flex h-24 w-24 items-center justify-center rounded-[28px] border border-cyan-400/20 bg-black/40 backdrop-blur-xl shadow-[0_0_40px_rgba(34,211,238,0.25)]">
                    <div className="flex items-center gap-1 text-4xl font-black leading-none">
                      <span className="bg-gradient-to-b from-cyan-300 to-cyan-500 bg-clip-text text-transparent">
                        H
                      </span>

                      <span className="bg-gradient-to-b from-blue-300 to-blue-500 bg-clip-text text-transparent">
                        P
                      </span>
                    </div>
                  </div>

                  <div className="absolute bottom-8 left-8 right-8 rounded-[30px] border border-white/10 bg-black/40 p-6 backdrop-blur-xl">
                    <div className="mb-3 h-1.5 w-28 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"></div>

                    <h3 className="text-3xl font-black text-white">
                      Himanshu Patel
                    </h3>

                    <p className="mt-2 text-sm uppercase tracking-[4px] text-cyan-400">
                      MERN STACK DEVELOPER
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="projects" className="bg-white px-6 py-28 transition-all duration-500">
            <div className="mx-auto max-w-7xl">
              <div className="mb-20 text-center">
                <p className="mb-4 font-semibold uppercase tracking-[4px] text-cyan-500">
                  Featured Work
                </p>

                <h2 className="mb-6 text-5xl font-black text-gray-900 md:text-6xl">
                  Professional Projects
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="group overflow-hidden rounded-[30px] border border-gray-200 bg-white shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-cyan-500/20"
                  >
                    <div className="overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-56 w-full object-cover transition duration-700 group-hover:scale-110"
                      />
                    </div>

                    <div className="p-5">
                      <div className="mb-4 inline-flex rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
                        {project.category}
                      </div>

                      <h3 className="mb-4 text-2xl font-black text-gray-900 transition duration-300 group-hover:text-cyan-400">
                        {project.title}
                      </h3>

                      <p className="mb-6 leading-7 text-gray-600">
                        {project.description}
                      </p>

                      <a
                        href="#"
                        className="inline-flex items-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:scale-105"
                      >
                        🔗 Visit Project
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="services" className={`px-6 py-28 transition-all duration-500 ${darkMode ? 'bg-gradient-to-b from-gray-950 via-black to-gray-900' : 'bg-gradient-to-b from-gray-100 via-white to-gray-200'}`}>
            <div className="mx-auto max-w-7xl">
              <div className="mb-20 text-center">
                <h2 className={`mb-6 text-5xl font-black md:text-6xl ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Professional Services
                </h2>
              </div>

              <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="group rounded-[30px] border border-gray-800 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-3 hover:border-cyan-500"
                  >
                    <div className="mb-8 text-5xl">
                      {service.icon}
                    </div>

                    <h3 className="mb-5 text-2xl font-bold text-white">
                      {service.title}
                    </h3>

                    <p className="leading-8 text-gray-400">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="skills" className={`px-6 py-28 transition-all duration-500 ${darkMode ? 'bg-black' : 'bg-white'}`}>
            <div className="mx-auto max-w-7xl">
              <div className="mb-20 text-center">
                <h2 className={`mb-6 text-5xl font-black md:text-6xl ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Skills & Technologies
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="group rounded-[28px] border border-gray-800 bg-white/5 p-8 text-center transition-all duration-300 hover:-translate-y-3 hover:border-cyan-500"
                  >
                    <div className="mb-5 flex justify-center">
                      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white p-4 shadow-xl transition duration-300 group-hover:scale-110">
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          className="h-12 w-12 object-contain"
                        />
                      </div>
                    </div>

                    <h3 className={`text-lg font-bold transition duration-300 group-hover:text-cyan-400 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {skill.name}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="videos" className={`px-6 py-28 transition-all duration-500 ${darkMode ? 'bg-gradient-to-b from-gray-900 to-black' : 'bg-gradient-to-b from-gray-100 to-white'}`}>
            <div className="mx-auto max-w-7xl">
              <div className="mb-20 text-center">
                <h2 className="mb-6 flex flex-wrap items-center justify-center gap-3 text-center text-4xl font-black text-white md:text-6xl">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600 text-3xl text-white">
                    ▶
                  </span>

                  <span>
                    <span className="text-red-500">YouTube</span> Videos
                  </span>
                </h2>
              </div>

              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {videos.map((video, index) => (
                  <div
                    key={index}
                    className="group overflow-hidden rounded-[20px] border border-gray-800 bg-gray-950 transition-all duration-300 hover:-translate-y-1 hover:border-red-500"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
                        alt={video}
                        className="h-40 w-full object-cover transition duration-500 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-500 group-hover:bg-black/60">
                        <div className="flex h-16 w-16 scale-0 items-center justify-center rounded-full bg-red-600 text-3xl text-white opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
                          ▶
                        </div>
                      </div>
                    </div>

                    <div className="p-4">
                      <h3 className="mb-3 text-base font-bold text-white">
                        {video}
                      </h3>

                      <a
                        href="https://youtube.com"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center rounded-lg bg-red-500 px-3 py-2 text-xs font-semibold text-white"
                      >
                        ▶ Watch Now
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className={`relative overflow-hidden px-6 py-32 transition-all duration-500 ${darkMode ? 'bg-gradient-to-b from-black via-[#020617] to-gray-950' : 'bg-gradient-to-b from-white via-gray-100 to-gray-200'}`}>
            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"></div>

            <div className="relative mx-auto max-w-7xl">
              <div className="mb-20 text-center">
                <p className="mb-4 font-semibold uppercase tracking-[4px] text-cyan-400">
                  Let's Work Together
                </p>

                <h2 className={`mb-6 text-5xl font-black md:text-6xl ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Contact Me
                </h2>

                <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-400">
                  Have a project idea or looking for a professional developer? Let's create something amazing together.
                </p>
              </div>

              <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="space-y-8">
                  <div className="group rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-3xl text-white shadow-xl shadow-cyan-500/20">
                      📧
                    </div>

                    <h3 className="mb-3 text-2xl font-bold text-white">
                      Email Address
                    </h3>

                    <p className="text-lg text-gray-400 transition duration-300 group-hover:text-cyan-300">
                      himanshu.dev@gmail.com
                    </p>
                  </div>

                  <div className="group rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-3xl text-white shadow-xl shadow-cyan-500/20">
                      📱
                    </div>

                    <h3 className="mb-3 text-2xl font-bold text-white">
                      Phone Number
                    </h3>

                    <p className="text-lg text-gray-400 transition duration-300 group-hover:text-cyan-300">
                      +91 98765 43210
                    </p>
                  </div>

                  <div className="group rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-3xl text-white shadow-xl shadow-cyan-500/20">
                      📍
                    </div>

                    <h3 className="mb-3 text-2xl font-bold text-white">
                      Location
                    </h3>

                    <p className="text-lg text-gray-400 transition duration-300 group-hover:text-cyan-300">
                      Ahmedabad, Gujarat, India
                    </p>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-8 shadow-[0_0_50px_rgba(34,211,238,0.08)] backdrop-blur-2xl md:p-10">
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl"></div>
                  <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl"></div>

                  <form className="relative z-10 space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <label className="mb-3 block text-sm font-semibold uppercase tracking-[2px] text-gray-400">
                          Full Name
                        </label>

                        <input
                          type="text"
                          placeholder="Enter your full name"
                          className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-cyan-500 focus:bg-black/50 focus:shadow-lg focus:shadow-cyan-500/10"
                        />
                      </div>

                      <div>
                        <label className="mb-3 block text-sm font-semibold uppercase tracking-[2px] text-gray-400">
                          Email Address
                        </label>

                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-cyan-500 focus:bg-black/50 focus:shadow-lg focus:shadow-cyan-500/10"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <label className="mb-3 block text-sm font-semibold uppercase tracking-[2px] text-gray-400">
                          Phone Number
                        </label>

                        <input
                          type="tel"
                          placeholder="Enter phone number"
                          className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-cyan-500 focus:bg-black/50 focus:shadow-lg focus:shadow-cyan-500/10"
                        />
                      </div>

                      <div>
                        <label className="mb-3 block text-sm font-semibold uppercase tracking-[2px] text-gray-400">
                          Service Required
                        </label>

                        <select className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none transition-all duration-300 focus:border-cyan-500 focus:bg-black/50 focus:shadow-lg focus:shadow-cyan-500/10">
                          <option>Web Designing</option>
                          <option>Web Development</option>
                          <option>MERN Stack Development</option>
                          <option>React Native App</option>
                          <option>UI/UX Design</option>
                          <option>REST API Development</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="mb-3 block text-sm font-semibold uppercase tracking-[2px] text-gray-400">
                        Project Details
                      </label>

                      <textarea
                        rows={6}
                        placeholder="Tell me about your project requirements..."
                        className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-cyan-500 focus:bg-black/50 focus:shadow-lg focus:shadow-cyan-500/10"
                      />
                    </div>

                    <button
                      type="submit"
                      className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-5 text-lg font-semibold text-white shadow-2xl shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-cyan-500/40"
                    >
                      <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full"></span>

                      <span className="relative z-10 flex items-center gap-3">
                        🚀 Send Message
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
