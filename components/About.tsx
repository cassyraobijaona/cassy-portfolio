"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiCalendar,
  FiCompass,
  FiDatabase,
  FiGitBranch,
  FiLayers,
  FiMail,
  FiSearch,
  FiTarget,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";
import type { IconType } from "react-icons";
import {
  SiApacheairflow,
  SiDocker,
  SiExpress,
  SiNextdotjs,
  SiNodedotjs,
  SiOdoo,
  SiPhp,
  SiPrisma,
  SiReact,
  SiTiktok,
  SiWordpress,
} from "react-icons/si";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

type Skill = { icon: IconType; label: string };
type SkillGroup = { label: string; skills: Skill[] };
type Block = { icon: IconType; title: string; groups: SkillGroup[] };

const blocks: Block[] = [
  {
    icon: FiTarget,
    title: "Comprendre le besoin",
    groups: [
      {
        label: "Marketing digital",
        skills: [
          { icon: FiTrendingUp, label: "Plans marketing" },
          { icon: FiSearch, label: "SEO" },
          { icon: SiTiktok, label: "Contenu vidéo / TikTok" },
        ],
      },
      {
        label: "ERP & processus métier",
        skills: [{ icon: SiOdoo, label: "Odoo" }],
      },
    ],
  },
  {
    icon: FiLayers,
    title: "Construire la solution",
    groups: [
      {
        label: "Développement web",
        skills: [
          { icon: SiReact, label: "React" },
          { icon: SiNextdotjs, label: "Next.js" },
          { icon: SiNodedotjs, label: "Node" },
          { icon: SiExpress, label: "Express" },
          { icon: SiPrisma, label: "Prisma" },
          { icon: SiPhp, label: "PHP" },
          { icon: SiWordpress, label: "WordPress" },
        ],
      },
      {
        label: "Data engineering",
        skills: [
          { icon: SiApacheairflow, label: "Airflow" },
          { icon: SiDocker, label: "Docker" },
          { icon: FiDatabase, label: "ETL" },
        ],
      },
    ],
  },
  {
    icon: FiCompass,
    title: "Piloter le projet",
    groups: [
      {
        label: "Coordination",
        skills: [
          { icon: FiUsers, label: "Coordination client" },
          { icon: FiGitBranch, label: "Git en équipe" },
          { icon: FiCalendar, label: "Organisation d'événements" },
        ],
      },
    ],
  },
];

export default function About() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background, consistent with Hero */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#0f1629_0%,_#05070D_60%)]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#F8FAFC 1px, transparent 1px), linear-gradient(90deg, #F8FAFC 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-24">
        {/* Intro */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="text-sm font-medium tracking-widest uppercase text-accent mb-6"
        >
          À propos
        </motion.p>

        <div>
          {/* Text column */}
          <div>
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.15] max-w-3xl"
            >
              Mon profil
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="mt-6 text-lg text-foreground/90 max-w-2xl"
            >
              Étudiante en Licence Informatique, parcours Transformation
              Numérique à HEI Madagascar. Je fais le lien entre les besoins
              métier et les solutions techniques : je comprends le marketing
              digital, les ERP (Odoo), la data et le développement web, et je
              sais coordonner un projet numérique de bout en bout — de l&apos;idée
              à la mise en ligne.
            </motion.p>
          </div>
        </div>

        {/* Skill blocks */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {blocks.map((block, i) => (
            <motion.div
              key={block.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              custom={i}
              className="rounded-2xl border border-white/10 bg-surface/60 p-6 flex flex-col gap-6"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent">
                  <block.icon size={20} />
                </span>
                <h2 className="text-lg font-semibold text-foreground">
                  {block.title}
                </h2>
              </div>

              <div className="flex flex-col gap-5">
                {block.groups.map((group) => (
                  <div key={group.label}>
                    <p className="text-sm font-medium text-foreground/80 mb-2">
                      {group.label}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill.label}
                          className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-muted"
                        >
                          <skill.icon size={14} className="text-accent" />
                          {skill.label}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CV download */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          custom={0}
          className="mt-16"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium transition-transform hover:scale-105"
          >
            <FiMail /> Me contacter
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
