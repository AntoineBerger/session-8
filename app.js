var app = new Vue({
  el: '#app',
  data: {
    firstName: "Antoine",
    lastName: "Berger",
    description: "Je suis étudiant à l'école de journalisme de Sciences Po.",
    photo: "",
    twitter: "Ant_Berger",
    github: "AntoineBerger",
    mail: "antoine.bgr@gmail.com",
    experiences: [{
      dateBegin: "2014",
      dateEnd: "Today",
      name: "Pôle Nature, Mondadori",
      title: "Collaborateur pigiste",
      logo: "http://snj-paris-idf.org/wp-content/uploads/logo-mondadori.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }, {
      dateBegin: "Été 2017",
      dateEnd: false,
      name: "Le Berry républicain",
      title: "Journaliste",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }, {
      dateBegin: "Janvier 2017",
      dateEnd: false,
      name: "La Revue nationale de la chasse / Grand Gibier, Mondadori",
      title: "Stagiaire",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }],
    formations: [{
      dateBegin: "2016",
      dateEnd: "Today",
      name: "Master Journalisme",
      university: "École de journalisme de Sciences Po, Paris"
    }, {
      dateBegin: "2013",
      dateEnd: "2016",
      name: "Licence d'histoire",
      university: "Université d'Orléans"
    }],
    languages: ["Anglais"],
    skills: ["Adobe Premiere", "Adobe Audition", "Adobe Lightroom"]
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName
    }
  }
})