// db.js
let db;

function openDB() {
  const request = indexedDB.open("NovaTechDB", 1);

  request.onupgradeneeded = function (event) {
    db = event.target.result;
    const objectStore = db.createObjectStore("users", { keyPath: "username" });
    objectStore.createIndex("email", "email", { unique: true });
  };

  request.onsuccess = function (event) {
    db = event.target.result;
    console.log("Database opened successfully");
  };

  request.onerror = function (event) {
    console.error("Database error:", event.target.errorCode);
  };
}

openDB();
