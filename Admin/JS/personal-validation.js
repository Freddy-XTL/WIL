document.addEventListener("DOMContentLoaded", () => {
    const loggedInUser = localStorage.getItem("LoggedInUser");

    if (!loggedInUser) {
        alert("You are not logged in!");
        window.location.href = "/Public/login.html";
        return;
    }

    const request = indexedDB.open("NovaTechDB", 1);

    request.onsuccess = function (event) {
        const db = event.target.result;

        const transaction = db.transaction(["users"], "readonly");
        const store = transaction.objectStore("users");

        const getRequest = store.get(loggedInUser);

        getRequest.onsuccess = function () {
            const user = getRequest.result;

            if (!user) {
                alert("User not found!");
                return;
            }
        };
    };
});