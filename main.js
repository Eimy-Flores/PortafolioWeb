let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #d84727;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #d84727;">Licenciada en sistemas computacionales admon.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
