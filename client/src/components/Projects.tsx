import { FC, useState } from 'react';
import { Search, Shield, BookOpen, AlertCircle } from 'lucide-react';

type ProjectCategory = 'all' | 'osint' | 'forensics' | 'research';

interface Project {
  title: string;
  category: ProjectCategory;
  description: string;
  technologies: string[];
  icon: typeof Search;
  color: string;
}

const Projects: FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');

  const projects: Project[] = [
    {
      title: "Leakguard Analyst",
      category: "osint",
      description: "Advanced Python tool for monitoring Telegram channels for data leaks with entity relationship mapping and IP geolocation capabilities.",
      technologies: ["Python", "Telegram API", "IP Geolocation", "Pattern Recognition"],
      icon: Shield,
      color: "red"
    },
    {
      title: "STUN Packet Extractor",
      category: "forensics",
      description: "Specialized tool for analyzing PCAP files for NAT traversal data with IP geolocation visualization and traffic pattern analysis.",
      technologies: ["Network Analysis", "PCAP Processing", "Traffic Analysis", "Visualization"],
      icon: Search,
      color: "green"
    },
    {
      title: "PhD Research - Cybercrime Law",
      category: "research",
      description: "Research on admissibility standards for digital evidence and investigative frameworks for cyber espionage cases.",
      technologies: ["Legal Research", "Digital Evidence", "Cyber Espionage", "Legal Frameworks"],
      icon: BookOpen,
      color: "blue"
    },
    {
      title: "OSINT Threat Monitoring",
      category: "osint",
      description: "Independent investigations tracking cybercriminal activity with specialization in Arabic-language threat monitoring.",
      technologies: ["OSINT", "Threat Intelligence", "Arabic Language", "Cybercrime Tracking"],
      icon: AlertCircle,
      color: "red"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'green':
        return {
          icon: 'text-green-400',
          border: 'border-green-500/20',
          bg: 'bg-green-500/10',
          accent: 'text-green-400'
        };
      case 'blue':
        return {
          icon: 'text-blue-400',
          border: 'border-blue-500/20',
          bg: 'bg-blue-500/10',
          accent: 'text-blue-400'
        };
      case 'red':
        return {
          icon: 'text-red-400',
          border: 'border-red-500/20',
          bg: 'bg-red-500/10',
          accent: 'text-red-400'
        };
      default:
        return {
          icon: 'text-red-400',
          border: 'border-red-500/20',
          bg: 'bg-red-500/10',
          accent: 'text-red-400'
        };
    }
  };

  return (
    <section id="projects" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-slate-900 to-red-950/20 scroll-reveal">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Technical <span className="text-red-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Custom tools and research projects in digital forensics, OSINT, and cybercrime investigation.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {(['all', 'osint', 'forensics', 'research'] as ProjectCategory[]).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-red-500 to-green-500 text-white shadow-lg'
                  : 'bg-slate-800/30 text-gray-300 border border-gray-600 hover:border-green-500/40'
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => {
            const colors = getColorClasses(project.color);
            const IconComponent = project.icon;
            
            return (
              <div
                key={index}
                className={`bg-slate-800/30 rounded-xl border ${colors.border} p-8 hover:border-opacity-60 transition-all duration-300 group hover:transform hover:scale-[1.02] scroll-reveal`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center`}>
                    <IconComponent className={`w-6 h-6 ${colors.icon}`} />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <span className={`text-sm ${colors.accent} font-medium uppercase tracking-wide`}>
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-2">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-sm font-medium text-white">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-slate-600/50 text-gray-300 text-xs rounded-full border border-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;

