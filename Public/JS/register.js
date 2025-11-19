//form validation
document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector(".login-form");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = this.querySelector('input[placeholder="Name"]').value.trim();
        const surname = this.querySelector('input[placeholder="Surname"]').value.trim();
        const username = this.querySelector('input[placeholder="New username"]').value.trim();
        const email = this.querySelector('input[placeholder="Email"]').value.trim();
        const password = this.querySelector('input[placeholder="Password"]').value.trim();

        if (!name || !surname || !username || !email || !password) {
            alert("Please fill in all fields.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
        if (!passwordRegex.test(password)) {
            alert("Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.");
            return;
        }

        //This is the IndexDB for information
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

        request.onerror = function() {
            alert("Database error. Please try again later.");
        };

    });

});
