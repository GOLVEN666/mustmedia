/* empty css                                    */
import { c as createComponent, r as renderTemplate, e as defineScriptVars, a as renderComponent, d as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_R8eDJY8f.mjs';
import 'kleur/colors';
import { a as $$Layout, $ as $$Container } from '../../chunks/Layout_DhieiGja.mjs';
import { c as caseStudies } from '../../chunks/caseStudies_qrl7L3HK.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
async function getStaticPaths() {
  return caseStudies.map((study) => ({
    params: { id: study.id.toString() },
    props: { study }
  }));
}
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const study = caseStudies.find((s) => s.id.toString() === id);
  if (!study) {
    return Astro2.redirect("/404");
  }
  return renderTemplate(_a || (_a = __template(["", " <script>(function(){", "\nif (typeof window !== 'undefined' && study.monthlyData) {\n    // Load Chart.js from CDN\n    const script = document.createElement('script');\n    script.src = 'https://cdn.jsdelivr.net/npm/chart.js';\n    script.onload = function() {\n        const ctx = document.getElementById('growthChart')?.getContext('2d');\n        if (ctx) {\n            new Chart(ctx, {\n                type: 'line',\n                data: {\n                    labels: study.monthlyData.map(d => d.month),\n                    datasets: [\n                        {\n                            label: 'Revenue',\n                            data: study.monthlyData.map(d => d.revenue),\n                            borderColor: '#60A5FA',\n                            backgroundColor: 'rgba(96, 165, 250, 0.1)',\n                            fill: true,\n                            tension: 0.4\n                        },\n                        {\n                            label: 'Orders',\n                            data: study.monthlyData.map(d => d.orders),\n                            borderColor: '#34D399',\n                            backgroundColor: 'rgba(52, 211, 153, 0.1)',\n                            fill: true,\n                            tension: 0.4\n                        }\n                    ]\n                },\n                options: {\n                    responsive: true,\n                    maintainAspectRatio: false,\n                    plugins: {\n                        legend: {\n                            position: 'top',\n                            labels: {\n                                color: '#D1D5DB'\n                            }\n                        }\n                    },\n                    scales: {\n                        y: {\n                            beginAtZero: true,\n                            grid: {\n                                color: 'rgba(255, 255, 255, 0.1)'\n                            },\n                            ticks: {\n                                color: '#D1D5DB'\n                            }\n                        },\n                        x: {\n                            grid: {\n                                display: false\n                            },\n                            ticks: {\n                                color: '#D1D5DB'\n                            }\n                        }\n                    }\n                }\n            });\n        }\n    };\n    document.head.appendChild(script);\n}\n})();<\/script>"])), renderComponent($$result, "Layout", $$Layout, { "title": `${study.title} | MustMedia` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-[#0B0F19] text-white min-h-screen"> ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` <div class="py-24"> <!-- Back Button --> <a href="/case-studies" class="inline-flex items-center gap-2 text-zinc-400 hover:text-white mb-8 transition-colors duration-300"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path> </svg>
Retour aux études de cas
</a> <!-- Category Badge --> <div class="mb-8 text-center"> <span class="inline-block px-4 py-1 bg-zime-44 text-white rounded-full text-sm"> ${study.category} </span> </div> <!-- Title --> <h1 class="text-4xl md:text-5xl font-bold text-center mb-8">${study.title}</h1> <!-- Description --> <p class="text-xl text-zinc-400 text-center max-w-3xl mx-auto mb-12"> ${study.fullDescription} </p> <!-- Metrics --> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"> ${study.metrics.map((metric) => renderTemplate`<div class="bg-[#1A1F2E] rounded-3xl border border-zinc-700 p-6 text-center"> <div class="flex items-center justify-center gap-2"> <span class="text-3xl font-bold text-zime-44">${metric.value}</span> ${metric.trend === "up" && renderTemplate`<svg class="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path> </svg>`} ${metric.trend === "down" && renderTemplate`<svg class="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path> </svg>`} </div> <div class="text-zinc-400 mt-2">${metric.label}</div> </div>`)} </div> <!-- Tags --> <div class="flex flex-wrap justify-center gap-3 mb-12"> ${study.tags.map((tag) => renderTemplate`<span class="px-4 py-1 bg-[#1A1F2E] text-zinc-300 rounded-full text-sm border border-zinc-700"> ${tag} </span>`)} </div> <!-- Content Sections --> <div class="space-y-12 max-w-3xl mx-auto"> ${study.challenge && renderTemplate`<div> <h2 class="text-2xl font-bold mb-4 text-white">Le Défi</h2> <div class="text-zinc-400 space-y-4"> ${study.challenge.split("\n").map((line) => renderTemplate`<p>${line}</p>`)} </div> </div>`} ${study.solution && renderTemplate`<div> <h2 class="text-2xl font-bold mb-4 text-white">Notre Solution</h2> <div class="text-zinc-400 space-y-4"> ${study.solution.split("\n").map((line) => renderTemplate`<p>${line}</p>`)} </div> </div>`} ${study.testimonial && renderTemplate`<blockquote class="bg-[#1A1F2E] rounded-3xl p-8 border border-zinc-700"> <p class="text-xl italic mb-4 text-zinc-300">"${study.testimonial.quote}"</p> <footer> <div class="font-semibold text-white">${study.testimonial.author}</div> <div class="text-zinc-400">${study.testimonial.position}</div> </footer> </blockquote>`} </div> ${study.monthlyData && renderTemplate`<div class="my-12 p-8 bg-[#1A1F2E] rounded-3xl border border-zinc-700"> <h2 class="text-2xl font-bold mb-6 text-center text-white">Croissance sur 6 mois</h2> <canvas class="h-[400px] w-full" id="growthChart"></canvas> </div>`} </div> ` })} </div> ` }), defineScriptVars({ study }));
}, "C:/Users/AXH/Documents/must/mustmedia/src/pages/case-studies/[id].astro", void 0);

const $$file = "C:/Users/AXH/Documents/must/mustmedia/src/pages/case-studies/[id].astro";
const $$url = "/case-studies/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
