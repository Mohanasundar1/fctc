import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDCXNyvHbE0Qoe6ixy5ph0LluJwLAVjRnM",
    authDomain: "testing-e4d35.firebaseapp.com",
    projectId: "testing-e4d35",
    storageBucket: "testing-e4d35.appspot.com",
    messagingSenderId: "1068295583061",
    appId: "1:1068295583061:web:044e63ec2fb7b8ef73abdc",
    measurementId: "G-4C9JQB4NCR"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

document.getElementById('generate-referral').addEventListener('click', async () => {
    const user = auth.currentUser;

    if (!user) {
        alert('You must be logged in to generate a referral link');
        return;
    }

    const referralLink = `${window.location.origin}/signup.html?ref=${user.uid}`;
    document.getElementById('referral-link').textContent = referralLink;

    try {
        const userDoc = doc(db, 'User', user.uid);
        await setDoc(userDoc, { referralLink }, { merge: true });
        alert('Referral link generated and stored successfully');
    } catch (error) {
        console.error('Error storing referral link:', error);
        alert('There was an error generating your referral link. Please try again.');
    }
});

// Optional: Ensure user is authenticated
onAuthStateChanged(auth, (user) => {
    if (!user) {
        window.location.href = "login.html"; // Redirect to login if not authenticated
    }
});
