"use strict";

/* Dia 1*/
/* 1- Prueba mostrar formulario nuevo bookmark */
/* 2- Prueba mostrar menu */
/* 3- Añadir informacion de los enlaces desde JS
    3.1 Traer el elemento html
    3.2 Variable que contenga toda la información del li por cada uno de los enlaces
    3.3 Añadir esa info con el innerHTML por cada uno de los enlaces
*/

// <section class="data-actions__add hidden"></section>

const newBookmark = document.querySelector('.js-data-actions__add');

newBookmark.classList.remove('hidden');

const menu = document.querySelector(".js-menudropdown")

menu.classList.remove("collapsed")

const listLink = document.querySelector ('.js-data__list')

const link1 = `<li class="data__listitem">
<article class="data__item">
  <p class="item__url">
    <a href="https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-2-programando-la-web/javascript/2_1_intro_a_la_programacion"
      target="_blank" rel="noopener noreferrer">
      books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-2-programando-la-web/javascript/2_1_intro_a_la_programacion
    </a>
  </p>
  <p class="item__seen">
    <input type="checkbox" checked name="item_imp_2" id="item_imp_2">
  </p>
  <p class="item__desc">JS en los materiales de Adalab</p>
  <ul class="item__tags">
    <li class="item__tag">javascript</li>
    <li class="item__tag">HTML</li>
  </ul>
</article>
</li>`

const link2 = `<li class="data__listitem">
<article class="data__item">
  <p class="item__url">
    <a href="https://thesmartcoder.dev/9-awesome-projects-you-can-build-with-vanilla-javascript/"
      target="_blank">thesmartcoder.dev/9-awesome-projects-you-can-build-with-vanilla-javascript/</a></a>
  </p>
  <p class="item__seen">
    <input type="checkbox" checked name="item_imp_1" id="item_imp_1">
  </p>
  <p class="item__desc">Ideas de proyectos JS</p>
  <ul class="item__tags">
    <li class="item__tag">javascript</li>
    <li class="item__tag">portfolio</li>
  </ul>
</article>
</li>`

const link3 = ` <li class="data__listitem">
<article class="data__item">
  <p class="item__url">
    <a href="https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-1-html-y-css/1_1_intro_a_la_web"
      target="_blank"
      rel="noopener noreferrer">books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-1-html-y-css/1_1_intro_a_la_web</a>
  </p>
  <p class="item__seen">
    <input type="checkbox" name="item_imp_2" id="item_imp_2">
  </p>
  <p class="item__desc">HTML en los materiales de Adalab</p>
  <ul class="item__tags">
    <li class="item__tag">HTML</li>
    <li class="item__tag">CSS</li>
  </ul>
</article>
</li>`

listLink.innerHTML = link1
listLink.innerHTML += link2
listLink.innerHTML += link3




