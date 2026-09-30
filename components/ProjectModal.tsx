"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiExternalLink, FiX } from "react-icons/fi";
import Image from "next/image";
import type { Project } from "@/lib/projects";

type ProjectModalProps = {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
};

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const hasImages = project.images.length > 0;
  const currentImage = hasImages ? project.images[currentImageIndex] : null;

  const goToPrevious = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-4 z-50 md:inset-8 max-w-4xl max-h-[90vh] mx-auto flex flex-col rounded-2xl border border-white/10 bg-surface overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
              <div>
                <h2 className="text-xl font-semibold text-foreground">
                  {project.title}
                </h2>
                {hasImages && (
                  <p className="text-xs text-muted mt-1">
                    Image {currentImageIndex + 1} sur {project.images.length}
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Fermer"
              >
                <FiX size={20} className="text-muted" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto flex flex-col md:flex-row gap-6 p-6">
              {/* Image carousel */}
              {hasImages ? (
                <div className="flex-1 flex flex-col gap-4">
                  <div className="relative aspect-video w-full bg-black/20 rounded-xl overflow-hidden flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={currentImage || ""}
                          alt={`${project.title} - ${currentImageIndex + 1}`}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {project.images.length > 1 && (
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={goToPrevious}
                        className="p-2 rounded-lg hover:bg-white/10 transition-colors disabled:opacity-50"
                        aria-label="Image précédente"
                      >
                        <FiChevronLeft size={18} />
                      </button>
                      <div className="flex-1 flex gap-2">
                        {project.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`flex-1 h-1 rounded-full transition-colors ${
                              index === currentImageIndex
                                ? "bg-accent"
                                : "bg-white/10"
                            }`}
                            aria-label={`Aller à l'image ${index + 1}`}
                          />
                        ))}
                      </div>
                      <button
                        type="button"
                        onClick={goToNext}
                        className="p-2 rounded-lg hover:bg-white/10 transition-colors disabled:opacity-50"
                        aria-label="Image suivante"
                      >
                        <FiChevronRight size={18} />
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex-1 bg-gradient-to-br from-accent/10 via-surface to-accent-warm/5 rounded-xl flex items-center justify-center min-h-64">
                  <p className="text-muted text-sm">Aucune image disponible</p>
                </div>
              )}

              {/* Info */}
              <div className="md:w-80 flex flex-col gap-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-accent mb-2">
                    Contexte
                  </p>
                  <p className="text-sm text-foreground/85">{project.context}</p>
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-accent mb-2">
                    Mon rôle
                  </p>
                  <p className="text-sm text-foreground/85">{project.role}</p>
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-accent mb-2">
                    Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-muted"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-accent mb-2">
                    Résultat
                  </p>
                  <p className="text-sm text-foreground/85">{project.result}</p>
                </div>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-background hover:bg-accent/90 transition-colors font-medium text-sm mt-auto"
                  >
                    <span>Voir le projet en ligne</span>
                    <FiExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
