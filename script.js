const facts = [
  "India is home to the world's largest postal network with over 1,55,015 post offices.",
  "The game of chess originated in India over 1500 years ago.",
  "India has the second-largest English-speaking population in the world.",
  "The Kumbh Mela is the largest religious gathering in the world.",
  "Kerala is known as 'God's Own Country' for its stunning natural beauty.",
  "The Indian Railways is the world's fourth-largest railway network.",
  "Yoga originated in ancient India over 5,000 years ago.",
  "The Taj Mahal changes color depending on the time of day and moon phases.",
  "India has 22 officially recognized languages.",
  "Varanasi is considered one of the oldest continuously inhabited cities in the world."
];

function showIndiaFact() {
  const index = Math.floor(Math.random() * facts.length);
  alert(facts[index]);
}
