import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_XPotyUtQ.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Le Pack Basic de MustMedia est conçu pour les entreprises qui souhaitent établir une présence digitale solide avec un budget maîtrisé. À 2900 DH, ce pack offre un excellent rapport qualité-prix pour démarrer votre transformation digitale.</p>\n<h2 id=\"ce-que-comprend-le-pack-basic\">Ce Que Comprend Le Pack Basic</h2>\n<h3 id=\"1-séances-photo-professionnelles\">1. Séances Photo Professionnelles</h3>\n<ul>\n<li>2 séances photo complètes</li>\n<li>Photos haute qualité pour vos réseaux sociaux</li>\n<li>Images optimisées pour le web</li>\n</ul>\n<h3 id=\"2-budget-publicitaire\">2. Budget Publicitaire</h3>\n<ul>\n<li>1000 DH de budget publicitaire</li>\n<li>Ciblage précis de votre audience</li>\n<li>Optimisation des campagnes</li>\n</ul>\n<h3 id=\"3-service-marketing-personnalisé\">3. Service Marketing Personnalisé</h3>\n<ul>\n<li>1900 DH de services marketing</li>\n<li>Stratégie de contenu adaptée</li>\n<li>Suivi des performances</li>\n</ul>\n<h2 id=\"pourquoi-choisir-le-pack-basic\">Pourquoi Choisir Le Pack Basic?</h2>\n<ol>\n<li>\n<p><strong>Budget Optimisé</strong></p>\n<ul>\n<li>Investissement initial raisonnable</li>\n<li>ROI mesurable</li>\n<li>Dépenses contrôlées</li>\n</ul>\n</li>\n<li>\n<p><strong>Résultats Rapides</strong></p>\n<ul>\n<li>Mise en place rapide</li>\n<li>Premiers résultats visibles rapidement</li>\n<li>Ajustements en temps réel</li>\n</ul>\n</li>\n<li>\n<p><strong>Qualité Professionnelle</strong></p>\n<ul>\n<li>Photos de haute qualité</li>\n<li>Stratégie éprouvée</li>\n<li>Expertise marketing</li>\n</ul>\n</li>\n</ol>\n<h2 id=\"pour-qui-est-ce-pack\">Pour Qui Est Ce Pack?</h2>\n<ul>\n<li>Petites entreprises</li>\n<li>Entrepreneurs individuels</li>\n<li>Startups</li>\n<li>Commerces locaux</li>\n</ul>\n<p>Contactez-nous pour découvrir comment le Pack Basic peut transformer votre présence digitale.</p>";

				const frontmatter = {"title":"Pack Basic: Démarrez Votre Présence Digitale","pubDate":"2024-03-20T00:00:00.000Z","author":"Achraf Chahid","authImage":"https://media.licdn.com/dms/image/v2/D4E03AQH9DuoroG_ICw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1713063340701?e=1738800000&v=beta&t=SAVo5HKTy1nCUhrYDQkl9pAFcURQBDyhI3UlhvbEpIk","image":"basic-pack.png","slug":"pack-basic-marketing-digital","summary":"Découvrez comment notre Pack Basic à 2900 DH peut transformer votre présence digitale avec une approche stratégique et efficace.","type":"Article"};
				const file = "C:/Users/AXH/Documents/my-site/zab-media/mustmedia/src/content/blog/pack-basic-marketing.md";
				const url = undefined;
				function rawContent() {
					return "\r\nLe Pack Basic de MustMedia est conçu pour les entreprises qui souhaitent établir une présence digitale solide avec un budget maîtrisé. À 2900 DH, ce pack offre un excellent rapport qualité-prix pour démarrer votre transformation digitale.\r\n\r\n## Ce Que Comprend Le Pack Basic\r\n\r\n### 1. Séances Photo Professionnelles\r\n- 2 séances photo complètes\r\n- Photos haute qualité pour vos réseaux sociaux\r\n- Images optimisées pour le web\r\n\r\n### 2. Budget Publicitaire\r\n- 1000 DH de budget publicitaire\r\n- Ciblage précis de votre audience\r\n- Optimisation des campagnes\r\n\r\n### 3. Service Marketing Personnalisé\r\n- 1900 DH de services marketing\r\n- Stratégie de contenu adaptée\r\n- Suivi des performances\r\n\r\n## Pourquoi Choisir Le Pack Basic?\r\n\r\n1. **Budget Optimisé**\r\n   - Investissement initial raisonnable\r\n   - ROI mesurable\r\n   - Dépenses contrôlées\r\n\r\n2. **Résultats Rapides**\r\n   - Mise en place rapide\r\n   - Premiers résultats visibles rapidement\r\n   - Ajustements en temps réel\r\n\r\n3. **Qualité Professionnelle**\r\n   - Photos de haute qualité\r\n   - Stratégie éprouvée\r\n   - Expertise marketing\r\n\r\n## Pour Qui Est Ce Pack?\r\n\r\n- Petites entreprises\r\n- Entrepreneurs individuels\r\n- Startups\r\n- Commerces locaux\r\n\r\nContactez-nous pour découvrir comment le Pack Basic peut transformer votre présence digitale. ";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"ce-que-comprend-le-pack-basic","text":"Ce Que Comprend Le Pack Basic"},{"depth":3,"slug":"1-séances-photo-professionnelles","text":"1. Séances Photo Professionnelles"},{"depth":3,"slug":"2-budget-publicitaire","text":"2. Budget Publicitaire"},{"depth":3,"slug":"3-service-marketing-personnalisé","text":"3. Service Marketing Personnalisé"},{"depth":2,"slug":"pourquoi-choisir-le-pack-basic","text":"Pourquoi Choisir Le Pack Basic?"},{"depth":2,"slug":"pour-qui-est-ce-pack","text":"Pour Qui Est Ce Pack?"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
