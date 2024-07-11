const FAQQuestion = [
    {
      id: 1,
      question: `What are the common types of snakes found in the Philippines? `,
      answer: `The Philippines is home to various species of snakes, including the Philippine cobra, the reticulated python, the pit viper, the king cobra, and the Philippine flying snake, among others.`
    },
    {
      id: 2,
      question: `What should I do if I encounter a snake?`,
      answer: `If you encounter a snake, it's essential to remain calm and avoid sudden movements. Back away slowly and give
      the snake space to retreat. Never attempt to handle or provoke a snake, especially if you're unsure about its
      species.`
    },
    {
      id: 3,
      question: `How can I distinguish between venomous and non-venomous snakes?`,
      answer: `Distinguishing between venomous and non-venomous snakes can be challenging, but there are some general
      characteristics to look out for. Venomous snakes often have triangular-shaped heads, vertical pupils, and
      heat-sensing pits between their eyes and nostrils. However, these features may not apply to all venomous
      species, so it's best to exercise caution around all snakes.`
    },
    {
      id: 4,
      question: `What should I do if I'm bitten by a snake?`,
      answer: `If bitten by a snake, seek medical attention immediately, even if you're unsure whether the snake was
      venomous. Keep the affected limb immobilized and positioned below the level of the heart while awaiting
      medical help. Do not attempt to suck out the venom or apply tourniquets or ice packs, as these methods can
      worsen the situation.`
    },
    
    {
      id: 5,
      question: `How can I snake-proof my home or property?`,
      answer: `To minimize the risk of snake encounters, keep your surroundings clean and free of debris, as snakes are
      attracted to places where they can find food and shelter. Seal any gaps or openings in walls, floors, or
      ceilings, and remove potential hiding spots like piles of rocks or woodpiles. Additionally, consider
      installing snake-proof fencing around your property if you live in an area with high snake activity.`
    },

    {
      id: 6,
      question: `Are snakes protected in the Philippines?`,
      answer: `Yes, many snake species in the Philippines are protected by law to prevent their exploitation and ensure
      their conservation. It is illegal to capture, kill, or trade protected snake species without proper permits
      from the authorities.`
    },  
    {
      id: 7,
      question: `What is the significance of snakes in Philippine culture and mythology?`,
      answer: `Snakes hold a significant place in Philippine culture and mythology, often symbolizing various concepts such
      as fertility, rebirth, and protection. In indigenous Philippine belief systems, snakes are sometimes revered
      as spiritual beings or deities. They frequently appear in folklore, legends, and rituals, reflecting the deep
      connection between the Filipino people and their natural environment.`
    },
    {
      id: 8,
      question: `How can I safely observe snakes in their natural habitat?`,
      answer: `If you're interested in observing snakes in their natural habitat, it's essential to do so safely and
      respectfully. Consider joining guided nature tours or eco-trips led by knowledgeable guides who can provide
      insights into local snake species and their behaviors. Always maintain a safe distance from snakes and refrain
      from disturbing or harassing them for any reason.`
    },  
    {
      id: 9,
      question: `What are some common misconceptions about snakes?`,
      answer: `There are several common misconceptions about snakes, including the belief that all snakes are aggressive and
      pose an immediate threat to humans. In reality, most snakes prefer to avoid confrontation and will only strike
      if they feel threatened or cornered. Additionally, not all snakes are venomous, and many non-venomous species
      play essential roles in pest control and ecosystem balance.`
    },  
  ];

  const faqContEl = document.getElementById("faqCont");

  function createFAQEl(data) {
    const faqEl = document.createElement("div");
    faqEl.classList.add("faq");

    // Question Content
    const questionCont = document.createElement("div");
    questionCont.classList.add("questionCont");

    faqEl.appendChild(questionCont);

    const questionEl = document.createElement("div");
    questionEl.classList.add("question");
    const questionPara = document.createElement("p");
    questionPara.innerHTML = data.question;
    questionEl.appendChild(questionPara);

    // icon
    const iconEl = document.createElement("div");
    iconEl.classList.add("icon");
    const iconBtn = document.createElement("button");
    iconBtn.innerHTML = `<i class="fa-solid fa-chevron-down"></i>`;
    iconEl.appendChild(iconBtn);

    questionCont.appendChild(questionEl);
    questionCont.appendChild(iconEl);

    //   Answer Content
    const answerCont = document.createElement("div");
    answerCont.classList.add("answerCont");
    const answerEl = document.createElement("div");
    answerEl.classList.add("answer");
    const answerPara = document.createElement("p");
    answerPara.innerHTML = data.answer;

    answerEl.appendChild(answerPara);
    answerCont.appendChild(answerEl);
    faqEl.appendChild(answerCont);

    faqContEl.appendChild(faqEl);

    // Event listener
    questionCont.addEventListener("click", (e) => {
      const allFaq = document.querySelectorAll(".faqCont .faq");
      allFaq.forEach((item) =>
        item !== faqEl ? item.classList.remove("active") : false
      );

      faqEl.classList.toggle("active");

      createRipple(e);
    });

    // Ripple Effect

    function createRipple(pos) {
      let topPos = pos.clientY - faqEl.getBoundingClientRect().top;

      let leftPos = pos.clientX - faqEl.getBoundingClientRect().left;

      const spanEl = document.createElement("span");
      spanEl.classList.add("ripple");
      questionCont.appendChild(spanEl);
      spanEl.style.cssText = `height:1000px;
    width:1000px;background-color:#647dee33;
    position:absolute;transform:translate(-50%,-50%);border-radius:50%;opacity:1;
    animation:rippleEffect 1s ease-in-out;
    top:${topPos}px;
    left:${leftPos}px;
    opacity:0;
    `;

      spanEl.addEventListener("animationend", (e) => {
        spanEl.remove();
      });
    }
  }

  FAQQuestion.forEach((question) => {
    createFAQEl(question);
  });