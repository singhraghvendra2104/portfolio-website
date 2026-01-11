import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  ExternalLink,
  ChevronDown,
  Code,
  Cpu,
  Database,
  Factory,
  Menu,
  X,
  Github,
  Send,
  CheckCircle,
  AlertCircle,
  Bot,
  Cog,
  Zap,
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  Globe,
} from "lucide-react";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import { translations } from "./i18n/translations";
import "./App.css";

// Scroll Progress Indicator
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX }}
    />
  );
};

// Language Toggle Component
const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();
  
  return (
    <button 
      className="language-toggle" 
      onClick={toggleLanguage}
      aria-label="Toggle language"
    >
      <Globe size={16} />
      <span className="language-toggle__text">
        {language === 'en' ? 'DE' : 'EN'}
      </span>
    </button>
  );
};

// Navigation Component
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { key: "about", label: t.nav.about },
    { key: "experience", label: t.nav.experience },
    { key: "education", label: t.nav.education },
    { key: "projects", label: t.nav.projects },
    { key: "skills", label: t.nav.skills },
    { key: "contact", label: t.nav.contact },
  ];

  return (
    <motion.nav
      className={`nav ${scrolled ? "nav--scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="nav__container">
        <a href="#hero" className="nav__logo">
          <span className="nav__logo-bracket">&lt;</span>
          RS
          <span className="nav__logo-bracket">/&gt;</span>
        </a>

        <div className={`nav__links ${isOpen ? "nav__links--open" : ""}`}>
          {navItems.map((item, i) => (
            <motion.a
              key={item.key}
              href={`#${item.key}`}
              className="nav__link"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        <div className="nav__actions">
          <LanguageToggle />
          <button
            className="nav__toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

// Hero Section
const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="hero" className="hero">
      {/* Animated gradient orbs */}
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />
      <div className="hero__orb hero__orb--3" />

      <div className="hero__grid-bg" />
      <div className="hero__content">
        <motion.div
          className="hero__text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero__greeting">{t.hero.greeting}</span>
          <h1 className="hero__name">{t.hero.name}</h1>
          <div className="hero__title">
            <span className="hero__title-static">{t.hero.role}</span>
            <span className="hero__title-dynamic">
              <TypeWriter texts={t.hero.roles} />
            </span>
          </div>
          <p className="hero__description">{t.hero.tagline}</p>
          <div className="hero__cta">
            <a href="#contact" className="btn btn--primary">
              {t.hero.cta}
            </a>
            <a href="#projects" className="btn btn--secondary">
              {t.hero.viewProjects}
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="hero__image-container">
            <div className="hero__image-frame">
              <img
                src="/profile.jpg"
                alt="Raghvendra Singh"
                className="hero__image"
              />
            </div>
            <div className="hero__image-decoration" />
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="hero__scroll"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={32} />
      </motion.a>
    </section>
  );
};

// TypeWriter Effect
const TypeWriter = ({ texts }) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[index];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentText.slice(0, text.length + 1));
          if (text === currentText) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setText(currentText.slice(0, text.length - 1));
          if (text === "") {
            setIsDeleting(false);
            setIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, texts]);

  return (
    <span>
      {text}
      <span className="cursor">|</span>
    </span>
  );
};

