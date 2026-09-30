import type { IconType } from "react-icons";
import {
  FiCalendar,
  FiCode,
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
  images: string[];
  liveUrl?: string;
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
    images: [
      "/projects/marche-herblay-1.png",
      "/projects/marche-herblay-2.png",
      "/projects/marche-herblay-3.png",
    ],
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
    images: [
      "/projects/eventsync-1.png",
      "/projects/eventsync-2.png",
      "/projects/eventsync-3.png",
      "/projects/eventsync-4.png",
    ],
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
    images: [
      "/projects/patrilang-1.png",
      "/projects/patrilang-2.png",
      "/projects/patrilang-3.png",
    ],
    liveUrl: "https://patrimoine-project.freedev.app/",
  },
  {
    id: "pipeline-qualite-air",
    title: "Pipeline qualité de l'air",
    category: "academic",
    summary: "ETL multi-villes avec Airflow et Docker (cours Données).",
    context: "Projet du cours Données : pipeline ETL multi-villes sur la qualité de l'air.",
    role: "Conception et mise en place du pipeline avec Airflow et Docker.",
    stack: ["Airflow", "Docker", "ETL", "Python", "Pandas", "Seaborn"],
    result:
      "Pipeline ETL opérationnel orchestrant la collecte et le traitement des données sur plusieurs villes, avec dashboard d'analyse interactive.",
    icon: FiWind,
    images: [
      "/projects/air-quality-1.png",
      "/projects/air-quality-2.png",
      "/projects/air-quality-3.png",
      "/projects/air-quality-4.png",
      "/projects/air-quality-5.png",
      "/projects/air-quality-6.png",
      "/projects/air-quality-7.png",
      "/projects/air-quality-8.png",
      "/projects/air-quality-9.png",
    ],
    liveUrl: "https://aqi-dashboard-tau.vercel.app/",
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
    images: [],
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
    images: ["/projects/dancehall-1.png"],
  },
  {
    id: "nathan-voyage",
    title: "Nathan Voyage",
    category: "pro",
    summary:
      "Site d'agence de voyages pour Madagascar généré via Odoo Website Builder.",
    context:
      "Agence de voyages proposant des circuits personnalisés et des séjours à Madagascar.",
    role: "Conception et mise en page du site via Odoo Website Builder, intégration des catalogues de voyages, création de contenu marketing.",
    stack: ["Odoo Website Builder", "Marketing digital"],
    result:
      "Site d'agence de voyages fonctionnel avec catalogue de circuits, formulaires de contact et présentation des services.",
    icon: FiCalendar,
    images: [
      "/projects/nathan-voyage-1.png",
      "/projects/nathan-voyage-2.png",
      "/projects/nathan-voyage-3.png",
      "/projects/nathan-voyage-4.png",
    ],
    liveUrl: "https://edu-agence-voyage1.odoo.com/",
  },
  {
    id: "portfolio",
    title: "Portfolio personnel",
    category: "pro",
    summary:
      "Ce site — conçu et développé pour présenter mon profil et mes projets aux recruteurs.",
    context:
      "Portfolio professionnel personnel, distinct du portfolio WordPress imposé par le parcours TN, pensé pour un usage réel de candidature.",
    role: "Conception de la structure et du contenu, direction du développement (Next.js, Tailwind, Framer Motion) via Claude Code, itérations sur le design, l'animation et l'expérience utilisateur.",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    result:
      "Site en ligne, formulaire de contact fonctionnel, CV téléchargeable, déployé sur Vercel avec historique Git structuré.",
    icon: FiCode,
    images: [],
    liveUrl: "https://cassy-portfolio.vercel.app",
  },
];
