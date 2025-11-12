// login.js
document.querySelector(".login-form").addEventListener("submit", function(e){
    e.preventDefault();

    const username = this.querySelector('input[placeholder="Username"]').value.trim();
    const password = this.querySelector('input[placeholder="Password"]').value.trim();

    const transaction = db.transaction(["users"], "readonly");
    const store = transaction.objectStore("users");

    const request = store.get(username);

    request.onsuccess = function() {
        const user = request.result;
        if(user && user.password === password){
            alert("Login successful! Redirecting to dashboard...");
            window.location.href = "../../Admin/dashboard.html";
        } else {
            alert("Invalid username or password.");
        }
    };

    request.onerror = function() {
        alert("Error occurred while trying to log in.");
    };
});
