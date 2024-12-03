/* empty css                                 */
import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute, a as createAstro } from '../chunks/astro/server_XPotyUtQ.mjs';
import 'kleur/colors';
import { $ as $$Container, a as $$Layout } from '../chunks/Layout_D58A5twf.mjs';
import { $ as $$Topic } from '../chunks/Topic_xu_TD72N.mjs';
import { $ as $$Team } from '../chunks/Team_Bjw5C5c6.mjs';
import 'clsx';
/* empty css                                 */
import { c as caseStudies } from '../chunks/caseStudies_BYqJzhyx.mjs';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative flex flex-col-reverse items-center md:flex-row" id="hero"> <div class="row items-center py-5 md:w-6/12 md:pb-20 md:pt-10"> <div class="text-left space-y-3"> <h1 class="text-5xl font-medium leading-none md:text-6xl text-center md:text-left">Navigating the <br> digital landscape <br> for success</h1> <p class="mt-6 mb-8  text-xl font-normal leading-7 sm:mb-12 text-center md:text-left">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p> <div class="w-full justify-center md:justify-start items-center inline-flex"> <a href="https://calendly.com/achraf-xchahid/30min" target="_blank" class="px-8 py-5 bg-zinc-900 hover:bg-white rounded-2xl text-center text-white hover:text-black border text-xl font-normal leading-7">Book a consultation
</a> </div> </div> </div> <div class="flex items-center py-5 md:w-6/12 md:pb-20 md:pt-10"> <img src="/Hero.svg" width="100%" alt="Hero"> </div> </div> <div class="flex-row items-center"> <div class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6"> <div class="p-4 grayscale transition duration-200 hover:grayscale-0"> <img src="./clients/01.svg" class="h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="" height=""> </div> <div class="p-4 grayscale transition duration-200 hover:grayscale-0"> <img src="./clients/02.svg" class="h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="" height=""> </div> <div class="p-4 flex grayscale transition duration-200 hover:grayscale-0"> <img src="./clients/03.svg" class="h-9 w-auto m-auto" loading="lazy" alt="client logo" width="" height=""> </div> <div class="p-4 grayscale transition duration-200 hover:grayscale-0"> <img src="./clients/04.svg" class="h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="" height=""> </div> <div class="p-4 flex grayscale transition duration-200 hover:grayscale-0"> <img src="./clients/05.svg" class="h-8 w-auto m-auto" loading="lazy" alt="client logo" width="" height=""> </div> <div class="p-4 grayscale transition duration-200 hover:grayscale-0"> <img src="./clients/06.svg" class="h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="" height=""> </div> </div> </div> ` })}`;
}, "C:/Users/AXH/Documents/my-site/zab-media/mustmedia/src/components/Hero.astro", void 0);

const servicesData = [
	{
		id: 1,
		name1: "Search engine",
		name2: "optimization",
		background: "h-[310px] p-12 bg-zinc-100 rounded-[45px] shadow-card border border-black justify-between items-center flex text-black",
		arrow: "./services/ag.svg",
		link: "./",
		image: "./services/01.svg"
	},
	{
		id: 2,
		name1: "Pay-per-click",
		name2: "advertising",
		background: "h-[310px] p-12 bg-zime-44 rounded-[45px] shadow-card border border-black justify-between items-center flex text-black",
		arrow: "./services/ag.svg",
		link: "./",
		image: "./services/02.svg"
	},
	{
		id: 3,
		name1: "Social Media",
		name2: "Marketing",
		background: "h-[310px] p-12 bg-black rounded-[45px] shadow-card border border-black justify-between items-center flex text-white",
		arrow: "./services/aw.svg",
		link: "./",
		image: "./services/03.svg"
	},
	{
		id: 4,
		name1: "Email",
		name2: "Marketing",
		background: "h-[310px] p-12 bg-zinc-100 rounded-[45px] shadow-card border border-black justify-between items-center flex text-black",
		arrow: "./services/ag.svg",
		link: "./",
		image: "./services/04.svg"
	},
	{
		id: 5,
		name1: "Content",
		name2: "Creation",
		background: "h-[310px] p-12 bg-zime-44 rounded-[45px] shadow-card border border-black justify-between items-center flex text-black",
		arrow: "./services/ag.svg",
		link: "./",
		image: "./services/05.svg"
	},
	{
		id: 6,
		name1: "Analytics and",
		name2: "Tracking",
		background: "h-[310px] p-12 bg-black rounded-[45px] shadow-card border border-black justify-between items-center flex text-white",
		arrow: "./services/aw.svg",
		link: "./",
		image: "./services/06.svg"
	}
];

