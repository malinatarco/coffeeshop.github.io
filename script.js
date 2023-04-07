//Pentru navigarea ecran mic

const nav = document.getElementById('nav');
const btn = document.getElementById('toggle');

btn.addEventListener('click', () =>{
    nav.classList.toggle('active');
});

//Pentru ca imaginea sa se mareasca la scroll

const image = document.getElementById('myImg');
const section = document.getElementById('left-section');

window.addEventListener('scroll', verifyHeight);

function verifyHeight(){
    const trigger = window.innerHeight / 5 * 4;
    const sectionHeight = section.getBoundingClientRect().top;
    if(sectionHeight < trigger){
        image.classList.add('wide-img');
    }
}


//Pentru galeria foto - pagina about

const sliderOutside = document.querySelector('.slider-outside');
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let activeSlide = 0;

rightBtn.addEventListener('click', () =>{
    activeSlide++;
    if(activeSlide > slides.length-1){
        activeSlide = 0;
    }
    setBg();
    setActiveSlide();
});

leftBtn.addEventListener('click', () =>{
    activeSlide--;
    if(activeSlide < 0){
        activeSlide = slides.length-1;
    }
    setBg();
    setActiveSlide();
});

setBg();

function setBg(){
    sliderOutside.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide(){
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    slides[activeSlide].classList.add('active');
}

//Pentru testimoniale

const testimonialContainer = document.querySelector('.testimonial-container');
const testimonial = document.querySelector('.testimonial');
const username = document.querySelector('.username');

const testimonials = [
    {
        name: 'Sonya',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, modi facilis harum ratione molestias itaque dolores vero animi fuga quasi tempore quam fugit assumenda ipsam provident? Dicta commodi, quas neque corrupti exercitationem iste sed adipisci ea, ipsum quia iusto dolore! Libero molestiae accusamus nemo tempore odio obcaecati cumque, incidunt reprehenderit!',
    },

    {
        name: 'Ella',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ea, a reiciendis fuga dignissimos sed quaerat, placeat neque natus mollitia totam soluta ipsam, eum quas.',
    },

    {
        name: 'Alex',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque et laborum quia porro explicabo perferendis dolor exercitationem blanditiis amet tempore incidunt, est vitae vel distinctio, nobis atque quasi? Qui, cum vero! Excepturi blanditiis a dolor.',
    },

    {
        name: 'Allie',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis beatae a iste laudantium explicabo, fugiat ducimus corporis ullam, dolore debitis molestias maiores accusantium nam quia? Assumenda, fuga cumque.',
    },

    {
        name: 'Chris',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos fugit sunt sapiente molestiae saepe iure totam non numquam officiis dolorem odio ipsam, porro, eius necessitatibus rem cupiditate ab eveniet soluta voluptate, quo assumenda! Rem dolor quod explicabo, perferendis vel porro soluta aut nihil molestias perspiciatis enim iure a asperiores quam!',
    },

    {
        name: 'Donna',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo sint tempora beatae, itaque officiis enim nesciunt aliquam perferendis doloribus fuga cum ea animi eum aspernatur atque omnis sed. Incidunt sit omnis ab explicabo ex? Adipisci, nobis repudiandae.',
    },
];

let current = -1;
change();

function change(){
    current++;
    if(current > testimonials.length-1){
        current = 0;
    }

    const {name, text} = testimonials[current];
    testimonial.innerHTML = text;
    username.innerHTML = name;

}

setInterval(change, 10000);

