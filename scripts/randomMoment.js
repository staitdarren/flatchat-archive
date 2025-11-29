const randomMomentBtn = document.getElementById("randomMomentBtn");

if (randomMomentBtn) {
  randomMomentBtn.addEventListener("click", () => {
    // Define all modals across all pages
    const moments = [
      // --- aaron-flatchat-yt ---
      "aaron-flatchat-yt.html#modal-great-1", "aaron-flatchat-yt.html#modal-great-2", "aaron-flatchat-yt.html#modal-great-3",
      "aaron-flatchat-yt.html#modal-great-4", "aaron-flatchat-yt.html#modal-great-5", "aaron-flatchat-yt.html#modal-great-6",
      "aaron-flatchat-yt.html#modal-great-7", "aaron-flatchat-yt.html#modal-great-8", "aaron-flatchat-yt.html#modal-great-9",
      
      "aaron-flatchat-yt.html#modal-face-1", "aaron-flatchat-yt.html#modal-face-2", "aaron-flatchat-yt.html#modal-face-3",
      "aaron-flatchat-yt.html#modal-face-4", "aaron-flatchat-yt.html#modal-face-5", "aaron-flatchat-yt.html#modal-face-6",
      "aaron-flatchat-yt.html#modal-face-7", "aaron-flatchat-yt.html#modal-face-8", "aaron-flatchat-yt.html#modal-face-9",
      "aaron-flatchat-yt.html#modal-face-10",

      "aaron-flatchat-yt.html#modal-funky-1", "aaron-flatchat-yt.html#modal-funky-2", "aaron-flatchat-yt.html#modal-funky-3",
      "aaron-flatchat-yt.html#modal-funky-4", "aaron-flatchat-yt.html#modal-funky-5", "aaron-flatchat-yt.html#modal-funky-6",
      "aaron-flatchat-yt.html#modal-funky-7", "aaron-flatchat-yt.html#modal-funky-8", "aaron-flatchat-yt.html#modal-funky-9",

      "aaron-flatchat-yt.html#modal-general-1", "aaron-flatchat-yt.html#modal-general-2", "aaron-flatchat-yt.html#modal-general-3",
      "aaron-flatchat-yt.html#modal-general-4", "aaron-flatchat-yt.html#modal-general-5", "aaron-flatchat-yt.html#modal-general-6",
      "aaron-flatchat-yt.html#modal-general-7", "aaron-flatchat-yt.html#modal-general-8", "aaron-flatchat-yt.html#modal-general-9",
      "aaron-flatchat-yt.html#modal-general-10", "aaron-flatchat-yt.html#modal-general-11", "aaron-flatchat-yt.html#modal-general-12",
      "aaron-flatchat-yt.html#modal-general-13", "aaron-flatchat-yt.html#modal-general-14", "aaron-flatchat-yt.html#modal-general-15",
      "aaron-flatchat-yt.html#modal-general-16", "aaron-flatchat-yt.html#modal-general-17", "aaron-flatchat-yt.html#modal-general-18",
      "aaron-flatchat-yt.html#modal-general-19", "aaron-flatchat-yt.html#modal-general-20", "aaron-flatchat-yt.html#modal-general-21",
      "aaron-flatchat-yt.html#modal-general-22", "aaron-flatchat-yt.html#modal-general-23", "aaron-flatchat-yt.html#modal-general-24",
      "aaron-flatchat-yt.html#modal-general-25", "aaron-flatchat-yt.html#modal-general-26", "aaron-flatchat-yt.html#modal-general-27",
      "aaron-flatchat-yt.html#modal-general-28", "aaron-flatchat-yt.html#modal-general-29", "aaron-flatchat-yt.html#modal-general-30",
      "aaron-flatchat-yt.html#modal-general-31", "aaron-flatchat-yt.html#modal-general-32", "aaron-flatchat-yt.html#modal-general-33",
      "aaron-flatchat-yt.html#modal-general-34", "aaron-flatchat-yt.html#modal-general-35", "aaron-flatchat-yt.html#modal-general-36",
      "aaron-flatchat-yt.html#modal-general-37", "aaron-flatchat-yt.html#modal-general-38", "aaron-flatchat-yt.html#modal-general-39",
      "aaron-flatchat-yt.html#modal-general-40", "aaron-flatchat-yt.html#modal-general-41", "aaron-flatchat-yt.html#modal-general-42",
      "aaron-flatchat-yt.html#modal-general-43", "aaron-flatchat-yt.html#modal-general-44", "aaron-flatchat-yt.html#modal-general-45",
      "aaron-flatchat-yt.html#modal-general-46", "aaron-flatchat-yt.html#modal-general-47", "aaron-flatchat-yt.html#modal-general-48",

      "aaron-flatchat-yt.html#modal-wild-1", "aaron-flatchat-yt.html#modal-wild-2", "aaron-flatchat-yt.html#modal-wild-3",
      "aaron-flatchat-yt.html#modal-wild-4", "aaron-flatchat-yt.html#modal-wild-5", "aaron-flatchat-yt.html#modal-wild-6",
      "aaron-flatchat-yt.html#modal-wild-7", "aaron-flatchat-yt.html#modal-wild-8", "aaron-flatchat-yt.html#modal-wild-9",
      "aaron-flatchat-yt.html#modal-wild-10", "aaron-flatchat-yt.html#modal-wild-11", "aaron-flatchat-yt.html#modal-wild-12",
      "aaron-flatchat-yt.html#modal-wild-13", "aaron-flatchat-yt.html#modal-wild-14", "aaron-flatchat-yt.html#modal-wild-15",
      "aaron-flatchat-yt.html#modal-wild-16", "aaron-flatchat-yt.html#modal-wild-17", "aaron-flatchat-yt.html#modal-wild-18",
      "aaron-flatchat-yt.html#modal-wild-19", "aaron-flatchat-yt.html#modal-wild-20", "aaron-flatchat-yt.html#modal-wild-21", 
      "aaron-flatchat-yt.html#modal-wild-22", "aaron-flatchat-yt.html#modal-wild-23", "aaron-flatchat-yt.html#modal-wild-24",
      "aaron-flatchat-yt.html#modal-wild-25", "aaron-flatchat-yt.html#modal-wild-26", "aaron-flatchat-yt.html#modal-wild-27",
      "aaron-flatchat-yt.html#modal-wild-28", "aaron-flatchat-yt.html#modal-wild-29", "aaron-flatchat-yt.html#modal-wild-30",
      "aaron-flatchat-yt.html#modal-wild-31", "aaron-flatchat-yt.html#modal-wild-32", "aaron-flatchat-yt.html#modal-wild-33",
      "aaron-flatchat-yt.html#modal-wild-34",

      "aaron.html#modal-darts-1", "aaron.html#modal-darts-2", "aaron.html#modal-darts-3",
       
      // --- heggie-flatchat-yt ---
      "heggie-flatchat-yt.html#modal-funky-1",

      "heggie-flatchat-yt.html#modal-face-1",

      "heggie-flatchat-yt.html#modal-wild-1", "heggie-flatchat-yt.html#modal-wild-2", "heggie-flatchat-yt.html#modal-wild-3",

      "heggie-flatchat-yt.html#modal-great-1", "heggie-flatchat-yt.html#modal-great-2", "heggie-flatchat-yt.html#modal-great-3",

      "heggie-flatchat-yt.html#modal-general-1", "heggie-flatchat-yt.html#modal-general-2", "heggie-flatchat-yt.html#modal-general-3",
      "heggie-flatchat-yt.html#modal-general-4", "heggie-flatchat-yt.html#modal-general-5", "heggie-flatchat-yt.html#modal-general-6",
      "heggie-flatchat-yt.html#modal-general-7", "heggie-flatchat-yt.html#modal-general-8", "heggie-flatchat-yt.html#modal-general-9",
      "heggie-flatchat-yt.html#modal-general-10", "heggie-flatchat-yt.html#modal-general-11", "heggie-flatchat-yt.html#modal-general-12",
      "heggie-flatchat-yt.html#modal-general-13", "heggie-flatchat-yt.html#modal-general-14", "heggie-flatchat-yt.html#modal-general-15",
      "heggie-flatchat-yt.html#modal-general-16", "heggie-flatchat-yt.html#modal-general-17",
      
      // --- calum-flatchat-yt ---
      "calum-flatchat-yt.html#modal-funky-1", "calum-flatchat-yt.html#modal-funky-2", "calum-flatchat-yt.html#modal-funky-3",
      "calum-flatchat-yt.html#modal-funky-4", "calum-flatchat-yt.html#modal-funky-5",

      "calum-flatchat-yt.html#modal-even-listening-1", "calum-flatchat-yt.html#modal-even-listening-2", "calum-flatchat-yt.html#modal-even-listening-3",
      "calum-flatchat-yt.html#modal-even-listening-4",

      "calum-flatchat-yt.html#modal-great-1", "calum-flatchat-yt.html#modal-great-2",

      "calum-flatchat-yt.html#modal-wild-1", "calum-flatchat-yt.html#modal-wild-2", "calum-flatchat-yt.html#modal-wild-3",
      "calum-flatchat-yt.html#modal-wild-4",

      "calum-flatchat-yt.html#modal-general-1", "calum-flatchat-yt.html#modal-general-2", "calum-flatchat-yt.html#modal-general-3",
      "calum-flatchat-yt.html#modal-general-4", "calum-flatchat-yt.html#modal-general-5", "calum-flatchat-yt.html#modal-general-6",
      "calum-flatchat-yt.html#modal-general-7", "calum-flatchat-yt.html#modal-general-8", "calum-flatchat-yt.html#modal-general-9",
      
      // --- jacob-flatchat-yt ---
      "jacob-flatchat-yt.html#modal-general-1", "jacob-flatchat-yt.html#modal-general-2", "jacob-flatchat-yt.html#modal-general-3",
      "jacob-flatchat-yt.html#modal-general-4", "jacob-flatchat-yt.html#modal-general-5", "jacob-flatchat-yt.html#modal-general-6",
      "jacob-flatchat-yt.html#modal-general-7", "jacob-flatchat-yt.html#modal-general-8", "jacob-flatchat-yt.html#modal-general-9",
      "jacob-flatchat-yt.html#modal-general-10", "jacob-flatchat-yt.html#modal-general-11", "jacob-flatchat-yt.html#modal-general-12",
      "jacob-flatchat-yt.html#modal-general-13", "jacob-flatchat-yt.html#modal-general-14", "jacob-flatchat-yt.html#modal-general-15",
      
      "jacob-flatchat-yt.html#modal-funky-1", "jacob-flatchat-yt.html#modal-funky-2", "jacob-flatchat-yt.html#modal-funky-3",
      "jacob-flatchat-yt.html#modal-funky-4", "jacob-flatchat-yt.html#modal-funky-5",

      "jacob-flatchat-yt.html#modal-face-1", "jacob-flatchat-yt.html#modal-face-2",

      "jacob-flatchat-yt.html#modal-wild-1", "jacob-flatchat-yt.html#modal-wild-2", "jacob-flatchat-yt.html#modal-wild-3",

      "jacob-flatchat-yt.html#modal-great-1", "jacob-flatchat-yt.html#modal-great-2"
    ];

    // Pick one at random
    const randomLink = moments[Math.floor(Math.random() * moments.length)];

    // Redirect the browser
    window.location.href = randomLink;
  });
}
