const destinations = [
  {
    number: "01",
    country: "FRANCE",
    city: "Paris",
    description:
      "Paris is one of the most beautiful cities in the world, famous for its art, architecture and romantic atmosphere.",
    continent: "Europe",
    food: "Croissant, Macarons",
    famousPlace: "Eiffel Tower",
    language: "French",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1000&q=80"
  },
  {
    number: "02",
    country: "JAPAN",
    city: "Tokyo",
    description:
      "Tokyo is a modern city that combines advanced technology with traditional Japanese culture.",
    continent: "Asia",
    food: "Sushi, Ramen",
    famousPlace: "Tokyo Tower",
    language: "Japanese",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1000&q=80"
  },
  {
    number: "03",
    country: "ITALY",
    city: "Rome",
    description:
      "Rome is a historic city filled with ancient ruins, stunning architecture, and world-renowned Italian cuisine.",
    continent: "Europe",
    food: "Pizza, Pasta, Gelato",
    famousPlace: "Colosseum",
    language: "Italian",
    image:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1000&q=80"
  },
  {
    number: "04",
    country: "EGYPT",
    city: "Cairo",
    description:
      "Cairo is a vibrant metropolis steeped in ancient history, home to timeless wonders along the Nile River.",
    continent: "Africa",
    food: "Koshary, Falafel",
    famousPlace: "Pyramids of Giza",
    language: "Arabic",
    image:
      "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=1000&q=80"
  }
];

let currentIndex = 0;

// DOM Elements
const slideCounter = document.getElementById("slide-counter");
const countryName = document.getElementById("country-name");
const cityName = document.getElementById("city-name");
const cityDesc = document.getElementById("city-desc");
const continentName = document.getElementById("continent-name");
const foodName = document.getElementById("food-name");
const placeName = document.getElementById("place-name");
const languageName = document.getElementById("language-name");
const cityImage = document.getElementById("city-image");
const badgeNumber = document.getElementById("badge-number");

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const exploreMoreBtn = document.getElementById("explore-more-btn");
const dots = document.querySelectorAll(".dot");

function updateSlide(index) {
  const item = destinations[index];
  const total = String(destinations.length).padStart(2, "0");

  slideCounter.textContent = `${item.number} / ${total}`;
  countryName.textContent = item.country;
  cityName.textContent = item.city;
  cityDesc.textContent = item.description;
  continentName.textContent = item.continent;
  foodName.textContent = item.food;
  placeName.textContent = item.famousPlace;
  languageName.textContent = item.language;
  cityImage.src = item.image;
  cityImage.alt = item.city;
  badgeNumber.textContent = item.number;

  dots.forEach((dot, idx) => {
    dot.classList.toggle("active", idx === index);
  });
}

// Next & Previous buttons
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % destinations.length;
  updateSlide(currentIndex);
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + destinations.length) % destinations.length;
  updateSlide(currentIndex);
});

// Dots navigation
dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    currentIndex = Number(dot.dataset.index);
    updateSlide(currentIndex);
  });
});

// "Explore More" Alert (نفس الرسالة الظاهرة في الصورة الرابعة)
exploreMoreBtn.addEventListener("click", () => {
  const current = destinations[currentIndex];
  alert(`Discover ${current.city} in ${current.country}!\nFamous Place: ${current.famousPlace}`);
});

// Initialize first slide
updateSlide(currentIndex);