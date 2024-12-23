import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as createAstro, b as renderComponent } from './astro/server_XPotyUtQ.mjs';
import 'kleur/colors';
import { $ as $$Container } from './Layout_D58A5twf.mjs';
import { $ as $$Topic } from './Topic_xu_TD72N.mjs';
import 'clsx';

const team = [
	{
		title: "Brand Strategist",
		name: "Achraf Chahid",
		description: "3+ years of experience in software development. Expertise in Content creation, UI/UX, and brand strategy",
		profile: "/team/c1.png",
		link: "https://www.linkedin.com/in/achraf-chahid-622861259/"
	},
	{
		title: "AMOA engineer",
		name: "Abdelghafour naim",
		description: "3+ years of experience in digital marketing. Expertise in Meta Ads, PPC, and marketing strategy",
		profile: "/team/c2.png",
		link: "https://www.linkedin.com/in/abdelghafour-naim-7b368527b/"
	}
];
const process = [
	{
		index: 1,
		label: "Consultation",
		content: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
	},
	{
		index: 2,
		label: "Research",
		content: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
	},
	{
		index: 3,
		label: "Implementation",
		content: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
	},
	{
		index: 4,
		label: "Optimization",
		content: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
	},
	{
		index: 5,
		label: "Reporting",
		content: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
	},
	{
		index: 6,
		label: "Improvement",
		content: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
	}
];
const teamData = {
	team: team,
	process: process
};

const $$Astro = createAstro();
const $$Accordion = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Accordion;
  const { index, title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="accordion__item" class="accordion__item group h-[160px] bg-zinc-100 overflow-hidden w-full transition-all duration-500 mb-[30px] rounded-[45px] border border-dark shadow-[0px_5px_0px_#191a23]"> <button class="accordion__toggle w-full h-[160px] flex items-center justify-between p-[60px] cursor-pointer"${addAttribute(`${title} accordion__item menu button`, "id")} aria-expanded="false"${addAttribute(`${title} accordion__item menu content`, "aria-controls")}> <div class="flex items-center gap-[25px]"> <span class="hidden sm:block sm:text-6xl">0${index}</span> ${title} </div> <div class="bg-white w-[58px] h-[58px] flex justify-center items-center rounded-full border border-dark"> <div class="accordion__icon h-10 w-10 transition-transform duration-300 flex justify-center items-center relative" aria-hidden="true"></div> </div> </button> <div${addAttribute(`${title} accordion__item menu content`, "id")}${addAttribute(`${title} accordion__item menu button `, "aria-labelledby")} class="accordion__content px-[60px]"> <div class="w-full h-[2px] bg-black"></div> <p class="prose mb-4 mt-1 max-w-full pt-5 pb-[60px] transition-[height]"> ${description} </p> </div> </div> `;
}, "C:/Users/AXH/Documents/my-site/zab-media/mustmedia/src/components/Accordion.astro", void 0);

const $$Team = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative flex flex-col items-center md:flex-row"> ${renderComponent($$result2, "Topic", $$Topic, { "title": "Process", "description": "Step-by-Step Guide to Achieving Your Business Goals" })} </div> <div class="my-6"> <div class="space-y-10"> ${teamData.process.map((item) => {
    return renderTemplate`${renderComponent($$result2, "Accordion", $$Accordion, { "index": item.index, "title": item.label, "description": item.content })}`;
  })} </div> </div> <div class="relative flex flex-col items-center md:flex-row pt-6"> ${renderComponent($$result2, "Topic", $$Topic, { "title": "Team", "description": "Meet the skilled and experienced team behind our successful digital marketing strategies" })} </div> <div class="flex-row items-center py-5" id="team"> <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4"> ${teamData.team.map(({ title, description, name, link, profile }) => renderTemplate`<div class="h-[331px] px-[35px] py-10 bg-white rounded-[45px] shadow-card border border-zinc-900 flex-col justify-start items-start gap-2.5 inline-flex text-black"> <div class="flex-col justify-start items-start gap-7 flex"> <div class="self-stretch justify-start items-start inline-flex"> <div class="grow shrink basis-0 justify-start items-center gap-8 flex"> <div class="h-[102.82px] left-0 top-0 relative"> <img${addAttribute(profile, "src")}${addAttribute(name, "alt")}> </div> <div class="flex-col justify-end items-start inline-flex"> <div class="text-lg font-normal">${title}</div> <div class="text-xl font-medium">${name}</div> </div> </div> <a class="top-0 right-0"${addAttribute(link, "href")}> <img src="/team/lng.svg" alt="vector"> </a> </div> <hr class="w-full border border-black"> <p class="text-sm md:text-lg">${description}</p> </div> </div>`)} </div> </div> <div class="w-full justify-center md:justify-end items-center inline-flex"> <button class="px-8 py-5 bg-zinc-900 hover:bg-white rounded-2xl text-center text-white hover:text-black border text-xl font-normal leading-7">See all team
</button> </div> ` })}`;
}, "C:/Users/AXH/Documents/my-site/zab-media/mustmedia/src/components/Team.astro", void 0);

export { $$Team as $ };
