
var elemento = document.getElementById("saludos");

document.addEventListener("click", function(evento) {
  if (elemento.style.display !== "none" && evento.target !== elemento) {
    elemento.classList.add("ocultar");
  }
});



var sections = document.querySelectorAll('section[id$="-content"]');


sections.forEach(function(section) {
  section.style.display = 'none';
});


var links = document.querySelectorAll('a[id^="sobre_mi"], a[id^="experiencia"], a[id^="habilidades"], a[id^="contacto"]');


links.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault(); 
    var sectionId = this.id.replace('-link', ''); 
    var section = document.getElementById(sectionId + '-content'); 
    if (section.style.display === 'none') { 
      sections.forEach(function(section) { 
        section.style.display = 'none';
      });
      section.style.display = 'block'; 
    } else { 
      section.style.display = 'none'; 
    }
  });
});




