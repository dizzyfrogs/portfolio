'use client';

import Image from 'next/image';

interface Education {
  school: string;
  degree: string;
  minor?: string;
  gpa?: string;
  date: string;
  logoUrl?: string;
}

const education: Education[] = [
  {
    school: "Old Dominion University",
    degree: "B.S. in Computer Science",
    minor: "Minor in Cybersecurity",
    gpa: "N/A",
    date: "Expected May 2027",
    logoUrl: `${process.env.NODE_ENV === 'production' ? '/portfolio' : ''}/education/odu.jpg`
  },
  {
    school: "Germanna Community College",
    degree: "Associates in Computer Science",
    gpa: "3.77",
    date: "May 2025",
    logoUrl: `${process.env.NODE_ENV === 'production' ? '/portfolio' : ''}/education/germanna.jpg`
  }
];

const About = () => {
  const skills = {
    "Programming Languages": ["Python", "Java", "Go", "JavaScript", "TypeScript", "HTML", "CSS"],
    "Frameworks & Tools": ["React", "Next.js", "Flask", "SQLAlchemy", "Git", "Linux", "Docker"],
    "Areas of Interest": ["Software Engineering", "Web Development", "Mobile Development", "Reverse Engineering", "Cybersecurity"]
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Background */}
          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Background
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                I&apos;m a Computer Science student and aspiring software engineer with a passion for building efficient, user-friendly applications. 
                My journey in tech began as a kid tinkering with computers, and I&apos;ve been hooked ever since.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                I&apos;m currently working on Clockwork, a full-stack web application for managing employee schedules. 
                I&apos;m also learning Go and exploring cloud technologies.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                I&apos;m always looking for new challenges and opportunities to grow as a developer.
              </p>
            </div>

            {/* Education */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu) => (
                  <div key={edu.school} className="flex items-start space-x-4">
                    {edu.logoUrl && (
                      <div className="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-700">
                        <Image
                          src={edu.logoUrl}
                          alt={`${edu.school} logo`}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">{edu.school}</h4>
                          <p className="text-gray-600 dark:text-gray-300">{edu.degree}</p>
                          {edu.minor && (
                            <p className="text-gray-600 dark:text-gray-300">{edu.minor}</p>
                          )}
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500 dark:text-gray-400">{edu.date}</p>
                          {edu.gpa && (
                            <p className="text-sm text-gray-500 dark:text-gray-400">GPA: {edu.gpa}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Skills
              </h3>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Achievements
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span>1st Place - VCU RAM Cyber Security Capture the Flag (CTF) Competition, 2025</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span>Dean&apos;s List - Germanna Community College, 2023-2025</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Resume Download Button */}
        <div className="mt-12 flex justify-center">
          <a
            href="/resume.pdf"
            download="Suleiman_Mejd_Resume.pdf"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <svg 
              className="w-5 h-5 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
              />
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About; 