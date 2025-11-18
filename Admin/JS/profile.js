const profilePic = document.getElementById("profile-pic");
const userFile = document.getElementById("file-path");

document.addEventListener("DOMContentLoaded", () => {
    const loggedInUser = localStorage.getItem("LoggedInUser");
    if (!loggedInUser) return;

    const request = indexedDB.open("NovaTechDB", 1);
    
    request.onsuccess = function (event) {
        const db = event.target.result;
        const transaction = db.transaction(["users"], "readonly");
        const store = transaction.objectStore("users");
        const getRequest = store.get(loggedInUser);

        getRequest.onsuccess = function () {
            const user = getRequest.result;
            if (user && user.profilePic) {
                profilePic.src = user.profilePic; 
            }
        };
    };
});

userFile.onchange = function () {
    const loggedInUser = localStorage.getItem("LoggedInUser");
    if (!loggedInUser) return;

    const file = userFile.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        profilePic.src = e.target.result;

        const request = indexedDB.open("NovaTechDB", 1);
        request.onsuccess = function (event) {
            const db = event.target.result;
            const tx = db.transaction(["users"], "readwrite");
            const store = tx.objectStore("users");
            
            const getRequest = store.get(loggedInUser);
            getRequest.onsuccess = function () {
                const user = getRequest.result;
                user.profilePic = e.target.result;
                store.put(user);
            };
        };
    };
    reader.readAsDataURL(file);
};