// About Section
const About = () => {
  const { language } = useLanguage();
  const t = translations[language];

  // Icons matching the order in translations.js
  const highlightIcons = [
    <Factory size={24} />,
    <Cpu size={24} />,
    <Code size={24} />,
    <Database size={24} />,
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <SectionHeader title={t.about.title} subtitle={t.about.subtitle} />

        <div className="about__content">
          <motion.div
            className="about__text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p>{t.about.description}</p>
          </motion.div>

          <div className="about__highlights">
            {t.about.highlightsGrid.map((item, i) => (
              <motion.div
                key={item.label}
                className="about__highlight-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="about__highlight-icon">{highlightIcons[i]}</div>
                <div className="about__highlight-content">
                  <span className="about__highlight-label">{item.label}</span>
                  <span className="about__highlight-value">{item.value}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Experience Section
const Experience = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  // Use translated jobs data if available
  const experienceData = t.experience.jobs;
  
  // Logos mapping (since translations don't include logos)
  const logos = ["/logos/essity.png", "/logos/essity.png", "/logos/ovgu.png", "/logos/bel.png"];
  const techStacks = [
    ["YOLO", "OCR", "FastAPI", "React", "PostgreSQL", "OPC UA"],
    ["Python", "SAP", "OPC UA", "KepServer", "PowerBI", "Proficy", "Keyence"],
    ["KUKA", "OPC UA", "IIoT", "3D Printing", "Python"],
    ["SAP PP", "SAP MM", "Project Management", "Supply Chain"],
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <SectionHeader title={t.experience.title} subtitle={t.experience.subtitle} />

        <div className="experience__timeline">
          {experienceData.map((exp, i) => (
            <motion.div
              key={i}
              className="experience__item"
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="experience__marker" />
              <div className="experience__card">
                <div className="experience__card-header">
                  {logos[i] && (
                    <img 
                      src={logos[i]} 
                      alt={exp.company} 
                      className="experience__logo"
                    />
                  )}
                  <div className="experience__card-info">
                    <span className="experience__period">{exp.period}</span>
                    <h3 className="experience__title">{exp.title}</h3>
                    <div className="experience__company">
                      <span>{exp.company}</span>
                      <span className="experience__location">
                        <MapPin size={14} /> {exp.location}
                      </span>
                    </div>
                  </div>
                </div>
                <ul className="experience__list">
                  {exp.description.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
                <div className="experience__tech">
                  {techStacks[i].map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Projects Section
const Projects = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const projects = [
    {
      title: "AI Vision System for Barcode Recognition",
      subtitle: "Master Thesis Project",
      description:
        "Computer vision system using YOLO and OCR to identify damaged barcodes and labels on industrial bales, replacing scanners with 70% accuracy.",
      tech: ["Python", "YOLO", "OCR", "FastAPI", "React", "PostgreSQL"],
      status: "In Progress",
      highlight: true,
    },
    {
      title: "Industrial Robot Controller",
      subtitle: "Software Development Project",
      description:
        "Trajectory interpolation algorithms for KUKA KR Quantec 6-axis robot with LIN/CIRC movements, velocity profiles, and singularity handling.",
      tech: ["Python", "CoppeliaSim", "Kinematics", "Motion Planning"],
      status: "Completed",
    },
    {
      title: "Hydrogen Fuel Cell UAV Propulsion",
      subtitle: "Engineering Design Project",
      description:
        "Conceptualized hydrogen fuel propulsion system for UAV using SysML for system architecture and V-model for verification.",
      tech: ["SysML", "V-Model", "Systems Engineering", "Requirements"],
      status: "Completed",
    },
    {
      title: "Nuclear Reactor Transient Analysis",
      subtitle: "Research Internship",
      description:
        "Modeled supercritical water reactor using FORTRAN, identified limit cycles for stability analysis and optimal operating conditions.",
      tech: ["FORTRAN", "Modeling", "Simulation", "Analysis"],
      status: "Completed",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <SectionHeader title={t.projects.title} subtitle={t.projects.subtitle} />

        <div className="projects__grid">
          {t.projects.items.map((project, i) => (
            <motion.div
              key={i}
              className={`project-card ${
                project.highlight ? "project-card--highlight" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="project-card__header">
                <span
                  className={`project-card__status project-card__status--${project.status
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {project.status === "In Progress" || project.status === "In Bearbeitung" 
                   ? t.projects.inProgress 
                   : t.projects.completed}
                </span>
              </div>
              <h3 className="project-card__title">{project.title}</h3>
              <span className="project-card__subtitle">{project.subtitle}</span>
              <p className="project-card__description">{project.description}</p>
              <div className="project-card__tech">
                {project.tech.map((t) => (
                  <span key={t} className="tag tag--small">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Skills Section
const Skills = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const skillCategories = [
    {
      title: t.skills.categories.programming,
      skills: [
        { name: "Python", level: 90 },
        { name: "MATLAB", level: 75 },
        { name: "SQL", level: 70 },
        { name: "FORTRAN", level: 65 },
      ],
    },
    {
      title: t.skills.categories.industrial,
      skills: [
        { name: "OPC UA", level: 85 },
        { name: "SAP (PP/MM)", level: 80 },
        { name: "KUKA/KRL", level: 75 },
        { name: "CODESYS", level: 65 },
      ],
    },
    {
      title: t.skills.categories.engineering,
      skills: [
        { name: "SysML/UML", level: 85 },
        { name: "Solid Edge", level: 70 },
        { name: "CoppeliaSim", level: 75 },
        { name: "Plant Simulation", level: 70 },
      ],
    },
    {
      title: t.skills.categories.ai,
      skills: [
        { name: "Machine Learning", level: 75 },
        { name: "Computer Vision", level: 70 },
        { name: "PowerBI", level: 80 },
        { name: "Data Analytics", level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <SectionHeader title={t.skills.title} subtitle={t.skills.subtitle} />

        <div className="skills__grid">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              className="skills__category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <h3 className="skills__category-title">{category.title}</h3>
              <div className="skills__list">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill">
                    <div className="skill__header">
                      <span className="skill__name">{skill.name}</span>
                      <span className="skill__level">{skill.level}%</span>
                    </div>
                    <div className="skill__bar">
                      <motion.div
                        className="skill__progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="skills__languages"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="skills__category-title">{t.skills.languages}</h3>
          <div className="skills__language-grid">
            <div className="language-card">
              <span className="language-card__name">English</span>
              <span className="language-card__level">{t.skills.langLevels.english}</span>
            </div>
            <div className="language-card">
              <span className="language-card__name">German</span>
              <span className="language-card__level">{t.skills.langLevels.german}</span>
            </div>
            <div className="language-card">
              <span className="language-card__name">Hindi</span>
              <span className="language-card__level">{t.skills.langLevels.hindi}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Contact Section with secure form handling
const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [honeypot, setHoneypot] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Security: Check honeypot (bots fill this hidden field)
    if (honeypot) {
      console.log("Bot detected");
      return;
    }

    // Security: Basic validation
    if (!formState.name || !formState.email || !formState.message) {
      setStatus("error");
      return;
    }

    // Security: Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      setStatus("error");
      return;
    }

    // Security: Sanitize inputs (basic XSS prevention)
    const sanitize = (str) => str.replace(/[<>]/g, "");

    setStatus("loading");

    // Opens email client - secure, no backend needed
    const mailtoLink = `mailto:singhraghvendra2104@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(
      sanitize(formState.name)
    )}&body=${encodeURIComponent(
      sanitize(formState.message)
    )}%0A%0AFrom: ${encodeURIComponent(sanitize(formState.email))}`;

    window.location.href = mailtoLink;
    setStatus("success");
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <SectionHeader title={t.contact.title} subtitle={t.contact.subtitle} />

        <div className="contact__content">
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3>{t.contact.connect}</h3>
            <p>{t.contact.intro}</p>

            <div className="contact__details">
              <a
                href="mailto:singhraghvendra2104@gmail.com"
                className="contact__item"
              >
                <Mail size={20} />
                <span>singhraghvendra2104@gmail.com</span>
              </a>
              <a href="tel:+4915510409453" className="contact__item">
                <Phone size={20} />
                <span>+49 155 1040 9453</span>
              </a>
              <div className="contact__item">
                <MapPin size={20} />
                <span>Mannheim, Germany</span>
              </div>
            </div>

            <div className="contact__social">
              <a
                href="https://www.linkedin.com/in/raghvendrasingh2104/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__social-link"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/singhraghvendra2104"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__social-link"
                aria-label="GitHub Profile"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.xing.com/profile/Raghvendra_Singh17"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__social-link"
                aria-label="Xing Profile"
              >
                <img src="/logos/xing.png" alt="Xing" style={{ width: 24, height: 24, borderRadius: 2 }} />
              </a>
            </div>
          </motion.div>

          <motion.form
            className="contact__form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="form-group">
              <input
                type="text"
                placeholder={t.contact.form.name}
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
                disabled={status === "loading"}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder={t.contact.form.email}
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
                disabled={status === "loading"}
              />
            </div>
            {/* Honeypot field (hidden from users) */}
            <div
              style={{
                opacity: 0,
                position: "absolute",
                top: 0,
                left: 0,
                height: 0,
                width: 0,
                zIndex: -1,
              }}
            >
              <input
                type="text"
                name="website_url_field"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <textarea
                placeholder={t.contact.form.message}
                rows="5"
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                disabled={status === "loading"}
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn--primary"
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                <span className="btn-loading">
                  {t.contact.form.sending}
                </span>
              ) : (
                <>
                  <Send size={18} /> {t.contact.form.send}
                </>
              )}
            </button>
            {status === "success" && (
              <motion.div
                className="form-message success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <CheckCircle size={18} /> {t.contact.form.success}
              </motion.div>
            )}
            {status === "error" && (
              <motion.div
                className="form-message error"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <AlertCircle size={18} /> {t.contact.form.error}
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

// Education Section
const Education = () => {
  const { language } = useLanguage();
  const t = translations[language];

  // Logos mapping (translations don't include logos)
  const degreeLogos = ["/logos/ovgu.png", "/logos/iiitdm.png"];
  const certLogos = ["/logos/google.png", "/logos/great-learning.png"];

  return (
    <section id="education" className="education">
      <div className="container">
        <SectionHeader title={t.education.title} subtitle={t.education.subtitle} />

        <div className="education__grid">
          {t.education.degrees.map((edu, i) => (
            <motion.div
              key={i}
              className="education__card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="education__card-top">
                {degreeLogos[i] && (
                  <img 
                    src={degreeLogos[i]} 
                    alt={edu.institution} 
                    className="education__logo"
                  />
                )}
                <div className="education__card-content">
                  <div className="education__header">
                    <span className="education__period">{edu.period}</span>
                    <span className="education__grade">{edu.grade}</span>
                  </div>
                  <h3 className="education__degree">{edu.degree}</h3>
                  <div className="education__institution">
                    <span>{edu.institution}</span>
                    <span className="education__location">
                      <MapPin size={14} /> {edu.location}
                    </span>
                  </div>
                </div>
              </div>
              <div className="education__focus">
                {edu.focus.map((item, j) => (
                  <span key={j} className="tag tag--small">{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="education__certifications"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="education__section-title">{t.education.certTitle}</h3>
          <div className="education__cert-grid">
            {t.education.certifications.map((cert, i) => (
              <div key={i} className="certification-card">
                {certLogos[i] && (
                  <img 
                    src={certLogos[i]} 
                    alt={cert.issuer} 
                    className="certification-card__logo"
                  />
                )}
                <div className="certification-card__content">
                  <h4 className="certification-card__title">
                    {cert.link ? (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "inherit", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "4px" }}
                        className="hover:text-accent"
                      >
                        {cert.title}
                        <ExternalLink size={14} />
                      </a>
                    ) : (
                      cert.title
                    )}
                  </h4>
                  <span className="certification-card__issuer">{cert.issuer}</span>
                  <span className="certification-card__date">{cert.date}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Floating Industry Icons (decorative)
const FloatingIcons = () => {
  const icons = [
    { Icon: Bot, delay: 0, x: '10%', y: '20%' },
    { Icon: Cog, delay: 1, x: '85%', y: '15%' },
    { Icon: Factory, delay: 2, x: '75%', y: '70%' },
    { Icon: Zap, delay: 0.5, x: '15%', y: '75%' },
    { Icon: Cpu, delay: 1.5, x: '90%', y: '45%' },
  ];

  return (
    <div className="floating-icons">
      {icons.map(({ Icon, delay, x, y }, i) => (
        <motion.div
          key={i}
          className="floating-icon"
          style={{ left: x, top: y }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: delay,
            ease: "easeInOut"
          }}
        >
          <Icon size={24} />
        </motion.div>
      ))}
    </div>
  );
};

// Footer Component
const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <p>
            &copy; {new Date().getFullYear()} Raghvendra Singh. {t.footer.rights}
          </p>
          <div className="footer__socials">
            <a 
              href="https://www.linkedin.com/in/raghvendrasingh2104/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer__social-link" 
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com/singhraghvendra2104" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer__social-link" 
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.xing.com/profile/Raghvendra_Singh17" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer__social-link" 
              aria-label="Xing"
            >
              <img src="/logos/xing.png" alt="Xing" style={{ width: 20, height: 20, borderRadius: 2 }} />
            </a>
            <a href="mailto:singhraghvendra2104@gmail.com" className="footer__social-link" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
          <p className="footer__tech">
            {t.footer.built}
          </p>
        </div>
      </div>
    </footer>
  );
};

// Section Header Component
const SectionHeader = ({ title, subtitle }) => (
  <motion.div
    className="section-header"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <span className="section-header__subtitle">{subtitle}</span>
    <h2 className="section-header__title">{title}</h2>
    <div className="section-header__line" />
  </motion.div>
);

// Main App Content
function AppContent() {
  return (
    <div className="app">
      <ScrollProgress />
      <Navigation />
      <FloatingIcons />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

// Main App with Language Provider
function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
