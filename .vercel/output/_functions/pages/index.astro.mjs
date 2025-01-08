import { c as createComponent, r as renderTemplate, O as renderComponent, a as renderHead, ae as renderSlot, m as maybeRenderHead, l as addAttribute, n as createAstro, b as renderScript } from '../chunks/astro/server_BEPFBVGG.mjs';
import 'kleur/colors';
/* empty css                                 */
import 'clsx';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
export { renderers } from '../renderers.mjs';

const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Info SEO --><meta charset="utf-8"><title>FANA | Servicio de Mantenimiento y Reparaciones Automotriz</title><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="author" content="Darío Alexander Farfán Navarro"><meta name="description" content="🔧 En Fana brindamos servicios de mantenimiento y reparaciones automotrices con calidad técnica que rivaliza con los mejores concesionarios. Confía en nosotros para cuidar de tu vehículo. 🚘"><meta name="keywords" content="Fana, mantenimiento automotriz, reparaciones automotrices, taller confiable, servicio técnico autos, autos y camionetas"><meta name="robots" content="index, follow"><!-- meta Socials SEO --><meta property="og:title" content="Fana: Mantenimiento y Reparaciones Automotrices de Calidad"><meta property="og:description" content="🔧 En Fana nos destacamos por ofrecer servicios premium en mantenimiento y reparaciones automotrices, liderados por técnicos expertos con más de 40 años de experiencia. ¡Confía tu vehículo a los mejores! 🚘"><meta property="og:type" content="website"><meta property="og:url" content="https://alexfarfan.site/"><meta property="og:image" content="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:site" content="@loweffort-alt"><meta name="twitter:title" content="Fana: Mantenimiento y Reparaciones Automotrices de Calidad"><meta name="twitter:description" content="🔧 En Fana nos destacamos por ofrecer servicios premium en mantenimiento y reparaciones automotrices, liderados por técnicos expertos con más de 40 años de experiencia. ¡Confía tu vehículo a los mejores! 🚘"><meta name="twitter:image" content="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"><meta name="pinterest-rich-pin" content="true"><!-- favicon --><link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png"><link rel="manifest" href="/favicons/site.webmanifest"><link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#1b1d20"><meta name="msapplication-TileColor" content="#1b1d20"><meta name="theme-color" content="#1b1d20"><!-- Inter Font: https://rsms.me/inter/ --><link rel="preconnect" href="https://rsms.me/"><link rel="stylesheet" href="https://rsms.me/inter/inter.css">`;
}, "/home/loweffort/Escritorio/fanaweb/src/components/BaseHead.astro", undefined);

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, {})}${renderHead()}</head> <body class="max-md:overflow-x-hidden"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/loweffort/Escritorio/fanaweb/src/layouts/Layout.astro", undefined);

const $$Astro$a = createAstro();
const $$IconContainer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$IconContainer;
  const { background, rounded } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`w-16 h-16 flex justify-center items-center ${rounded} ${background} drop-shadow`, "class")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/home/loweffort/Escritorio/fanaweb/src/components/IconContainer.astro", undefined);

const $$Astro$9 = createAstro();
const $$ServiceList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$ServiceList;
  const { list } = Astro2.props;
  return renderTemplate`${list.map((service) => {
    const SelectedIcon = service.icon;
    return renderTemplate`${maybeRenderHead()}<li data-astro-cid-ngnk63ey>${renderComponent($$result, "IconContainer", $$IconContainer, { "background": "bg-primary", "rounded": "rounded-full", "data-astro-cid-ngnk63ey": true }, { "default": ($$result2) => renderTemplate`${SelectedIcon ? renderTemplate`${renderComponent($$result2, "SelectedIcon", SelectedIcon, { "data-astro-cid-ngnk63ey": true })}` : "Agregar \xEDcono"}` })}<p class="small_text text-primary" data-astro-cid-ngnk63ey>${service.description}</p></li>`;
  })}`;
}, "/home/loweffort/Escritorio/fanaweb/src/sections/IndexPage/Hero/ServiceList.astro", undefined);

const $$Astro$8 = createAstro();
const $$HeroHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$HeroHeader;
  const { subtitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header> <h4 class="text-secondary mb-2 max-md:font-semibold"> ${subtitle} </h4> <h1 class="text-primary">
Servicio de <span class="text-secondary">Mantenimiento</span> y <span class="text-secondary">Reparaciones</span> Automotriz
</h1> </header>`;
}, "/home/loweffort/Escritorio/fanaweb/src/sections/IndexPage/Hero/HeroHeader.astro", undefined);

const $$HeroImage = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="max-h-[744px] relative max-md:hidden"> <img src="hero-optimized.webp" alt="hero-image" class="max-w-[1200px] -translate-x-5"> </div>`;
}, "/home/loweffort/Escritorio/fanaweb/src/sections/IndexPage/Hero/HeroImage.astro", undefined);

const $$Wrench = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="35" height="36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.925 30.747a4.209 4.209 0 0 1-2.96-1.225 4.172 4.172 0 0 1 0-5.906L14 15.58c-.729-2.83.059-5.877 2.13-7.948a8.264 8.264 0 0 1 7.991-2.13c.38.103.67.395.773.774.102.379 0 .773-.277 1.05l-3.573 3.573.758 2.785 2.786.759 3.573-3.573c.277-.277.685-.38 1.05-.277.379.102.67.393.773.772a8.23 8.23 0 0 1-2.13 7.992c-2.07 2.071-5.118 2.858-7.948 2.13l-8.035 8.035a4.15 4.15 0 0 1-2.946 1.225ZM21.408 7.443c-1.4.116-2.727.729-3.747 1.75-1.663 1.662-2.203 4.097-1.4 6.343.145.394.043.846-.263 1.138l-8.502 8.502a1.998 1.998 0 0 0 0 2.815c.38.379.875.583 1.415.583a1.94 1.94 0 0 0 1.4-.584l8.502-8.502a1.102 1.102 0 0 1 1.137-.262c2.246.787 4.681.262 6.344-1.4a6.082 6.082 0 0 0 1.75-3.748l-2.377 2.377c-.277.277-.686.38-1.065.277l-3.996-1.094a1.09 1.09 0 0 1-.773-.773L18.74 10.87c-.102-.38 0-.788.277-1.065l2.377-2.377.015.015Z" fill="#fff"></path></svg>`;
}, "/home/loweffort/Escritorio/fanaweb/src/icons/Hero/Wrench.astro", undefined);

const $$Painting$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="32" height="33" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)" fill="#fff"><path d="M20.175 21.585a.622.622 0 1 0 0-1.244h-.59v-.77a.622.622 0 0 0-.622-.621H15.33a.622.622 0 0 0-.622.622v.143h-.547l-1.162-3.336 2.438-3.101a.622.622 0 0 0 .103-.576L11.897 1.417a.622.622 0 0 0-.783-.4L1.987 3.962a.622.622 0 0 0-.401.783l3.643 11.285c.063.197.221.35.42.407l3.816 1.097.76 2.18h-2.01a2.17 2.17 0 0 0-1.617.722H4.534a.622.622 0 1 0 0 1.244h1.46L2.538 32.17a.622.622 0 0 0 .591.817 6.534 6.534 0 0 0 6.207-4.474l1.238-3.713c.152-.458.53-.792.984-.898a7.236 7.236 0 0 0 2.106 4.497l.376.376a.62.62 0 0 0 .88 0 .622.622 0 0 0 0-.88l-.376-.376a6 6 0 0 1-1.74-3.653h1.904v.143c0 .344.278.623.622.623h3.633a.622.622 0 0 0 .622-.623v-.768h.59a.622.622 0 1 0 0-1.245h-.59v-.41h.59Zm-9.27-19.193.283.88-7.943 2.564-.284-.88 7.943-2.564ZM6.31 15.334 3.627 7.02l7.944-2.564 2.684 8.313-2.327 2.96-1.993.646-3.624-1.041Zm4.432 2.087 1.17-.38.93 2.674h-1.301l-.8-2.294ZM8.156 28.12a5.29 5.29 0 0 1-4.142 3.55l2.571-7.804h3.06a2.62 2.62 0 0 0-.252.54L8.156 28.12ZM6.995 22.62l.337-1.022a.928.928 0 0 1 .883-.64h6.493v1.662H6.995Zm11.346.765h-2.389v-3.192h2.39v3.192ZM30.171 26.56l-7.022-4.77 7.022-4.77a.622.622 0 1 0-.699-1.03l-7.78 5.286a.622.622 0 0 0 0 1.029l7.78 5.284a.62.62 0 0 0 .864-.165.622.622 0 0 0-.165-.864Z"></path></g><defs><clipPath id="a"><path fill="#fff" transform="translate(0 .986)" d="M0 0h32v32H0z"></path></clipPath></defs></svg>`;
}, "/home/loweffort/Escritorio/fanaweb/src/icons/Hero/Painting.astro", undefined);

