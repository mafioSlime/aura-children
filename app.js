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
  image: "../images/lion.jpg",
  dream: `This lion dream scenario is classic. Dreaming of being chased by a lion is one of the most common themes featuring this creature in the dream world. The lion chasing you generally connects to the struggle the dreamer is experiencing regarding feelings of anger or aggression in waking life.
The dream about your lion spirit animal could point to anger you may feel towards someone or aggression that is directed at you. Being chased by a lion in a dream could be a warning from your animal totem that you’re struggling with these feelings and how to express them. The lion totem could mean that you’re having difficulties dealing with a situation where someone is mean or aggressive with you.`,
};

const wolf = {
  info:
    "The wolf offers some of the most striking animal meanings in the realm of spirit animals. The power of the wolf brings forth instinct, intelligence, appetite for freedom, and awareness of the importance of social connections. This animal can also symbolize fear of being threatened and lack of trust. When the wolf shows up in your life, pay attention to what your intuition is telling you.",
  name: "Wolf",
  symbolize1: "Sharp intelligence, deep connection with instincts",
  symbolize2: "Appetite for freedom",
  symbolize3: "Expression of strong instincts",
  symbolize4: "Feeling threatened, lack of trust in someone or in yourself",
  image: "../images/wolf.jpg",
  dream: `The dream meanings associated with the wolf point to powerful instincts or habits that could be experienced as aggressive or dominating by others. Wolves in dreams convey the energetic imprint of strong sexual energy or addictive behaviors of different kinds that would benefit from being kept in check.

If a woman dreams of a wolf in a nightmare or anxious dream, she may be getting in touch with anxiety relating to a male partner who may be pushing his sexual desires very strongly or pushing her boundaries. The intensity of the relationship can cause fear and be experienced as a threat that the wolf symbolizes in the dream.

If the dream has a positive tone or outcome, the wolf could be interpreted as a guiding symbol for trusting your instincts more or expressing them in a more balanced manner. If you have such a dream, ask yourself if you feel at ease and supported by your instincts, especially your sexuality or a partner’s sexual expression, or other types of “cravings” in your life.`,
};

const panther = {
  info:
    "The panther spirit animal is powerful and protective. The panther symbolizes courage, valor and power. If the panther is your power animal, you are blessed with a fierce guardian. The panther is the symbol of the mother, the dark moon and the power of the night. This totem animal encourages us to understand the power within the shadows and to acknowledge these powers to help eliminate our fear of the dark and unknown.",
  name: "Panther",
  symbolize1: "Astral travel",
  symbolize2: "Guardian energy",
  symbolize3: "Symbol of the feminine",
  symbolize4: "Death and rebirth",
  image: "../images/panther.jpg",
  dream: `While some interpretations of the panther interpret it as a symbol of an enemy, the panther is also a symbol of the protector. Panther can be a powerful ally that can protect you in the dream realms.

Panther embodies not only power, strength and courage, but grace and beauty as well. The panther may be reminding you to find and check in with these qualities yourself. If you are a woman, panther may be reminding you that you do indeed posses the characteristics as panther herself is often a symbol of the feminine. Can you embody beauty and grace at the same time as strength, power and courage?`,
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
  image: "../images/bear.jpg",
  dream:
    "Dreams are our subconscious minds communicating to us using the language of symbols. Dreaming of bears (or a bear) symbolizes power, strength and protection of yourself or possibly your family. If the bear in your dream is hibernating, it may indicate a need for solitude and to get away. If the bear is dancing, it indicates good luck (or you are having flashbacks of one of those many past Grateful Dead shows you went to). If a bear is chasing you, it may mean that you are avoiding a big situation in your life and it is time to take a stand and deal with it. Bear showing up in your dream may also be a message that it is time to show your power to the world.",
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
  image: "../images/turtle.jpg",
  dream: `Turtles are known for taking it slow……real slow! If turtle shows up in your dreams, it may be telling you it’s time to slow down for a while.Are you moving too fast? Pushing too hard?
The turtle also has a hard shell that it retreats into when presented with danger.If your dream turtle is hiding in its shell, it could be a warning that danger is approaching.However it could also be a message about coming out of your shell.In what ways have you been hiding? It may very well be time for you to come out and share your gifts with the world!`,
};

