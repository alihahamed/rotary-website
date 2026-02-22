const { createClient } = require("@supabase/supabase-js");
const fs = require("fs");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Missing Supabase credentials in .env");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const photos = [
  {
    src: "/gallery/comOrientation-1.jpg",
    title: "Commerce Orientation",
    description: "Welcome session and introduction to commerce stream",
    category: "Events",
  },
  {
    src: "/gallery/comOrientation-2.jpg",
    title: "Commerce Orientation",
    description: "Interactive workshops and faculty introductions",
    category: "Events",
  },
  {
    src: "/gallery/comOrientation-3.jpg",
    title: "Commerce Orientation",
    description: "Campus tour and facility exploration",
    category: "Events",
  },
  {
    src: "/gallery/comOrientation-4.jpg",
    title: "Commerce Orientation",
    description: "Subject overview and curriculum discussion",
    category: "Events",
  },
  {
    src: "/gallery/comOrientation-5.jpg",
    title: "Commerce Orientation",
    description: "Closing ceremony and student networking",
    category: "Events",
  },
  {
    src: "/gallery/sciOrientation_1.jpg",
    title: "Science Orientation",
    description: "Welcome session and introduction to science stream",
    category: "Events",
  },
  {
    src: "/gallery/sciOrientation_2.jpg",
    title: "Science Orientation",
    description: "Laboratory tours and hands-on science demonstrations",
    category: "Events",
  },
  {
    src: "/gallery/sciOrientation_3.jpg",
    title: "Science Orientation",
    description: "Interactive workshops and faculty introductions",
    category: "Events",
  },
  {
    src: "/gallery/sciOrientation_4.jpg",
    title: "Science Orientation",
    description: "Subject overview and curriculum discussion for PCMB/PCMC",
    category: "Events",
  },
  {
    src: "/gallery/sciOrientation_5.jpg",
    title: "Science Orientation",
    description: "Closing ceremony and student networking for science stream",
    category: "Events",
  },
  {
    src: "/gallery/bio-lab.webp",
    title: "Biology Laboratory",
    description:
      "Advanced biology lab with modern equipment and research facilities",
    category: "Campus",
  },
  {
    src: "/gallery/cs-lab.webp",
    title: "Computer Science Lab",
    description:
      "State-of-the-art computer lab with latest technology and software",
    category: "Campus",
  },
  {
    src: "/gallery/chem-lab-1.webp",
    title: "Chemistry Laboratory",
    description:
      "Well-equipped Chemistry lab for practical experiments and research",
    category: "Campus",
  },
  {
    src: "/gallery/PHY-LAB1.webp",
    title: "Advanced Physics Lab",
    description: "Specialized physics laboratory for advanced experiments",
    category: "Campus",
  },
  {
    src: "/gallery/chem-lab-2.webp",
    title: "Chemistry Lab",
    description: "Specialized chemistry laboratory for advanced experiments",
    category: "Campus",
  },
  {
    src: "/gallery/annual_01.webp",
    title: "Annual Day Celebration",
    description:
      "Grand annual day celebration showcasing student talents and achievements",
    category: "Events",
  },
  {
    src: "/gallery/annual_2.webp",
    title: "Annual Cultural Program",
    description: "Traditional and modern cultural performances by students",
    category: "Events",
  },
  {
    src: "/gallery/annual_3.webp",
    title: "Annual Sports Events",
    description: "Exciting sports competitions and athletic achievements",
    category: "Events",
  },
  {
    src: "/gallery/annual_4.webp",
    title: "Annual Prize Distribution",
    description:
      "Recognition and awards for outstanding academic and extracurricular performance",
    category: "Events",
  },
  {
    src: "/gallery/annual_5.webp",
    title: "Annual Day",
    description: "Reunion with former students and cherished memories",
    category: "Events",
  },
  {
    src: "/gallery/annual_6.webp",
    title: "Annual Day",
    description: "Emotional farewell ceremony for graduating students",
    category: "Events",
  },
  {
    src: "/gallery/drug_1.webp",
    title: "Drug Awareness Workshop",
    description:
      "Educational session on drug abuse prevention and healthy lifestyle",
    category: "Events",
  },
  {
    src: "/gallery/drug_2.webp",
    title: "Anti-Drug Campaign",
    description: "Student participation in anti-drug awareness activities",
    category: "Events",
  },
  {
    src: "/gallery/drug_3.webp",
    title: "Drug Prevention Seminar",
    description: "Interactive seminar on the dangers of substance abuse",
    category: "Events",
  },
  {
    src: "/gallery/drug_4.webp",
    title: "Drug Awareness Workshop",
    description: "Community outreach and awareness campaign against drug abuse",
    category: "Events",
  },
  {
    src: "/gallery/ind_1.JPG",
    title: "Independence Day Celebration",
    description:
      "Patriotic celebrations marking India's independence with flag hoisting and cultural programs",
    category: "Events",
  },
  {
    src: "/gallery/ind_2.JPG",
    title: "Independence Day Celebration",
    description:
      "Students participating in the independence day parade and cultural performances",
    category: "Events",
  },
  {
    src: "/gallery/interact_club_1.jpeg",
    title: "Interact Club Meeting",
    description:
      "Rotary Interact Club members engaged in community service planning",
    category: "Events",
  },
  {
    src: "/gallery/interact_club_2.jpeg",
    title: "Interact Community Service",
    description:
      "Interact club members participating in local community service projects",
    category: "Events",
  },
  {
    src: "/gallery/interact_club_3.jpeg",
    title: "Interact Leadership Workshop",
    description:
      "Leadership development and skill-building workshop for Interact members",
    category: "Events",
  },
  {
    src: "/gallery/interact_club_4.jpeg",
    title: "Interact Social Initiative",
    description:
      "Interact club organizing social awareness campaigns and initiatives",
    category: "Events",
  },
  {
    src: "/gallery/interact_club_5.jpeg",
    title: "Interact Club Activities",
    description:
      "Various club activities promoting service, leadership, and fellowship",
    category: "Events",
  },
  {
    src: "/gallery/talukRunners_boys.webp",
    title: "Taluk Runners Championship - Boys",
    description:
      "Boys team competing in the prestigious Taluk Runners Championship",
    category: "Events",
  },
  {
    src: "/gallery/talukRunners_girls.webp",
    title: "Taluk Runners Championship - Girls",
    description:
      "Girls team showcasing athletic excellence in Taluk Runners Championship",
    category: "Events",
  },
  {
    src: "/gallery/cultural-event.webp",
    title: "Food Fest",
    description:
      "Vibrant cultural festival celebrating diversity and artistic talents",
    category: "Events",
  },
  {
    src: "/gallery/entry.webp",
    title: "College Entrance",
    description: "Beautiful college entrance welcoming students and visitors",
    category: "Campus",
  },
];

async function migrate() {
  console.log(`Starting migration of ${photos.length} photos...`);

  for (const photo of photos) {
    const { data, error } = await supabase.from("gallery").insert([
      {
        title: photo.title,
        description: photo.description,
        image_url: photo.src,
        category: photo.category,
      },
    ]);

    if (error) {
      console.error(`Failed to insert ${photo.title}:`, error.message);
    } else {
      console.log(`Successfully inserted: ${photo.title}`);
    }
  }

  console.log("Migration complete.");
}

migrate();