const $$Idea$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="40" height="41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.487 26.699c0-3.519-2.175-6.463-3.343-8.644a8.362 8.362 0 0 1-.994-3.956c0-4.625 4.225-8.375 8.85-8.375M24.512 26.699c0-3.519 2.175-6.463 3.344-8.644a8.362 8.362 0 0 0 .994-3.956c0-4.625-4.225-8.375-8.85-8.375" stroke="#fff" stroke-width="1.5"></path><path d="M25.169 26.505h-10a1.444 1.444 0 0 0 0 2.888h10a1.444 1.444 0 1 0 0-2.888ZM24.375 29.393h-8.419a1.444 1.444 0 0 0 0 2.887h8.42a1.444 1.444 0 0 0 0-2.887ZM22.363 32.28v.581a2.198 2.198 0 0 1-3.084 2.244 2.2 2.2 0 0 1-1.291-2.244v-.58M14.294 13.699a5.12 5.12 0 0 1 5.369-4.844" stroke="#fff" stroke-width="1.5"></path></svg>`;
}, "/home/loweffort/Escritorio/fanaweb/src/icons/Hero/Idea.astro", undefined);

const $$Engine = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="35" height="36" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="m12.413 31.275-3.327-3.324h-2.29a1.46 1.46 0 0 1-1.455-1.455v-2.478H3.953v2.9a1.13 1.13 0 0 1-1.125 1.124H1.125A1.13 1.13 0 0 1 0 26.917v-9.826a1.13 1.13 0 0 1 1.125-1.125h1.703a1.13 1.13 0 0 1 1.125 1.125v2.9h1.388v-2.667c0-.8.655-1.455 1.455-1.455H9.23l3.437-3.655c.4-.347.929-.47 1.547-.444h14.165c.49.054.863.242 1.09.595.229.348.191.544.191.935v6.69h1.388v-2.9a1.13 1.13 0 0 1 1.125-1.124h1.703A1.13 1.13 0 0 1 35 17.09v9.826a1.13 1.13 0 0 1-1.125 1.125h-1.703a1.13 1.13 0 0 1-1.125-1.125v-2.9h-1.388v.263c0 .777.023 1.247-.472 1.891-.094.123-.2.24-.317.348l-5.078 4.973c-.254.282-.638.435-1.145.464h-8.659c-.646-.029-1.173-.25-1.575-.68Zm5.734-8.664-3.6-.34 2.984-6.539h4.082l-2.316 3.751 4.165.462-7.645 9.177 2.33-6.511ZM14.806 5.014h9.826a1.13 1.13 0 0 1 1.125 1.125v1.703a1.13 1.13 0 0 1-1.125 1.125h-2.9V10.4h-4.027V8.967h-2.9a1.13 1.13 0 0 1-1.125-1.125V6.14a1.13 1.13 0 0 1 1.126-1.125Z" fill="#fff"></path></svg>`;
}, "/home/loweffort/Escritorio/fanaweb/src/icons/Hero/Engine.astro", undefined);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const subtitle = "/TODO TIPO DE MARCAS Y MODELOS";
  const description = "Taller privado, sala de espera c\xF3moda, servicio a domicilio, historial de reparaciones y seguimiento en tiempo real. \xA1Descubre la excelencia con nosotros!";
  const serviceList = [
    {
      icon: $$Wrench,
      description: "Mantenimiento General"
    },
    {
      icon: $$Painting$1,
      description: "Planchado y Pintura"
    },
    {
      icon: $$Idea$1,
      description: "Servicio El\xE9ctrico"
    },
    {
      icon: $$Engine,
      description: "Reparaci\xF3n de Motor"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="w-full wea py-8 grid grid-cols-1 items-center max-md:text-center md:grid-cols-2" data-astro-cid-ws2i33na> <main class="flex flex-col justify-evenly max-h-[744px] gap-y-5" data-astro-cid-ws2i33na> ${renderComponent($$result, "HeroHeader", $$HeroHeader, { "subtitle": subtitle, "data-astro-cid-ws2i33na": true })} <article data-astro-cid-ws2i33na> ${description} </article> <ul class="max-sm:px-10 flex max-md:flex-wrap gap-8 max-md:justify-center *:flex *:flex-col *:items-center *:gap-y-2 *:w-24 z-20" data-astro-cid-ws2i33na> ${renderComponent($$result, "ServiceList", $$ServiceList, { "list": serviceList, "data-astro-cid-ws2i33na": true })} </ul> </main> ${renderComponent($$result, "HeroImage", $$HeroImage, { "data-astro-cid-ws2i33na": true })} </section> `;
}, "/home/loweffort/Escritorio/fanaweb/src/sections/IndexPage/Hero/Hero.astro", undefined);

const $$Astro$7 = createAstro();
const $$MainButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$MainButton;
  const { scale } = Astro2.props;
  const grow = scale ? "hover:scale-105 max-md:scale-90" : null;
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(`py-3 px-6 rounded-lg bg-secondary font-semibold text-white hover:bg-red-600 transition ${grow} max-sm:text-sm`, "class")}> ${renderSlot($$result, $$slots["default"])} </button>`;
}, "/home/loweffort/Escritorio/fanaweb/src/components/MainButton.astro", undefined);

const $$Astro$6 = createAstro();
const $$NavbarList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$NavbarList;
  const { list } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul class="w-1/3 flex justify-between font-semibold text-text *:transition-all *:cursor-pointer max-lap:hidden"> ${list.map((menu) => renderTemplate`<li class="hover:text-secondary font-titilum font-normal"> ${menu.option} </li>`)} </ul>`;
}, "/home/loweffort/Escritorio/fanaweb/src/sections/IndexPage/Navbar/NavbarList.astro", undefined);

const $$Menu = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1 12C1 11.4477 1.44772 11 2 11H22C22.5523 11 23 11.4477 23 12C23 12.5523 22.5523 13 22 13H2C1.44772 13 1 12.5523 1 12Z" fill="#0B3B51"></path> <path d="M1 4C1 3.44772 1.44772 3 2 3H22C22.5523 3 23 3.44772 23 4C23 4.55228 22.5523 5 22 5H2C1.44772 5 1 4.55228 1 4Z" fill="#0B3B51"></path> <path d="M1 20C1 19.4477 1.44772 19 2 19H22C22.5523 19 23 19.4477 23 20C23 20.5523 22.5523 21 22 21H2C1.44772 21 1 20.5523 1 20Z" fill="#0B3B51"></path> </svg>`;
}, "/home/loweffort/Escritorio/fanaweb/src/icons/Extra/Menu.astro", undefined);

const $$NavbarHiddenMenu = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="visible lap:hidden justify-self-end"> ${renderComponent($$result, "Menu", $$Menu, {})} </div>`;
}, "/home/loweffort/Escritorio/fanaweb/src/sections/IndexPage/Navbar/NavbarHiddenMenu.astro", undefined);

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const menuList = [
    {
      option: "Inicio",
      link: "/"
    },
    {
      option: "Servicios",
      link: "/"
    },
    {
      option: "Software",
      link: "/"
    },
    {
      option: "Blog",
      link: "/"
    },
    {
      option: "Nosotros",
      link: "/"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<nav class="flex justify-between items-center h-16 py-2 relative bg-background drop-shadow-md lg:px-16 md:px-12 sm:px-8 max-sm:px-4"> <img src="Logo.svg" alt="logo" class="h-8 cursor-pointer max-md:h-7"> ${renderComponent($$result, "NavbarList", $$NavbarList, { "list": menuList })} <div class="flex gap-8 items-center"> ${renderComponent($$result, "MainButton", $$MainButton, { "scale": true }, { "default": ($$result2) => renderTemplate` Agenda tu cita ` })} ${renderComponent($$result, "NavbarHiddenMenu", $$NavbarHiddenMenu, {})} </div> </nav>`;
}, "/home/loweffort/Escritorio/fanaweb/src/sections/IndexPage/Navbar/Navbar.astro", undefined);

const $$ArrowDown = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="70" height="70" fill="none" class="absolute left-1/2 bouncer-arrow" xmlns="http://www.w3.org/2000/svg" data-astro-cid-bibzcwmr><g filter="url(#a)" data-astro-cid-bibzcwmr><circle cx="35" cy="31" r="30" fill="#E82128" data-astro-cid-bibzcwmr></circle></g><path fill-rule="evenodd" clip-rule="evenodd" d="M35.5 10c1.208 0 2.188.98 2.188 2.188v29.718l11.578-11.578a2.187 2.187 0 1 1 3.093 3.094L37.047 48.734a2.187 2.187 0 0 1-3.094 0L18.641 33.422a2.187 2.187 0 1 1 3.093-3.094l11.578 11.579v-29.72c0-1.208.98-2.187 2.188-2.187Z" fill="#F1F7F9" data-astro-cid-bibzcwmr></path><defs data-astro-cid-bibzcwmr><filter id="a" x="0" y="0" width="70" height="70" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB" data-astro-cid-bibzcwmr><feFlood flood-opacity="0" result="BackgroundImageFix" data-astro-cid-bibzcwmr></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" data-astro-cid-bibzcwmr></feColorMatrix><feOffset dy="4" data-astro-cid-bibzcwmr></feOffset><feGaussianBlur stdDeviation="2.5" data-astro-cid-bibzcwmr></feGaussianBlur><feComposite in2="hardAlpha" operator="out" data-astro-cid-bibzcwmr></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" data-astro-cid-bibzcwmr></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_314_1105" data-astro-cid-bibzcwmr></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_314_1105" result="shape" data-astro-cid-bibzcwmr></feBlend></filter></defs></svg> `;
}, "/home/loweffort/Escritorio/fanaweb/src/icons/Extra/ArrowDown.astro", undefined);

const $$Astro$5 = createAstro();
const $$FormHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$FormHeader;
  const { title, subtitle, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex gap-8 flex-col text-background" data-astro-cid-d4e5zw6a> <div data-astro-cid-d4e5zw6a> <h4 data-astro-cid-d4e5zw6a>${subtitle}</h4> <h2 class="max-md:text-center mt-2" data-astro-cid-d4e5zw6a> ${title} </h2> </div> <div class="flex flex-wrap gap-x-8 gap-y-4 text-sm font-light" data-astro-cid-d4e5zw6a> ${description.map((e) => renderTemplate`<p data-astro-cid-d4e5zw6a> ${e[0]} <span data-astro-cid-d4e5zw6a>${e[1]}</span> </p>`)} </div> </div> `;
}, "/home/loweffort/Escritorio/fanaweb/src/sections/IndexPage/Form/FormHeader.astro", undefined);

const SpinnerIcon = () => /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2", children: /* @__PURE__ */ jsxs(
  "svg",
  {
    viewBox: "0 0 20 20",
    width: "40",
    height: "40",
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      animation: "spin8932 0.5s infinite linear",
      transformOrigin: "50% 50%"
    },
    children: [
      /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: "RadialGradient8932", children: [
        /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#090606", stopOpacity: "1" }),
        /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#0B3B51", stopOpacity: "0.25" })
      ] }) }),
      /* @__PURE__ */ jsx("style", { children: `
      @keyframes spin8932 {
        to {
          transform: rotate(360deg);
        }
      }
    ` }),
      /* @__PURE__ */ jsx(
        "circle",
        {
          cx: "10",
          cy: "10",
          r: "8",
          id: "circle8932",
          strokeWidth: "2",
          stroke: "url(#RadialGradient8932)",
          fill: "none"
        }
      )
    ]
  }
) });

const initialValue = {
  username: "",
  phone: "",
  email: "",
  carplate: "",
  checkbox: false
};
const FormInput = () => {
  const [inputValue, setInputvalue] = useState(initialValue);
  const [loader, setLoader] = useState(false);
  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setInputvalue((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value
    }));
  }
  async function submitForm(e) {
    e.preventDefault();
    try {
      setLoader(true);
      const response = await fetch("/actions/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(inputValue)
      });
      if (!response.ok) {
        throw new Error("Newtwork response was not ok");
      }
      const data = await response.json();
      console.log("Success:", data);
    } catch (error) {
      console.log("Error:", error);
    }
    setLoader(false);
    setInputvalue(initialValue);
  }
  const agreements = "Al hacer click en enviar, aceptas las Políticas de Datos Personales y las Políticas de Servicios en Fana.";
  return /* @__PURE__ */ jsxs(
    "form",
    {
      onSubmit: submitForm,
      className: "flex flex-col",
      children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 *:w-full *:rounded-md *:px-4 *:py-2 *:bg-background",
            children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  name: "username",
                  placeholder: "Nombre Completo",
                  value: inputValue.username,
                  onChange: handleChange,
                  required: true
                }
              ),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "tel",
                  value: inputValue.phone,
                  onChange: handleChange,
                  name: "phone",
                  placeholder: "Celular"
                }
              ),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "email",
                  value: inputValue.email,
                  onChange: handleChange,
                  name: "email",
                  placeholder: "Correo Empresarial"
                }
              ),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  value: inputValue.carplate,
                  onChange: handleChange,
                  name: "carplate",
                  placeholder: "Placa Vehicular"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4 items-center mt-8 mb-4", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "checkbox",
              name: "checkbox",
              checked: inputValue.checkbox,
              onChange: handleChange,
              className: "min-w-4 min-h-4 bg-background rounded-sm"
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "text-small font-light leading-none text-background", children: agreements })
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "w-full h-12 py-2 bg-secondary rounded-md text-background relative",
            children: loader ? /* @__PURE__ */ jsx(SpinnerIcon, {}) : "Enviar"
          }
        )
      ]
    }
  );
};

