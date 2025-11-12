// register.js
document.querySelector(".login-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = this.querySelector('input[placeholder="Name"]').value.trim();
    const surname = this.querySelector('input[placeholder="Surname"]').value.trim();
    const username = this.querySelector('input[placeholder="New username"]').value.trim();
    const email = this.querySelector('input[placeholder="Email"]').value.trim();
    const password = this.querySelector('input[placeholder="Password"]').value.trim();

    const transaction = db.transaction(["users"], "readwrite");
    const store = transaction.objectStore("users");

    const user = { name, surname, username, email, password };

    const request = store.add(user);

    request.onsuccess = function() {
        alert("Registration successful! Redirecting to login...");
        window.location.href = "/Public/login.html";
    };

    request.onerror = function() {
        alert("Username or email already exists. Please try again.");
    };
});
