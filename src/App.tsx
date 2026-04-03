export default function App() {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      {/* Navbar */}
      {/*This section controls the navbar, including jump links to each of the sections for ease of use */}
      <nav className="flex justify-between items-center p-4 max-w-5xl mx-auto">
        <h1 className="font-bold text-lg">Preston Smith</h1>
        <div className="space-x-4 text-sm">
          <a href="#about" className="hover:text-blue-400 transition">
            About
          </a>
          <a href="#projects" className="hover:text-blue-400 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-400 transition">
            Contact
          </a>
        </div>
      </nav>

      {/* About */}
      {/* This section is the about me section, mostly just one paragraph within a section tag*/}
      <section id="about" className="px-4 py-12 max-w-3xl mx-auto">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4">About Me</h3>
        <p className="text-gray-400 leading-relaxed">
          I'm a senior software engineer at the University Of Nebraska -
          Lincoln. Outside of class, I focus on open source projects using{" "}
          <b>C#</b>, <b>Python</b>, and <b>YAML</b>, and web design using{" "}
          <b>HTML</b>, <b>CSS</b>, and <b>Javascript</b>
        </p>
      </section>

      {/* Projects */}
      {/* This is the projects section, including each of the cards that animate on hover over. These are stored in such a way to be vertical on smalelr screens, but expand to be horizontal on larger screens. */}
      <section id="projects" className="px-4 py-12 max-w-5xl mx-auto">
        <h3 className="text-xl sm:text-2xl font-semibold mb-6">Projects</h3>

        <div className="grid gap-6 sm:grid-cols-2">
          {/* Project Card One*/}
          {/* Each of these is the project cards stored in this div to follow the grip paterns*/}
          <div
            className="bg-gray-900 p-5 rounded-2xl shadow-md 
                          transition transform hover:-translate-y-2 hover:shadow-xl"
          >
            <h4 className="font-bold text-lg mb-2">Space Station 14</h4>
            <p className="text-gray-400 mb-3">
              A multiplayer game about paranoia and chaos on a space station.
              Remake of the cult-classic Space Station 13.
            </p>
            <div className="text-sm text-blue-400">View Project →</div>
          </div>

          {/* Project Card Two*/}
          <div
            className="bg-gray-900 p-5 rounded-2xl shadow-md 
                          transition transform hover:-translate-y-2 hover:shadow-xl"
          >
            <h4 className="font-bold text-lg mb-2">HUSKER STEM VR - 3.0</h4>
            <p className="text-gray-400 mb-3">
              UNL CSE-Falkinburg-Benes 2021-22, 2022-23, and 2025-26 Senior
              Design Project
            </p>
            <div className="text-sm text-blue-400">View Project →</div>
          </div>
        </div>
      </section>

      {/* Contact */}
      {/* Contact section, individual P tags to define each line */}
      <section id="contact" className="text-center px-4 py-12">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4">Contact</h3>
        <p className="text-gray-400 mb-2">Preston Smith</p>
        <p className="text-gray-400 mb-2">91167896@nebraska.edu</p>
      </section>
    </div>
  );
}
