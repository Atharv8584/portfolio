import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Terminal, Database, Workflow } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
           Atharv Atnurkar
          </h1>
          <p className="text-2xl text-gray-400 mb-8">Front-end Developer</p>
          <p className="max-w-2xl text-gray-300 mb-8 leading-relaxed">
            I craft elegant solutions to complex problems, specializing in modern web technologies
            and scalable architecture. With a passion for clean code and user-centric design,
            I bring ideas to life through technology.
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/atharv8584" className="p-2 hover:text-blue-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/atharv-atnurkar-5563b21b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="p-2 hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:contact@example.com" className="p-2 hover:text-blue-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillCard
              icon={<Code2 size={32} />}
              title="Frontend Development"
              description="React, TypeScript, Tailwind CSS"
            />
            <SkillCard
              icon={<Terminal size={32} />}
              title="Backend Development"
              description="Node.js, Python, Go"
            />
            <SkillCard
              icon={<Database size={32} />}
              title="Database Design"
              description="PostgreSQL, MongoDB, Redis"
            />
            <SkillCard
              icon={<Workflow size={32} />}
              title="DevOps"
              description="Docker, AWS, CI/CD"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Genvogue"
              description="A real-time merch designer"
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
              link="https://genvogue.vercel.app/"
            />
            <ProjectCard
              title="StalkStock"
              description="stalking stocks price using ai"
              image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
              link="https://stalk-stocks.vercel.app/"
            />
       
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© 2024 Atharv Atnurkar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function SkillCard({ icon, title, description }) {
  return (
    <div className="p-6 bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors">
      <div className="text-blue-400 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function ProjectCard({ title, description, image, link }) {
  return (
    <div className="group bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
          {title}
          <a href={link} className="text-blue-400 hover:text-blue-300">
            <ExternalLink size={16} />
          </a>
        </h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}

export default App;