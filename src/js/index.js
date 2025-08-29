
/* The code snippet you provided is setting up a scroll event listener in JavaScript. Here's a
breakdown of what it does: */
const header = document.getElementById("header");
const alturaTrigger = 50; 

window.addEventListener("scroll", function() {
    if(window.scrollY > alturaTrigger){
        // cuando bajamos más de 50px
        header.classList.add("bg-gradient-to-r", "from-[#984300]", "via-[#FD6F00]", "to-[#CA5900]", "shadow-lg", "shadow-[#fd6e008c]");
    } else {
        // cuando estamos en la parte superior
        header.classList.remove("bg-gradient-to-r", "from-[#984300]", "via-[#FD6F00]", "to-[#CA5900]", "shadow-lg", "shadow-[#fd6e008c]");
    }
});


//animacion sobre mi
const animacionMi = document.querySelectorAll("[animacion-sobre-mi]")
function animatedMi(entries) {
    for (const element of entries) {
        let entrada = element
        if (entrada.isIntersecting) {
            entrada.target.classList.add(
                "animate__animated", "animate__fadeInTopLeft"
            )
            entrada.target.classList.remove("opacity-0")
            obser.unobserve(entrada.target);
        }
    }
}
let obser = new IntersectionObserver(animatedMi, { threshold: 0.1 });
for (let el of animacionMi) {
    obser.observe(el);
}

//animacion de sobre mi parrafo
function handleIntersect(arrayEntradas) {
    for (const element of arrayEntradas) {
        let entrada = element;

        if (entrada.isIntersecting) {
            entrada.target.classList.add(
                "animate-fade-left",
                "animate-once",
                "animate-delay-100",
                "animate-ease-in"
            );
            entrada.target.classList.remove("opacity-0");
        } else {
            entrada.target.classList.remove(
                "animate-fade-left",
                "animate-once",
                "animate-delay-100",
                "animate-ease-in"
            );
        }
    }
}
var observer = new IntersectionObserver(handleIntersect);
var eleme = document.querySelectorAll("[parrado-animado]");
for (var ele of eleme) {
    observer.observe(ele);
}

//animacion de skills
var elements = document.querySelectorAll("[animated-skill]");
var observ = new IntersectionObserver(function (entries, obs) {
    for (var entry of entries) {
        if (entry.isIntersecting) {
            var index = Array.prototype.indexOf.call(elements, entry.target);
            console.log(index)
            var delay = (index + 1) * 100;

            entry.target.classList.add(
                "animate-fade-left",
                "animate-duration-100"
            );
            entry.target.style.animationDelay = delay + "ms";
            entry.target.classList.remove("opacity-0");
        } else {
            entry.target.classList.remove(
                "animate-fade-left",
                "animate-duration-100"
            )
            entry.target.classList.add(
                "opacity-0"
            )
        }
    }
}, { threshold: 0.2 });
for (var el of elements) {
    observ.observe(el);
}

//contador de proyectos
const spanProyectos = document.querySelector("#contador-proyectos")
const proyectos = document.querySelectorAll("#proyectos-list")
spanProyectos.innerHTML = proyectos.length
