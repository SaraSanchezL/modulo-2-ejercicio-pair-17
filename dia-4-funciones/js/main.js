"use strict"

const listLinks = document.querySelector(".js_datalist");
const board_data = document.querySelector(".js-data");
const menuDropdown = document.querySelector('.js-menudropdown');
const input_search_desc = document.querySelector('.js-input-search');

menuDropdown.classList.remove('collapsed');
input_search_desc.value = 'materiales';

const descrSearchText = input_search_desc.value;


const bmk_1_url =
  "https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-2-programando-la-web/javascript/2_1_intro_a_la_programacion";
const bmk_1_desc = "JS en los materiales de Adalab";
const bmk_1_seen = "checked";
const bmk_1_tags_1 = "javascript";
const bmk_1_tags_2 = "html";

let html = '';

if (bmk_1_desc.includes(descrSearchText)) {
  html = `<li class="data__listitem"> 
<article class="data__item">
  <p class="item__url">
    <a href=${bmk_1_url.replace("https://", "")} target="_blank" rel="noopener noreferrer">
    ${bmk_1_url.substring(8)} 
    </a>
  </p>
  <p class="item__seen">
    <input type="checkbox" ${bmk_1_seen} name="item_imp_2" id="item_imp_2">
  </p>
  <p class="item__desc">${bmk_1_desc}</p>
  <ul class="item__tags">
    <li class="item__tag">${bmk_1_tags_1.toLowerCase()}</li><li class="item__tag">${bmk_1_tags_2.toLowerCase()}</li>
  </ul>
</article>
</li>`;
}



const bmk_2_url = 'https://thesmartcoder.dev/9-awesome-projects-you-can-build-with-vanilla-javascript/';
const bmk_2_desc = 'Ideas de proyectos JS';
const bmk_2_seen = 'checked';
const bmk_2_tags_1 = 'javascript';
const bmk_2_tags_2 = 'portfolio';

if (bmk_2_desc.includes(descrSearchText)) {

  html += `<li class="data__listitem"> 
<article class="data__item">
  <p class="item__url">
    <a href=${bmk_2_url} target="_blank" rel="noopener noreferrer">
      ${bmk_2_url.replace("https://", "")}
    </a>
  </p>
  <p class="item__seen">
    <input type="checkbox" ${bmk_2_seen} name="item_imp_2" id="item_imp_2">
  </p>
  <p class="item__desc">${bmk_2_desc}</p>
  <ul class="item__tags">
    <li class="item__tag">${bmk_2_tags_1.toLowerCase()}</li><li class="item__tag">${bmk_1_tags_2.toLowerCase()}</li>
  </ul>
</article>
</li>`;
}

const bmk_3_url = 'https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-1-html-y-css/1_1_intro_a_la_web';
const bmk_3_desc = 'HTML en los materiales de Adalab';
const bmk_3_seen = '';
const bmk_3_tags_1 = 'HTML';
const bmk_3_tags_2 = 'CSS';

if (bmk_3_desc.includes(descrSearchText)) {

  html += `<li class="data__listitem"> 
<article class="data__item">
  <p class="item__url">
    <a href=${bmk_3_url} target="_blank" rel="noopener noreferrer">
     ${bmk_3_url.slice(8)}
    </a>
  </p>
  <p class="item__seen">
    <input type="checkbox" ${bmk_3_seen} name="item_imp_2" id="item_imp_2">
  </p>
  <p class="item__desc">${bmk_3_desc}</p>
  <ul class="item__tags">
    <li class="item__tag">${bmk_3_tags_1.toLowerCase()}</li><li class="item__tag">${bmk_3_tags_2.toLowerCase()}</li>
  </ul>
</article>
</li>`;
}


listLinks.innerHTML = html;

/* DIA3.1: Prueba mostrar lista */

if (board_data.classList.contains('tableview')) {
  board_data.classList.remove('tableview');
  board_data.classList.add('listview');
}
else if (board_data.classList.contains('listview')) {
  board_data.classList.remove('listview');
  board_data.classList.add('tableview');
}



