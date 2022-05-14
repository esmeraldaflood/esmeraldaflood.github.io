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

  function showBiografys(e) {
    const element = document.querySelector(".biografy");

    if (element.style.display === "flex") {
      element.style.display = "none";
    } else {
      element.style.display = "flex";
    }
  }

  const bioBtn = document.querySelector(".bio-button");
  bioBtn.addEventListener("click", showBiografys);
};

//let openclose = [showBiografys(), closeBiografys()];

//bioBtn.addEventListener("click", closeBiografys);

const LANGUAGES = {
  english: {
    /*barra*/
    text_home: "Home",
    text_aboutAs: "About as",
    text_gallery: "Gallery",
    text_lessons: "Lessons",
    text_video: "Video",
    text_contact: "Contact",
    /*body*/
    text_title: "Meet our Tango",
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

    text_bioCris:
      "Was born in Viedma in 1981. Although there were no spaces in the city for the diffusion of tango, in 1991 his father, passionate about the culture of his country, took him to the home of the only dancer and teacher in the region, where, in a 2x2 room, he took his first steps, hooks and sacadas. <br>He was only ten years old! <br>A few years later he began his career as a dancer in Buenos Aires where he will settle down to take lessons. At eighteen he received a scholarship from the Fondo Nacional de las Artes to perfect himself in tango, being the only representative of his province. <br>This award allowed him to settle in Buenos Aires, where he was immediately incorporated into Miguel Ángel Zotto's 'Tango x 2 Company'. <br><br>From that moment on, he began his professional career, working with great artists including Maximiliano Guerra, performing and giving lessons in different places in the capital. For Cristian, dancing is not only a job: it is an artistic research, the continuous investigation that allows him to develop his own, intimate and innovative aesthetic. <br><br>Cristian, is a teacher and dancer who proposes the cultural identity of his country in the world: 'The Argentine tango'.",
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
    text_h3form: "Ask us for face-to-face and online classes",
    text_name: "Your name",
    text_email: "Your email",
    text_textareaForm: "I'm interested in the class...",
    text_buttonSend: "Send",
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
    text_video: "Video",
    text_contact: "Contacto",
    /*body*/
    text_title: "Conocé nuestro Tango",
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
    text_bioCris:
      "Nació en Viedma, en el año 1981. Si bien en la ciudad no existían espacios para la difusión del tango, por el año 1991 su padre lo llevó a la casa del único bailarín y profesor de la región, dónde, en una sala de 2x2 dio sus primeros pasos, ganchos y sacadas. <br><br>Tenía sólo diez años. Algunos años después comienza a viajar a Buenos Aires para tomar clases. <br><br>Pero fue a los dieciocho que recibió una beca del Fondo Nacional de las Artes para perfeccionarse en el tango, siendo el único representante de su provincia. <br><br>Éste premio le permitió radicarse en Buenos Aires, dónde inmediatamente fue incorporado a la Compañía 'Tango x 2', de Miguel Ángel Zotto. <br><br>Desde ese momento comenzó su carrera profesional, trabajando junto a grandes artistas  entre otros Maximiliano Guerra, presentándose se y dando clases en distintos escenarios de Buenos Aires. <br><br>Pero no se trata solamente de un trabajo, sino también de una búsqueda artística para el desarrollo de una estética propia, íntima e innovadora. <br><br>Cristian Bravo, maestro y bailarín brindando la identidad cultural de nuestro país alrededor del mundo: 'El tango argentino'.",

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
    text_name: "Tu nombre",
    text_email: "Tu email",
    text_h3form: " Consultanos por clases Presenciales y Online",
    text_textareaForm: "Me interesa la clase de..",
    text_buttonSend: "Enviar",
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
  changeUIText(".text_video", languageData.text_video),
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
  changeUIText(".text_bioCris", languageData.text_bioCris);
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
  changeUIText(".text_h3form", languageData.text_h3form);
  changeUIText(".text_name", languageData.text_name, "placeholder");
  changeUIText(".text_email", languageData.text_email, "placeholder");
  changeUIText(
    ".text_textareaForm",
    languageData.text_textareaForm,
    "placeholder"
  );
  changeUIText(".text_buttonSend", languageData.text_buttonSend, "value");
  changeUIText(".text_followUs", languageData.text_followUs);
  changeUIText(".text_followUs_p", languageData.text_followUs_p);
};

function changeUIText(selector, text, prop = "innerHTML") {
  // This only changes ONE element, we do NOT want it
  // document.querySelector(selector).innerHTML = text;

  // With querySelectorAll we can change all the elements text with the selector argument
  document.querySelectorAll(selector).forEach((element) => {
    element[prop] = text;
  });

  /* FORM
  //Syntax1:
  let name = form.elements[0];
  let username = name.value;

  function enviar() {
    let form = document.getElementById("theForm");
    var dato = form[0];
    if (dato.value == "enviar") {
      alert("Enviando el formulario");
      form.submit();
      return true;
    } else {
      alert("No se envía el formulario");
      return false;
    }
  }
  /*

  /*form*/
  /*
  const form = document.querySelector("#theForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("submitted");
  });
  */
  /*
  const $buttonMailTo = document.querySelector("#trucazo");

  const $form = document.querySelector("#theForm");
  $form.addEventListener("submit", handleSubmit);
  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(this);
    console.log(form.get("name"));
    $buttonMailTo.setAttribute('href', 'mailto:esmeraldamassaroli@gmail.com?subject&= ${form.get('name')}${form.get('email')}&body=${form.get('message')}';
    $buttonMailTo.click()
  }
  */

  /*
  function theBiografy(id) {
    document.getElementById(id).style.display = "flex";

  }
  */

  /*
  const abajo = document.querySelector(".abajo");
  abajo.addEventListener("click", masInfo);
  function masInfo() {
    alert("mas info");
    abajo.removeEventListener("click", abajo);
  }*/
}
