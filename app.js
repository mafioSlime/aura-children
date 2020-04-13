const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".main-nav");
const button = document.querySelector(".spirit-animal-button");
const spiritAnimalContainer = document.querySelector(".spirit-animal-content");
const spiritAnimalBox = document.querySelector("#spirit-animals");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("toggle");
});

const lion = {
  info:
    "In the realm of spirit animals, the lion wins the prize for most relentless fighter in the face of life challenges. The lion spirit animal represents courage, strength in overcoming difficulties. The presence of this power animal could also mean that something “wild” or difficult to control is happening. As such, lions symbolizes emotions that are difficult to manage, such a anger or fear.",
  name: "Lion",
  symbolize1: "Strength, assertiveness, personal power",
  symbolize2:
    "A common meaning for the lion spirit animal is predatory feelings, such as anger, aggression directed at someone else or towards you",
  symbolize3: "Personal struggle to deal with these feelings",
  symbolize4:
    "Lion spirit animals warn about a threatening situation or event in your life",
  image: "images/lion.jpg",
};

const wolf = {
  info:
    "The wolf offers some of the most striking animal meanings in the realm of spirit animals. The power of the wolf brings forth instinct, intelligence, appetite for freedom, and awareness of the importance of social connections. This animal can also symbolize fear of being threatened and lack of trust. When the wolf shows up in your life, pay attention to what your intuition is telling you.",
  name: "Wolf",
  symbolize1: "Sharp intelligence, deep connection with instincts",
  symbolize2: "Appetite for freedom",
  symbolize3: "Expression of strong instincts",
  symbolize4: "Feeling threatened, lack of trust in someone or in yourself",
  image: "images/wolf.jpg",
};

const panther = {
  info:
    "The panther spirit animal is powerful and protective. The panther symbolizes courage, valor and power. If the panther is your power animal, you are blessed with a fierce guardian. The panther is the symbol of the mother, the dark moon and the power of the night. This totem animal encourages us to understand the power within the shadows and to acknowledge these powers to help eliminate our fear of the dark and unknown.",
  name: "Panther",
  symbolize1: "Astral travel",
  symbolize2: "Guardian energy",
  symbolize3: "Symbol of the feminine",
  symbolize4: "Death and rebirth",
  image: "images/panther.jpg",
};

const bear = {
  info:
    "In the kingdom of spirit animals, the bear is emblematic of grounding forces and strength. This animal has been worshiped throughout time as a powerful totem, inspiring those who need it the courage to stand up against adversity. As a spirit animal in touch with the earth and the cycles of nature, it is a powerful guide to support physical and emotional healing.",
  name: "Bear",
  symbolize1:
    "The primary meaning of the bear spirit animal is strength and confidence",
  symbolize2: "Standing against adversity; taking action and leadership",
  symbolize3:
    "The spirit of the the bear indicates it’s time for healing or using healing abilities to help self or others ",
  symbolize4:
    "The bear medicine emphasizes the importance of solitude, quiet time, rest",
  image: "images/bear.jpg",
};

const turtle = {
  info:
    "The turtle totem wisdom teaches us about walking our path in peace and sticking to it with determination and serenity. Slow moving on earth, yet also incredibly fast and agile in water, those who have the turtle as totem or spirit animal may be encouraged to take a break in their busy lives and look around or within themselves for more grounded, long-lasting solutions. Traditionally, the turtle is symbolic of the way of peace, whether it’s inviting us to cultivate peace of mind or a peaceful relationship with our environment.",
  name: "Turtle",
  symbolize1: "Symbol of the world, of the Earth",
  symbolize2:
    "Ability to stay grounded, even in moments of disturbances and chaos",
  symbolize3: "Slowing down, pacing yourself",
  symbolize4: "Ancient wisdom",
  image: "images/turtle.jpg",
};

const owl = {
  info:
    "The owl spirit animal is emblematic of a deep connection with wisdom and intuitive knowledge. If you have the owl as totem or power animal, you’re likely to have the ability to see what’s usually hidden to most. When the spirit of this animal guides you, you can see the true reality, beyond illusion and deceit. The owl also offers for those who have it a personal totem the inspiration and guidance necessary to deeply explore the unknown and the magic of life.",
  name: "Owl",
  symbolize1: "Intuition, ability to see what others do not see",
  symbolize2: "The presence of the owl announces change",
  symbolize3: "Capacity to see beyond deceit and masks",
  symbolize4: "Wisdom",
  image: "images/owl.jpg",
};

