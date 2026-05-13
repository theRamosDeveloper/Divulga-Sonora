// LOADING
window.addEventListener("load", ()=>{

  document.querySelector(".loader")
  .classList.add("hide");

});

// MENU MOBILE
const hamburger = document.querySelector(".hamburger");
const menuContainer = document.querySelector(".menu-container");

hamburger.addEventListener("click", ()=>{

  menuContainer.classList.toggle("active");

});

// FECHAR MENU AO CLICAR
document.querySelectorAll(".menu a").forEach(link=>{

  link.addEventListener("click", ()=>{

    menuContainer.classList.remove("active");

  });

});

// FAQ
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

  const question = item.querySelector(".faq-question");

  question.addEventListener("click", ()=>{

    item.classList.toggle("active");

  });

});

// SCROLL REVEAL
const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = ()=>{

  reveals.forEach(element=>{

    const windowHeight = window.innerHeight;
    const revealTop = element.getBoundingClientRect().top;

    if(revealTop < windowHeight - 100){

      element.classList.add("show");

    }

  });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// HEADER EFEITO
window.addEventListener("scroll", ()=>{

  const header = document.querySelector(".header");

  if(window.scrollY > 50){

    header.style.background = "#000";

  }else{

    header.style.background = "rgba(0,0,0,.7)";

  }

});

// FORMULÁRIO
const form = document.querySelector(".contact-form");

form.addEventListener("submit",(e)=>{

  e.preventDefault();

  alert(
    "Solicitação enviada com sucesso! Em breve entraremos em contato."
  );

});
