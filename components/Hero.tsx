"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { SiOdoo, SiReact } from "react-icons/si";
import { FiDatabase, FiTrendingUp } from "react-icons/fi";
import { profile } from "../lib/profile";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

const floatVariants = (i: number) => ({
  hidden: { opacity: 0, scale: 0.8, y: 0 },
  show: {
    opacity: 1,
    scale: 1,
    y: [0, -12, 0],
    transition: {
      delay: 1.2 + i * 0.15,
      ease: "easeOut" as const,
    },
  },
  float: {
    y: [0, -12, 0],
    transition: {
      duration: 4,
      delay: 1.8 + i * 0.3,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
});

const skills = [
  { icon: SiReact, label: "React", position: "hidden lg:flex lg:top-1/4 lg:right-[-130px]" },
  { icon: SiOdoo, label: "Odoo", position: "hidden lg:flex lg:top-2/3 lg:right-[-130px]" },
  { icon: FiDatabase, label: "Data", position: "hidden lg:flex lg:top-1/3 lg:left-[-130px]" },
  { icon: FiTrendingUp, label: "Marketing", position: "hidden lg:flex lg:top-3/4 lg:left-[-130px]" },
];

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const blob1X = useTransform(mouseX, [-1, 1], [-20, 20]);
  const blob1Y = useTransform(mouseY, [-1, 1], [-15, 15]);
  const blob2X = useTransform(mouseX, [-1, 1], [20, -20]);
  const blob2Y = useTransform(mouseY, [-1, 1], [15, -15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#0f1629_0%,_#05070D_60%)]" />
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          style={{ x: blob1X, y: blob1Y }}
          className="absolute top-1/4 left-1/4 w-[28rem] h-[28rem] rounded-full bg-accent/20 blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, -20, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          style={{ x: blob2X, y: blob2Y }}
          className="absolute bottom-1/4 right-1/4 w-[26rem] h-[26rem] rounded-full bg-accent-warm/10 blur-[120px]"
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#F8FAFC 1px, transparent 1px), linear-gradient(90deg, #F8FAFC 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full pt-24 pb-16 relative grid grid-cols-1 lg:grid-cols-2 lg:gap-12 lg:items-center">
        {/* Right column (top on mobile): Photo */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={6}
          className="order-first lg:order-last lg:flex lg:justify-center lg:items-center relative"
        >
          {/* Glow background */}
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-b from-accent/30 to-transparent rounded-full blur-[80px] -z-10" />

          {/* Rotating ring overlay */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <svg width="352" height="416" viewBox="0 0 352 416" className="absolute">
              <defs>
                <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <circle cx="176" cy="208" r="170" fill="none" stroke="url(#ringGradient)" strokeWidth="2" />
            </svg>
          </motion.div>

          {/* Photo frame */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-80 h-96 rounded-2xl overflow-hidden border border-accent/20 lg:w-80 lg:h-96 sm:w-56 sm:h-72 mx-auto"
          >
            <Image
              src="/cassy-photo.png"
              alt="Cassy Raobijaona"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Left column: Text content */}
        <div className="mt-8 lg:mt-0">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="text-sm font-medium tracking-widest uppercase text-accent mb-6"
        >
          {profile.role} · {profile.school}
        </motion.p>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] max-w-3xl"
        >
          Bonjour, je suis{" "}
          <span className="bg-gradient-to-r from-accent to-accent-warm bg-clip-text text-transparent">
            {profile.name}
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="mt-6 text-lg sm:text-xl text-foreground/90 max-w-2xl"
        >
          {profile.tagline}
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          className="mt-4 text-base text-muted max-w-2xl"
        >
          {profile.intro}
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={4}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium transition-transform hover:scale-105"
          >
            Voir mes projets
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-foreground/90 transition-colors hover:border-white/40 hover:text-foreground"
          >
            <FiMail /> Me contacter
          </Link>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={5}
          className="mt-12 flex items-center gap-5"
        >
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-muted transition-colors hover:text-accent"
          >
            <FiMail size={20} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-accent"
          >
            <FiLinkedin size={20} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-accent"
          >
            <FiGithub size={20} />
          </a>
        </motion.div>
        </div>

        {/* Floating skill badges */}
        {skills.map((skill, i) => (
          <motion.div
            key={skill.label}
            variants={floatVariants(i)}
            initial="hidden"
            animate={["show", "float"]}
            className={`absolute ${skill.position}`}
          >
            <div className="flex items-center gap-2 rounded-full border border-accent/30 bg-background/50 backdrop-blur px-3 py-2 text-xs font-medium text-muted hover:text-accent transition-colors">
              <skill.icon size={14} className="text-accent" />
              {skill.label}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 text-muted flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest uppercase opacity-60">
          Scroll
        </span>
        <FiArrowDown size={20} />
      </motion.div>
    </section>
  );
}