const $$Form = createComponent(($$result, $$props, $$slots) => {
  const title = "Nuestros expertos se comunicar\xE1n contigo.";
  const subtitle = "Ingresa tus datos";
  const description = [
    ["Estandarizaci\xF3n de", "Precios"],
    ["Experiencia asegurada en", "Multimarcas"],
    ["Monitoreo de trabajos en", "Tiempo Real"]
  ];
  return renderTemplate`${maybeRenderHead()}<section class="my-8"> ${renderComponent($$result, "ArrowDown", $$ArrowDown, {})} <div class="h-full py-8 px-4 gap-8 md:px-8 bg-primary grid items-center lap:grid-cols-2 rounded-2xl"> ${renderComponent($$result, "FormHeader", $$FormHeader, { "title": title, "subtitle": subtitle, "description": description })} ${renderComponent($$result, "FormInput", FormInput, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/loweffort/Escritorio/fanaweb/src/sections/IndexPage/Form/FormInput", "client:component-export": "FormInput" })} </div> </section>`;
}, "/home/loweffort/Escritorio/fanaweb/src/sections/IndexPage/Form/Form.astro", undefined);

const $$Astro$4 = createAstro();
const $$AdvantagesHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$AdvantagesHeader;
  const { title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> <h2 class="pb-4 text-center">${title}</h2> <article class="text-center max-w-[952px] m-auto">${description}</article> </div>`;
}, "/home/loweffort/Escritorio/fanaweb/src/sections/IndexPage/Advantages/AdvantagesHeader.astro", undefined);

const $$Astro$3 = createAstro();
const $$OptionContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$OptionContent;
  const { title, description, image } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid md:grid-cols-2 items-center gap-10"> <div class="md:hidden max-h-50 p-1"> <img${addAttribute(image, "src")} alt="Image Carousel" class="aspect-square rounded-xl justify-self-center object-cover"> </div> <div> <h3 class="pb-4">${title}</h3> <article>${description.content}</article> <ul class="list-disc px-5 flex flex-col gap-2 pt-2"> <li> <span class="font-bold">${description.pointOne}</span> ${description.pointOneDescription} </li> <li> <span class="font-bold">${description.pointTwo}</span> ${description.pointTwoDescription} </li> </ul> </div> <img${addAttribute(image, "src")} alt="Image Carousel" class="hidden md:block h-80 aspect-square rounded-xl justify-self-center object-cover"> </div>`;
}, "/home/loweffort/Escritorio/fanaweb/src/sections/IndexPage/Advantages/OptionContent.astro", undefined);

const $$Quality = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M14.3335 9.33329L16.0002 7.66663V17.6666" stroke="#E82128" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M5.65 18.6167L1 25.2667L6.05 26.7667L9.18333 31L13.9833 24.15" stroke="#E82128" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M26.3499 18.6167L30.9999 25.2667L25.9499 26.7667L22.8166 31L18.0166 24.15" stroke="#E82128" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14.3335 17.6667H17.6668M16.0002 1C13.6927 1 11.4371 1.68424 9.51852 2.96619C7.59994 4.24814 6.1046 6.07022 5.22157 8.20203C4.33855 10.3338 4.10751 12.6796 4.55767 14.9427C5.00783 17.2058 6.11898 19.2846 7.75059 20.9162C9.3822 22.5479 11.461 23.659 13.7241 24.1092C15.9872 24.5593 18.333 24.3283 20.4648 23.4453C22.5966 22.5622 24.4187 21.0669 25.7006 19.1483C26.9826 17.2297 27.6668 14.9741 27.6668 12.6667C27.6668 9.57247 26.4377 6.60501 24.2497 4.41709C22.0618 2.22916 19.0944 1 16.0002 1Z" stroke="#E82128" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg>`;
}, "/home/loweffort/Escritorio/fanaweb/src/icons/Advantages/Quality.astro", undefined);

const $$Car = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="38" height="32" viewBox="0 0 38 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1 8L6.44374 12.5364C6.80316 12.836 7.25622 13 7.7241 13H30.2758C30.7438 13 31.1968 12.836 31.5562 12.5364L37 8M8 20H8.02M30 20H30.02M11.3213 1H26.6788C28.1142 1 29.4396 1.76914 30.1516 3.01544L35.946 13.1554C36.6366 14.3642 37 15.7322 37 17.1246V29C37 30.1046 36.1046 31 35 31H33C31.8954 31 31 30.1046 31 29V27H7V29C7 30.1046 6.10456 31 5 31H3C1.89544 31 1 30.1046 1 29V17.1246C1 15.7322 1.36332 14.3642 2.05406 13.1554L7.84832 3.01544C8.56048 1.76914 9.88586 1 11.3213 1ZM9 20C9 20.5522 8.55228 21 8 21C7.44772 21 7 20.5522 7 20C7 19.4478 7.44772 19 8 19C8.55228 19 9 19.4478 9 20ZM31 20C31 20.5522 30.5522 21 30 21C29.4478 21 29 20.5522 29 20C29 19.4478 29.4478 19 30 19C30.5522 19 31 19.4478 31 20Z" stroke="#E82128" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg>`;
}, "/home/loweffort/Escritorio/fanaweb/src/icons/Advantages/Car.astro", undefined);

const $$Idea = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M5.4003 22.2787C5.4003 18.709 3.19381 15.7226 2.00814 13.5098C1.34595 12.2757 0.999599 10.8968 1 9.49626C1 4.8043 5.28617 1 9.97814 1" stroke="#E82128" stroke-width="1.5"></path> <path d="M14.5559 22.2787C14.5559 18.709 16.7624 15.7226 17.948 13.5098C18.6102 12.2757 18.9566 10.8968 18.9562 9.49626C18.9562 4.8043 14.67 1 9.97803 1" stroke="#E82128" stroke-width="1.5"></path> <path d="M15.2217 22.0821H5.07696C4.26805 22.0821 3.6123 22.7379 3.6123 23.5468C3.6123 24.3557 4.26805 25.0114 5.07696 25.0114H15.2217C16.0307 25.0114 16.6864 24.3557 16.6864 23.5468C16.6864 22.7379 16.0307 22.0821 15.2217 22.0821Z" stroke="#E82128" stroke-width="1.5"></path> <path d="M14.4164 25.0115H5.87579C5.06688 25.0115 4.41113 25.6673 4.41113 26.4762C4.41113 27.2851 5.06688 27.9408 5.87579 27.9408H14.4164C15.2253 27.9408 15.8811 27.2851 15.8811 26.4762C15.8811 25.6673 15.2253 25.0115 14.4164 25.0115Z" stroke="#E82128" stroke-width="1.5"></path> <path d="M12.3749 27.9409V28.5306C12.4082 28.8419 12.3756 29.1568 12.2793 29.4548C12.183 29.7527 12.025 30.027 11.8157 30.2599C11.6064 30.4929 11.3504 30.6791 11.0644 30.8066C10.7784 30.9341 10.4688 31 10.1557 31C9.84255 31 9.53292 30.9341 9.24692 30.8066C8.96092 30.6791 8.70495 30.4929 8.49565 30.2599C8.28635 30.027 8.1284 29.7527 8.03207 29.4548C7.93573 29.1568 7.90318 28.8419 7.93651 28.5306V27.9409" stroke="#E82128" stroke-width="1.5"></path> <path d="M4.18945 9.09068C4.2616 7.71737 4.87555 6.42874 5.89661 5.50753C6.91768 4.58632 8.26246 4.10774 9.63594 4.1768" stroke="#E82128" stroke-width="1.5"></path> </svg>`;
}, "/home/loweffort/Escritorio/fanaweb/src/icons/Advantages/Idea.astro", undefined);

const $$Delivery = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="55" height="30" viewBox="0 0 55 30" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M21.3132 0C20.7189 0 19.9948 0.0837054 19.3043 0.569196C18.6137 1.05469 18.0989 2.01311 18.0989 3.11384V8.57143H5.24177C4.17453 8.57143 3.09891 8.80999 2.26186 9.54241C1.4248 10.2748 0.956055 11.4551 0.956055 12.8571V21.7634C0.956055 22.6465 1.37877 23.4542 1.994 23.9397C2.60924 24.4252 3.3877 24.6429 4.17034 24.6429H6.41364C6.92425 27.6814 9.56515 30 12.7418 30C15.9184 30 18.5593 27.6814 19.0699 24.6429H36.4136C36.9243 27.6814 39.5652 30 42.7418 30C45.9184 30 48.5593 27.6814 49.0699 24.6429H51.3132C53.0836 24.6429 54.5275 23.1989 54.5275 21.4286V15C54.5275 13.9286 53.8244 13.192 53.0208 12.5893C52.2172 11.9866 51.1625 11.476 49.9739 10.9821C47.6846 10.0279 44.8302 9.22015 42.1726 8.67187C42.0679 8.62165 41.9549 8.58817 41.8378 8.57143C41.8043 8.54213 41.2351 8.24498 40.6324 7.70089C39.9962 7.12751 39.2638 6.35324 38.59 5.59152C37.2381 4.0639 36.0788 2.57812 36.0788 2.57812L36.0119 2.4442C34.9404 1.37277 33.4547 0 30.9561 0H21.3132ZM21.3132 2.14286H25.5989V8.57143H20.2418V3.11384C20.2418 2.53627 20.3548 2.45257 20.5096 2.34375C20.6645 2.23493 20.9909 2.14286 21.3132 2.14286ZM27.7418 2.14286H30.9561C32.7432 2.14286 33.4003 2.91295 34.4717 3.98437L34.5052 3.95089C34.5847 4.05134 35.6184 5.45759 36.9828 6.99777C37.4641 7.54185 37.9789 8.06501 38.4895 8.57143H27.7418V2.14286ZM5.24177 10.7143H41.6703C44.2359 11.2416 47.0484 12.0703 49.1703 12.9576C50.2585 13.4138 51.1458 13.87 51.715 14.2969C52.2842 14.7238 52.3846 15.0502 52.3846 15V21.4286C52.3846 21.9266 51.8112 22.5 51.3132 22.5H49.0699C48.5593 19.4615 45.9184 17.1429 42.7418 17.1429C39.5652 17.1429 36.9243 19.4615 36.4136 22.5H19.0699C18.5593 19.4615 15.9184 17.1429 12.7418 17.1429C9.56515 17.1429 6.92425 19.4615 6.41364 22.5H4.17034C3.81459 22.5 3.50488 22.3996 3.33329 22.2656C3.16169 22.1317 3.09891 22.0145 3.09891 21.7634V12.8571C3.09891 11.882 3.35003 11.43 3.66811 11.1496C3.98619 10.8691 4.50516 10.7143 5.24177 10.7143ZM12.7418 19.2857C15.1232 19.2857 17.0275 21.19 17.0275 23.5714C17.0275 25.9528 15.1232 27.8571 12.7418 27.8571C10.3604 27.8571 8.45606 25.9528 8.45606 23.5714C8.45606 21.19 10.3604 19.2857 12.7418 19.2857ZM42.7418 19.2857C45.1232 19.2857 47.0275 21.19 47.0275 23.5714C47.0275 25.9528 45.1232 27.8571 42.7418 27.8571C40.3604 27.8571 38.4561 25.9528 38.4561 23.5714C38.4561 21.19 40.3604 19.2857 42.7418 19.2857Z" fill="#E82128"></path> </svg>`;
}, "/home/loweffort/Escritorio/fanaweb/src/icons/Advantages/Delivery.astro", undefined);

