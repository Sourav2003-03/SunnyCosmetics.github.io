

const menubtn = document.querySelector('#menu-btn');
const closebtn = document.querySelector('#close-btn');
const menu = document.querySelector('nav .container ul')

menubtn.addEventListener('click',()=>{
  menu.style.display='block';
  menubtn.style.display='none';
  closebtn.style.display='inline-block';
  toggleClass(menu, "hide");

})

closebtn.addEventListener('click',()=>{
  menu.style.display='none';
  menubtn.style.display='inline-block';
  closebtn.style.display='none';
  toggleClass(menu, "hide");

})


const navitems = document.querySelectorAll('nav ul li ');

// Removing active class from each nav items

const removeActive = () =>{
  navitems.forEach(item => {
    const link = item.querySelector('a');
    link.classList.remove('active')
  })
}

// Adding active class to each nav items

navitems.forEach(item => {
  const link = item.querySelector('a');
  link.addEventListener('click', ()=>{
    removeActive();
    link.classList.add('active')
  })
})

const faqs = document.querySelectorAll('section#faqs article');

faqs.forEach(faq =>{
  faq.addEventListener('click',()=>{
    faq.classList.toggle('open');
    const Icon = faq.querySelector('.icon i');
    if(Icon.className == 'uil uil-plus'){
      Icon.className = 'uil uil-minus'
    } else {
      Icon.className = 'uil uil-plus';
    }
  })
})


// navbar background color changing on scrolling on y-axis

window.addEventListener('scroll',()=>{
  document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>0);
})