const $$Services = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative flex flex-col items-center md:flex-row" id="services"> ${renderComponent($$result2, "Topic", $$Topic, { "title": "Our Services", "description": "Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation" })}</div> <div class="flex-row items-center py-5"> <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4"> <!-- card start--> ${servicesData.map(({ background, name1, name2, arrow, link, image }) => renderTemplate`<div${addAttribute(background, "class")}> <div class="flex-col justify-center items-start gap-[93px] inline-flex"> <div class="flex-col justify-start items-start flex"> <div class="px-[7px] bg-zime-555 rounded-[7px] flex-col justify-start items-start gap-2.5 flex"> <div class=" text-3xl font-medium">${name1}</div> </div> <div class="px-[7px] bg-zime-555 rounded-[7px] flex-col justify-start items-start gap-2.5 flex"> <div class="text-3xl font-medium">${name2}</div> </div> </div> <a class="justify-start items-center gap-[15px] inline-flex"${addAttribute(link, "href")}> <div class="w-[41px] h-[41px] relative"> <img class="w-[41px] h-[41px] left-0 top-0 absolute"${addAttribute(arrow, "src")}> </div> <div class="text-xl font-normal leading-7">Learn more</div> </a> </div> <div class="w-[210px] h-[170px] pt-0.5 pb-[1.95px] justify-center items-center flex"> <img class="hidden md:block"${addAttribute(image, "src")}> </div> </div>`)} <!-- card end--> </div> </div> <div class="flex-row items-center my-6 p-14 bg-zinc-100 rounded-[45px]"> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <div class="justify-start items-center gap-[275px] flex"> <div class="flex-col justify-start items-start gap-[26px] inline-flex text-black"> <div class="text-3xl font-medium">Let’s make things happen</div> <div class="text-lg font-normal">Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</div> <a href="/" class="px-[35px] py-5 bg-zinc-900 hover:bg-zime-555 text-white hover:text-black border rounded-[14px] justify-start items-start gap-2.5 inline-flex"> <div class="text-center text-xl font-normal leading-7">Get your free proposal</div> </a> </div> </div> <div class="hidden md:grid justify-items-center -m-20"> <img src="/services/Illustration.svg" width="50%" alt="cat"> </div> </div> </div> ` })}`;
}, "C:/Users/AXH/Documents/my-site/zab-media/mustmedia/src/components/Services.astro", void 0);

const $$SwiperSlider = createComponent(($$result, $$props, $$slots) => {
  const slides = [
    { index: 1, name: "rami dokran", description: "Ceo at digisol" },
    { index: 2, name: "Ana Banana", description: "dierector at win" },
    {
      index: 3,
      name: "hamza salmi",
      description: "co-founder at alopastila"
    },
    { index: 4, name: "samir jalal", description: "Marketing dierector at lydec" },
    { index: 5, name: "amine chraibi", description: "superviseur at MD9" }
  ];
  return renderTemplate`${maybeRenderHead()}<div id="ProjectSlider" class="swiper mt-10"${addAttribute({
    "--swiper-pagination-color": "#B9FF66",
    "--swiper-pagination-bullet-inactive-color": "#fff",
    "--swiper-pagination-bullet-inactive-opacity": "1",
    "--swiper-pagination-bullet-size": "19px",
    "--swiper-pagination-bullet-horizontal-gap": "10px"
  }, "style")} data-astro-cid-g42mys5r> <div class="swiper-wrapper mt-[84px] mb-[124px]" data-cursor="swipe" data-astro-cid-g42mys5r> ${slides.map((slide) => renderTemplate`<div class="swiper-slide text-white flex flex-col" role="group"${addAttribute(`${slide.index} / ${slides.length}`, "aria-label")} data-astro-cid-g42mys5r> <div class="flex flex-col justify-center items-center py-[48px] px-6 sm:px-[52px]" data-astro-cid-g42mys5r> <p class="bubble" data-astro-cid-g42mys5r>
"We have been working with Mustmedia for the past year and have
              seen a significant increase in website traffic and leads as a
              result of their efforts. The team is professional, responsive, and
              truly cares about the success of our business. We highly recommend
              Mustmedia to any company looking to grow their online presence."
</p> </div> <div class="w-full px-10 sm:px-20 " data-astro-cid-g42mys5r> <div class="text-zime-44 text-base md:text-xl font-medium" data-astro-cid-g42mys5r>${slide.name}</div> <div data-astro-cid-g42mys5r>${slide.description}</div> </div> </div>`)} </div> <div class="flex justify-around lg:justify-center mb-[68px] lg:gap-[189px]" data-astro-cid-g42mys5r> <div class="swiper-button-prev w-7 h-7 sm:w-10 sm:h-10" data-astro-cid-g42mys5r> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-astro-cid-g42mys5r><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> <path fill="#ffffff" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" data-astro-cid-g42mys5r></path></svg> </div> <div class="swiper-pagination" data-astro-cid-g42mys5r></div> <div class="swiper-button-next w-7 h-7 sm:w-10 sm:h-10 rotate-180" data-astro-cid-g42mys5r> <svg xmlns="http://www.w3.org/2000/svg " viewBox="0 0 448 512" data-astro-cid-g42mys5r>!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.
<path fill="#ffffff" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" data-astro-cid-g42mys5r></path></svg> </div> </div> </div>  `;
}, "C:/Users/AXH/Documents/my-site/zab-media/mustmedia/src/components/SwiperSlider.astro", void 0);

