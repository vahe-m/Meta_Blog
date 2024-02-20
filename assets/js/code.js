import {Api} from "./Api.js";
import {PostsStorage} from "./Storage.js";
import {Render} from "./Render.js";
import {Popup} from "./Popup.js";
const api = new Api();
const render = new Render();
const classPopup = new Popup();
const storage = new PostsStorage();
const preloader = document.getElementById("preloader");

window.onload = async function() {
	preloader.style.display = 'block';
	await api.blogApi();
	init();
	preloader.style.display = 'none';
}

function init() {
	const allPosts = storage.getPosts();
	render.addPost(allPosts);
}

// menu icon function
const iconMenu = document.querySelector(".menu_icon");
const menuNavbar = document.querySelector(".menu-navbar");
iconMenu.addEventListener("click", function() {
	menuNavbar.classList.toggle("_active");
	iconMenu.classList.toggle("_active");
})

// search function
document.addEventListener("click", (elm) => {
	classPopup.addActive(elm);
})

document.addEventListener('input', (elm) => {
	const inp = elm.target.closest('.search>input');
	const inp2 = elm.target.closest('.search_2>input');
	if(inp) {
		classPopup.render(inp);
	}
	else if(inp2) {
		classPopup.render(inp2);
	}
})
