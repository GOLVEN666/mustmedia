import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_XPotyUtQ.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers. Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers. Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers. Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers. Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers.</p>";

				const frontmatter = {"title":"How to quickly deploy a static website","pubDate":"2024-01-20T00:00:00.000Z","author":"Achraf Chahid","authImage":"https://media.licdn.com/dms/image/v2/D4E03AQH9DuoroG_ICw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1713063340701?e=1738800000&v=beta&t=SAVo5HKTy1nCUhrYDQkl9pAFcURQBDyhI3UlhvbEpIk","image":"image1.png","slug":"how-to-quickly-deploy-a-static-website","summary":"Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers.","type":"Tutorial"};
				const file = "C:/Users/AXH/Documents/my-site/zab-media/mustmedia/src/content/blog/How to quickly deploy a static website.md";
				const url = undefined;
				function rawContent() {
					return "\r\nStatic websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers. Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers. Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers. Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers. Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers.\r\n\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
