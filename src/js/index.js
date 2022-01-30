window.onload = function () {
  loadTexts("english");

  // Loads the language buttons callbacks
  const englishBtn = document.querySelector(".english-language-btn");
  const spanishBtn = document.querySelector(".spanish-language-btn");

  spanishBtn.addEventListener("click", () => {
    loadTexts("spanish");
  });
  englishBtn.addEventListener("click", () => {
    loadTexts("english");
  });
};

const LANGUAGES = {
  english: {
    /*barra*/
    text_home: "Home",
    text_aboutAs: "About as",
    text_gallery: "Gallery",
    text_lessons: "Lessons",
    text_contact: "Contact",
    /*body*/
    text_title: "Meet our dance",
    text_subtitlemain:
      "We love tango from the cradle. We carry it in our blood and we look for it all our lives. We are fortunate to share all our knowledge with our students who often become friends. Any person interested in the depth of tango and its mysteries is welcome.",

    text_aboutAs: "Our history",
    text_weMetIn: "We met at...",
    text_weMetIn_p:
      "..in 2016, to compete together in the Tango World Cup, and we fell in love, we have been a couple ever since.",
    text_tours: "Tours",
    text_tours_p:
      "We travel through Europe and the United States sharing our passion for tango and the close embrace.",
    text_championships: "Championships",
    text_championships_p:
      "We came out 9th in the Metropolitan Tango Championship in 2017, we danced separately in Señor Tango and Homero Manzi until the start of the Pandemic.",
    text_lessonsOf: "Classes of..",
    text_lessonsTango: "Tango",
    text_lessonsTango_p:
      "We work on the comfortable embrace, connection and communication. The body technique; improvisation; the different dynamics.",
    text_milonga: "Milonga",
    text_milonga_p:
      "Milonga technique, musicality, body preparation. Leg freedom.",
    text_vals: "Vals",
    text_vals_p:
      "The circularity and elegance of the movements. Steps and rhythm of the Waltz.",
    text_stage: "Stage",
    text_stage_p: "Stage Tango sequences, choreography, stage technique.",
    text_femaleTechnique: "Female Technique",
    text_femaleTechnique_p:
      "Feminine Adornments and Foot Games In these classes we will prepare the body, relax and tone what is necessary to improve our body awareness, mainly recognizing axis and center in order to move quickly and easily. ",
    text_maleTechnique: "Male Technique",
    text_maleTechnique_p:
      "We work the technique that allows each student's personality and freedom of expression to show off. Direct, cutting, determined movements; musicality; Applicable decorations.",
    text_followUs: "Follow us on the networks",
    text_followUs_p: "and be part of our art",
  },

  spanish: {
    /*barra*/
    hello: "hola",
    text_home: "Inicio",
    text_aboutAs: "Sobre nosotros",
    text_gallery: "Galería",
    text_lessons: "Clases",
    text_contact: "Contacto",
    /*body*/
    text_title: "Conocé nuestro baile",
    text_subtitlemain:
      "Amamos al tango desde la cuna. Lo llevamos en la sangre y lo buscamos toda la vida. Somos afortunados de compartimos todo nuestro conocimiento con nuestros alumnos que suelen volverse amigos. Toda persona interesada en la profundidad del tango y sus misterios es bienvenido.",
    text_ourHistory: "Nuestra historia",
    text_weMetIn: "Nos conocimos en...",
    text_weMetIn_p:
      "..el 2016, para competir juntos en el Mundial de Tango, y formamos pareja desde entonces.",
    text_tours: "Giras",
    text_tours_p:
      "Viajamos por Europa y Estados Unidos compartiendo nuestra pasion por el tango y el abrazo cerrado.",
    text_championships: "Campeonatos",
    text_championships_p:
      "Salimos 9nos en el Campeonato Metropolitano de Tango en el 2017, bailamos por separado en Señor Tango y Homero Manzi hasta el comienzo de la Pandemia.",
    text_lessonsOf: "Clases de..",
    text_lessonsTango: "Tango",
    text_lessonsTango_p:
      "Trabajamos el abrazo confortable, la conexión y comunicación. La técnica corporal; la improvisación; las diferentes dinámicas.",
    text_milonga: "Milonga",
    text_milonga_p:
      "Técnica de milonga, musicalidad, preparación corporal. Libertad de piernas.",
    text_vals: "Vals",
    text_vals_p:
      "La circularidad y elegancia de los movimientos. Pasos y ritmica del Vals.",
    text_stage: "Escenario",
    text_stage_p:
      "Secuencias de Tango Escenario, coreografías, técnica escenica.",
    text_femaleTechnique: "Técnica Femenina",
    text_femaleTechnique_p:
      "Adornos Femeninos y Juegos de pies, prepararemos el cuerpo, tonificaremos para mejorar nuestra conciencia corporal, reconociendo principalmente eje y centro para así poder movernos con rapidez y soltura. La Musicalidad en el Tango, explorando todos los tiempos para añadir a nuestro baile Juegos de pies de toda clase.",
    text_maleTechnique: "Técnica Masculina",
    text_maleTechnique_p:
      "Trabajamos la técnica que permite lucir la personalidad y libertad de expresion de cada estudiante. Movimientos directos, cortantes, decididos; musicalidad; adornos aplicables.",
    text_followUs: "Seguinos en las redes",
    text_followUs_p: "y se parte de nuestro arte",
  },
};