const $$Speedometer$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="44" height="30" viewBox="0 0 44 30" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M19.2578 17.5496C19.9072 21.375 20.6962 25.3704 21.1325 26.1923C21.7514 27.3567 23.2 27.8082 24.3669 27.1893C25.5312 26.5703 25.9777 25.1167 25.3587 23.9524C24.9224 23.1305 22.0584 20.236 19.2578 17.5496ZM18.2735 13.1381C19.6561 14.4167 26.6043 20.8829 27.6012 22.7652C28.8747 25.1649 27.9564 28.1532 25.5541 29.4292C24.8209 29.8174 24.032 30 23.2557 30C21.4876 30 19.7753 29.0487 18.89 27.3821C17.893 25.4998 16.4395 16.1214 16.1579 14.2594C16.0792 13.7267 16.3431 13.199 16.8175 12.9504C17.2969 12.6967 17.8753 12.7703 18.2735 13.1381ZM22.0904 0C33.9802 0 43.6529 9.67521 43.6529 21.5625C43.6529 23.2951 43.4525 25.0024 43.0542 26.636L42.8208 27.6051H31.0426V25.0683H40.7965C41.0095 23.9293 41.1161 22.7522 41.1161 21.5625C41.1161 11.0704 32.5799 2.53674 22.0904 2.53674C11.5983 2.53674 3.06462 11.0704 3.06462 21.5625C3.06462 22.7523 3.17117 23.9293 3.38172 25.0683H14.3304V27.6051H1.35738L1.12401 26.636C0.728229 25.0023 0.527832 23.2951 0.527832 21.5625C0.527832 9.67521 10.2005 0 22.0904 0ZM34.2765 8.77518L36.07 10.5687L33.5383 13.1004L31.7448 11.3069L34.2765 8.77518ZM9.90222 8.77518L12.4339 11.3068L10.6404 13.1003L8.10876 10.5686L9.90224 8.77513L9.90222 8.77518ZM23.3577 4.25237V7.83429H20.821V4.25235L23.3577 4.25237Z" fill="#E82128"></path> </svg>`;
}, "/home/loweffort/Escritorio/fanaweb/src/icons/Advantages/Speedometer.astro", undefined);

const $$Astro$2 = createAstro();
const $$AdvantagesMenu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$AdvantagesMenu;
  const { menuData } = Astro2.props;
  const iconMap = {
    Quality: $$Quality,
    Car: $$Car,
    Idea: $$Idea,
    Delivery: $$Delivery,
    Speedometer: $$Speedometer$1
  };
  return renderTemplate`${maybeRenderHead()}<div data-astro-cid-bwp6g7dg> <menu class="relative md:max-w-fit mx-auto mb-10 justify-items-center gap-1 md:gap-4 *:pt-3 *:pb-4" data-astro-cid-bwp6g7dg> ${menuData.map((header, index) => {
    const Icon = iconMap[header.icon];
    return renderTemplate`<li class="relative text-primary cursor-pointer slider-tab transition-all w-full flex justify-center"${addAttribute(`${index}`, "id")} data-is-clicked="false" data-astro-cid-bwp6g7dg> <div class="w-full flex justify-center md:gap-2 rounded p-1 opacity-60" data-astro-cid-bwp6g7dg> ${Icon && renderTemplate`${renderComponent($$result, "Icon", Icon, { "data-astro-cid-bwp6g7dg": true })}`} <p class="max-md:hidden small_text" data-astro-cid-bwp6g7dg>${header.option}</p> </div> </li>`;
  })} </menu> <div class="swiper slider-container overflow-hidden" data-astro-cid-bwp6g7dg> <div class="slider-wrapper swiper-wrapper" data-astro-cid-bwp6g7dg> ${menuData.map((content) => {
    return renderTemplate`<div class="swiper-slide" data-astro-cid-bwp6g7dg> ${renderComponent($$result, "OptionContent", $$OptionContent, { "title": content.title, "description": content.description, "image": content.image, "data-astro-cid-bwp6g7dg": true })} </div>`;
  })} </div> </div> </div> ${renderScript($$result, "/home/loweffort/Escritorio/fanaweb/src/sections/IndexPage/Advantages/AdvantagesMenu.astro?astro&type=script&index=0&lang.ts")} `;
}, "/home/loweffort/Escritorio/fanaweb/src/sections/IndexPage/Advantages/AdvantagesMenu.astro", undefined);

const headerData = {
  title: "El Taller Automotriz Más Confiable",
  description: "Descubre cómo en Fana combinamos experiencia y tecnología para ofrecerte un servicio automotriz excepcional. Disfruta de atención personalizada, supervisión experta, y conveniencia con nuestros servicios a domicilio y plataforma tecnológica."
};
const menuData = [
  {
    icon: "Quality",
    option: "Experiencia",
    title: "Experiencia de Clase Mundial",
    description: {
      content: "En Fana sabemos que la experiencia construye confianza, es por eso que nuestro equipo técnico es liderado por un campeón certificado de Toyota.",
      pointOne: "Experiencia de Clase Mundial",
      pointOneDescription: "Cada vehículo es supervisado directamente por Darío Farfán Chira, ex-campeón de GrupoPana con más de 40 años de experiencia en el sector automotriz.",
      pointTwo: "Calidad Garantizada: ",
      pointTwoDescription: "La supervisión y participación activa de Darío asegura diagnósticos precisos y soluciones efectivas, proporcionando una calidad técnica comparable a los mejores concesionarios del país."
    },
    image: "/Photos/experience.webp"
  },
  {
    icon: "Car",
    option: "Especializado",
    title: "Especialización en Autos y Camionetas",
    description: {
      content: "En Fana nos especializamos en autos y camionetas, ofreciendo servicios premium con un conocimiento detallado para asegurar resultados de alta calidad.",
      pointOne: "Atención Exclusiva",
      pointOneDescription: "Nos enfocamos únicamente en autos y camionetas, lo que nos permite desarrollar soluciones específicas y eficientes para cada tipo de vehículo.",
      pointTwo: "Repuestos de Alta Calidad",
      pointTwoDescription: "Utilizamos piezas originales y de marcas reconocidas para garantizar el mejor rendimiento de tu vehículo."
    },
    image: "/Photos/specialized.png"
  },
  {
    icon: "Idea",
    option: "Personalizado",
    title: "Servicios Personalizados",
    description: {
      content: "Entendemos que cada cliente es único, por eso adaptamos nuestros servicios a las necesidades específicas de tu vehículo, garantizando soluciones efectivas.",
      pointOne: "Comodidad en Sala de Espera",
      pointOneDescription: "Contamos con un salón de espera equipado con todo lo que necesitas para que tu experiencia sea cómoda y placentera mientras esperas.",
      pointTwo: "Atención Programada",
      pointTwoDescription: "Trabajamos únicamente con citas agendadas, asegurando que tu tiempo sea respetado y cada servicio sea realizado con total dedicación."
    },
    image: "/Photos/personalized.jpg"
  },
  {
    icon: "Delivery",
    option: "Delivery",
    title: "Servicio de Recojo y Entrega",
    description: {
      content: "Ofrecemos la comodidad de recoger y entregar tu vehículo en tu domicilio, asegurando que disfrutes de un servicio técnico sin complicaciones.",
      pointOne: "Ahorra Tiempo",
      pointOneDescription: "Olvídate de trasladar tu vehículo, nosotros lo recogemos y lo entregamos una vez completado el servicio.",
      pointTwo: "Cobertura Segura",
      pointTwoDescription: "Garantizamos un transporte seguro para tu vehículo, desde tu hogar hasta el taller y viceversa."
    },
    image: "/Photos/delivery.png"
  },
  {
    icon: "Speedometer",
    option: "Innovador",
    title: "Plataforma Tecnológica Innovadora",
    description: {
      content: "Con nuestra plataforma tecnológica, puedes monitorear el estado de tu vehículo en tiempo real, manteniéndote siempre informado del progreso de cada servicio.",
      pointOne: "Seguimiento en Tiempo Real",
      pointOneDescription: "Accede al estado de las reparaciones y mantenimientos desde cualquier lugar, directamente desde nuestra plataforma.",
      pointTwo: "Transparencia Total",
      pointTwoDescription: "Consulta el historial de servicios, costos y diagnósticos de tu vehículo de forma clara y detallada."
    },
    image: "/Photos/innovative.png"
  }
];
const ServicesData = [
  {
    image: "Oil",
    title: "Mantenimiento General",
    description: "Realizamos un mantenimiento exhaustivo de todos los sistemas de tu auto, tendrás un historial con los cambios y observaciones del servicio"
  },
  {
    image: "Transmission",
    title: "Reparación de Motor",
    description: "Somos especialistas en reparar y mantener todos los componentes del motor, asegurando un rendimiento óptimo y duradero"
  },
  {
    image: "Battery",
    title: "Sistema de arranque",
    description: "¡No te quedes sin energía en un día importante! Nos encargamos de mantener tu alternador, arrancador y batería para evitar sorpresas"
  },
  {
    image: "Speedometer",
    title: "Diagnóstico Automotriz",
    description: "No pierdas tiempo ni dinero con suposiciones, nosotros identificamos los problemas de tu vehículo con tecnología avanzada y precisión quirurgica"
  },
  {
    image: "Paint",
    title: "Planchado y Pintura",
    description: "Restauramos y embellecemos tu auto con servicios de planchado y pintura de alta calidad dándole un acabado renovado y brillante"
  },
  {
    image: "Brake",
    title: "Frenos y Suspensión",
    description: "No permitas que los baches de la carretera te incomoden, maneja cómodamente con una suspensión y frenos en excelente estado"
  }
];
const TechData = {
  title: "Plataforma Tecnológica",
  description: "Nuestra plataforma tecnológica permite monitorear, gestionar y reportar en tiempo real el estado de los trabajos en los vehículos de la flota.",
  bulletOne: "Consulta en tiempo real el estado de tus unidades",
  bulletTwo: "Conoce el estado y la evidencia fotográfica de tus servicios",
  bulletThree: "Accede a un historial de citas con indicadores de tiempo y costos",
  bulletFour: "Administra la facturación de tus servicios"
};

const $$Advantages = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="px-2 md:px-8 my-16 flex flex-col gap-6 md:gap-16"> ${renderComponent($$result, "AdvantagesHeader", $$AdvantagesHeader, { "title": headerData.title, "description": headerData.description })} ${renderComponent($$result, "AdvantagesMenu", $$AdvantagesMenu, { "menuData": menuData })} </section>`;
}, "/home/loweffort/Escritorio/fanaweb/src/sections/IndexPage/Advantages/Advantages.astro", undefined);

const $$Banner = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-primary"> <h2 class="text-h3 text-background text-center md:text-h2 margin-container">
Tu <span class="text-secondary">aliado</span> en manetenimiento y reparación
    automotriz con calidad de concesionario a precios accesibles
</h2> </section>`;
}, "/home/loweffort/Escritorio/fanaweb/src/sections/IndexPage/Banner/Banner.astro", undefined);

