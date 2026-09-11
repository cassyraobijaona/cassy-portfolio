"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { projects, type Project } from "../lib/projects";
import ProjectImage from "./ProjectImage";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      custom={index}
      className="rounded-2xl border border-white/10 bg-surface/60 overflow-hidden"
    >
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        className="w-full text-left flex flex-col sm:flex-row gap-5 p-5 sm:items-center"
      >
        <div className="sm:w-56 shrink-0">
          <ProjectImage image={project.image} icon={project.icon} alt={project.title} />
        </div>

        <div className="flex-1 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-foreground">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-muted">{project.summary}</p>
          </div>
          <motion.span
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            className="mt-1 text-muted shrink-0"
          >
            <FiChevronDown size={18} />
          </motion.span>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-6 pt-1 sm:pl-[15.5rem] flex flex-col gap-4 border-t border-white/5">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-accent mb-1">
                  Contexte
                </p>
                <p className="text-sm text-foreground/85">{project.context}</p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-accent mb-1">
                  Mon rôle
                </p>
                <p className="text-sm text-foreground/85">{project.role}</p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-accent mb-1">
                  Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-accent mb-1">
                  Résultat
                </p>
                <p className="text-sm text-foreground/85">{project.result}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function ProjectSection({
  label,
  title,
  items,
}: {
  label: string;
  title: string;
  items: Project[];
}) {
  return (
    <section>
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        custom={0}
        className="text-sm font-medium tracking-widest uppercase text-accent mb-4"
      >
        {label}
      </motion.p>
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        custom={1}
        className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground mb-8"
      >
        {title}
      </motion.h2>

      <div className="flex flex-col gap-6">
        {items.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

export default function Projects() {
  const proProjects = projects.filter((p) => p.category === "pro");
  const academicProjects = projects.filter((p) => p.category === "academic");

  return (
    <main className="relative min-h-screen overflow-hidden">
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

      <div className="max-w-4xl mx-auto px-6 pt-32 pb-24">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="text-sm font-medium tracking-widest uppercase text-accent mb-6"
        >
          Projets
        </motion.p>
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.15] max-w-2xl mb-20"
        >
          Ce que j&apos;ai construit
        </motion.h1>

        <ProjectSection
          label="Expérience"
          title="Projets professionnels"
          items={proProjects}
        />

        <div className="my-16 flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        </div>

        <ProjectSection
          label="Formation"
          title="Projets académiques"
          items={academicProjects}
        />
      </div>
    </main>
  );
}
