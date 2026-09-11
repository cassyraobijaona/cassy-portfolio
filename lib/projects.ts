import type { IconType } from "react-icons";
import {
  FiCalendar,
  FiMusic,
  FiPieChart,
  FiShoppingCart,
  FiWind,
} from "react-icons/fi";
import { FaLeaf } from "react-icons/fa";

export type Project = {
  id: string;
  title: string;
  category: "pro" | "academic";
  summary: string;
  context: string;
  role: string;
  stack: string[];
  result: string;
  icon: IconType;
  // Chemin vers une vraie capture d'écran (ex: "/projects/marche-du-frais.png").
  // Laisser vide pour l'instant : un placeholder visuel est affiché à la place.
  image?: string;
};

export const projects: Project[] = [
  {
    id: "marche-du-frais",
    title: "Le Marché du Frais",
    category: "pro",
    summary:
      "Site web et contenu marketing pour un commerce de fruits & légumes en déstockage, en cours d'ouverture.",
    context:
      "Commerce de fruits & légumes / déstockage en cours d'ouverture, sans présence en ligne au démarrage du projet.",
    role: "Développement du site, intégration du paiement Stripe, création de contenu vidéo/TikTok, gestion administrative (nom de domaine, email professionnel).",
    stack: ["Next.js", "Stripe", "TikTok", "Marketing digital"],
    result:
      "Site fonctionnel avec paiement en ligne, prêt pour le lancement du commerce, accompagné d'une présence de contenu sur les réseaux sociaux.",
    icon: FiShoppingCart,
  },
  {
    id: "eventsync",
    title: "EventSync",
    category: "academic",
    summary:
      "Plateforme de gestion de conférences développée en équipe : Next.js, Node/Express, Prisma, PostgreSQL.",
    context: "Projet académique en équipe : plateforme de gestion de conférences.",
    role: "Entité Speaker (CRUD backend complet) et frontend entier (composants connectés à l'API, dark/light mode, favoris, routing dynamique). Gestion Git en équipe (branches, résolution de conflits).",
    stack: ["Next.js", "Node.js", "Express", "Prisma", "PostgreSQL"],
    result:
      "Plateforme fonctionnelle permettant de gérer speakers, sessions et favoris, développée en collaboration Git avec plusieurs contributeurs.",
    icon: FiCalendar,
  },
  {
    id: "patrilang",
    title: "PatriLang",
    category: "academic",
    summary: "Modélisation de patrimoine financier via un DSL.",
    context: "Projet académique de modélisation de patrimoine financier via un DSL (Domain-Specific Language).",
    role: "Génération des données pour un scénario familial, rédaction d'un livre blanc, préparation de la présentation.",
    stack: ["DSL", "Modélisation", "Livre blanc"],
    result:
      "Scénario familial modélisé et documenté, restitué via un livre blanc et une présentation.",
    icon: FiPieChart,
  },
  {
    id: "pipeline-qualite-air",
    title: "Pipeline qualité de l'air",
    category: "academic",
    summary: "ETL multi-villes avec Airflow et Docker (cours Données).",
    context: "Projet du cours Données : pipeline ETL multi-villes sur la qualité de l'air.",
    role: "Conception et mise en place du pipeline avec Airflow et Docker.",
    stack: ["Airflow", "Docker", "ETL"],
    result:
      "Pipeline ETL opérationnel orchestrant la collecte et le traitement des données sur plusieurs villes.",
    icon: FiWind,
  },
  {
    id: "ecostyle",
    title: "EcoStyle",
    category: "academic",
    summary: "Plan marketing pour une marque de mode éco-responsable.",
    context: "Projet académique : plan marketing pour une marque de mode éco-responsable.",
    role: "Élaboration des personas, définition d'objectifs SMART, calendrier éditorial, KPIs.",
    stack: ["Marketing digital", "Personas", "Objectifs SMART", "KPIs"],
    result:
      "Plan marketing complet, structuré autour d'objectifs mesurables et d'un calendrier de contenu.",
    icon: FaLeaf,
  },
  {
    id: "dancehall",
    title: "DanceHall",
    category: "academic",
    summary: "Site WordPress/Elementor pour une académie de danse.",
    context: "Projet académique : site WordPress pour une académie de danse.",
    role: "Structure Elementor et styles globaux du site.",
    stack: ["WordPress", "Elementor"],
    result:
      "Site vitrine fonctionnel et cohérent visuellement pour l'académie de danse.",
    icon: FiMusic,
  },
];
