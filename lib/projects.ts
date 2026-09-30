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
    title: "Le Marché d'Herblay",
    category: "pro",
    summary:
      "Site web et contenu marketing pour un commerce de fruits et légumes en cours d'ouverture en France.",
    context:
      "Le commerce n'avait aucune présence en ligne au démarrage du projet : pas de site, pas de nom de domaine, pas de stratégie de contenu.",
    role: "Développement du site (Next.js), intégration du paiement Stripe, création de contenu vidéo pour les réseaux sociaux (TikTok), gestion administrative (nom de domaine, adresse email professionnelle).",
    stack: ["Next.js", "Stripe", "TikTok", "Marketing digital"],
    result:
      "Site fonctionnel avec paiement en ligne opérationnel, prêt pour l'ouverture du commerce, accompagné d'une présence de contenu sur les réseaux sociaux.",
    icon: FiShoppingCart,
    images: ["/projects/marche-herblay-1.png"],
  },
  {
    id: "eventsync",
    title: "EventSync",
    category: "academic",
    summary:
      "Plateforme de gestion de conférences développée en équipe.",
    context:
      "Projet de groupe avec plusieurs contributeurs travaillant sur le même dépôt, nécessitant une coordination technique réelle.",
    role: "Développement complet de l'entité Speaker (backend) et de l'intégralité du frontend, gestion des branches Git et résolution des conflits de fusion en équipe.",
    stack: ["Next.js", "Node.js", "Express", "Prisma", "PostgreSQL"],
    result:
      "Plateforme fonctionnelle gérant speakers, sessions et favoris, développée en collaboration Git avec plusieurs contributeurs sans perte de code.",
    icon: FiCalendar,
    images: ["/projects/eventsync-1.png"],
  },
  {
    id: "patrilang",
    title: "PatriLang",
    category: "academic",
    summary: "Modélisation de patrimoine financier.",
    context:
      "Projet de groupe visant à rendre lisible la structure d'un patrimoine financier complexe à travers un langage conçu pour ça.",
    role: "Génération des données d'un scénario familial complet, création d'un site, rédaction d'un livre blanc, préparation de la présentation finale.",
    stack: ["DSL", "Modélisation", "Livre blanc"],
    result:
      "Scénario familial modélisé et documenté sur le site, restitué via un livre blanc et une présentation orale.",
    icon: FiPieChart,
    images: ["/projects/patrilang-1.png", "/projects/patrilang-3.png"],
    liveUrl: "https://patrimoine-project.freedev.app/",
  },
  {
    id: "pipeline-qualite-air",
    title: "Pipeline qualité de l'air",
    category: "academic",
    summary: "Pipeline ETL de collecte et traitement de données de qualité de l'air sur plusieurs villes.",
    context:
      "Projet du cours Données nécessitant l'automatisation de la collecte, du traitement et de la visualisation de données multi-sources.",
    role: "Conception et mise en place du pipeline avec Apache Airflow et Docker, du scraping brut jusqu'aux visualisations finales.",
    stack: ["Airflow", "Docker", "ETL", "Python", "Pandas", "Seaborn"],
    result:
      "Pipeline opérationnel et dashboard en ligne (Atlas AQI) consultable publiquement, restituant les résultats sans accès au code.",
    icon: FiWind,
    images: ["/projects/air-quality-1.png"],
    liveUrl: "https://aqi-dashboard-tau.vercel.app/",
  },
  {
    id: "ecostyle",
    title: "EcoStyle",
    category: "academic",
    summary: "Plan marketing digital pour une marque de mode éco-responsable fictive.",
    context:
      "Projet de groupe avec un enjeu de crédibilité : construire une stratégie de communication cohérente avec un positionnement écologique, sans tomber dans le greenwashing.",
    role: "Construction des personas, définition des objectifs SMART, élaboration du calendrier éditorial et des KPIs de suivi.",
    stack: ["Marketing digital", "Personas", "Objectifs SMART", "KPIs"],
    result:
      "Plan marketing structuré et actionnable, avec des objectifs mesurables et un calendrier de contenu prêt à l'exécution.",
    icon: FaLeaf,
    images: ["/projects/ecostyle-1.png"],
  },
  {
    id: "dancehall",
    title: "DanceHall",
    category: "academic",
    summary: "Site WordPress pour une académie de danse.",
    context:
      "Exercice individuel pour un bonus E-réputation & Blogging, du choix du thème à la mise en ligne complète du site.",
    role: "Structuration du site via Elementor, définition des styles globaux et de la hiérarchie visuelle des pages.",
    stack: ["WordPress", "Elementor"],
    result:
      "Site vitrine cohérent visuellement et fonctionnel, livré comme projet.",
    icon: FiMusic,
    images: ["/projects/dancehall-1.png"],
  },
  {
    id: "nathan-voyage",
    title: "Nathan Voyage",
    category: "academic",
    summary: "Gestion de voyage avec Odoo.",
    context:
      "Exercice pratique de groupe sur l'ERP Odoo, avec une répartition des modules entre les membres de l'équipe.",
    role: "Spécialisation sur la partie site : conception et structuration complète du site vitrine (accueil, présentation, catalogue de voyages) via le module Website Builder, pendant que le reste de l'équipe configurait les autres modules Odoo (comptabilité, etc.).",
    stack: ["Odoo Website Builder", "Marketing digital"],
    result:
      "Site vitrine fonctionnel démontrant la maîtrise du Website Builder au sein d'une configuration Odoo complète réalisée en équipe.",
    icon: FiCalendar,
    images: ["/projects/nathan-voyage-1.png"],
    liveUrl: "https://edu-agence-voyage1.odoo.com/",
  },
  {
    id: "portfolio",
    title: "Portfolio personnel",
    category: "pro",
    summary: "Site personnel conçu pour présenter mon profil et mes projets de manière structurée.",
    context:
      "Besoin d'un support distinct du portfolio académique, orienté recherche d'alternance et de missions freelance.",
    role: "Définition du positionnement et de la structure du contenu, choix techniques (Next.js, Tailwind CSS, Framer Motion), développement des pages, intégration du formulaire de contact et du CV.",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    result:
      "Site en ligne sur Vercel, formulaire de contact opérationnel, CV téléchargeable, déploiement continu relié à GitHub.",
    icon: FiCode,
    images: ["/projects/portfolio-1.png"],
    liveUrl: "https://cassy-portfolio.vercel.app",
  },
];
