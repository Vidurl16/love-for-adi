// ───────────────────────────────────────────────────────────────
//  Everything you need to personalise lives in this file.
//  Drop your photos into anniversary/photos/ and list them below.
// ───────────────────────────────────────────────────────────────
window.ANNIVERSARY = {
  her: "Adithi",
  me: "Vidur",

  // The day it all started (YYYY-MM-DDTHH:mm). Used by the live counter.
  startDate: "2025-11-01T19:00",

  // The note inside the envelope on the opening screen.
  envelopeNote: "Happy 1 year, my love. Scroll slowly. 💜",

  // Timeline moments, in order. `photo` is a filename in ./photos/
  moments: [
    { date: "Nov 2025", title: "The beginning",       text: "The day everything changed.",                    photo: "01.jpg" },
    { date: "Dec 2025", title: "Our first holiday season", text: "Fairy lights, bad jokes, and you.",          photo: "02.jpg" },
    { date: "Feb 2026", title: "You said yes",          text: "Valentine's Day — and a very cowardly No button.", photo: "03.jpg" },
    { date: "Apr 2026", title: "Adventure",             text: "Getting lost with you is my favourite thing.",  photo: "04.jpg" },
    { date: "Jul 2026", title: "Just us",               text: "The quiet days are my favourite days.",         photo: "05.jpg" },
    { date: "Nov 2026", title: "One year",              text: "365 days, and I'd choose you every one of them.", photo: "06.jpg" },
  ],

  // Extra photos for the spinning 3D carousel and the scrapbook wall.
  // (Moment photos are included automatically.)
  gallery: [
    { photo: "07.jpg", caption: "us 💕" },
    { photo: "08.jpg", caption: "that smile" },
    { photo: "09.jpg", caption: "my favourite" },
    { photo: "10.jpg", caption: "always" },
    { photo: "11.jpg", caption: "silly us" },
    { photo: "12.jpg", caption: "home" },
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
