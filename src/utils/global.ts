// src/global.ts

// 🎯 Objectifs globaux de l'application
export const DEFAULT_GOAL = {
    targetWeight: 50, // poids cible par défaut
    startWeight: 70,  // poids de départ par défaut
  };
  
  // 📅 Format de date standardisé
  export const DATE_FORMAT = 'YYYY-MM-DD';
  
  // 🎨 Couleurs Chart.js ou globales (si tu en veux pour ton thème CSS)
  export const COLORS = {
    primary: '#4caf50',       // vert
    accent: '#2196f3',        // bleu
    warning: '#ff9800',       // orange
    danger: '#f44336',        // rouge
    background: '#f5f5f5',    // gris clair
  };
  
  // 🔤 Types globaux
  export type WeightEntry = {
    date: string;    // format 'YYYY-MM-DD'
    weight: number;  // en kg
  };
  
  export type Goal = {
    startWeight: number;
    targetWeight: number;
    startDate: string; // format 'YYYY-MM-DD'
  };
  
  export type ActivityEntry = {
    date: string;
    type: string;
    duration: number; // en minutes
    intensity: 'low' | 'medium' | 'high';
  };
  export const AppName : string = "Poids + Santé";