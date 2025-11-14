document.addEventListener("DOMContentLoaded", () => {

    document.querySelector(".login-form").addEventListener("submit", function(e) {
        e.preventDefault();

        const name = this.querySelector('input[placeholder="Name"]').value.trim();
        const surname = this.querySelector('input[placeholder="Surname"]').value.trim();
        const username = this.querySelector('input[placeholder="New username"]').value.trim();
        const email = this.querySelector('input[placeholder="Email"]').value.trim();
        const password = this.querySelector('input[placeholder="Password"]').value.trim();

        const request = indexedDB.open("NovaTechDB", 1);

        request.onsuccess = function(event) {
            const db = event.target.result;

            const transaction = db.transaction(["users"], "readwrite");
            const store = transaction.objectStore("users");

            const user = { name, surname, username, email, password };

            const addRequest = store.add(user);

            addRequest.onsuccess = function() {
                alert("Registration successful! Redirecting to login...");
                window.location.href = "login.html"; 
            };

            addRequest.onerror = function() {
                alert("Username or email already exists. Please try again.");
            };
        };
    });

});