const butterfly = {
  info:
    "The butterfly is one of the most emblematic totem animals symbolizing personal transformation. If you see the butterfly as your totem or spirit animal, pay attention to the areas in your life or personality that are in need of profound change or transformation. Perhaps, this animal totem guides you to be sensitive to your personal cycles of expansion and growth, as well as the beauty of life’s continuous unfolding. An important message carried by the spirit of the butterfly is about the ability to go through important changes with grace and lightness.",
  name: "Butterfly",
  symbolize1:
    "Powerful transformation, metamorphosis in your life, personality",
  symbolize2: "Moving through different life cycles",
  symbolize3: "Renewal, rebirth",
  symbolize4:
    "Elevation from earthly matters, tuning into emotional or spiritual",
  image: "images/butterfly.jpg",
};

const eagle = {
  info:
    "The Eagle spirit animal is an inspiring messenger. With the ability to soar to heights other birds merely dream of, the Eagle is a powerful animal totem that offers lessons about looking closely at the most minute of details in order to see life from a broader perspective. When this graceful hunter comes into your life, it’s time to look inward with a careful eye. Allow your heart to guide you, and opportunities you never dreamed were possible will present themselves when you least expect it. Eagles have feet with four toes. Four is a symbol for having a solid foundation and being grounded. Those who are guided by the Eagle spirit animal are grounded. Even though the Eagle can soar to great heights, they are still strongly connected to the earth. Among being grounded and connected to the earth, those guided by the Eagle are also resilient and in complete harmony with the spiritual aspects of their lives. Unafraid of the unknown, these seekers accept life’s challenges with unshakable courage, determination and confidence.",
  name: "Eagle",
  symbolize1: "Intuition",
  symbolize2: "Vision",
  symbolize3: "Hope",
  symbolize4: "Sexual Power",
  image: "images/eagle.jpg",
};

const hawk = {
  info:
    "When you have the hawk as a spirit animal, you may have an inclination towards using the power of vision and intuition in your daily life. The hawk totem provides wisdom about seeing situations from a higher perspective, using the power of observation, and focusing on the task at hand. It’s a good companion to develop spiritual awareness.",
  name: "Hawk",
  symbolize1: "Hawk is the messenger of the spirit world",
  symbolize2: "Take the lead when the time is right",
  symbolize3: "Power to see, clear vision",
  symbolize4: "Strong connection with spirit, increased spiritual awareness",
  image: "images/hawk.jpg",
};

const displayDefault = () => {
  spiritAnimalContainer.innerHTML = `
  <h3>Choose A Spirit Animal From The Option Above</h3>
  `;
};

const displayAnimal = (animal) => {
  spiritAnimalContainer.innerHTML = `
  <img src=${animal.image} alt=${animal.name}> 
  <h3>${animal.name}</h3>
  <p class="animal-info">${animal.info}</p>
  <h4>${animal.name} Symbolizes:</h4>
  <ul class="symbol-bullets">
  <li>${animal.symbolize1}</li>
  <li>${animal.symbolize2}</li>
  <li>${animal.symbolize3}</li>
  <li>${animal.symbolize4}</li>
  </ul>
  `;
};

const selectAnimal = () => {
  if (spiritAnimalBox.value === "lion") {
    displayAnimal(lion);
  } else if (spiritAnimalBox.value === "wolf") {
    displayAnimal(wolf);
  } else if (spiritAnimalBox.value === "panther") {
    displayAnimal(panther);
  } else if (spiritAnimalBox.value === "bear") {
    displayAnimal(bear);
  } else if (spiritAnimalBox.value === "turtle") {
    displayAnimal(turtle);
  } else if (spiritAnimalBox.value === "owl") {
    displayAnimal(owl);
  } else if (spiritAnimalBox.value === "butterfly") {
    displayAnimal(butterfly);
  } else if (spiritAnimalBox.value === "eagle") {
    displayAnimal(eagle);
  } else if (spiritAnimalBox.value === "hawk") {
    displayAnimal(hawk);
  } else {
    displayAnimal(bear);
  }
};

button.addEventListener("click", () => {
  selectAnimal();
});

displayDefault();
