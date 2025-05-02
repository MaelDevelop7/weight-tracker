import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from './firebase';
import { WeightEntry, ActivityEntry } from './global';

// Ajout d'un poids
export const addWeightEntry = async (entry: WeightEntry) => {
  try {
    await addDoc(collection(db, 'weights'), entry);
  } catch (error) {
    console.error('Erreur lors de l’ajout du poids :', error);
  }
};

// Récupération des poids
export const getWeightEntries = async (): Promise<WeightEntry[]> => {
  const snapshot = await getDocs(collection(db, 'weights'));
  return snapshot.docs.map((doc) => doc.data() as WeightEntry);
};

// Ajout d’une activité
export const addActivityEntry = async (entry: ActivityEntry) => {
  try {
    await addDoc(collection(db, 'activities'), entry);
  } catch (error) {
    console.error('Erreur lors de l’ajout de l’activité :', error);
  }
};

// Récupération des activités
export const getActivityEntries = async (): Promise<ActivityEntry[]> => {
  const snapshot = await getDocs(collection(db, 'activities'));
  return snapshot.docs.map((doc) => doc.data() as ActivityEntry);
};
