document.getElementById("discussion-form").addEventListener("submit", function(e) {
    e.preventDefault();

    // Mengambil nilai dari input dan textarea
    const username = document.getElementById("username").value;
    const message = document.getElementById("message").value;

    // Membuat elemen list baru untuk diskusi
    const li = document.createElement("li");
    li.innerHTML = `<strong>${username}:</strong> ${message}`;

    // Menambahkan pesan ke dalam ul
    document.getElementById("discussion-list").appendChild(li);

    // Mengosongkan form setelah pengiriman
    document.getElementById("username").value = "";
    document.getElementById("message").value = "";

    // Scroll ke bawah setiap ada pesan baru
    const discussionContainer = document.querySelector('.discussion-container');
    discussionContainer.scrollTop = discussionContainer.scrollHeight;
});
