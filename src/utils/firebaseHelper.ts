import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from './firebase';
import { WeightEntry, ActivityEntry } from './global';
import { getAuth } from 'firebase/auth';

// Ajout d'un poids dans /users/{uid}/weights
export const addWeightEntry = async (entry: WeightEntry) => {
  const auth = getAuth();
  const user = auth.currentUser;
  if (!user) throw new Error('Utilisateur non connecté');

  await addDoc(collection(db, `users/${user.uid}/weights`), entry);
};

// Récupération des poids
export const getWeightEntries = async (): Promise<WeightEntry[]> => {
  const auth = getAuth();
  const user = auth.currentUser;
  if (!user) throw new Error('Utilisateur non connecté');

  const snapshot = await getDocs(collection(db, `users/${user.uid}/weights`));
  return snapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      ...data,
      date: typeof data.date === 'string'
        ? data.date
        : data.date.toDate().toISOString().slice(0, 10),
    } as WeightEntry;
  });
};

// Ajout d’une activité dans /users/{uid}/activities
export const addActivityEntry = async (entry: ActivityEntry) => {
  const auth = getAuth();
  const user = auth.currentUser;
  if (!user) throw new Error('Utilisateur non connecté');

  await addDoc(collection(db, `users/${user.uid}/activities`), entry);
};

// Récupération des activités
export const getActivityEntries = async (): Promise<ActivityEntry[]> => {
  const auth = getAuth();
  const user = auth.currentUser;
  if (!user) throw new Error('Utilisateur non connecté');

  const snapshot = await getDocs(collection(db, `users/${user.uid}/activities`));
  return snapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      ...data,
      date: typeof data.date === 'string'
        ? data.date
        : data.date.toDate().toISOString().slice(0, 10),
    } as ActivityEntry;
  });
};
