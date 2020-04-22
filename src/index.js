const apps = [
  {
    title: "Brilliant Escape",
    desc: "<b>Brilliant Escape</b> is a 2D Arcade game made by Javedots Games where player *you must never let the bouncing square hit you otherwise you lose.",
    platform: "Android",
    src: "./pic/mobile/brilliant.webp",
    class: "mobile3",
    stacks: "Unity, C#, Google Admob",
    isgame: true,
    link: "https://play.google.com/store/apps/details?id=com.armando.Brilliant"
  },
  {
    title: "Codi Cooking Timer",

    desc: "<b>Codi Cooking Timer</b> Is an cooking assitant, a place to save recipes and have a quick stepthrought cooking feature.",
    platform: "Android",
    src: "./pic/mobile/codicook.webp",
    stacks: "Python, Kivy",
    class: "mobile1",
    isgame: false,
    link: "https://play.google.com/store/apps/details?id=cc.test.codi"
  },
  {
    title: "Budgetboy Lite: Quick Budgeting",
    desc: "<b>Budgetboy</b> is An Easy way to manage a occational budget for quick, also you will find more functions with will help u get more sophisticated use of it.",
    platform: "Android",
    src: "./pic/mobile/budgetboy.jpg",
    stacks: "Java, Android Studio, XML",
    class: "mobile2",
    isgame: false,
    link: "https://play.google.com/store/apps/details?id=com.devindie.budgetmanager"
  },
  {
    title: "Prepmile: Steps Cooking",
    desc: "<b>Prepmile</b> This is a project am working right now this is just a preview over a design i got.",
    platform: "Not published",
    src: "./pic/mobile/prepmile.jpg",
    stacks: "Adobe XD",
    class: "mobile0",
    isgame: false,
    link: "https://xd.adobe.com/view/a0ef51a0-b6b3-4067-66a4-5c86cb746e73-d6de/"

  },
  {
    title: "MDM Sample",
    desc: "Just a sample over MDM done in laravel.",
    platform: "Not published",
    src: "./pic/web/Group 2.png",
    stacks: "Php, Laravel, Javascript, Bootstrap",
    class: "web0",
    link: "https://appfuturo.dixlater.com/",
    isgame: false,
  },
  {
    title: "Startpress Gaming MEdia",
    desc: "This was going to be something i was gonna do with some IGDB developer api but that got as far as i knew how GOOD was theyr service.",
    platform: "Web",
    stacks: "HTML/CSS, Javascript, Bootstrap",
    src: "./pic/web/Group 3.png",
    link: "https://sotoarmando.github.io/StartpressMedia/dist/index.html",
    class: "web0",
    isgame: false,
  },
  {
    title: "Odin Battleships",
    desc: "<b>Battleships</b> Is a sample TDD project of the odin-project curriculum. set up your places and battle!",
    platform: "Web",
    stacks: "HTML/CSS, Javascript",
    src: "./pic/web/Group 1.png",
    class: "web0",
    isgame: true,
    link: "https://sotoarmando.github.io/odin-battleships/dist/index.html"
  },
]

let interval = setInterval(() => {
  const states = ['visible','toggled','hidden'];
  const ele =document.querySelector(".device-0");
  const state = ele.classList[1];
  const next = (states.indexOf(state) + 1) % 3;
  console.log(next)
  ele.classList.remove(state)
  ele.classList.add(states[next])
},1000)