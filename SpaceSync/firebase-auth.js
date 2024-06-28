const firebaseConfig = {
            apiKey: "AIzaSyAlPHLm1BX2Dvby9QckMVIDANV8Ap3WEJg",
            authDomain: "portalappofficial.firebaseapp.com",
            projectId: "portalappofficial",
            storageBucket: "portalappofficial.appspot.com",
            messagingSenderId: "125175730335",
            appId: "1:125175730335:web:b1701e896992aeb21ad2aa",
            measurementId: "G-6959VBE92V"
        };

        // Initialize Firebase
firebase.initializeApp(firebaseConfig);

        // Initialize Firestore
const db = firebase.firestore();
function add() {
    const name = document.getElementById("name").value;
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    console.log(new Date().getTime())
    db.collection("S1-08").add({
        name: name,
        title: title,
        content: content,  
        dateAdded: new Date().getTime()
    })
    .then((docRef) => {
        console.log("Document successfully written with ID: ", docRef.id);
        alert("Announcement added successfully!");
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
        alert("Error adding announcement. Please try again.");
    });
}

// Expose the add function to the window object
window.add = add;






