import type { OutreachEvent, BasicImageMeta, FAQItem } from "@/types";

export const aboutSectionImages: BasicImageMeta[] = [
  {
    path: "/src/assets/2023-event-snap-1.jpg",
    alt: "Student holding the used clothes gift",
    aspect: "square",
  },
  {
    path: "/src/assets/2024-uia-event-snap-5.jpg",
    alt: "A man carrying groceries",
    aspect: "square",
  },
  {
    path: "/src/assets/2023-event-snap-3.jpg",
    alt: "Student holding a food pack",
    aspect: "square",
  },
  {
    path: "/src/assets/2024-uia-event-snap-2.jpg",
    alt: "A woman standing in front of a group of people",
    aspect: "square",
  },
];

export const outreachEvents: OutreachEvent[] = [
  {
    year: "2024",
    name: "Missionaries of the Poor",
    location: "Talisay City, Cebu",
    isDoneEvent: true,
    eventDate: new Date("December 7, 2024"),
    videoEmbedUrl: null,
    photoAlbumUrl: "https://facebook.com/share/p/1BZbcEJFCv/",
    previewPhotos: [
      {
        path: "/src/assets/2024-uia-event-snap-1.jpg",
        alt: "A group of people holding a banner",
        aspect: "square",
      },
      {
        path: "/src/assets/2024-uia-event-snap-2.jpg",
        alt: "A group of people holding a banner",
        aspect: "square",
      },
      {
        path: "/src/assets/2024-uia-event-snap-3.jpg",
        alt: "A group of people holding a banner",
        aspect: "square",
      },
      {
        path: "/src/assets/2024-uia-event-snap-4.jpg",
        alt: "People holding a banner",
        aspect: "square",
      },
      {
        path: "/src/assets/2024-uia-event-snap-5.jpg",
        alt: "People holding a banner",
        aspect: "square",
      },
      {
        path: "/src/assets/2024-uia-event-snap-6.jpg",
        alt: "Group of people holding a banner",
        aspect: "square",
      },
      {
        path: "/src/assets/2024-uia-event-snap-7.jpg",
        alt: "Group of people holding a banner",
        aspect: "square",
      },
      {
        path: "/src/assets/2024-uia-event-snap-8.jpg",
        alt: "Person holding a banner",
        aspect: "square",
      },
    ]
  },
  {
    year: "2023",
    name: "Kang-Atis Elementary School",
    location: "Lusaran, Cebu",
    isDoneEvent: true,
    eventDate: new Date("December 2, 2023"),
    videoEmbedUrl: "https://www.youtube.com/watch?v=kYKn7KD4V7E",
    photoAlbumUrl:
      "https://www.facebook.com/media/set/?set=a.264136350000523&type=3",
    previewPhotos: [
      {
        path: "/src/assets/2023-uia-event-snap-5.jpg",
        alt: "Smiling kid in front of a camera",
        aspect: "square",
      },
      {
        path: "/src/assets/2023-uia-event-snap-6.jpg",
        alt: "Vegetables and some donation items",
        aspect: "square",
      },
      {
        path: "/src/assets/2023-uia-event-snap-7.jpg",
        alt: "Side portrait of a girl",
        aspect: "square",
      },
      {
        path: "/src/assets/2023-uia-event-snap-8.jpg",
        alt: "Food ingredients",
        aspect: "square",
      },
      {
        path: "/src/assets/2023-uia-event-snap-9.jpg",
        alt: "A group of kids gathered around",
        aspect: "square",
      },
      {
        path: "/src/assets/2023-uia-event-snap-10.jpg",
        alt: "A group photo of five woman preparing foods",
        aspect: "square",
      },
      {
        path: "/src/assets/2023-uia-event-snap-11.jpg",
        alt: "Kids preparing items from a box",
        aspect: "square",
      },
      {
        path: "/src/assets/2023-uia-event-snap-12.jpg",
        alt: "Kids falling in line",
        aspect: "square",
      },
    ],
  },
];

export const unityInActionfaqItems:FAQItem[] = [
  {
    question: "Why Unity in Action?",
    answer:
      '"Unity in Action" encourages the idea that true progress comes when collaboration is translated into active engagement -- through volunteerism, partnerships, and resource-sharing.',
  },
  {
    question: "How are our beneficiaries being selected?",
    answer:
      "Our beneficiaries are typically selected based on criteria that align with the our goals and objectives. The process can vary depending on the nature of the program, the resources available, and the target population.",
  },
  {
    question: "Can we donate in cash or goods?",
    answer:
      'We accept both. If you prefer to donate cash, just click the "Make a Donation" button above.If you prefer to donate goods, please <a class="text-brand-color underline transition-all hover:text-brand-color-darker" href="https://m.me/cebuunitedcarcampers" target="_blank">send us a message in our official Facebook page</a> for a list of what can be given to our chosen beneficiary as per the organization\'s rules and guidelines',
  },
  {
    question: "Do I need to be a part of CUCC to make a donation?",
    answer: "No! Anyone and everyone is welcome to make a donation.",
  },
  {
    question:
      "Do I need to be a part of CUCC to participate in the outreach program?",
    answer:
      "No! Anyone and everyone can take part in our activities. We encourage as many volunteers as possible given that it is within the limits set by our beneficiary.",
  },
  {
    question: "How do I volunteer to take part in the outreach activity?",
    answer:
      'We will open a registration form soon. For the meantime, we will need you to <a class="text-brand-color underline transition-all hover:text-brand-color-darker" href="https://m.me/cebuunitedcarcampers" target="_blank">contact us via our official Facebook page</a> and state your interest in volunteering.',
  },
];

export const campAndReflectfaqItems:FAQItem[] = [
  {
    question: "Is there an event fee?",
    answer:
      "Nope! This event is completely free (You only pay the campsite fee onsite). Just bring yourself, your essentials, and an open heart.",
  },
  {
    question: "Do I need to sign up or RSVP?",
    answer:
      "While there is no event fee, we encourage registration. Registered participants will receive free stickers and a merchandise discount.",
  },
  {
    question:
      "Are there scheduled activities?",
    answer:
      "No set schedules here. This retreat is all about freedom and flow. You're encouraged to do whatever helps you slow down—whether that’s taking long walks, journaling, praying, or simply doing nothing.",
  },
  {
    question: "Is this a religious event?",
    answer: "While it's not a formal religious gathering, the event is rooted in the spirit of Holy Week—a time to pause, reflect, and prepare for Easter. It's open to everyone seeking a quiet, meaningful retreat.",
  },
  {
    question: "Can we bring music?",
    answer:
      "We encourage a peaceful and mindful atmosphere. Acoustic instruments like a guitar or kalimba are welcome if played gently and respectfully. Please avoid loud speakers or disruptive music.",
  },
];