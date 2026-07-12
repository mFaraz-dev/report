fetch("components/sidebar.html")
    .then(response => response.text())
    .then(data => {

        document.getElementById("sidebar").innerHTML = data;

        const currentPage = location.pathname.split("/").pop();

        document.querySelectorAll(".sidebar nav a").forEach(link => {

            if (link.getAttribute("href") === currentPage) {

                link.classList.add("active");

            }

        });

    });