window.loadTexts = function (language) {
  const languageData = LANGUAGES[language];

  changeUIText(".text_home", languageData.text_home);
  changeUIText(".text_aboutAs", languageData.text_aboutAs);
  changeUIText(".text_gallery", languageData.text_gallery);
  changeUIText(".text_lessons", languageData.text_lessons);
  changeUIText(".text_contact", languageData.text_contact);
  changeUIText(".text_title", languageData.text_title);
  changeUIText(".text_subtitlemain", languageData.text_subtitlemain);
  changeUIText(".text_ourHistory", languageData.text_ourHistory);
  changeUIText(".text_weMetIn", languageData.text_weMetIn);
  changeUIText(".text_weMetIn_p", languageData.text_weMetIn_p);
  changeUIText(".text_tours", languageData.text_tours);
  changeUIText(".text_tours_p", languageData.text_tours_p);
  changeUIText(".text_championships", languageData.text_championships);
  changeUIText(".text_championships_p", languageData.text_championships_p);
  changeUIText(".text_lessonsOf", languageData.text_lessonsOf);
  changeUIText(".text_lessonsTango", languageData.text_lessonsTango);
  changeUIText(".text_lessonsTango_p", languageData.text_lessonsTango_p);
  changeUIText(".text_milonga", languageData.text_milonga);
  changeUIText(".text_milonga_p", languageData.text_milonga_p);
  changeUIText(".text_vals", languageData.text_vals);
  changeUIText(".text_vals_p", languageData.text_vals_p);
  changeUIText(".text_stage", languageData.text_stage);
  changeUIText(".text_stage_p", languageData.text_stage_p);
  changeUIText(".text_femaleTechnique", languageData.text_femaleTechnique);
  changeUIText(".text_femaleTechnique_p", languageData.text_femaleTechnique_p);
  changeUIText(".text_maleTechnique", languageData.text_maleTechnique);
  changeUIText(".text_maleTechnique_p", languageData.text_maleTechnique_p);
  changeUIText(".text_followUs", languageData.text_followUs);
  changeUIText(".text_followUs_p", languageData.text_followUs_p);
};

function changeUIText(selector, text) {
  // This only changes ONE element, we do NOT want it
  // document.querySelector(selector).innerHTML = text;

  // With querySelectorAll we can change all the elements text with the selector argument
  document.querySelectorAll(selector).forEach((element) => {
    element.innerHTML = text;
  });
}
