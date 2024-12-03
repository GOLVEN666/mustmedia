import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as createAstro } from './astro/server_XPotyUtQ.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$Topic = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Topic;
  const { title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid place-items-center gap-5 mb-10 md:flex"> <h2 class="text-4xl sm:text-5xl px-1.5 font-medium bg-zime-44 rounded-md"> ${title} </h2> <p class="text-xl font-normal text-center md:text-start lg:w-2/3"> ${description} </p> </div>`;
}, "C:/Users/AXH/Documents/my-site/zab-media/mustmedia/src/components/Topic.astro", void 0);

export { $$Topic as $ };
