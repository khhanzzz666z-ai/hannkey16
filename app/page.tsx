"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Sun,
  Moon,
  Download,
  Menu,
  X,
} from "lucide-react";

export default function PortfolioApp() {
  const [theme, setTheme] = useState("dark");
  const [navOpen, setNavOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const avatarRef = useRef(null);

  useEffect(() => {
    if (!loading) return;

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return prev;
        return prev + Math.random() * 30;
      });
    }, 200);

    const timer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => setLoading(false), 500);
    }, 3500);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, [loading]);

  useEffect(() => {
    const el = avatarRef.current as HTMLDivElement | null;
    function onScroll() {
      if (!el) return;
      const scrolled = window.scrollY;
      el.style.transform = `translateY(${scrolled * 0.08}px)`;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
  }, [theme]);

  const projects = [
    {
      id: 1,
      title: "Personal Portfolio",
      desc: "Portfolio modern dengan animasi dan performa cepat.",
      img: "https://res.cloudinary.com/dvi8bgee0/image/upload/v1764653938/hannkey16-profile_c8c0ja.jpg",
      tags: ["React", "Framer Motion", "Tailwind"],
    },
    {
      id: 2,
      title: "Project Website Academy ",
      desc: "Landing page konversi tinggi untuk produk SaaS.",
      img: "https://res.cloudinary.com/dvi8bgee0/image/upload/v1764653173/Screenshot_2025-12-02_045557_qdfhdo.png",
      tags: ["React", "Tailwind", "Fremer motion"],
    },
    {
      id: 3,
      title: "Admin Dashboard",
      desc: "Dashboard analitik realtime dengan charts interaktif.",
      img: "https://res.cloudinary.com/dvi8bgee0/image/upload/v1764654043/project-1_ooesyc.jpg",
      tags: ["React", "Charts", "REST API"],
    },
    {
      id: 4,
      title: "E‑commerce Redesign",
      desc: "UI/UX redesign untuk pengalaman checkout yang lebih cepat.",
      img: "https://res.cloudinary.com/dvi8bgee0/image/upload/v1764653988/ecommerce-project_dtmynd.jpg",
      tags: ["UX", "Figma", "Conversion"],
    },
  ];

  if (loading) {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 bg-gradient-to-br from-black via-gray-950 to-black flex items-center justify-center p-6 z-[9999] overflow-hidden"
        >
          {/* Animated background gradient */}
          <motion.div
            animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 opacity-20"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, rgba(239, 68, 68, 0.3) 0%, transparent 70%)",
            }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-10 flex flex-col items-center justify-center"
          >
            {/* Spinner Container */}
            <div className="mb-12">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 rounded-full border-2 border-gray-800 border-t-red-500 border-r-red-400"
              />
            </div>

            {/* Loading Text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-8"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Memuat Portofolio
              </h1>
              <motion.p
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-gray-400 text-sm tracking-widest"
              >
                Harap tunggu...
              </motion.p>
            </motion.div>

            {/* Progress Bar */}
            <div className="w-48 md:w-64">
              <div className="h-1 bg-gray-800 rounded-full overflow-hidden mb-3">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ type: "tween", duration: 0.3 }}
                  className="h-full bg-gradient-to-r from-red-600 to-red-400 rounded-full"
                />
              </div>
              <div className="flex justify-between items-center">
                <motion.span className="text-xs text-gray-500">
                  Memproses...
                </motion.span>
                <motion.span className="text-xs font-semibold text-red-400">
                  {Math.round(Math.min(progress, 100))}%
                </motion.span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black text-gray-100 font-sans antialiased">
      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(239,68,68,0.2), rgba(127,29,29,0.1), transparent)",
        }}
      />

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-40 backdrop-blur-md bg-black/40 border-b border-white/5"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4 md:p-6">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <span className="text-xl font-bold text-white hidden sm:inline">
              HannKey
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {[
              { name: "Home", href: "#home" },
              { name: "About", href: "#about" },
              { name: "Skills", href: "#skills" },
              { name: "Projects", href: "#projects" },
              { name: "Contact", href: "#contact" },
            ].map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                whileHover={{ color: "rgb(239, 68, 68)" }}
                className="px-4 py-2 text-gray-300 hover:text-red-500 transition text-sm font-medium"
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun size={20} className="text-yellow-400" />
              ) : (
                <Moon size={20} className="text-blue-400" />
              )}
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              onClick={() => setNavOpen(!navOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="md:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 transition"
              aria-label="Toggle menu"
            >
              {navOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {navOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-white/5 bg-black/60 backdrop-blur-md"
            >
              <nav className="max-w-6xl mx-auto flex flex-col p-4 gap-2">
                {[
                  { name: "Home", href: "#home" },
                  { name: "About", href: "#about" },
                  { name: "Skills", href: "#skills" },
                  { name: "Projects", href: "#projects" },
                  { name: "Contact", href: "#contact" },
                ].map((item, i) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setNavOpen(false)}
                    className="px-4 py-2 text-gray-300 hover:text-red-500 hover:bg-white/5 rounded-lg transition text-sm font-medium"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          id="home"
          className="grid md:grid-cols-2 gap-8 items-center py-20"
        >
          <div>
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight"
            >
              Halo, saya{" "}
              <motion.span
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                HannKey
              </motion.span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="text-gray-300 text-lg mb-6 max-w-xl space-y-2"
            >
              <p>
                Front-End Developer & UI/UX Designer dengan passion untuk
                membuat antarmuka yang indah dan responsif.
              </p>
              <p className="text-sm text-gray-400">
                Mengubah ide menjadi pengalaman digital yang menakjubkan
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="flex gap-4 flex-wrap"
            >
              <motion.a
                href="#projects"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(239, 68, 68, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-semibold hover:from-red-600 hover:to-red-700 transition shadow-lg"
              >
                Lihat Projects
              </motion.a>
              <motion.a
                href="/cv.pdf"
                whileHover={{ scale: 1.05, borderColor: "rgb(239, 68, 68)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-red-500/50 text-white rounded-lg font-semibold hover:bg-red-500/10 transition"
              >
                Download CV
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div className="relative group">
              {/* Animated background glow */}
              <motion.div
                animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -inset-6 rounded-full blur-2xl bg-gradient-to-r from-red-600/40 to-red-400/20 -z-10"
              />

              {/* Avatar container */}
              <motion.div
                ref={avatarRef}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.05 }}
                className="w-64 h-64 rounded-2xl overflow-hidden border-4 border-red-500 shadow-2xl relative bg-gradient-to-br from-gray-800 to-gray-900"
              >
                {/* Avatar image */}
                <img
                  src="https://res.cloudinary.com/dvi8bgee0/image/upload/v1764652915/WhatsApp_Image_2025-12-01_at_23.58.03_e093ebac_gjoey5.jpg"
                  alt="Avatar HannKey"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://res.cloudinary.com/dvi8bgee0/image/upload/v1764652915/WhatsApp_Image_2025-12-01_at_23.58.03_e093ebac_gjoey5.jpg";
                  }}
                />

                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
              </motion.div>

              {/* Floating Tech Icons Background */}
              <div className="absolute inset-0 -z-5">
                {/* HTML Icon */}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    x: [0, 10, 0],
                    rotate: [0, 10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-0 left-0 text-4xl opacity-70"
                >
                  <div className="bg-orange-500 text-white w-12 h-12 rounded-lg flex items-center justify-center font-bold shadow-lg">
                    H
                  </div>
                </motion.div>

                {/* CSS Icon */}
                <motion.div
                  animate={{
                    y: [0, 20, 0],
                    x: [0, -15, 0],
                    rotate: [0, -10, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute top-10 right-0 text-4xl opacity-70"
                >
                  <div className="bg-blue-500 text-white w-12 h-12 rounded-lg flex items-center justify-center font-bold shadow-lg">
                    C
                  </div>
                </motion.div>

                {/* JavaScript Icon */}
                <motion.div
                  animate={{
                    y: [0, -25, 0],
                    x: [0, 12, 0],
                    rotate: [0, 15, 0],
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute bottom-10 left-5 text-4xl opacity-70"
                >
                  <div className="bg-yellow-400 text-gray-900 w-12 h-12 rounded-lg flex items-center justify-center font-bold shadow-lg">
                    JS
                  </div>
                </motion.div>

                {/* React Icon */}
                <motion.div
                  animate={{
                    y: [0, 15, 0],
                    x: [0, -10, 0],
                    rotate: [0, -8, 0],
                  }}
                  transition={{
                    duration: 4.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5,
                  }}
                  className="absolute bottom-5 right-5 text-4xl opacity-70"
                >
                  <div className="bg-cyan-400 text-gray-900 w-12 h-12 rounded-lg flex items-center justify-center font-bold shadow-lg">
                    R
                  </div>
                </motion.div>

                {/* Tailwind Icon */}
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    x: [0, 8, 0],
                    rotate: [0, 12, 0],
                  }}
                  transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                  className="absolute top-1/3 right-0 text-4xl opacity-70"
                >
                  <div className="bg-cyan-500 text-white w-12 h-12 rounded-lg flex items-center justify-center font-bold shadow-lg">
                    TW
                  </div>
                </motion.div>

                {/* Git Icon */}
                <motion.div
                  animate={{
                    y: [0, 18, 0],
                    x: [0, -12, 0],
                    rotate: [0, -12, 0],
                  }}
                  transition={{
                    duration: 4.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2.5,
                  }}
                  className="absolute top-1/4 left-0 text-4xl opacity-70"
                >
                  <div className="bg-orange-600 text-white w-12 h-12 rounded-lg flex items-center justify-center font-bold shadow-lg">
                    Git
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* About */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: "-100px" }}
          id="about"
          className="py-20"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.2 }}
          >
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-red-500 mb-8"
            >
              Tentang Saya
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-300 max-w-3xl text-lg leading-relaxed"
            >
              Saya seorang Front-End Developer dengan pengalaman 3+ tahun dalam
              membangun antarmuka modern. Fokus saya pada React.js, animasi
              smooth, dan UX yang luar biasa. Saya percaya bahwa desain dan kode
              harus bekerja bersama untuk menciptakan pengalaman pengguna yang
              sempurna.
            </motion.p>
          </motion.div>
        </motion.section>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: "-100px" }}
          id="skills"
          className="py-20"
        >
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-red-500 mb-10"
          >
            Skills
          </motion.h2>
          <motion.div
            className="grid sm:grid-cols-2 md:grid-cols-4 gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
            viewport={{ once: false, margin: "-100px" }}
          >
            {[
              "React.js",
              "JavaScript",
              "Tailwind CSS",
              "Framer Motion",
              "Next.js",
              "TypeScript",
              "UI/UX Design",
              "Responsive Design",
            ].map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.05, borderColor: "rgb(239, 68, 68)" }}
                transition={{ delay: i * 0.05, type: "spring", stiffness: 100 }}
                className="p-4 bg-white/3 border border-red-500/20 rounded-lg hover:border-red-500/50 transition cursor-pointer backdrop-blur-sm"
              >
                <span className="font-semibold text-gray-100">{skill}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Projects */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: "-100px" }}
          id="projects"
          className="py-20"
        >
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-red-500 mb-10"
          >
            Projects
          </motion.h2>
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
            viewport={{ once: false, margin: "-100px" }}
          >
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -15, scale: 1.02 }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                className="group bg-white/3 rounded-xl overflow-hidden border border-red-500/20 hover:border-red-500/50 transition backdrop-blur-sm"
              >
                <div className="h-40 overflow-hidden bg-black/50 relative">
                  <motion.img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
                </div>
                <motion.div className="p-4">
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="font-semibold text-lg mb-2 text-red-300"
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-sm text-gray-300 mb-4">{project.desc}</p>
                  <motion.div
                    className="flex gap-2 flex-wrap"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    {project.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        whileHover={{ scale: 1.1 }}
                        className="text-xs bg-red-500/20 px-2 py-1 rounded border border-red-500/30 hover:bg-red-500/30 transition cursor-default"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Contact */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: "-100px" }}
          id="contact"
          className="py-20"
        >
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-red-500 mb-10"
          >
            Hubungi Saya
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.form
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              {[
                { placeholder: "Nama", type: "text" },
                { placeholder: "Email", type: "email" },
              ].map((input, i) => (
                <motion.input
                  key={input.placeholder}
                  type={input.type}
                  placeholder={input.placeholder}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  whileFocus={{ scale: 1.02, borderColor: "rgb(239, 68, 68)" }}
                  className="w-full p-3 bg-black/40 border border-white/10 rounded-lg focus:border-red-500/50 focus:outline-none transition"
                />
              ))}
              <motion.textarea
                placeholder="Pesan"
                rows={5}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                whileFocus={{ scale: 1.02, borderColor: "rgb(239, 68, 68)" }}
                className="w-full p-3 bg-black/40 border border-white/10 rounded-lg focus:border-red-500/50 focus:outline-none transition"
              />
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(239, 68, 68, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-red-700 transition shadow-lg"
              >
                Kirim Pesan
              </motion.button>
            </motion.form>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h3 className="font-semibold text-xl mb-6 text-red-400">
                  Kontak Langsung
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: Mail,
                      text: "hannkey@gmail.com",
                      href: "mailto:hannkey16@gmail.com",
                    },
                    {
                      icon: Github,
                      text: "github.com/hannkey",
                      href: "https://github.com/hannkey16-maker",
                    },
                    {
                      icon: Linkedin,
                      text: "linkedin.com/in/hannkey",
                      href: "https://linkedin.com",
                    },
                  ].map(({ icon: Icon, text, href }, i) => (
                    <motion.a
                      key={text}
                      href={href}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      whileHover={{ x: 10, color: "rgb(253, 118, 110)" }}
                      className="flex items-center gap-3 text-gray-300 hover:text-red-300 transition"
                    >
                      <Icon size={22} className="text-red-500" />
                      <span>{text}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-12 text-center text-gray-400 border-t border-white/10"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            © 2025 HannKey - Built with <span className="text-red-500">❤️</span>{" "}
            using React & Framer Motion
          </motion.div>
        </motion.footer>
      </main>
    </div>
  );
}
