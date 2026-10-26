// ───────────────────────────────────────────────────────────────
//  Everything you need to personalise lives in this file.
//  Drop your photos into anniversary/photos/ and list them below.
// ───────────────────────────────────────────────────────────────
window.ANNIVERSARY = {
  her: "Adithi",
  me: "Vidur",

  // The day it all started (YYYY-MM-DDTHH:mm). Used by the live counter.
  startDate: "2025-10-28T00:00",

  // The note inside the envelope on the opening screen.
  envelopeNote: "Happy 1 year, my love. Scroll slowly. 💜",

  // Every photo, oldest first (files in ./photos/). This order is used everywhere:
  // the timeline, the 3D carousel, the scrapbook wall and the photo viewer.
  // Photos with a `title` also get a spot on the "Our Story" timeline.
  photos: [
    { photo: "01.jpg", date: "28 Oct 2025", caption: "Where it all started", title: "Where it all started", text: "Car selfies and the start of my favourite story." },
    { photo: "02.jpg", date: "20 Nov 2025", caption: "that smile" },
    { photo: "03.jpg", date: "4 Dec 2025",  caption: "Summer with you", title: "Summer with you", text: "Long days, good food, and the best company." },
    { photo: "04.jpg", date: "4 Dec 2025",  caption: "silly us 😛" },
    { photo: "05.jpg", date: "17 Dec 2025", caption: "us 💕" },
    { photo: "06.jpg", date: "22 Dec 2025", caption: "festive season" },
    { photo: "07.jpg", date: "4 Jan 2026",  caption: "All dressed up", title: "All dressed up", text: "New year, same favourite person." },
    { photo: "08.jpg", date: "14 Jan 2026", caption: "can't help it" },
    { photo: "09.jpg", date: "23 Jan 2026", caption: "lazy days" },
    { photo: "10.jpg", date: "21 May 2026", caption: "Stolen kisses", title: "Stolen kisses", text: "Every chance I get." },
    { photo: "11.jpg", date: "20 Jun 2026", caption: "Sunshine days", title: "Sunshine days", text: "The quiet days are my favourite days." },
    { photo: "12.jpg", date: "12 Jul 2026", caption: "game day 💚💛" },
    { photo: "13.jpg", date: "8 Aug 2026",  caption: "my favourite" },
    { photo: "14.jpg", date: "30 Aug 2026", caption: "Still my favourite", title: "Still my favourite", text: "Almost a year in, and I'd choose you every single day." },
  ],

  // Flip cards — tap to reveal.
  reasons: [
    "Your laugh fixes my worst days",
    "You make ordinary things feel like adventures",
    "The way you look at me",
    "You're my calm",
    "You put up with my nonsense",
    "You're my best friend",
    "Your hugs",
    "You make me want to be better",
  ],

  // Typed out like a letter, line by line.
  letter: [
    "My dearest Adithi,",
    "",
    "A year ago I didn't know that one person could become my favourite part of every single day.",
    "Thank you for every laugh, every late-night talk, every adventure and every quiet moment in between.",
    "Here's to year one — and to every year after it.",
    "",
    "I love you. Always.",
    "— Vidur",
  ],

  // Optional: put an .mp3 in ./photos/ and set its filename, e.g. "our-song.mp3"
  song: "",
};
