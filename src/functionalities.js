import {
    getFirestore,
    collection,
    doc,
    getDocs,
    getDoc,
    addDoc
  } from "firebase/firestore";

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAFth3RlChS-LmwnnIE8DLaMTX4JDY64Vk",
  authDomain: "unibond-bondiva.firebaseapp.com",
  projectId: "unibond-bondiva",
  storageBucket: "unibond-bondiva.appspot.com",
  messagingSenderId: "506563212631",
  appId: "1:506563212631:web:94bfa08d639c08b83fba12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getAllItems() {
    // let q = query(collection(db, "devices"), where("user_id", "==", user_id));
    let itemcards = [];
    try {
      let docSnaps = await getDocs(collection(db, "itemcards"));
      docSnaps.forEach(doc => {
        // Object obj = new Object(doc.id,doc.data())
        itemcards.push(doc.data());
        // console.log(doc.id)
      })
    } catch (err) {
      alert(err.message)
    }
    return itemcards;
}

// function getAllItems(){
//     return items;
// }

async function getAnItem(item_id){
    let item = null;
    try {
      item = await getDoc(doc(db, "itemcards",item_id));
    } catch (err) {
      alert(err.message)
    }
    // console.log((item.data()));
    return item.data();
}

async function getAproduct(item_id){
    let item = null;
    try {
      item = await getDoc(doc(db, "items",item_id));
    } catch (err) {
      alert(err.message)
    }
    return item.data();
}

async function submitForm(info){
        const scriptUrl = "https://script.google.com/macros/s/AKfycbw8dA6WCnN-WVwcOMt6RKiwtVQJEOrOQdQsmllWvyHEc_Jgu0ytb30fSErb8HKP4TgU/exec";
        console.log(info);
        try {
          await fetch(scriptUrl, {method: 'POST', body: new FormData(info.current)})
        } catch(err) { console.log(err) ; return false;}
        return true;

        // try {
        //   // path: must be collection, document, collection, document ...
        //   await addDoc(collection(db, "orders"), {
        //     Name : info.name,
        //     Phone : info.phone,
        //     Address : info.address,
        //     Quantity : info.quantity,
        //     TxID : info.txid,
        //     Promo : info.promoCode,
        //     Item : info.item_id
        //   });
        // } catch (err) {
        //   // console.error(err);
        //   alert(err.message);
        //   return false;
        // }
        // return true;
}

export {getAllItems,getAnItem,getAproduct,submitForm}