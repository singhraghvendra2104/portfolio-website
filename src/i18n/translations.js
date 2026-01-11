export const translations = {
  en: {
    // Navigation
    nav: {
      about: "About",
      experience: "Experience",
      education: "Education",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    
    // Hero Section
    hero: {
      greeting: "Hello, I'm",
      name: "Raghvendra Singh",
      role: "Systems Engineer",
      tagline: "M.Sc. student specializing in manufacturing systems, industrial robotics, and AI-driven automation. Building the future of smart factories.",
      cta: "Get in Touch",
      viewProjects: "View Projects",
      roles: ["Automation", "Industry 4.0", "Robotics", "AI/ML"],
    },
    
    // About Section
    about: {
      subtitle: "Who I Am",
      title: "About",
      description: "I'm a Systems Engineering student at Otto von Guericke University with a passion for bridging the gap between traditional manufacturing and cutting-edge technology. My journey spans from managing radar production at Bharat Electronics to developing AI-powered vision systems for Industry 4.0 applications.",
      highlights: {
        experience: { value: "4+", label: "Years Experience" },
        projects: { value: "15+", label: "Projects Completed" },
        focus: { value: "Industry 4.0", label: "Current Focus" },
      },
      highlightsGrid: [
        { label: "Industry 4.0", value: "Digitalization Expert" },
        { label: "Robotics", value: "KUKA & OPC UA" },
        { label: "Development", value: "Systems Engineering" },
        { label: "Data", value: "Analytics & BI" },
      ],
    },
    
    // Experience Section
    experience: {
      subtitle: "Professional Journey",
      title: "Experience",
      present: "Present",
      jobs: [
        {
          period: "Oct 2025 – Present",
          title: "Master Thesis: AI-Based Vision System",
          company: "Essity Operations Mannheim GmbH",
          location: "Germany",
          description: [
            "Developing computer vision system using YOLO and OCR to replace existing industrial scanner achieving only 70% accuracy, targeting >90% identification rate",
            "Building full-stack application (FastAPI, React, PostgreSQL) with real-time WebSocket scanning and multi-camera support for factory floor deployment",
            "Integrating with manufacturing execution systems via OPC UA for quality correlation analysis across production processes",
            "Conducting comparative study between traditional machine vision and AI-based approaches under industrial hardware constraints",
          ],
        },
        {
          period: "Feb 2025 – Sep 2025",
          title: "Internship: Digitalization/Industry 4.0",
          company: "Essity Operations Mannheim GmbH",
          location: "Germany",
          description: [
            "Implemented contour control for mother reel inspection using Keyence VS Creator, automating quality checks and storage processes",
            "Automated month-end analysis workflows using Python, pywin32, pandas, numpy and SAP GUI Scripting; analyzed paper production data and resolved data deviations between SAP and Proficy",
            "Created OPC UA connections by configuring KepServer tags and enabling real-time monitoring of error codes on converting lines",
            "Prepared digital environments for Mannheim pilot rollout of Rubik Pro and Essity Connect. Contributed in PowerBI reporting and Dashboard creation",
            "Designed and deployed real-time KPI dashboards for papermaking lines in Proficy Operations Hub and Plain Reporting",
          ],
        },
        {
          period: "May 2024 – Oct 2024",
          title: "Internship: Robotics",
          company: "Otto von Guericke Universität",
          location: "Magdeburg, Germany",
          description: [
            "Integrated KUKA KR 6 R700 robotic arm within an Industrial Internet of Things (IIoT) environment for smart factory operations",
            "Established client-server communication via OPC UA between the robot and an external laptop, enhancing remote control capabilities",
            "Optimized robot motion control and path planning through simulation and real-time adjustments. Modeled and 3D printed customized workpiece for pick and place operation",
          ],
        },
        {
          period: "Jul 2019 – Sep 2023",
          title: "Project Engineer",
          company: "Bharat Electronics Limited",
          location: "Ghaziabad, India",
          description: [
            "Spearheaded approximately 5000 requirements spanning 6 projects, contributing to an annual sales increase to €20 million",
            "Supervised production of critical assemblies for 20 radars, achieving 97% service level and enhancing client satisfaction by 40%",
            "Upgraded 12 SAP processes reducing manual errors by 80% and improving data accuracy, saving over 200 hours annually",
            "Developed 8 subcontracting vendors ensuring 100% compliance and reducing defect rates by 5%, leading to cost savings of €0.5 million",
          ],
        },
      ],
    },
    
    // Education Section
    education: {
      subtitle: "Academic Background",
      title: "Education",
      certTitle: "Certifications & Courses",
      degrees: [
        {
          degree: "M.Sc. Systems Engineering for Manufacturing",
          institution: "Otto von Guericke Universität",
          location: "Magdeburg, Germany",
          period: "Oct 2023 – Present",
          grade: "Current Grade: 2.0",
          focus: [
            "Model-Based Systems Engineering",
            "Factory Automation & Industrial Robotics",
            "Industry 4.0",
            "Engineering Design",
            "UML/SysML/AutomationML",
            "Plant Simulation",
            "Production System Planning",
            "Supply Networks",
            "Artificial Intelligence",
          ],
        },
        {
          degree: "B.Tech. Mechanical Engineering",
          institution: "PDPM IIITDM Jabalpur",
          location: "India",
          period: "Jul 2015 – May 2019",
          grade: "GPA: 7.8/10",
          focus: [
            "Engineering Design",
            "Production Technology",
            "Computational Fluid Dynamics",
            "Operations Management",
          ],
        },
      ],
      certifications: [
        {
          title: "Agile Project Management",
          issuer: "Google & Coursera",
          date: "Apr 2022",
        },
        {
          title: "PG Certification in Data Science & Business Analytics",
          issuer: "University of Texas at Austin & Great Learning",
          date: "Sep 2020 – Oct 2021",
          link: "https://www.mygreatlearning.com/eportfolio/raghvendra-singh2",
        },
      ],
    },
    
    // Projects Section
    projects: {
      subtitle: "Featured Work",
      title: "Projects",
      inProgress: "In Progress",
      completed: "Completed",
      items: [
        {
          title: "AI Vision System for Barcode Recognition",
          subtitle: "Master Thesis Project",
          description: "Computer vision system using YOLO and OCR to identify damaged barcodes and labels on industrial bales, replacing scanners with 70% accuracy.",
          tech: ["Python", "YOLO", "OCR", "FastAPI", "React", "PostgreSQL"],
          status: "In Progress",
          highlight: true,
        },
        {
          title: "Industrial Robot Controller",
          subtitle: "Software Development Project",
          description: "Trajectory interpolation algorithms for KUKA KR Quantec 6-axis robot with LIN/CIRC movements, velocity profiles, and singularity handling.",
          tech: ["Python", "CoppeliaSim", "Kinematics", "Motion Planning"],
          status: "Completed",
        },
        {
          title: "Hydrogen Fuel Cell UAV Propulsion",
          subtitle: "Engineering Design Project",
          description: "Conceptualized hydrogen fuel propulsion system for UAV using SysML for system architecture and V-model for verification.",
          tech: ["SysML", "V-Model", "Systems Engineering", "Requirements"],
          status: "Completed",
        },
        {
          title: "Nuclear Reactor Transient Analysis",
          subtitle: "Research Internship",
          description: "Modeled supercritical water reactor using FORTRAN, identified limit cycles for stability analysis and optimal operating conditions.",
          tech: ["FORTRAN", "Modeling", "Simulation", "Analysis"],
          status: "Completed",
        },
      ],
    },
    
    // Skills Section
    skills: {
      subtitle: "Technical Expertise",
      title: "Skills",
      categories: {
        programming: "Programming & Tools",
        industrial: "Industrial Systems",
        engineering: "Engineering",
        ai: "Data & AI",
      },
      languages: "Languages",
      langLevels: {
        english: "C1 - Advanced",
        german: "B1 - Intermediate",
        hindi: "Native",
      },
    },
    
    // Contact Section
    contact: {
      subtitle: "Get in Touch",
      title: "Contact",
      connect: "Let's Connect",
      intro: "I'm always interested in discussing Industry 4.0, robotics, AI applications in manufacturing, or potential collaboration opportunities.",
      form: {
        name: "Your Name",
        email: "Your Email",
        message: "Your Message",
        send: "Send Message",
        sending: "Sending...",
        success: "Message sent successfully!",
        error: "Please fill all fields correctly.",
      },
    },
    
    // Footer
    footer: {
      rights: "All rights reserved.",
      built: "Built with React & Framer Motion",
    },
  },
  
  de: {
    // Navigation
    nav: {
      about: "Über mich",
      experience: "Erfahrung",
      education: "Ausbildung",
      projects: "Projekte",
      skills: "Fähigkeiten",
      contact: "Kontakt",
    },
    
    // Hero Section
    hero: {
      greeting: "Hallo, ich bin",
      name: "Raghvendra Singh",
      role: "Systemingenieur",
      tagline: "M.Sc. Student mit Spezialisierung auf Fertigungssysteme, Industrierobotik und KI-gesteuerte Automatisierung. Ich gestalte die Zukunft intelligenter Fabriken.",
      cta: "Kontakt aufnehmen",
      viewProjects: "Projekte ansehen",
      roles: ["Automatisierung", "Industrie 4.0", "Robotik", "KI/ML"],
    },
    
    // About Section
    about: {
      subtitle: "Wer ich bin",
      title: "Über mich",
      description: "Ich bin Student der Systemtechnik an der Otto-von-Guericke-Universität mit einer Leidenschaft für die Verbindung von traditioneller Fertigung und modernster Technologie. Mein Werdegang reicht von der Leitung der Radarproduktion bei Bharat Electronics bis zur Entwicklung KI-gestützter Bildverarbeitungssysteme für Industrie-4.0-Anwendungen.",
      highlights: {
        experience: { value: "4+", label: "Jahre Erfahrung" },
        projects: { value: "15+", label: "Projekte abgeschlossen" },
        focus: { value: "Industrie 4.0", label: "Aktueller Fokus" },
      },
      highlightsGrid: [
        { label: "Industrie 4.0", value: "Digitalisierungsexperte" },
        { label: "Robotik", value: "KUKA & OPC UA" },
        { label: "Entwicklung", value: "Systems Engineering" },
        { label: "Daten", value: "Analytics & BI" },
      ],
    },
    
    // Experience Section
    experience: {
      subtitle: "Beruflicher Werdegang",
      title: "Erfahrung",
      present: "Aktuell",
      jobs: [
        {
          period: "Okt 2025 – Aktuell",
          title: "Masterarbeit: KI-basiertes Bildverarbeitungssystem",
          company: "Essity Operations Mannheim GmbH",
          location: "Deutschland",
          description: [
            "Entwicklung eines Computer-Vision-Systems mit YOLO und OCR zum Ersatz des bestehenden Industriescanners mit nur 70% Genauigkeit, Ziel: >90% Erkennungsrate",
            "Entwicklung einer Full-Stack-Anwendung (FastAPI, React, PostgreSQL) mit Echtzeit-WebSocket-Scanning und Multi-Kamera-Unterstützung für den Fabrikeinsatz",
            "Integration mit Manufacturing Execution Systems via OPC UA für Qualitätskorrelationsanalysen über Produktionsprozesse hinweg",
            "Durchführung einer Vergleichsstudie zwischen traditioneller Bildverarbeitung und KI-basierten Ansätzen unter industriellen Hardwarebeschränkungen",
          ],
        },
        {
          period: "Feb 2025 – Sep 2025",
          title: "Praktikum: Digitalisierung/Industrie 4.0",
          company: "Essity Operations Mannheim GmbH",
          location: "Deutschland",
          description: [
            "Implementierung der Konturkontrolle für Mutterrolleninspektion mit Keyence VS Creator, Automatisierung von Qualitätsprüfungen und Lagerprozessen",
            "Automatisierung von Monatsendanalysen mit Python, pywin32, pandas, numpy und SAP GUI Scripting; Analyse von Papierproduktionsdaten und Behebung von Datenabweichungen zwischen SAP und Proficy",
            "Erstellung von OPC-UA-Verbindungen durch Konfiguration von KepServer-Tags und Ermöglichung der Echtzeitüberwachung von Fehlercodes an Verarbeitungslinien",
            "Vorbereitung digitaler Umgebungen für den Mannheimer Pilotstart von Rubik Pro und Essity Connect. Mitwirkung bei PowerBI-Reporting und Dashboard-Erstellung",
            "Entwurf und Bereitstellung von Echtzeit-KPI-Dashboards für Papiermaschinenlinien in Proficy Operations Hub und Plain Reporting",
          ],
        },
        {
          period: "Mai 2024 – Okt 2024",
          title: "Praktikum: Robotik",
          company: "Otto von Guericke Universität",
          location: "Magdeburg, Deutschland",
          description: [
            "Integration eines KUKA KR 6 R700 Roboterarms in eine Industrial Internet of Things (IIoT) Umgebung für Smart-Factory-Operationen",
            "Aufbau einer Client-Server-Kommunikation via OPC UA zwischen Roboter und externem Laptop zur Verbesserung der Fernsteuerungsmöglichkeiten",
            "Optimierung der Roboterbewegungssteuerung und Bahnplanung durch Simulation und Echtzeitanpassungen. Modellierung und 3D-Druck eines maßgeschneiderten Werkstücks für Pick-and-Place-Operationen",
          ],
        },
        {
          period: "Jul 2019 – Sep 2023",
          title: "Projektingenieur",
          company: "Bharat Electronics Limited",
          location: "Ghaziabad, Indien",
          description: [
            "Leitung von ca. 5000 Anforderungen über 6 Projekte hinweg, Beitrag zu einer jährlichen Umsatzsteigerung auf 20 Millionen Euro",
            "Überwachung der Produktion kritischer Baugruppen für 20 Radare, Erreichen einer Servicequote von 97% und Steigerung der Kundenzufriedenheit um 40%",
            "Optimierung von 12 SAP-Prozessen zur Reduzierung manueller Fehler um 80% und Verbesserung der Datengenauigkeit, Einsparung von über 200 Stunden jährlich",
            "Entwicklung von 8 Unterlieferanten mit 100% Compliance und Reduzierung der Fehlerquote um 5%, Kosteneinsparungen von 0,5 Millionen Euro",
          ],
        },
      ],
    },
    
    // Education Section
    education: {
      subtitle: "Akademischer Hintergrund",
      title: "Ausbildung",
      certTitle: "Zertifikate & Kurse",
      degrees: [
        {
          degree: "M.Sc. Systems Engineering for Manufacturing",
          institution: "Otto von Guericke Universität",
          location: "Magdeburg, Deutschland",
          period: "Okt 2023 – Aktuell",
          grade: "Aktuelle Note: 2,0",
          focus: [
            "Model-Based Systems Engineering",
            "Fabrikautomatisierung & Industrierobotik",
            "Industrie 4.0",
            "Konstruktionstechnik",
            "UML/SysML/AutomationML",
            "Plant Simulation",
            "Produktionssystemplanung",
            "Versorgungsnetzwerke",
            "Künstliche Intelligenz",
          ],
        },
        {
          degree: "B.Tech. Maschinenbau",
          institution: "PDPM IIITDM Jabalpur",
          location: "Indien",
          period: "Jul 2015 – Mai 2019",
          grade: "GPA: 7,8/10",
          focus: [
            "Konstruktionstechnik",
            "Produktionstechnik",
            "Numerische Strömungsmechanik",
            "Betriebsmanagement",
          ],
        },
      ],
      certifications: [
        {
          title: "Agiles Projektmanagement",
          issuer: "Google & Coursera",
          date: "Apr 2022",
        },
        {
          title: "PG-Zertifizierung in Data Science & Business Analytics",
          issuer: "University of Texas at Austin & Great Learning",
          date: "Sep 2020 – Okt 2021",
          link: "https://www.mygreatlearning.com/eportfolio/raghvendra-singh2",
        },
      ],
    },
    
    // Projects Section
    projects: {
      subtitle: "Ausgewählte Arbeiten",
      title: "Projekte",
      inProgress: "In Bearbeitung",
      completed: "Abgeschlossen",
      items: [
        {
          title: "KI-Visionssystem für Barcode-Erkennung",
          subtitle: "Masterarbeit",
          description: "Computer-Vision-System mit YOLO und OCR zur Identifizierung beschädigter Barcodes und Etiketten auf Industrieballen, ersetzt Scanner mit 70% Genauigkeit.",
          tech: ["Python", "YOLO", "OCR", "FastAPI", "React", "PostgreSQL"],
          status: "In Bearbeitung",
          highlight: true,
        },
        {
          title: "Industrieroboter-Steuerung",
          subtitle: "Softwareentwicklungsprojekt",
          description: "Trajektorieninterpolationsalgorithmen für KUKA KR Quantec 6-Achsen-Roboter mit LIN/CIRC-Bewegungen, Geschwindigkeitsprofilen und Singularitätsbehandlung.",
          tech: ["Python", "CoppeliaSim", "Kinematics", "Motion Planning"],
          status: "Abgeschlossen",
        },
        {
          title: "Wasserstoff-Brennstoffzellen-UAV-Antrieb",
          subtitle: "Konstruktionsprojekt",
          description: "Konzeption eines Wasserstoffantriebssystems für UAVs unter Verwendung von SysML für die Systemarchitektur und V-Modell zur Verifizierung.",
          tech: ["SysML", "V-Model", "Systems Engineering", "Requirements"],
          status: "Abgeschlossen",
        },
        {
          title: "Transientenanalyse von Kernreaktoren",
          subtitle: "Forschungspraktikum",
          description: "Modellierung eines überkritischen Wasserreaktors mit FORTRAN, Identifizierung von Grenzzyklen für Stabilitätsanalysen und optimale Betriebsbedingungen.",
          tech: ["FORTRAN", "Modeling", "Simulation", "Analysis"],
          status: "Abgeschlossen",
        },
      ],
    },
    
    // Skills Section
    skills: {
      subtitle: "Technische Expertise",
      title: "Fähigkeiten",
      categories: {
        programming: "Programmierung & Tools",
        industrial: "Industrielle Systeme",
        engineering: "Ingenieurwesen",
        ai: "Daten & KI",
      },
      languages: "Sprachen",
      langLevels: {
        english: "C1 - Fortgeschritten",
        german: "B1 - Mittelstufe",
        hindi: "Muttersprache",
      },
    },
    
    // Contact Section
    contact: {
      subtitle: "Kontakt aufnehmen",
      title: "Kontakt",
      connect: "Lass uns verbinden",
      intro: "Ich freue mich immer über Gespräche zu Industrie 4.0, Robotik, KI-Anwendungen in der Fertigung oder mögliche Kooperationen.",
      form: {
        name: "Ihr Name",
        email: "Ihre E-Mail",
        message: "Ihre Nachricht",
        send: "Nachricht senden",
        sending: "Wird gesendet...",
        success: "Nachricht erfolgreich gesendet!",
        error: "Bitte füllen Sie alle Felder korrekt aus.",
      },
    },
    
    // Footer
    footer: {
      rights: "Alle Rechte vorbehalten.",
      built: "Erstellt mit React & Framer Motion",
    },
  },
};

export const useTranslation = (language) => {
  return translations[language] || translations.en;
};

export default translations;
