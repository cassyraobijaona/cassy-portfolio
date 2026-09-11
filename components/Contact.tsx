"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiAlertCircle, FiCheck, FiGithub, FiLinkedin, FiMail, FiSend } from "react-icons/fi";
import { profile } from "../lib/profile";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

const inputClass =
  "w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-accent/60 transition-colors";

const directLinks = [
  { icon: FiMail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: FiLinkedin, label: "LinkedIn", href: profile.linkedin },
  { icon: FiGithub, label: "GitHub", href: profile.github },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("loading");

    try {
      const formData = new FormData(form);
      const data = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        message: formData.get("message") as string,
      };

      const response = await fetch("https://formspree.io/f/xkjneyne", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        form.reset();
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  }

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

      <div className="max-w-5xl mx-auto px-6 pt-32 pb-24">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="text-sm font-medium tracking-widest uppercase text-accent mb-6"
        >
          Contact
        </motion.p>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.15] max-w-2xl"
        >
          Discutons de votre projet
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="mt-6 text-lg text-foreground/90 max-w-xl"
        >
          Une idée de site, un projet ERP, une question sur votre stratégie
          digitale ? Écrivez-moi, je réponds rapidement.
        </motion.p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-8">
          {/* Form */}
          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/10 bg-surface/60 p-6 sm:p-8 flex flex-col gap-5"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">
                Nom
              </label>
              <input id="name" name="name" type="text" required placeholder="Votre nom" className={inputClass} />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">
                Email
              </label>
              <input id="email" name="email" type="email" required placeholder="vous@exemple.com" className={inputClass} />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Parlez-moi de votre projet..."
                className={`${inputClass} resize-none`}
              />
            </div>

            <div className="flex items-center gap-4 mt-2">
              <button
                type="submit"
                disabled={status === "loading" || status === "sent"}
                className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium transition-transform hover:scale-105 disabled:opacity-70 disabled:hover:scale-100"
              >
                {status === "loading" ? (
                  <>
                    <span className="inline-block animate-spin">↻</span> Envoi...
                  </>
                ) : status === "sent" ? (
                  <>
                    <FiCheck /> Message noté
                  </>
                ) : (
                  <>
                    <FiSend /> Envoyer
                  </>
                )}
              </button>

              <AnimatePresence>
                {status === "sent" && (
                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    className="text-sm text-muted"
                  >
                    Merci ! Je reviens vers vous rapidement.
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    className="flex items-center gap-2 text-sm text-orange-400"
                  >
                    <FiAlertCircle size={16} />
                    <span>Une erreur est survenue, réessaie ou écris à{" "}
                      <a href={`mailto:${profile.email}`} className="underline hover:text-orange-300">
                        {profile.email}
                      </a>
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.form>

          {/* Direct links */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            custom={1}
            className="rounded-2xl border border-white/10 bg-surface/60 p-6 sm:p-8 flex flex-col gap-4"
          >
            <h2 className="text-lg font-semibold text-foreground mb-2">
              Me contacter directement
            </h2>
            {directLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground/90 transition-colors hover:border-accent/40 hover:text-accent"
              >
                <link.icon size={18} className="text-muted transition-colors group-hover:text-accent" />
                {link.label}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