const owl = {
  info:
    "The owl spirit animal is emblematic of a deep connection with wisdom and intuitive knowledge. If you have the owl as totem or power animal, you’re likely to have the ability to see what’s usually hidden to most. When the spirit of this animal guides you, you can see the true reality, beyond illusion and deceit. The owl also offers for those who have it a personal totem the inspiration and guidance necessary to deeply explore the unknown and the magic of life.",
  name: "Owl",
  symbolize1: "Intuition, ability to see what others do not see",
  symbolize2: "The presence of the owl announces change",
  symbolize3: "Capacity to see beyond deceit and masks",
  symbolize4: "Wisdom",
  image: "../images/owl.jpg",
  dream: `When you dream about an owl, your spirit animal may be contacting you to warn you about a danger or threat hat you need to pay attention to. It can bring a wise insight about important matters that you should not ignore.

When an owl appears in a dream, it could also mean that the intuitive part of you is calling for attention: Pay attention and listen to the subtle signs in your life, to what is important, but not necessarily obviously so.

The owl could also be a animal spirit guide offering you insight about a moment of transition. Since this totem animal is often associated with death, when an owl shows up in a dream, it could mean that you are receiving guidance regarding personal transformation, change.

In many dream interpretations, the owl can represent a deceased friend or family member who comes back in the dream in the shape of a spirit animal.`,
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
  image: "../images/butterfly.jpg",
  dream:
    "Dreams are our subconscious minds communicating to us using the language of symbols. The classic interpretation of a butterfly in your dreams is that of transformation. Did the dream start with a caterpillar, cocoon or butterfly? The key to its meaning of transformation depends on where in the life cycle the butterfly is. Associated with the idea of transformation is also rebirth and transmutation of energy. The butterfly can also symbolize freedom, expansion and full self expression. Lastly, the butterfly may symbolize social success.",
};

const eagle = {
  info:
    "The Eagle spirit animal is an inspiring messenger. With the ability to soar to heights other birds merely dream of, the Eagle is a powerful animal totem that offers lessons about looking closely at the most minute of details in order to see life from a broader perspective. When this graceful hunter comes into your life, it’s time to look inward with a careful eye. Allow your heart to guide you, and opportunities you never dreamed were possible will present themselves when you least expect it. Eagles have feet with four toes. Four is a symbol for having a solid foundation and being grounded. Those who are guided by the Eagle spirit animal are grounded. Even though the Eagle can soar to great heights, they are still strongly connected to the earth. Among being grounded and connected to the earth, those guided by the Eagle are also resilient and in complete harmony with the spiritual aspects of their lives. Unafraid of the unknown, these seekers accept life’s challenges with unshakable courage, determination and confidence.",
  name: "Eagle",
  symbolize1: "Intuition",
  symbolize2: "Vision",
  symbolize3: "Hope",
  symbolize4: "Sexual Power",
  image: "../images/eagle.jpg",
  dream:
    "To see an Eagle in your dreams is essentially a call for introspection and self-examination. To dream of a soaring Eagle means it’s time to listen more closely to your inner voice — or intuition. To watch this power animal going from a perched stance to flight is indicative of your ability to rise above your situation, take a broader view of your circumstances, and allow your higher consciousness to guide you. However, if the power animal is diving or swooping, it can mean deception. Be mindful that everything you do comes back around, so try not to harm others in your pursuit to improve your circumstances. And if the Eagle is on the offensive and attacks, it is time to reevaluate your perceived limitations and self-imposed boundaries. You could very well be what’s holding you back.",
};