const $$Testimonial = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative flex flex-col items-center md:flex-row"> ${renderComponent($$result2, "Topic", $$Topic, { "title": "Testimonials", "description": "Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services" })} </div> <div class="rounded-[45px] bg-black mb-[150px] text-white"> ${renderComponent($$result2, "SwiperSlider", $$SwiperSlider, {})} </div> ` })}`;
}, "C:/Users/AXH/Documents/my-site/zab-media/mustmedia/src/components/Testimonial.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative flex flex-col items-center md:flex-row"> ${renderComponent($$result2, "Topic", $$Topic, { "title": "Contact", "description": "Connect with Us: Let's Discuss Your Digital Marketing Needs" })} </div> <div class="relative flex flex-col items-center md:flex-row my-6 bg-zinc-100 rounded-[45px]"> <div class="row items-center py-12 px-4 md:px-20 md:w-8/12 md:py-10"> <form action="#" class="space-y-8 md:w-full"> <div class="flex"> <div class="flex items-center me-4"> <input id="inline-radio" type="radio" value="" name="inline-radio-group" class="w-4 h-4 text-zime-44 bg-black border-black focus:ring-zime-44"> <label for="inline-radio" class="ms-2 text-base font-medium text-black">Say Hi</label> </div> <div class="flex items-center me-4 mx-8 md:mx-20"> <input id="inline-2-radio" type="radio" value="" name="inline-radio-group" class="w-4 h-4 text-zime-44 bg-black border-black focus:ring-zime-44"> <label for="inline-2-radio" class="ms-2 text-base font-medium text-black">Get a Quote</label> </div> </div> <div> <label for="email" class="block mb-2 text-base font-medium text-black">Name</label> <input type="email" id="email" class="shadow-sm bg-white border text-black text-base rounded-lg focus:ring-black focus:border-black block w-full p-2.5" placeholder="Name" required> </div> <div> <label for="subject" class="block mb-2 text-base font-medium text-black">Email</label> <input type="text" id="subject" class="block p-3 w-full text-base text-black bg-white rounded-lg border shadow-sm focus:ring-black focus:border-black" placeholder="Email" required> </div> <div class="sm:col-span-2"> <label for="message" class="block mb-2 text-base font-medium text-black dark:text-gray-400">Message</label> <textarea id="message" rows="6" class="block p-2.5 w-full text-base text-black bg-white rounded-lg shadow-sm border focus:ring-black focus:border-black" placeholder="Message"></textarea> </div> <button type="submit" class="w-full py-5 bg-zinc-900 rounded-[14px] justify-center gap-2.5 inline-flex"> <div class="text-center text-white text-xl font-normal leading-7">Send Message</div> </button> </form> </div> <div class="hidden md:grid md:justify-items-end md:w-4/12 md:py-2"> <img src="./clients/contact.svg" alt="c" width="80%"> </div> </div> ` })}`;
}, "C:/Users/AXH/Documents/my-site/zab-media/mustmedia/src/components/Contact.astro", void 0);

const $$Case = createComponent(($$result, $$props, $$slots) => {
  const featuredCases = caseStudies.slice(0, 3);
  return renderTemplate`${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative flex flex-col items-center md:flex-row" id="projects"> ${renderComponent($$result2, "Topic", $$Topic, { "title": "Case Studies", "description": "Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies" })} </div> <div class="w-full p-12 bg-zinc-900 rounded-[45px] justify-start items-start gap-16 inline-flex text-white"> <div class="grid grid-cols-1 md:grid-cols-3 gap-2 divide-x-0 md:divide-x divide-y md:divide-y-0"> ${featuredCases.map((study) => renderTemplate`<div class="flex-col items-start gap-5 inline-flex px-2 md:px-6 py-6 md:py-2"> <div class="w-full text-lg font-normal">${study.description}</div> <a${addAttribute(`/case-studies/${study.id}`, "href")} class="justify-start items-center gap-[15px] inline-flex hover:text-zime-44 transition-colors"> <div class="text-zime-44 text-xl font-normal leading-7">En savoir plus</div> <img src="/services/agc.svg" alt="arrow"> </a> </div>`)} </div> </div> ` })}`;
}, "C:/Users/AXH/Documents/my-site/zab-media/mustmedia/src/components/Case.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<!-- Mustmedia Official Astro theme -->${renderComponent($$result, "Layout", $$Layout, { "title": "Mustmedia" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="space-y-20"> ${renderComponent($$result2, "Hero", $$Hero, { "data-aos": "fade-up" })} ${renderComponent($$result2, "Services", $$Services, { "data-aos": "fade-up" })} ${renderComponent($$result2, "Case", $$Case, { "data-aos": "fade-up" })} ${renderComponent($$result2, "Team", $$Team, { "data-aos": "fade-up" })} ${renderComponent($$result2, "Testimonial", $$Testimonial, { "data-aos": "fade-up" })} ${renderComponent($$result2, "Contact", $$Contact, { "data-aos": "fade-up" })} </main> ` })}`;
}, "C:/Users/AXH/Documents/my-site/zab-media/mustmedia/src/pages/index.astro", void 0);

const $$file = "C:/Users/AXH/Documents/my-site/zab-media/mustmedia/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
