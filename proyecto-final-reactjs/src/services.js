import { doc, getDoc, getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./main";

// getProduct
export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    const itemDoc = doc(db, "items", id);
    
    getDoc(itemDoc)
      .then((doc) => {
        if (doc.data()) {
          resolve({ id: doc.id, ...doc.data() });
        } else {
          resolve(null);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getProducts = (categoryId) => {
  return new Promise((resolve, reject) => {
    const itemCollection = collection(db, "items");

    let q;
    if (categoryId) {
      q = query(itemCollection, where("categoryId", "==", categoryId));
    } else {
      q = query(itemCollection);
    }

    getDocs(q)
      .then((querySnapshot) => {
        const products = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        resolve(products);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const createOrder = (orden) => {
  const ordersCollection = collection(db, "orders");

  return addDoc(ordersCollection, orden);
};
