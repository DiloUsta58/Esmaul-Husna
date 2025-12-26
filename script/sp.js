    // Rechtsklick deaktivieren
    document.addEventListener("contextmenu", (e) => e.preventDefault());

    // Entwickler-Tools deaktivieren
    document.addEventListener("keydown", (e) => {
        // F12, Strg+U, Strg+Shift+I
        if (e.key === "F12" || (e.ctrlKey && (e.key === "u" || e.key === "U")) || (e.ctrlKey && e.shiftKey && e.key === "I")) {
            e.preventDefault();
        }
    });

    //Automatische Synchronisation
    function syncPlayPauseButtons() {
        document.querySelectorAll(".play-pause-btn .icon").forEach(icon => {
            icon.textContent = audio.paused ? "▶" : "⏸";
        });
        }

        audio.addEventListener("play", syncPlayPauseButtons);
        audio.addEventListener("pause", syncPlayPauseButtons);
