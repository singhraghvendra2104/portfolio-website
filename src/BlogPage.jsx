import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";

// Blog Page Component
const BlogPage = () => {
  const blogPosts = [
    {
      title: "Implementing OPC UA for Industrial IoT",
      excerpt: "A deep dive into connecting industrial equipment using OPC UA protocol for real-time data exchange in smart factories.",
      date: "Jan 5, 2026",
      readTime: "8 min read",
      category: "Industry 4.0",
      featured: true,
    },
    {
      title: "Computer Vision in Quality Control",
      excerpt: "How AI-powered vision systems are revolutionizing defect detection in manufacturing lines.",
      date: "Dec 20, 2025",
      readTime: "6 min read",
      category: "AI/ML",
    },
    {
      title: "Robot Path Planning with Python",
      excerpt: "Implementing trajectory interpolation algorithms for industrial robot arms using Python and simulation.",
      date: "Dec 10, 2025",
      readTime: "10 min read",
      category: "Robotics",
    },
    {
      title: "Digital Twins in Manufacturing",
      excerpt: "Exploring the concept of digital twins and how they enable predictive maintenance and process optimization.",
      date: "Nov 28, 2025",
      readTime: "7 min read",
      category: "Industry 4.0",
    },
    {
      title: "KUKA Robot Programming Basics",
      excerpt: "Getting started with KRL programming for KUKA industrial robots - from basic movements to complex routines.",
      date: "Nov 15, 2025",
      readTime: "12 min read",
      category: "Robotics",
    },
    {
      title: "SAP Integration in Smart Factories",
      excerpt: "Connecting ERP systems with shop floor operations for seamless data flow and real-time decision making.",
      date: "Nov 1, 2025",
      readTime: "9 min read",
      category: "Industry 4.0",
    },
  ];

  return (
    <div className="blog-page">
      <div className="blog-page__header">
        <div className="container">
          <Link to="/" className="blog-page__back">
            <ArrowLeft size={20} />
            Back to Portfolio
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Thoughts on Industry 4.0, Robotics, and Automation
          </motion.p>
        </div>
      </div>

      <div className="container">
        <div className="blog-page__grid">
          {blogPosts.map((post, i) => (
            <motion.article
              key={i}
              className={`blog-card ${post.featured ? 'blog-card--featured' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="blog-card__meta">
                <span className="blog-card__category">{post.category}</span>
                <div className="blog-card__date-time">
                  <Calendar size={14} />
                  <span>{post.date}</span>
                  <Clock size={14} />
                  <span>{post.readTime}</span>
                </div>
              </div>
              <h3 className="blog-card__title">{post.title}</h3>
              <p className="blog-card__excerpt">{post.excerpt}</p>
              <a href="#" className="blog-card__link">
                Read More <ArrowRight size={16} />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