const $$Battery = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="41" height="42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39.667 6.764H1.333a.836.836 0 0 0-.833.833v3.611c0 .459.375.834.833.834h38.334a.836.836 0 0 0 .833-.834v-3.61a.836.836 0 0 0-.833-.834ZM1.333 36.209h38.334c.458 0 .833.375.833.833v3.61a.836.836 0 0 1-.833.834H1.333a.836.836 0 0 1-.833-.833v-3.611c0-.458.375-.834.833-.834Z" stroke="#0B3B51" stroke-miterlimit="22.926" stroke-linecap="round" stroke-linejoin="round"></path><path d="M38.07 12.042H2.93v24.167h35.14V12.041ZM14.528 3.639h11.945c.458 0 .833.375.833.833v2.292H13.695V4.472c0-.458.375-.833.833-.833ZM5.36 1h3.195c.65 0 1.18.531 1.18 1.18v4.584H4.18V2.18C4.18 1.53 4.711 1 5.36 1ZM35.64 1h-3.195c-.649 0-1.18.531-1.18 1.18v4.584h5.555V2.18c0-.65-.531-1.181-1.18-1.181Z" stroke="#0B3B51" stroke-miterlimit="22.926" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.472 33.43 28 22.737h-8.5l3.986-6.805h-4.93l-5.695 9.722h6.995l-3.384 7.778ZM8.069 14.403h1.736v3.02h3.02v1.737h-3.02v3.02H8.069v-3.02H5.048v-1.736h3.02v-3.021ZM35.604 17.424v1.736h-7.778v-1.736h7.778Z" fill="#0B3B51"></path></svg>`;
}, "/home/loweffort/Escritorio/fanaweb/src/icons/Services/Battery.astro", undefined);

const $$Oil = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="45" height="25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.108 13.892c-.041-.083-.082-.165-.206-.207-.207-.083-.414 0-.496.207-.083.165-.166.372-.29.579C.661 15.38 0 16.703 0 17.736c0 .91.413 1.53 1.736 1.53 1.282 0 1.737-.661 1.737-1.53 0-.992-.662-2.356-1.117-3.265-.041-.207-.165-.414-.248-.58ZM41.588 1.449 40.885.415a.394.394 0 0 0-.496-.124l-1.034.62-7.193 4.134h-.041l-.662.372c-.124.042-.206.207-.206.331v1.819h-4.878V4.714h2.81c.29 0 .58-.082.786-.248.248-.165.414-.413.414-.702V3.02c0-.29-.166-.538-.414-.703-.206-.124-.496-.248-.785-.248H21.33c-.29 0-.578.082-.785.248-.248.165-.413.413-.413.703v.744c0 .29.165.496.372.702h.04c.208.124.497.248.786.248h2.811v2.853h-5.291a.37.37 0 0 0-.372.372v1.53h-2.026c-.62 0-1.199.248-1.612.66a2.282 2.282 0 0 0-.661 1.613v3.349L4.258 8.063c-.165-.124-.372-.083-.496.083L.91 11.453c-.124.165-.124.372.041.496l1.654 1.53c.124.123.33.123.496 0l1.116-.951L14.22 22.614c.041.538.248 1.034.62 1.406v.041c.413.414.992.662 1.612.662h17.57c.62 0 1.157-.248 1.57-.662h.042c.413-.413.661-.992.661-1.612v-1.116l7.4-7.4c3.762-3.762-1.778-11.947-2.108-12.484Zm-20.629 2.48-.082-.083v-.744c0-.041.04-.041.082-.082a.825.825 0 0 1 .372-.083h7.855c.165 0 .29.041.372.083l.082.082v.744c0 .042-.04.042-.082.083a.825.825 0 0 1-.372.083H21.33a.825.825 0 0 1-.372-.083Zm3.886.827h.786v2.852h-.786V4.756Zm-5.622 3.596H31.253V9.51h-12.03V8.352ZM3.969 11.825l-1.116.91-1.158-1.075 2.398-2.812 10.087 7.11v5.499l-9.715-9.715a.563.563 0 0 0-.496.083Zm31.583 10.624c0 .413-.165.785-.455 1.075-.29.248-.661.413-1.075.413H16.495c-.414 0-.786-.165-1.075-.454a1.653 1.653 0 0 1-.414-1.075V11.743c0-.414.166-.786.455-1.076.29-.289.662-.454 1.075-.454H34.022c.414 0 .786.165 1.075.454.248.29.414.662.414 1.075V22.45h.041Zm.083-12.236c-.29-.29-.62-.496-.992-.58V7.527l4.96-2.853c.703 1.158 1.612 2.853 1.985 4.382v.041c.248 1.034.248 1.943-.29 2.44l-5.002 5.002v-4.755c0-.62-.248-1.157-.661-1.57Zm.661 10.045v-2.687l5.54-5.54c.744-.744.785-1.901.496-3.141v-.042c-.414-1.777-1.53-3.72-2.233-4.919-.124-.165-.33-.248-.496-.124l-5.415 3.142a.376.376 0 0 0-.166.33V9.47h-1.901V5.955l.496-.29 7.193-4.134.744-.454.496.702.042.042c.372.496 5.539 8.185 2.19 11.533l-6.986 6.904Z" fill="#0B3B51"></path></svg>`;
}, "/home/loweffort/Escritorio/fanaweb/src/icons/Services/Oil.astro", undefined);

const $$Speedometer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="40" height="41" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M27.097 19.841a.645.645 0 1 0 0-1.29.645.645 0 0 0 0 1.29ZM12.903 19.841a.645.645 0 1 0 0-1.29.645.645 0 0 0 0 1.29Z"></path><path d="M20 1.777c-10.322 0-18.71 8.387-18.71 18.71 0 5.806 2.646 10.967 6.84 14.45A18.665 18.665 0 0 0 20 39.197c4.194 0 8.065-1.42 11.162-3.742 4.58-3.42 7.548-8.839 7.548-14.968 0-10.322-8.387-18.71-18.71-18.71ZM9.678 34.035v-7.097h1.29v5.806h1.935v-3.226h1.29v3.226h1.936v-4.516h1.29v4.516h1.936v-6.451h1.29v6.451h1.936v-1.29h1.29v1.29h1.936v-2.58h1.29v2.58h1.935v-3.226h1.29v4.517H9.679Zm1.29-14.839c0-1.097.839-1.936 1.935-1.936a1.9 1.9 0 0 1 1.936 1.936 1.941 1.941 0 0 1-1.936 1.935 1.941 1.941 0 0 1-1.935-1.935Zm10.064 4.516h2.84v1.29h-7.743v-1.29h3.484l4.968-10.58 1.161.58-4.71 10Zm6.065-6.451a1.9 1.9 0 0 1 1.935 1.935 1.941 1.941 0 0 1-1.935 1.935 1.941 1.941 0 0 1-1.936-1.935 1.9 1.9 0 0 1 1.936-1.936Zm4.194 3.87v-.645c0-6.258-5.033-11.29-11.29-11.29A11.261 11.261 0 0 0 8.71 20.486v.645H4.194v-.645C4.194 11.776 11.29 4.68 20 4.68c8.71 0 15.807 7.097 15.807 15.806v.645H31.29Z"></path><path d="M35.806 20.486v.645H31.29v-.645c0-6.193-5.032-11.29-11.29-11.29-6.258 0-11.29 5.097-11.29 11.29v.645H4.192v-.645C4.193 11.776 11.29 4.68 20 4.68s15.806 7.097 15.806 15.806Zm-3.225-.645h1.935c-.13-3.548-1.548-6.71-3.806-9.161l-1.355 1.42c1.87 2.064 3.032 4.773 3.226 7.741Zm-4.194-8.71 1.355-1.354a14.152 14.152 0 0 0-9.097-3.742V7.97a12.292 12.292 0 0 1 7.742 3.162Zm-9.032-3.16V6.034c-3.549.129-6.71 1.548-9.162 3.806l1.355 1.355a12.324 12.324 0 0 1 7.807-3.226Zm-8.71 4.128L9.29 10.744c-2.193 2.388-3.613 5.549-3.806 9.097h1.935c.194-2.968 1.355-5.677 3.226-7.742Z" fill="#0B3B51"></path><path d="M34.516 19.841h-1.935c-.13-2.968-1.355-5.677-3.226-7.742l1.355-1.355c2.193 2.388 3.613 5.549 3.806 9.097Z" fill="#0B3B51"></path><path d="M20 .486c11.032 0 20 8.968 20 20 0 11.033-8.968 20-20 20s-20-8.967-20-20c0-11.032 8.968-20 20-20Zm18.71 20c0-10.322-8.387-18.71-18.71-18.71S1.29 10.165 1.29 20.487c0 5.807 2.645 10.968 6.839 14.452A18.665 18.665 0 0 0 20 39.196c4.194 0 8.064-1.42 11.161-3.742 4.58-3.42 7.549-8.839 7.549-14.968Z" fill="#0B3B51"></path><path d="M30.322 29.519v4.516H9.677v-7.097h1.29v5.806h1.936V29.52h1.29v3.225h1.936v-4.516h1.29v4.516h1.936v-6.451h1.29v6.451h1.936v-1.29h1.29v1.29h1.935v-2.58h1.29v2.58h1.936V29.52h1.29Z" fill="#0B3B51"></path><path d="m29.806 9.777-1.419 1.354c-2.065-1.87-4.774-3.096-7.742-3.225V5.97c3.548.194 6.71 1.613 9.161 3.807Z"></path><path d="M27.097 17.26c1.096 0 1.935.904 1.935 1.936a1.941 1.941 0 0 1-1.935 1.935 1.941 1.941 0 0 1-1.936-1.935c0-1.032.839-1.936 1.936-1.936Zm.645 1.936c0-.323-.323-.645-.645-.645-.323 0-.646.322-.646.645s.323.645.646.645c.322 0 .645-.322.645-.645ZM25.742 13.648l-4.71 10.064h2.839v1.29h-7.742v-1.29h3.484l4.968-10.58 1.16.516ZM19.355 6.035V7.97c-2.968.13-5.677 1.355-7.742 3.226l-1.355-1.355a13.885 13.885 0 0 1 9.097-3.806ZM12.903 17.26c1.032 0 1.936.904 1.936 1.936s-.904 1.935-1.936 1.935-1.935-.903-1.935-1.935.903-1.936 1.935-1.936Zm.645 1.936c0-.323-.322-.645-.645-.645-.322 0-.645.322-.645.645s.323.645.645.645c.323 0 .645-.322.645-.645Z" fill="#0B3B51"></path><path d="m9.29 10.68 1.355 1.355c-1.87 2.064-3.097 4.774-3.226 7.742H5.484c.193-3.484 1.613-6.646 3.806-9.097ZM20 35.97c2.71 0 5.29-.71 7.484-1.935H12.516A15.377 15.377 0 0 0 20 35.97Z"></path><path d="M31.29 21.131v-.645c0-6.258-5.032-11.29-11.29-11.29a11.261 11.261 0 0 0-11.29 11.29v.645H4.516a15.506 15.506 0 0 0 5.161 10.904v-5.097h1.29v5.806h1.936V29.52h1.29v3.225h1.936v-4.516h1.29v4.516h1.936v-6.451h1.29v6.451h1.936v-1.29h1.29v1.29h1.935v-2.58h1.29v2.58h1.936V29.52h1.29v2.516a15.506 15.506 0 0 0 5.162-10.903H31.29Zm-18.387 0a1.941 1.941 0 0 1-1.935-1.935 1.9 1.9 0 0 1 1.935-1.936 1.9 1.9 0 0 1 1.936 1.936 1.941 1.941 0 0 1-1.936 1.935Zm10.968 3.871h-7.742v-1.29h3.484l4.968-10.58 1.16.58-4.709 10h2.839v1.29Zm3.226-3.87a1.941 1.941 0 0 1-1.936-1.936 1.9 1.9 0 0 1 1.936-1.936 1.9 1.9 0 0 1 1.935 1.936 1.941 1.941 0 0 1-1.935 1.935Z"></path></g><defs><clipPath id="a"><path transform="translate(0 .486)" d="M0 0h40v40H0z"></path></clipPath></defs></svg>`;
}, "/home/loweffort/Escritorio/fanaweb/src/icons/Services/Speedometer.astro", undefined);

