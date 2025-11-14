// login.js
document.addEventListener("DOMContentLoaded", () => {

    document.querySelector(".login-form").addEventListener("submit", function(e){
        e.preventDefault();

        const username = this.querySelector('input[placeholder="Username"]').value.trim();
        const password = this.querySelector('input[placeholder="Password"]').value.trim();

        const request = indexedDB.open("NovaTechDB", 1);

        request.onsuccess = function(event) {
            const db = event.target.result;

            const transaction = db.transaction(["users"], "readonly");
            const store = transaction.objectStore("users");

            const getUser = store.get(username);

            getUser.onsuccess = function() {
                const user = getUser.result;

                if (user && user.password === password) {

                    localStorage.setItem("LoggedInUser", username);

                    alert("Login successful! Redirecting to dashboard...");

                    window.location.href = "../Admin/dashboard.html";
                } 
                else {
                    alert("Invalid username or password.");
                }
            };

            getUser.onerror = function() {
                alert("Error retrieving user data.");
            };
        };

        request.onerror = function() {
            alert("Database failed to open.");
        };

    });

});
