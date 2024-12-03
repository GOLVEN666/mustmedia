/* empty css                                    */
import { c as createComponent, r as renderTemplate, e as defineScriptVars, b as renderComponent, a as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_XPotyUtQ.mjs';
import 'kleur/colors';
import { a as $$Layout, $ as $$Container } from '../../chunks/Layout_D58A5twf.mjs';
import { c as caseStudies } from '../../chunks/caseStudies_BYqJzhyx.mjs';
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
  return renderTemplate(_a || (_a = __template(["", " <script>(function(){", "\n    import Chart from 'chart.js/auto';\n    \n    // Get the canvas element\n    const ctx = document.getElementById('growthChart')?.getContext('2d');\n    \n    if (ctx) {\n        // Use actual data from the study\n        const monthlyData = {\n            labels: study.monthlyData.map(d => d.month),\n            datasets: [\n                {\n                    label: 'Revenue',\n                    data: study.monthlyData.map(d => d.revenue),\n                    borderColor: '#63ADF2',\n                    backgroundColor: 'rgba(99, 173, 242, 0.1)',\n                    fill: true,\n                    tension: 0.4\n                },\n                {\n                    label: 'Orders',\n                    data: study.monthlyData.map(d => d.orders),\n                    borderColor: '#34D399',\n                    backgroundColor: 'rgba(52, 211, 153, 0.1)',\n                    fill: true,\n                    tension: 0.4\n                }\n            ]\n        };\n        \n        new Chart(ctx, {\n            type: 'line',\n            data: monthlyData,\n            options: {\n                responsive: true,\n                maintainAspectRatio: false,\n                plugins: {\n                    legend: {\n                        position: 'top',\n                    },\n                    title: {\n                        display: false\n                    }\n                },\n                scales: {\n                    y: {\n                        beginAtZero: true,\n                        grid: {\n                            color: 'rgba(0, 0, 0, 0.1)'\n                        }\n                    },\n                    x: {\n                        grid: {\n                            display: false\n                        }\n                    }\n                }\n            }\n        });\n    }\n})();<\/script>"])), renderComponent($$result, "Layout", $$Layout, { "title": `${study.title} | MustMedia` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="py-24"> <!-- Category Badge --> <div class="mb-8 text-center"> <span class="inline-block px-4 py-1 bg-zime-44 text-white rounded-full text-sm"> ${study.category} </span> </div> <!-- Title --> <h1 class="text-4xl font-bold text-center mb-8">${study.title}</h1> <!-- Metrics --> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"> ${study.metrics.map((metric) => renderTemplate`<div class="bg-white rounded-3xl border border-gray-100 shadow-card p-6 text-center"> <div class="flex items-center justify-center gap-2"> <span class="text-3xl font-bold text-zime-44">${metric.value}</span> ${metric.trend === "up" && renderTemplate`<svg class="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path> </svg>`} ${metric.trend === "down" && renderTemplate`<svg class="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path> </svg>`} </div> <div class="text-zinc-600 mt-2">${metric.label}</div> </div>`)} </div> <!-- Content Sections --> <div class="space-y-12 max-w-3xl mx-auto"> <div> <h2 class="text-2xl font-bold mb-4">Le Défi</h2> <div class="text-zinc-600 space-y-4"> ${study.challenge.split("\n").map((line) => renderTemplate`<p>${line}</p>`)} </div> </div> <div> <h2 class="text-2xl font-bold mb-4">Notre Solution</h2> <div class="text-zinc-600 space-y-4"> ${study.solution.split("\n").map((line) => renderTemplate`<p>${line}</p>`)} </div> </div> <!-- Testimonial --> <blockquote class="bg-zinc-100 rounded-3xl p-8"> <p class="text-xl italic mb-4">"${study.testimonial.quote}"</p> <footer> <div class="font-semibold">${study.testimonial.author}</div> <div class="text-zinc-600">${study.testimonial.position}</div> </footer> </blockquote> </div> <!-- Growth Chart Section --> <div class="my-12 p-8 bg-white rounded-3xl border border-gray-100 shadow-card"> <h2 class="text-2xl font-bold mb-6 text-center">Croissance sur 6 mois</h2> <canvas class="h-[400px] w-full" id="growthChart"></canvas> </div> </div> ` })} ` }), defineScriptVars({ study }));
}, "C:/Users/AXH/Documents/my-site/zab-media/mustmedia/src/pages/case-studies/[id].astro", void 0);

const $$file = "C:/Users/AXH/Documents/my-site/zab-media/mustmedia/src/pages/case-studies/[id].astro";
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
