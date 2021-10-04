import { db } from './config';
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";

export class CollectionRegistry {

  async save(registry) {
    try {
      await addDoc(collection(db, "registries"), {
        community: registry.community,
        energysituation: registry.energySituation
      });
    } catch (error) {
      console.log(error);
    }

    return;
  }

  async all() {
    try {
      const querySnapshot = await getDocs(collection(db, "registries"));

      const data = querySnapshot.docs.map(doc => {
        const { community, energysituation } = doc.data();
        return {
          id: doc.id,
          community,
          energysituation
        }
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}