const randomMomentBtn = document.getElementById("randomMomentBtn");

if (randomMomentBtn) {
  randomMomentBtn.addEventListener("click", () => {
    // Define all modals across all pages
    const moments = [
      // --- Aaron ---
      "aaron.html#modal-great-1", "aaron.html#modal-great-2", "aaron.html#modal-great-3",
      "aaron.html#modal-great-4", "aaron.html#modal-great-5", "aaron.html#modal-great-6",
      "aaron.html#modal-wild-1", "aaron.html#modal-wild-2", "aaron.html#modal-wild-3",
      "aaron.html#modal-wild-4", "aaron.html#modal-wild-5", "aaron.html#modal-wild-6",
      "aaron.html#modal-wild-7", "aaron.html#modal-wild-8", "aaron.html#modal-wild-9",
      "aaron.html#modal-wild-10", "aaron.html#modal-wild-11", "aaron.html#modal-wild-12",
      "aaron.html#modal-wild-13", "aaron.html#modal-wild-14", "aaron.html#modal-wild-15",
      "aaron.html#modal-wild-16", "aaron.html#modal-wild-17", "aaron.html#modal-wild-18",
      "aaron.html#modal-wild-19", "aaron.html#modal-wild-20",
      
      // --- Heggie ---
      "heggie.html#modal-general-1", "heggie.html#modal-general-2", "heggie.html#modal-general-3",
      "heggie.html#modal-general-4", "heggie.html#modal-general-5", "heggie.html#modal-general-6",
      "heggie.html#modal-general-7", "heggie.html#modal-general-8", "heggie.html#modal-general-9",
      "heggie.html#modal-general-10",
      
      // --- Calum ---
      "calum.html#modal-general-1", "calum.html#modal-general-2", "calum.html#modal-general-3",
      "calum.html#modal-general-4", "calum.html#modal-general-5",
      
      // --- Jacob ---
      "jacob.html#modal-general-1", "jacob.html#modal-general-2", "jacob.html#modal-general-3",
      "jacob.html#modal-general-4"
    ];

    // Pick one at random
    const randomLink = moments[Math.floor(Math.random() * moments.length)];

    // Redirect the browser
    window.location.href = randomLink;
  });
}