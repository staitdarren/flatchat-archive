const randomMomentBtn = document.getElementById("randomMomentBtn");

if (randomMomentBtn) {
  randomMomentBtn.addEventListener("click", () => {
    // Define all modals across all pages
    const moments = [
      // --- Aaron ---
      "aaron.html#modal-great-1", "aaron.html#modal-great-2", "aaron.html#modal-great-3",
      "aaron.html#modal-great-4", "aaron.html#modal-great-5", "aaron.html#modal-great-6",

      "aaron.html#modal-face-1", "aaron.html#modal-face-2", "aaron.html#modal-face-3",
      "aaron.html#modal-face-4", "aaron.html#modal-face-5",

      "aaron.html#modal-funky-1", "aaron.html#modal-funky-2", "aaron.html#modal-funky-3",
      "aaron.html#modal-funky-4", "aaron.html#modal-funky-5", "aaron.html#modal-funky-6",
      "aaron.html#modal-funky-7",

      "aaron.html#modal-general-1", "aaron.html#modal-general-2", "aaron.html#modal-general-3",
      "aaron.html#modal-general-4", "aaron.html#modal-general-5", "aaron.html#modal-general-6",
      "aaron.html#modal-general-7", "aaron.html#modal-general-8", "aaron.html#modal-general-9",
      "aaron.html#modal-general-10", "aaron.html#modal-general-11", "aaron.html#modal-general-12",
      "aaron.html#modal-general-13", "aaron.html#modal-general-14", "aaron.html#modal-general-15",
      "aaron.html#modal-general-16", "aaron.html#modal-generalg-17", "aaron.html#modal-general-18",
      "aaron.html#modal-general-19", "aaron.html#modal-general-20", "aaron.html#modal-general-21",
      "aaron.html#modal-general-22", "aaron.html#modal-generalg-23", "aaron.html#modal-general-24",
      "aaron.html#modal-general-25", "aaron.html#modal-general-26", "aaron.html#modal-general-27",
      "aaron.html#modal-general-28",

      "aaron.html#modal-wild-1", "aaron.html#modal-wild-2", "aaron.html#modal-wild-3",
      "aaron.html#modal-wild-4", "aaron.html#modal-wild-5", "aaron.html#modal-wild-6",
      "aaron.html#modal-wild-7", "aaron.html#modal-wild-8", "aaron.html#modal-wild-9",
      "aaron.html#modal-wild-10", "aaron.html#modal-wild-11", "aaron.html#modal-wild-12",
      "aaron.html#modal-wild-13", "aaron.html#modal-wild-14", "aaron.html#modal-wild-15",
      "aaron.html#modal-wild-16", "aaron.html#modal-wild-17", "aaron.html#modal-wild-18",
      "aaron.html#modal-wild-19", "aaron.html#modal-wild-20", "aaron.html#modal-wild-21", 
      "aaron.html#modal-wild-22", "aaron.html#modal-wild-23", "aaron.html#modal-wild-24",

      // --- Heggie ---
      "heggie.html#modal-funky-1",

      "heggie.html#modal-face-1",

      "heggie.html#modal-wild-1", "heggie.html#modal-wild-2",

      "heggie.html#modal-great-1", "heggie.html#modal-great-2",

      "heggie.html#modal-general-1", "heggie.html#modal-general-2", "heggie.html#modal-general-3",
      "heggie.html#modal-general-4", "heggie.html#modal-general-5", "heggie.html#modal-general-6",
      "heggie.html#modal-general-7", "heggie.html#modal-general-8", "heggie.html#modal-general-9",
      "heggie.html#modal-general-10", "heggie.html#modal-general-11", "heggie.html#modal-general-12",
      
      // --- Calum ---
      "calum.html#modal-funky-1", "calum.html#modal-funky-2", "calum.html#modal-funky-3",
      "calum.html#modal-funky-4", "calum.html#modal-funky-5",

      "calum.html#modal-face-1",

      "calum.html#modal-great-1", "calum.html#modal-great-2",

      "calum.html#modal-wild-1", "calum.html#modal-wild-2", "calum.html#modal-wild-3",

      "calum.html#modal-general-1", "calum.html#modal-general-2", "calum.html#modal-general-3",
      "calum.html#modal-general-4", "calum.html#modal-general-5",
      
      // --- Jacob ---
      "jacob.html#modal-general-1", "jacob.html#modal-general-2", "jacob.html#modal-general-3",
      "jacob.html#modal-general-4", "jacob.html#modal-general-5", "jacob.html#modal-general-6",

      "jacob.html#modal-funky-1", "jacob.html#modal-funky-2", "jacob.html#modal-funky-3",
      "jacob.html#modal-funky-4", "jacob.html#modal-funky-5",

      "jacob.html#modal-face-1", "jacob.html#modal-face-2",

      "jacob.html#modal-wild-1", "jacob.html#modal-wild-2", "jacob.html#modal-wild-3",

      "jacob.html#modal-great-1", "jacob.html#modal-great-2"
    ];

    // Pick one at random
    const randomLink = moments[Math.floor(Math.random() * moments.length)];

    // Redirect the browser
    window.location.href = randomLink;
  });
}
