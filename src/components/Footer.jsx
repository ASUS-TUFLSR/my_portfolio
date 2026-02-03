import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="py-10 px-4 bg-card border-t border-border mt-12">
      <div className="container mx-auto max-w-5xl flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Left - Copyright */}
        <p className="text-sm text-muted-foreground text-center md:text-left">
          &copy; {year} <span className="font-medium">ManmeetPal.co</span>. All rights reserved.
        </p>

        {/* Center - Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            target="_blank"
            aria-label="GitHub"
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition"
          >
            <Github size={18} />
          </a>

          <a
            href="#"
            target="_blank"
            aria-label="LinkedIn"
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition"
          >
            <Linkedin size={18} />
          </a>

          <a
            href="mailto:hello@gmail.com"
            aria-label="Email"
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition"
          >
            <Mail size={18} />
          </a>
        </div>

        {/* Right - Back to Top */}
        <a
          href="#top"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
