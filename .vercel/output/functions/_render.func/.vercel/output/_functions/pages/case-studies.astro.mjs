/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_R8eDJY8f.mjs';
import 'kleur/colors';
import { $ as $$Container, a as $$Layout } from '../chunks/Layout_DhieiGja.mjs';
import { $ as $$Topic } from '../chunks/Topic_C6P6KkvP.mjs';
import { c as caseStudies } from '../chunks/caseStudies_qrl7L3HK.mjs';
/* empty css                                        */
export { renderers } from '../renderers.mjs';

const $$CaseStudies = createComponent(($$result, $$props, $$slots) => {
  const categories = ["All", ...new Set(caseStudies.map((study) => study.category))];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Case Studies | MustMedia", "data-astro-cid-44gysecv": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-[#0B0F19] text-white min-h-screen" data-astro-cid-44gysecv> ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-44gysecv": true }, { "default": ($$result3) => renderTemplate` <div class="py-24" data-astro-cid-44gysecv> ${renderComponent($$result3, "Topic", $$Topic, { "title": "Nos R\xE9alisations", "description": "D\xE9couvrez comment nous aidons nos clients \xE0 atteindre leurs objectifs", "data-astro-cid-44gysecv": true })} <!-- Filter Section --> <div class="flex flex-wrap justify-center gap-4 mt-12 mb-16" data-astro-cid-44gysecv> ${categories.map((category) => renderTemplate`<button class="filter-btn px-6 py-2 rounded-full border-2 border-zinc-700 text-zinc-300 hover:border-zime-44 hover:bg-zime-44 hover:text-white transition-all"${addAttribute(category, "data-filter")}${addAttribute(category === "All" ? "true" : "false", "data-active")} data-astro-cid-44gysecv> ${category} </button>`)} </div> <!-- Case Studies Grid --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-astro-cid-44gysecv> ${caseStudies.map((study) => renderTemplate`<div class="case-study-item bg-[#1A1F2E] rounded-3xl border border-zinc-700 shadow-xl overflow-hidden hover:border-zime-44 transition-all duration-300"${addAttribute(study.category, "data-category")} data-visible="true" data-astro-cid-44gysecv> <div class="p-8 space-y-6" data-astro-cid-44gysecv> <span class="inline-block px-4 py-1 bg-zime-44 text-white rounded-full text-sm" data-astro-cid-44gysecv> ${study.category} </span> <h3 class="text-2xl font-semibold text-white" data-astro-cid-44gysecv>${study.title}</h3> <p class="text-zinc-400" data-astro-cid-44gysecv>${study.description}</p> <!-- Metrics with Trend Indicators --> <div class="grid grid-cols-3 gap-4" data-astro-cid-44gysecv> ${study.metrics.map((metric) => renderTemplate`<div class="text-center" data-astro-cid-44gysecv> <div class="flex items-center justify-center gap-1" data-astro-cid-44gysecv> <div class="text-2xl font-bold text-zime-44" data-astro-cid-44gysecv>${metric.value}</div> ${metric.trend === "up" && renderTemplate`<svg class="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-44gysecv> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" data-astro-cid-44gysecv></path> </svg>`} ${metric.trend === "down" && renderTemplate`<svg class="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-44gysecv> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" data-astro-cid-44gysecv></path> </svg>`} </div> <div class="text-sm text-zinc-500" data-astro-cid-44gysecv>${metric.label}</div> </div>`)} </div> <div class="pt-4 border-t border-zinc-700" data-astro-cid-44gysecv> <a${addAttribute(`/case-studies/${study.id}`, "href")} class="group inline-flex items-center gap-3 text-zime-44 hover:text-white transition-colors duration-300" data-astro-cid-44gysecv> <span class="text-lg font-medium" data-astro-cid-44gysecv>En savoir plus</span> <svg class="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-44gysecv> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" data-astro-cid-44gysecv></path> </svg> </a> </div> </div> </div>`)} </div> </div> ` })} </div> ` })}  `;
}, "C:/Users/AXH/Documents/must/mustmedia/src/pages/case-studies.astro", void 0);

const $$file = "C:/Users/AXH/Documents/must/mustmedia/src/pages/case-studies.astro";
const $$url = "/case-studies";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$CaseStudies,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