const $$Painting = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M25.2192 25.7482C25.6487 25.7482 25.9968 25.4 25.9968 24.9705C25.9968 24.541 25.6487 24.1929 25.2192 24.1929H24.4818V23.2319C24.4818 22.8024 24.1337 22.4543 23.7041 22.4543H19.1627C18.7332 22.4543 18.3851 22.8024 18.3851 23.2319V23.4114H17.7013L16.2492 19.2403L19.2968 15.3645C19.4569 15.1611 19.5052 14.8913 19.4256 14.645L14.8718 0.538722C14.8085 0.342494 14.6697 0.179361 14.4861 0.0854378C14.3025 -0.00857148 14.0891 -0.0257662 13.8929 0.0376555L2.48344 3.72087C2.28722 3.7842 2.12408 3.92297 2.03016 4.10658C1.93615 4.29019 1.91895 4.50353 1.98229 4.69984L6.53621 18.806C6.6157 19.0523 6.81262 19.2429 7.06147 19.3145L11.8311 20.6856L12.7805 23.4114H10.2688C9.47832 23.4114 8.75148 23.7517 8.24747 24.3133H5.66792C5.2384 24.3133 4.89027 24.6614 4.89027 25.091C4.89027 25.5205 5.2384 25.8686 5.66792 25.8686H7.49324L3.17322 38.9789C3.09511 39.2159 3.13546 39.4759 3.28174 39.678C3.42794 39.8802 3.66227 39.9999 3.91181 39.9999C7.43794 39.9999 10.556 37.7523 11.6707 34.4071L13.2173 29.7657C13.4079 29.1938 13.879 28.776 14.4477 28.6433C14.6365 30.7669 15.554 32.7387 17.0799 34.2645L17.5499 34.7346C17.7017 34.8864 17.9008 34.9624 18.0998 34.9624C18.2988 34.9624 18.4978 34.8864 18.6497 34.7346C18.9534 34.4309 18.9534 33.9385 18.6497 33.6348L18.1796 33.1648C16.937 31.9222 16.181 30.3229 16.0057 28.598H18.3851V28.7775C18.3851 29.2071 18.7332 29.5552 19.1627 29.5552H23.7041C24.1337 29.5552 24.4818 29.2071 24.4818 28.7775V27.8166H25.2192C25.6487 27.8166 25.9968 27.4685 25.9968 27.039C25.9968 26.6094 25.6487 26.2613 25.2192 26.2613H24.4818V25.748H25.2192V25.7482ZM13.6306 1.75661L13.9857 2.85646L4.05637 6.06194L3.70133 4.96208L13.6306 1.75661ZM7.88906 17.9341L4.53419 7.54198L14.4635 4.33651L17.8184 14.7286L14.9099 18.4274L12.419 19.2363L7.88906 17.9341ZM13.4285 20.5438L14.8909 20.0689L16.0544 23.4113H14.4272L13.4285 20.5438ZM10.1951 33.9155C9.41101 36.2686 7.40295 37.9511 5.0172 38.3525L8.2314 28.5982H12.0568C11.9284 28.8075 11.822 29.0336 11.7418 29.274L10.1951 33.9155ZM8.74387 27.0429L9.16493 25.7652C9.32227 25.2876 9.76588 24.9667 10.2688 24.9667H18.3852V27.0429H8.74387ZM22.9265 28.0001H19.9404V24.0096H22.9265V28.0001Z" fill="#0B3B51"></path> <path d="M37.7145 31.9674L28.9364 26.0049L37.7144 20.0423C38.0697 19.801 38.1621 19.3174 37.9207 18.9621C37.6794 18.6069 37.1957 18.5144 36.8405 18.7558L27.1154 25.3616C26.9023 25.5063 26.7747 25.7472 26.7747 26.0049C26.7747 26.2625 26.9023 26.5034 27.1154 26.6481L36.8405 33.2539C36.9743 33.3448 37.1263 33.3884 37.2767 33.3884C37.5257 33.3884 37.7703 33.2691 37.9207 33.0476C38.1621 32.6923 38.0698 32.2087 37.7145 31.9674Z" fill="#0B3B51"></path> </svg>`;
}, "/home/loweffort/Escritorio/fanaweb/src/icons/Services/Painting.astro", undefined);

