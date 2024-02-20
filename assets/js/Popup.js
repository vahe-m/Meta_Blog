const body = document.querySelector('body');
const popup = document.querySelector('.popup');
const iconMenu = document.querySelector('.menu_icon');
const menuNavbar = document.querySelector('.menu-navbar');
const popupCont = document.querySelector('.popup_container');
const inp = document.querySelector('.search>input');
const inp2 = document.querySelector(".search_2>input")
export class Popup {
	addActive(elm) {
		const search = elm.target.closest(".search>input");
		const search2 = elm.target.closest(".search_2>input");
		const p = elm.target.closest(".popup");
		const iconMenuBtn = elm.target.closest(".menu_icon");
		if(search) {
			popup.classList.add('_active');
			body.classList.add('_active');
		}
		else if (search2) {
			popup.classList.add('_active');
			body.classList.add('_active');
		} 
		else if (p) {
			body.classList.remove('_active');
			popup.classList.remove('_active');
			iconMenu.classList.remove('_active');
			menuNavbar.classList.remove('_active');
			inp.value = '';
			inp2.value = '';
		} 
		else if (iconMenuBtn) {
			if (popup.classList.value === 'popup _active') {
				body.classList.remove('_active');
				popup.classList.remove('_active');
				inp2.value = '';
			}
		} 
	}
	render(elm) {
		const posts = JSON.parse(localStorage.getItem('BlogPosts'));
		const filteredPosts = posts.filter(post => { 
			if(post.description.toLowerCase().search(elm.value.toLowerCase()) != -1){
				return post
			}
		});
		const popupPosts = filteredPosts.map((res) => {
			return  `
				<div class="popup_post">
					<img src=${res.photo}>
					<p>${res.description}</p>
				</div>
		    `
		});
		popupCont.innerHTML = (popupPosts).join(' ')
	}	
}