const hawk = {
  info:
    "When you have the hawk as a spirit animal, you may have an inclination towards using the power of vision and intuition in your daily life. The hawk totem provides wisdom about seeing situations from a higher perspective, using the power of observation, and focusing on the task at hand. It’s a good companion to develop spiritual awareness.",
  name: "Hawk",
  symbolize1: "Hawk is the messenger of the spirit world",
  symbolize2: "Take the lead when the time is right",
  symbolize3: "Power to see, clear vision",
  symbolize4: "Strong connection with spirit, increased spiritual awareness",
  image: "../images/hawk.jpg",
  dream: `Hawks are messengers and dreaming about a hawk may signify that something or someone is trying to send you a message. Are you listening? Are you paying attention?
  As the hawk glides through the air high in the sky, it reminds you to see things from a higher perspective. Can you connect to the magic of life? Are you accessing your intuition?
  The hawk is also a symbol of leadership. It was believed that if you followed the hawk, you would be traveling on the right path.`,
};

const fox = {
  info:
    "The fox is often associated with the figure of the trickster, but as a spirit animal, it can also turn into a teacher providing guidance on swiftly finding your way around obstacles. If you follow the fox totem wisdom, you may be called to use or develop quick thinking and adaptability. Responsive, sometimes cunning, this power animal is a great guide when you are facing tricky situations.",
  name: "Fox",
  symbolize1: "Physical or mental responsiveness, increased awareness",
  symbolize2: "Cunning; seeing through deception; call to be discerning",
  symbolize3:
    "Ability to find your way around, to be swift in tricky situations",
  symbolize4: "Affinity with nocturnal activities and dream work",
  image: "../images/fox.jpg",
  dream: `The fox and its ability to quietly and masterfully get into the hen house, have made this spirit animal a universal symbol of being sly, cunning, shrewd, clever, tricky and opportunistic. Therefore a fox in your dreams is often a symbol to watch out for danger from around you. There may be hidden enemies or rivals waiting for the right opportunity.

However, the fox may also be a symbol of connecting to the parts of you that are cunning and clever. Is there a situation that requires a clever solution? Is there an opportunity that is just waiting for you to take it?`,
};

const swan = {
  info:
    "If you have swan as your animal totem, then you have the ability to look into the future and accept healing and transformation that is a constant presence in our lives. When you are in relationships, you prefer monogamous relationships. Often individuals with the swan power animal find their true love at a very young age and remain together for years to come. You have the ability to balance work, family and play as well as recognize the importance of personal solitude needed to recharge. In crowds, you are comfortable and are able to maintain your individuality.",
  name: "Swan",
  symbolize1: "Awakening the power of self",
  symbolize2: "Understanding dream symbols",
  symbolize3: "Spiritual evolution",
  symbolize4: "Transformation",
  image: "../images/swan.jpg",
  dream: `When Swan enters our dreams she symbolizes beauty, dignity, grace, purity, wealth and prestige. A person or something you have met who you initially found unappealing will become of interest to you. Presently, do not take things at face value. It could also mean that it is important for you to continue to behave with grace while handling a difficult situation or time. Your perseverance will grant you a spiritual reward. She asks us to spread our wings and fly. She encourages us to strengthen relationships and develop new, long-lasting bonds with those we admire.

A black swan in dreams symbolizes mysterious unknown. It is a representation of something forbidden, but alluring. These mysteries are within us and waiting to be set free.`,
};

const displayDefault = () => {
  spiritAnimalContainer.innerHTML = `
  <h3>Choose A Spirit Animal From The Option Above</h3>
  `;
};

const displayAnimal = (animal) => {
  spiritAnimalContainer.innerHTML = `
  <img src=${animal.image} alt=${animal.name}> 
  <div class="animal-content">
  <h3>${animal.name}</h3>
  <p class="animal-info">${animal.info}</p>
  <h4>${animal.name} Symbolizes:</h4>
  <ul class="symbol-bullets">
  <li>${animal.symbolize1}</li>
  <li>${animal.symbolize2}</li>
  <li>${animal.symbolize3}</li>
  <li>${animal.symbolize4}</li>
  </ul>
  <h4>${animal.name} In Your Dream Meaning:</h4>
  <p class="animal-dream">${animal.dream}</p>
  </div>
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
  } else if (spiritAnimalBox.value === "fox") {
    displayAnimal(fox);
  } else if (spiritAnimalBox.value === "swan") {
    displayAnimal(swan);
  }
};

button.addEventListener("click", () => {
  selectAnimal();
});

displayDefault();
