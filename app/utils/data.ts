let sampleResponses = [
  {
    id: 1,
    content:
      "Adaptability is the ability to adjust to changing circumstances and environments, and it is essential to resilience and success. Whether it's embracing new challenges and opportunities, remaining flexible and adaptable in the face of uncertainty, or seeking out support and resources when needed, adaptability can help us thrive in a constantly changing world.",
  },
  {
    id: 2,
    content:
      "Compassion is the act of showing kindness, care, and concern for others, and it is essential to building a more just and equitable world. Whether it's standing up for the rights of marginalized communities or simply extending a helping hand to someone in need, compassion can make a positive impact in the world.",
  },
  {
    id: 3,
    content:
      "The sun beat down on the beach, warming the sand and the water to the perfect temperature.",
  },
  {
    id: 4,
    content:
      "The scent of freshly brewed coffee filled the air as I walked into the cozy café. I ordered my favorite drink and settled into a comfortable armchair, feeling relaxed and content.",
  },
  {
    id: 5,
    content:
      "The development of green roofs is another important application of technology and nature. Green roofs use vegetation to insulate buildings and reduce the urban heat island effect, promoting more sustainable and livable cities.",
  },
  {
    id: 6,
    content:
      "Another exciting development in technology and nature is the use of blockchain. By creating secure and transparent systems for tracking natural resources and conservation efforts, blockchain can help us better manage and protect the environment. With blockchain, we can ensure that resources are used responsibly and that conservation efforts are effective and accountable.",
  },
  {
    id: 7,
    content:
      "The use of renewable energy technology is another innovative application of technology in nature. By harnessing the power of renewable resources like solar and wind energy, we can reduce our reliance on fossil fuels and mitigate the impacts of climate change.",
  },
  {
    id: 8,
    content:
      "The sound of the orchestra filled the concert hall, and I was swept away by the beauty of the music. The notes seemed to dance in the air, creating a magical atmosphere.",
  },
  {
    id: 9,
    content:
      "I stepped off the plane and into the hustle and bustle of a new city. The sights, sounds, and smells were unfamiliar, but I felt excited to explore and discover all that this new place had to offer.",
  },
  {
    id: 10,
    content:
      "The trend towards mindfulness has been gaining momentum, with people incorporating practices like yoga and meditation into their daily routines. It's a way to cultivate inner peace and live more intentionally.",
  },
];

function pickRandom(array: { id: number; content: string }[]) {
  return array[Math.floor(Math.random() * array.length)];
}

export function pickRandomSampleResponses() {
  return pickRandom(sampleResponses);
}
