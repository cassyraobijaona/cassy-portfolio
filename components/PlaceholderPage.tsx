"use client";

import { motion } from "framer-motion";

export default function PlaceholderPage({ title }: { title: string }) {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center"
      >
        <h1 className="text-3xl font-semibold text-foreground">{title}</h1>
        <p className="mt-3 text-muted">Contenu à venir.</p>
      </motion.div>
    </main>
  );
}
