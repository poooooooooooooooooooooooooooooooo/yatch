import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    doc,
    onSnapshot,
    query,
    orderBy
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDBxAubFvQt5at5tLjjVpj0CqDOZMXkxIM",
    authDomain: "yatch-fe646.firebaseapp.com",
    projectId: "yatch-fe646",
    storageBucket: "yatch-fe646.firebasestorage.app",
    messagingSenderId: "628828747760",
    appId: "1:628828747760:web:22babed8d9fa85da75cf35"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs, deleteDoc, doc, onSnapshot, query, orderBy };