const $$Brake = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="41" height="40" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="#0B3B51"><path d="M40.399 17.786a18.125 18.125 0 0 0-8.022-11.43 18.234 18.234 0 0 0-8.407-2.795 3.54 3.54 0 0 0-.188-.871A3.46 3.46 0 0 0 20.858.386L17.55.039a6.01 6.01 0 0 0-4.898 1.735L2.61 11.817a6.01 6.01 0 0 0-1.735 4.897l.347 3.307a3.46 3.46 0 0 0 2.304 2.924c.287.102.58.165.872.19a18.24 18.24 0 0 0 8.406 14.018 18.133 18.133 0 0 0 9.757 2.841c6.038 0 11.955-2.99 15.428-8.453a18.127 18.127 0 0 0 2.41-13.755Zm-31.644 2.74 4.079-4.078a.826.826 0 0 0 1.083-.286.832.832 0 0 0 .037-.835L16.58 12.7a.835.835 0 0 0 .925.074.832.832 0 0 0 .242-1.24l3.614-3.615a13.73 13.73 0 0 1 8.678 2.114c6.463 4.107 8.38 12.708 4.272 19.171-1.99 3.131-5.08 5.3-8.701 6.106-3.621.807-7.34.155-10.47-1.835-2.231-1.418-4.001-3.425-5.119-5.806a13.933 13.933 0 0 1-1.267-7.143Zm-5.88-.678L2.53 16.54a4.355 4.355 0 0 1 1.257-3.548L13.829 2.95a4.355 4.355 0 0 1 3.548-1.257l3.307.346c.717.076 1.29.526 1.53 1.206.241.68.08 1.39-.43 1.9L5.981 20.948c-.51.51-1.22.67-1.9.43a1.788 1.788 0 0 1-1.205-1.53Zm33.71 10.801c-3.156 4.965-8.533 7.683-14.022 7.683-3.04 0-6.116-.834-8.867-2.583a16.58 16.58 0 0 1-7.65-12.873 3.5 3.5 0 0 0 .999-.645c.066 2.118.564 4.21 1.472 6.145a15.504 15.504 0 0 0 5.731 6.503 15.445 15.445 0 0 0 11.724 2.055 15.45 15.45 0 0 0 9.744-6.838c4.599-7.237 2.453-16.867-4.784-21.467a15.61 15.61 0 0 0-7.868-2.419c.277-.3.494-.64.647-1.002a16.568 16.568 0 0 1 7.774 2.552 16.473 16.473 0 0 1 7.29 10.388 16.475 16.475 0 0 1-2.19 12.501Z"></path><path d="M18.113 28.799a8.291 8.291 0 0 0 6.293 1.103 8.292 8.292 0 0 0 5.23-3.67 8.293 8.293 0 0 0 1.102-6.293 8.292 8.292 0 0 0-3.67-5.23c-3.885-2.469-9.054-1.317-11.523 2.567-2.469 3.885-1.317 9.054 2.568 11.523Zm-1.164-10.63A6.685 6.685 0 0 1 22.6 15.07c1.226 0 2.466.337 3.575 1.042a6.64 6.64 0 0 1 2.939 4.187 6.64 6.64 0 0 1-.883 5.04 6.64 6.64 0 0 1-4.188 2.939 6.641 6.641 0 0 1-5.04-.883 6.692 6.692 0 0 1-2.055-9.228ZM32.862 26.17a.83.83 0 1 0 .543-1.569.83.83 0 0 0-.543 1.568ZM31.57 15.971a.833.833 0 0 0 .67-1.325.832.832 0 1 0-.67 1.325ZM33.612 20.9a.83.83 0 1 0 .002-1.66.83.83 0 0 0-.002 1.66ZM20.435 31.848a.83.83 0 1 0-.35 1.624.83.83 0 0 0 .35-1.624ZM25.37 31.691a.832.832 0 1 0 .448 1.602.832.832 0 0 0-.448-1.602ZM29.67 29.263a.833.833 0 0 0 1.142 1.21.83.83 0 1 0-1.141-1.21ZM15.99 29.69a.832.832 0 1 0-1.062 1.28.832.832 0 0 0 1.063-1.28ZM27.09 12.468l.013.006a.832.832 0 1 0 .727-1.496l-.008-.003c-.002 0-.002 0-.003-.002a.832.832 0 0 0-.73 1.495ZM11.974 25.266a.831.831 0 1 0 .638 1.536.831.831 0 0 0-.638-1.536ZM11.407 21.587l.075.003a.832.832 0 1 0-.075-.003ZM22.235 11.439l.028-.001a.83.83 0 1 0-.028 0Z"></path><path d="M19.524 26.578a5.678 5.678 0 0 0 4.309.755 5.679 5.679 0 0 0 3.581-2.513 5.68 5.68 0 0 0 .755-4.309 5.679 5.679 0 0 0-2.513-3.581 5.722 5.722 0 0 0-7.89 1.758 5.722 5.722 0 0 0 1.758 7.89Zm-.355-6.998a4.053 4.053 0 0 1 5.595-1.247 4.026 4.026 0 0 1 1.782 2.54 4.027 4.027 0 0 1-.535 3.055 4.026 4.026 0 0 1-2.54 1.782 4.027 4.027 0 0 1-3.055-.535 4.058 4.058 0 0 1-1.247-5.595ZM7.06 16.944c.574 0 1.114-.223 1.52-.63.406-.406.63-.945.63-1.52 0-.574-.224-1.114-.63-1.52a2.136 2.136 0 0 0-1.52-.63c-.575 0-1.114.224-1.52.63-.406.406-.63.946-.63 1.52 0 .575.224 1.114.63 1.52.406.407.945.63 1.52.63Zm-.344-2.494a.484.484 0 0 1 .688 0 .484.484 0 0 1 0 .689.484.484 0 0 1-.688 0 .484.484 0 0 1 0-.689ZM15.63 8.374c.575 0 1.115-.224 1.52-.63.407-.406.63-.946.63-1.52 0-.574-.223-1.114-.63-1.52a2.136 2.136 0 0 0-1.52-.63c-.574 0-1.114.224-1.52.63-.405.406-.629.946-.629 1.52 0 .574.223 1.114.63 1.52.405.406.945.63 1.52.63Zm-.344-2.494a.483.483 0 0 1 .689 0 .484.484 0 0 1 0 .688.484.484 0 0 1-.689 0 .484.484 0 0 1 0-.688Z"></path></g><defs><clipPath id="a"><path fill="#fff" transform="translate(.842)" d="M0 0h40v40H0z"></path></clipPath></defs></svg>`;
}, "/home/loweffort/Escritorio/fanaweb/src/icons/Services/Brake.astro", undefined);

const $$Transmission = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="45" height="40" fill="none" xmlns="http://www.w3.org/2000/svg"><g><mask id="b" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="24" y="31" width="6" height="6"><path d="M24.186 31.266h5.615v5.614h-5.615v-5.614Z"></path></mask><g mask="url(#b)"><mask id="c" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="24" y="31" width="6" height="6"><path fill-rule="evenodd" clip-rule="evenodd" d="M29.787 34.073c0-1.545-1.258-2.8-2.8-2.8a2.804 2.804 0 0 0-2.799 2.8c0 1.545 1.255 2.8 2.8 2.8s2.8-1.255 2.8-2.8Z"></path></mask><g mask="url(#c)"><path d="M24.188 31.273v5.6h5.6v-5.6h-5.6Z" fill="#0B3B51"></path></g></g><mask id="d" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="6" y="9" width="32" height="27"><path d="M6.747 9.119h30.725v26.408H6.747V9.12Z"></path></mask><g mask="url(#d)"><mask id="e" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="6" y="9" width="32" height="27"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.693 33.448a.61.61 0 1 1 0 1.218H12.46a.62.62 0 0 1-.432-.178L8.17 30.63a.612.612 0 0 1-.178-.433v-4.85a.61.61 0 1 1 1.221 0v4.599l3.502 3.502h3.978Zm15.184-4.107a6.78 6.78 0 0 1 1.915 4.728c0 .497-.054.981-.155 1.448h.23c.353 0 .64-.288.64-.64v-2.364a.61.61 0 0 1 .612-.61h1.058c.712 0 1.29-.579 1.29-1.292v-7.12c0-.713-.577-1.291-1.29-1.291h-1.058a.608.608 0 0 1-.373-.126l-3.457-2.005c-.668.8-1.67 1.31-2.789 1.31a3.636 3.636 0 0 1-3.633-3.633 3.638 3.638 0 0 1 2.63-3.492v-3.842c0-.713-.578-1.292-1.292-1.292H11.246c-.712 0-1.29.578-1.29 1.292v1.417a.61.61 0 0 1-.612.611H7.388a.641.641 0 0 0-.64.64V31l4.52 4.52h9.072a6.801 6.801 0 0 1-.153-1.26L10.153 19.382a4.217 4.217 0 0 1-1.103-2.848 4.237 4.237 0 0 1 4.232-4.233c1.323 0 2.505.61 3.282 1.561l.006.006L31.824 29.28c.019.02.037.04.053.061Z"></path></mask><g mask="url(#e)"><path d="M6.748 9.12v26.4h30.72V9.12H6.748Z"></path></g></g><mask id="f" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="12" y="16" width="17" height="17"><path d="M12.51 16.56h15.708v15.829H12.51v-15.83Z"></path></mask><g mask="url(#f)"><mask id="g" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="12" y="16" width="17" height="17"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.395 32.386c.75-2.94 3.421-5.12 6.593-5.12.42 0 .83.038 1.23.11L17.515 16.566a4.237 4.237 0 0 1-5.004 4.133l7.884 11.688Z"></path></mask><g mask="url(#g)"><path d="M12.511 16.565v15.821h15.707V16.565H12.51Z"></path></g></g><mask id="h" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="12" y="15" width="3" height="3"><path d="M12.294 15.545h1.975v1.975h-1.975v-1.975Z"></path></mask><g mask="url(#h)"><mask id="i" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="12" y="15" width="3" height="3"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.282 17.516a.982.982 0 1 0-.001-1.964.982.982 0 0 0 .001 1.964Z"></path></mask><g mask="url(#i)"><path d="M12.3 15.553v1.963h1.964v-1.963H12.3Z"></path></g></g><mask id="j" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="10" y="13" width="7" height="7"><path d="M10.265 13.516h6.034v6.033h-6.034v-6.033Z"></path></mask><g mask="url(#j)"><mask id="k" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="10" y="13" width="7" height="7"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.282 19.546a3.012 3.012 0 0 0 0-6.022 3.015 3.015 0 0 0-3.01 3.011c0 .787.302 1.504.797 2.04l.015.017c.55.587 1.332.954 2.198.954Zm0-5.21c1.214 0 2.204.989 2.204 2.203a2.207 2.207 0 0 1-2.204 2.203 2.207 2.207 0 0 1-2.203-2.203c0-1.214.99-2.203 2.203-2.203Z"></path></mask><g mask="url(#k)"><path d="M10.271 13.524v6.022h6.022v-6.022h-6.021Z"></path></g></g><mask id="l" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="26" y="15" width="5" height="6"><path d="M26.08 15.329h4.844v4.83H26.08v-4.83Z"></path></mask><g mask="url(#l)"><mask id="m" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="26" y="15" width="5" height="6"><path fill-rule="evenodd" clip-rule="evenodd" d="M28.5 15.335a2.412 2.412 0 0 0 0 4.822 2.41 2.41 0 1 0 0-4.822Z" fill="#fff"></path></mask><g mask="url(#m)"><path d="M26.09 15.335v4.822h4.821v-4.822H26.09Z"></path></g></g><mask id="n" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="28" y="12" width="7" height="9"><path d="M28.718 12.433h5.79v8.09h-5.79v-8.09Z"></path></mask><g mask="url(#n)"><mask id="o" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="28" y="12" width="7" height="9"><path fill-rule="evenodd" clip-rule="evenodd" d="M28.718 14.12a3.636 3.636 0 0 1 3.186 4.892l2.604 1.51V13.08a.641.641 0 0 0-.64-.64h-5.15v1.68Z" fill="#fff"></path></mask><g mask="url(#o)"><path d="M28.718 12.44v8.082h5.79V12.44h-5.79Z"></path></g></g><mask id="p" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="12" y="2" width="13" height="4"><path d="M12.808 2.083h11.838V5.67H12.808V2.083Z"></path></mask><g mask="url(#p)"><mask id="q" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="12" y="2" width="13" height="4"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.737 5.666h9.898V3.881c0-.986-.8-1.786-1.786-1.786H14.6c-.986 0-1.786.8-1.786 1.786v1.785h1.924Z" fill="#fff"></path></mask><g mask="url(#q)"><path d="M12.813 2.095v3.571h11.822V2.095H12.813Z"></path></g></g><mask id="r" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="40" y="21" width="5" height="12"><path d="M40.908 21.132h3.585V32.97h-3.585V21.132Z"></path></mask><g mask="url(#r)"><mask id="s" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="40" y="21" width="5" height="12"><path fill-rule="evenodd" clip-rule="evenodd" d="M40.919 23.98v6.138a.706.706 0 0 1 0 .143v2.7h1.785c.986 0 1.785-.8 1.785-1.786v-8.25c0-.986-.8-1.787-1.785-1.787h-1.785v2.7a.706.706 0 0 1 0 .143Z" fill="#fff"></path></mask><g mask="url(#s)"><path d="M40.919 21.139V32.96h3.57V21.139h-3.57Z" fill="#fff"></path></g></g><mask id="t" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="38" y="24" width="2" height="6"><path d="M38.69 24.52h1.01v5.059h-1.01V24.52Z" fill="#fff"></path></mask><g mask="url(#t)"><path d="M38.69 24.52v5.059h1.01V24.52h-1.01Z" fill="#fff"></path></g><mask id="u" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="15" y="6" width="8" height="2"><path d="M15.338 6.886h6.764v1.015h-6.764V6.886Z" fill="#fff"></path></mask><g mask="url(#u)"><mask id="v" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="15" y="6" width="8" height="2"><path fill-rule="evenodd" clip-rule="evenodd" d="m15.348 7.9 6.753-.001V6.888h-6.753v1.011Z" fill="#fff"></path></mask><g mask="url(#v)"><path d="M15.348 6.888v1.011H22.1V6.888h-6.753Z" fill="#fff"></path></g></g><mask id="w" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="21" y="28" width="12" height="12"><path d="M21.399 28.479h11.175v11.175H21.399V28.479Z" fill="#fff"></path></mask><g mask="url(#w)"><mask id="x" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="21" y="28" width="12" height="12"><path fill-rule="evenodd" clip-rule="evenodd" d="M22.966 34.073a4.025 4.025 0 0 1 4.022-4.018 4.022 4.022 0 0 1 4.018 4.018 4.024 4.024 0 0 1-4.018 4.018 4.025 4.025 0 0 1-4.022-4.018Zm4.022-5.585a5.59 5.59 0 0 0-5.582 5.581 5.59 5.59 0 0 0 5.582 5.583 5.59 5.59 0 0 0 5.582-5.583 5.59 5.59 0 0 0-5.582-5.581Z" fill="#fff"></path></mask><g mask="url(#x)"><path d="M21.406 28.488v11.164H32.57V28.488H21.406Z" fill="#fff"></path></g></g><mask id="y" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="45" height="40"><path d="M.158 0h44.683v40H.158V0Z" fill="#fff"></path></mask><g mask="url(#y)"><path fill-rule="evenodd" clip-rule="evenodd" d="M29.687 18.124a2.41 2.41 0 1 1-4.12-2.501 2.41 2.41 0 0 1 4.12 2.5ZM11.94 4.793h11.822V3.007c0-.985-.8-1.785-1.786-1.785h-8.25c-.987 0-1.786.8-1.786 1.785v1.786Zm3.88 29h-4.233a.618.618 0 0 1-.433-.178l-3.858-3.858a.613.613 0 0 1-.178-.433v-4.85a.61.61 0 1 1 1.222 0v4.6l3.502 3.5h3.978a.61.61 0 1 1 0 1.219ZM26.114 30.4c1.542 0 2.8 1.255 2.8 2.8s-1.254 2.8-2.8 2.8a2.801 2.801 0 0 1-2.8-2.8c0-1.545 1.259-2.8 2.8-2.8Zm0 6.818a4.024 4.024 0 0 1-4.021-4.018 4.025 4.025 0 0 1 4.021-4.018 4.022 4.022 0 0 1 4.019 4.018 4.024 4.024 0 0 1-4.019 4.018Zm0-9.604a5.59 5.59 0 0 1 5.582 5.582 5.59 5.59 0 0 1-5.582 5.582 5.59 5.59 0 0 1-5.582-5.581 5.59 5.59 0 0 1 5.582-5.583ZM12.41 14.68a.982.982 0 1 1 0 1.963.982.982 0 0 1 0-1.963Zm0 3.189a2.207 2.207 0 0 1-2.204-2.203c0-1.215.99-2.204 2.204-2.204 1.214 0 2.203.99 2.203 2.204a2.207 2.207 0 0 1-2.203 2.203Zm0-5.218a3.012 3.012 0 0 1 0 6.022 3.012 3.012 0 0 1-3.011-3.011 3.015 3.015 0 0 1 3.011-3.01Zm0 7.244a4.236 4.236 0 0 0 4.232-4.204l10.704 10.813c-.4-.073-.81-.111-1.23-.111-3.173 0-5.843 2.179-6.593 5.12l-7.884-11.689c.25.046.508.07.771.07Zm27.636 12.192h1.785c.986 0 1.786-.8 1.786-1.785v-8.25c0-.987-.8-1.787-1.786-1.787h-1.785v2.7a.679.679 0 0 1 0 .142v6.138a.676.676 0 0 1 0 .142v2.7Zm-2.23-8.44v5.058h1.012v-5.058h-1.011ZM14.476 7.026h6.752V6.015h-6.753v1.01Zm18.52 28.84h-.622A6.812 6.812 0 0 1 26.114 40a6.812 6.812 0 0 1-6.256-4.131h-9.715a.619.619 0 0 1-.432-.178l-4.88-4.88a.612.612 0 0 1-.179-.433v-8.476H1.38v4.473a.61.61 0 1 1-1.222 0V16.207a.61.61 0 0 1 .611-.61.61.61 0 0 1 .611.61v4.473h3.272v-8.473c0-1.025.837-1.862 1.862-1.862H7.86v-.807a2.515 2.515 0 0 1 2.512-2.512h2.88V6.015H11.33a.61.61 0 0 1-.611-.611V3.007A3.01 3.01 0 0 1 13.725 0h8.251a3.01 3.01 0 0 1 3.008 3.007v2.397a.61.61 0 0 1-.612.61H22.45v1.012h2.884a2.516 2.516 0 0 1 2.512 2.512v.807h5.15c1.024 0 1.861.837 1.861 1.862v7.899h.447a2.516 2.516 0 0 1 2.506 2.32h1.018v-2.77a.61.61 0 0 1 .611-.612h2.396a3.01 3.01 0 0 1 3.007 3.007v8.25a3.01 3.01 0 0 1-3.007 3.008h-2.396a.61.61 0 0 1-.61-.61v-2.772h-1.02a2.516 2.516 0 0 1-2.505 2.323h-.447v1.754a1.865 1.865 0 0 1-1.862 1.861Zm-5.15-24.299h5.15c.352 0 .64.287.64.64v7.441l-2.604-1.51a3.636 3.636 0 0 0-3.186-4.892v-1.679Zm6.028 9.634-3.458-2.005a3.628 3.628 0 0 1-6.42-2.323 3.638 3.638 0 0 1 2.628-3.492V9.539c0-.712-.578-1.29-1.29-1.29h-14.96c-.713 0-1.291.577-1.291 1.29v1.418a.61.61 0 0 1-.611.611H6.514a.641.641 0 0 0-.64.64v17.92l4.52 4.52h9.073a6.79 6.79 0 0 1-.153-1.26L9.279 18.51a4.217 4.217 0 0 1-1.103-2.848 4.237 4.237 0 0 1 4.233-4.233c1.322 0 2.503.609 3.28 1.56l.007.007 15.255 15.411c.02.02.038.041.054.063a6.78 6.78 0 0 1 1.758 6.173h.231c.353 0 .64-.287.64-.64V31.64a.61.61 0 0 1 .611-.611h1.058c.713 0 1.291-.578 1.291-1.291v-7.12c0-.713-.578-1.291-1.29-1.291h-1.059a.61.61 0 0 1-.372-.126Z" fill="#0B3B51"></path></g></g><defs><clipPath id="a"><path fill="#fff" transform="translate(.158)" d="M0 0h44.683v40H0z"></path></clipPath></defs></svg>`;
}, "/home/loweffort/Escritorio/fanaweb/src/icons/Services/Transmission.astro", undefined);

