  const experiences = [
    {
      title: "Software Developer",
      company: "Citytech Group Pvt Ltd",
      location: "Kathmandu, Nepal",
      duration: "Sep 2024 – Present",
      icon: "fas fa-laptop-code",
      techStack: "Node.js, Express.js, MongoDB, React.js, Next.js, Ant Design, MUI, Bootstrap",
      achievements: [
        "Developed scalable backend systems using Node.js and MongoDB.",
        "Created responsive UIs with Next.js and React.js.",
        "Integrated UI libraries (Ant Design, MUI, Bootstrap) to streamline design.",
        "Conducted code reviews and debugging to ensure high-performance applications.",
        "Researched and adopted modern technologies for long-term project improvement."
      ]
    },
    {
      title: "Associate Software Developer",
      company: "Virtuosway Software Pvt. Ltd",
      location: "Kathmandu, Nepal",
      duration: "Feb 2023 – Sep 2024",
      icon: "fas fa-server",
      techStack: "Node.js, Express.js, MongoDB, React.js, Next.js, Ant Design, MUI, Bootstrap",
      achievements: [
        "Built clean, scalable APIs with Node.js and Express.js.",
        "Developed interactive SPAs with React.js and Next.js.",
        "Used modern UI libraries for consistent user experience.",
        "Performed in-depth code reviews and performance optimization.",
        "Continually introduced tech upgrades and new tools to boost project success."
      ]
    },
    {
      title: "React Developer",
      company: "E-Signature Pvt. Ltd",
      location: "Kathmandu, Nepal",
      duration: "Aug 2022 – Feb 2023",
      icon: "fab fa-react",
      techStack: "React.js, Next.js",
      achievements: [
        "Built efficient and responsive UIs using React.js and Next.js.",
        "Maintained scalable codebase for enterprise-grade apps.",
        "Integrated reusable components and third-party libraries.",
        "Debugged and optimized app performance under agile delivery cycles.",
        "Contributed to architecture and best practices discussions."
      ]
    }
  ];

  const container = document.getElementById("experience-list");

  experiences.forEach(exp => {
    const achievementsHTML = exp.achievements
      .map(item => `<li>${item}</li>`)
      .join("");

    container.innerHTML += `
      <div class="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-cyan-700/40 transition duration-300">
        <div class="flex justify-between items-center">
          <div>
            <h3 class="text-2xl font-semibold text-white">${exp.title}</h3>
            <p class="text-cyan-400 font-medium">${exp.company}</p>
            <p class="text-sm text-gray-400">${exp.duration}</p>
          </div>
          <i class="${exp.icon} text-cyan-400 text-3xl"></i>
        </div>
        <p class="mt-4 text-sm text-gray-300">Location: ${exp.location}</p>
        <p class="mt-1 text-sm text-gray-300">Tech Stack: ${exp.techStack}</p>
        <ul class="mt-4 text-sm text-gray-400 list-disc list-inside space-y-1">
          ${achievementsHTML}
        </ul>
      </div>
    `;
  });
