import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Netflix+AI Gemini",
    description: "A Niche Website Like Netflix with AI Integrated for movie recommendations.",
    image: "/projects/Project1.png",
    tags: ["React", "Gemini", "API"],
    demoUrl: "https://netfilxgemini-v2.vercel.app/",
    githubUrl: "https://github.com/ASUS-TUFLSR/netfilxgemini-v2",
  },
  {
    id: 2,
    title: "GraphFin – Expense Tracking & Visualization",
    description:
      "App A full-stack expense tracking app that allows users to log, categorize, and visualize daily spending in real time.",
    image: "/projects/Project2.png",
    tags: ["React", "D3.js", "Next.js"],
    demoUrl: "https://graphfin-v2.onrender.com/",
    githubUrl: "https://github.com/ASUS-TUFLSR/GraphFin-v2",
  },
  {
    id: 3,
    title: "Whispr – Real-Time Chat App",
    description:
      "A real-time chat application built with Socket.IO, featuring seamless bidirectional communication.",
    image: "/projects/Project3.png",
    tags: ["React", "Node.js", "Socket.IO"],
    demoUrl: "https://realtime-chat-app-v2.onrender.com/",
    githubUrl: "https://github.com/ASUS-TUFLSR/Realtime-Chat-App-v2",
  },
  {
    id: 4,
    title: "Full Stack E-commerce website",
    description: "Full Stack E-commerce website with Role based User authentication. - Integrated Paypal payment gateway",
    image: "/projects/Project4.png",
    tags: ["React", "PayPal", "MongoDB"],
    demoUrl: "https://proshop-v2-wvum.onrender.com/",
    githubUrl: "https://github.com/ASUS-TUFLSR/proshop-v2",
  },
  {
    id: 5,
    title: "Github-finder",
    description:
      "A website made to fetch/find github user's",
    image: "/projects/Project5.png",
    tags: ["React", "Github", "CSS"],
    demoUrl: "https://githubfinder-31666.netlify.app/",
    githubUrl: "https://github.com/ASUS-TUFLSR/github-finder",
  },
  {
    id: 6,
    title: "Orderoo",
    description:
      "A niche website like swiggy to order food Online.",
    image: "/projects/Project6.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "https://orderoo.netlify.app/",
    githubUrl: "https://github.com/ASUS-TUFLSR/Orderoo",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/ASUS-TUFLSR"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );}

  export default ProjectsSection;