const $$Astro$1 = createAstro();
const $$CardServices = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardServices;
  const { image, title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-accent flex flex-col justify-center items-center text-center px-2 py-8 md:p-8 rounded-xl gap-4"> <div class="aspect-square flex items-center"> ${image === "Battery" && renderTemplate`${renderComponent($$result, "Battery", $$Battery, {})}`} ${image === "Oil" && renderTemplate`${renderComponent($$result, "Oil", $$Oil, {})}`} ${image === "Speedometer" && renderTemplate`${renderComponent($$result, "Speedometer", $$Speedometer, {})}`} ${image === "Paint" && renderTemplate`${renderComponent($$result, "Paint", $$Painting, {})}`} ${image === "Brake" && renderTemplate`${renderComponent($$result, "Brake", $$Brake, {})}`} ${image === "Transmission" && renderTemplate`${renderComponent($$result, "Transmission", $$Transmission, {})}`} </div> <div> <h3 class="text-primary text-small md:text-base">${title}</h3> <p class="text-text max-md:hidden">${description}</p> </div> </div>`;
}, "/home/loweffort/Escritorio/fanaweb/src/sections/IndexPage/Services/CardServices.astro", undefined);

const $$Services = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="px-2 md:px-8 my-16 flex flex-col gap-6 md:gap-16"> <div> <p class="text-base md:text-medium text-center text-secondary">
Lo que ofrecemos
</p> <h2 class="text-h3 md:text-h2 text-center">
Accede a Todos Nuestros Servicios Sin Salir de Casa
</h2> </div> <div class="grid grid-cols-2 md:grid-cols-3 md:grid-rows-2 gap-8 md:px-16"> ${ServicesData.map((service) => renderTemplate`${renderComponent($$result, "CardServices", $$CardServices, { "image": service.image, "title": service.title, "description": service.description })}`)} </div> </section>`;
}, "/home/loweffort/Escritorio/fanaweb/src/sections/IndexPage/Services/Services.astro", undefined);

const $$CheckCircle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M10.625 15.625L13.125 18.125L19.375 11.875" stroke="#0B3B51" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M8.75 4.17228C10.5886 3.10871 12.7232 2.5 15 2.5C21.9035 2.5 27.5 8.09644 27.5 15C27.5 21.9035 21.9035 27.5 15 27.5C8.09644 27.5 2.5 21.9035 2.5 15C2.5 12.7232 3.10871 10.5886 4.17228 8.75" stroke="#0B3B51" stroke-width="2" stroke-linecap="round"></path> </svg>`;
}, "/home/loweffort/Escritorio/fanaweb/src/icons/Extra/check-circle.astro", undefined);

const $$Tech = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="px-2 md:px-8 my-16 flex flex-col gap-6 md:gap-16"> <div class="grid md:grid-cols-2 items-center gap-0"> <img src="/techplatform.png" alt="Image Carousel" class="rounded-xl object-cover"> <div> <h3 class="pb-4">Plataforma Tecnológica</h3> <article>${TechData.description}</article> <ul class="list-none px-2 md:px-5 flex flex-col gap-4 pt-3"> <li class="flex gap-2"> <div class="aspect-square"> ${renderComponent($$result, "CheckCircleArrow", $$CheckCircle, {})} </div> ${TechData.bulletOne} </li> <li class="flex gap-2"> <div class="aspect-square"> ${renderComponent($$result, "CheckCircleArrow", $$CheckCircle, {})} </div> ${TechData.bulletTwo} </li> <li class="flex gap-2"> <div class="aspect-square"> ${renderComponent($$result, "CheckCircleArrow", $$CheckCircle, {})} </div> ${TechData.bulletThree} </li> <li class="flex gap-2"> <div class="aspect-square"> ${renderComponent($$result, "CheckCircleArrow", $$CheckCircle, {})} </div> ${TechData.bulletFour} </li> </ul> </div> </div> </section>`;
}, "/home/loweffort/Escritorio/fanaweb/src/sections/IndexPage/Tech/Tech.astro", undefined);

const $$CallToAction = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-primary flex flex-col items-center justify-center my-8 p-8 gap-4 md:gap-8 rounded-xl"> <h2 class="text-h3 text-background text-center md:text-h2">
¡Empieza a gestionar tus mantenimientos y reparaciones con Fana desde hoy!
</h2> ${renderComponent($$result, "MainButton", $$MainButton, { "scale": true }, { "default": ($$result2) => renderTemplate` ¡Únete a nuestra cartera de clientes! ` })} </section>`;
}, "/home/loweffort/Escritorio/fanaweb/src/sections/IndexPage/CallToAction/CallToAction.astro", undefined);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-primary grid grid-cols-1 md:grid-cols-4 md:flex-row items-center justify-center mt-8 py-8 px-8 gap-4 md:gap-8"> <div> <img src="Logo.svg" alt="logo" class="h-10 cursor-pointer max-md:h-7 mb-3"> <p class="text-small text-background mb-4">
Experiencia, tecnología y confianza en un sólo lugar.
</p> </div> <div> <h3 class="text-base text-background md:text-h3">Servicios</h3> <ul class="text-background *:mb-2"> <li class="hover:cursor-pointer hover:underline">
Plataforma Tecnológica
</li> <li class="hover:cursor-pointer hover:underline">Repuestos</li> <li class="hover:cursor-pointer hover:underline">Blog</li> </ul> </div> <div> <h3 class="text-base text-background md:text-h3">Empresa</h3> <ul class="text-background *:mb-2"> <li class="hover:cursor-pointer hover:underline">Acerca de Nosotros</li> <li class="hover:cursor-pointer hover:underline">Carreras</li> <li class="hover:cursor-pointer hover:underline">Contacto</li> </ul> </div> <div> <h3 class="text-base text-background md:text-h3">Recursos</h3> <ul class="text-background *:mb-2"> <li class="hover:cursor-pointer hover:underline">Centro de Ayuda</li> <li class="hover:cursor-pointer hover:underline">
Términos y Condiciones
</li> <li class="hover:cursor-pointer hover:underline">
Políticas de privacidad
</li> </ul> </div> </section>`;
}, "/home/loweffort/Escritorio/fanaweb/src/sections/IndexPage/Footer/Footer.astro", undefined);

const $$BackLines = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="fixed h-screen -z-20 grid grid-cols-2 w-2/5 left-1/2 -translate-x-1/2" data-astro-cid-3aoyknvw> <div class="h-screen absolute w-1 bg-gray-200" data-astro-cid-3aoyknvw> <div class="moving-down bg-red-500" id="div1" data-astro-cid-3aoyknvw></div> <div class="moving-down bg-red-950" id="div2" data-astro-cid-3aoyknvw></div> <div class="moving-down bg-red-500" id="div3" data-astro-cid-3aoyknvw></div> <div class="moving-down bg-red-950" id="div4" data-astro-cid-3aoyknvw> <div class="w-full h-full translate-y-[calc(400%)] bg-red-500 dummy-line" data-astro-cid-3aoyknvw> <div class="w-full h-full translate-y-[calc(400%)] bg-red-950 dummy-line" data-astro-cid-3aoyknvw> <div class="w-full h-full translate-y-[calc(400%)] bg-red-500 dummy-line" data-astro-cid-3aoyknvw></div> </div> </div> </div> </div> <div class="h-screen absolute w-1 bg-gray-200 justify-self-end" data-astro-cid-3aoyknvw> <div class="moving-up bg-red-500" id="div5" data-astro-cid-3aoyknvw></div> <div class="moving-up bg-red-950" id="div6" data-astro-cid-3aoyknvw></div> <div class="moving-up bg-red-500" id="div7" data-astro-cid-3aoyknvw></div> <div class="moving-up bg-red-950" id="div8" data-astro-cid-3aoyknvw> <div class="w-full h-full -translate-y-[calc(400%)] bg-red-500 dummy-line" data-astro-cid-3aoyknvw> <div class="w-full h-full -translate-y-[calc(400%)] bg-red-950 dummy-line" data-astro-cid-3aoyknvw> <div class="w-full h-full -translate-y-[calc(400%)] bg-red-500 dummy-line" data-astro-cid-3aoyknvw></div> </div> </div> </div> </div> </section> `;
}, "/home/loweffort/Escritorio/fanaweb/src/components/BackLines.astro", undefined);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BackLines", $$BackLines, {})} ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${maybeRenderHead()}<div class="w-10 h-10 max-sm:bg-red-300 max-md:bg-blue-300 max-lg:bg-green-300 lg:bg-yellow-300 fixed"></div> <main class="margin-container transition-all"> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Form", $$Form, {})} ${renderComponent($$result2, "Advantages", $$Advantages, { "colorIcon": "black" })} </main> ${renderComponent($$result2, "Banner", $$Banner, {})} <main class="margin-container"> ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "Tech", $$Tech, {})} ${renderComponent($$result2, "CallToAction", $$CallToAction, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/loweffort/Escritorio/fanaweb/src/pages/index.astro", undefined);

const $$file = "/home/loweffort/Escritorio/fanaweb/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
