const postsHtml = document.querySelector(".posts")
export class Render {
	addPost(posts) {  
		const postHtml = posts.map((elm) => {
			return ` 
				<div class="post">
					<div class="post_img">	
						<img src= ${elm.photo}>
					</div>
					<div class="post_content">
						<span>Technology</span>
						<p>${elm.description}</p>
					</div>
					<div class="post_short_info">
						<img src="${elm.autor.profilePic}">
						<p>${elm.autor.firstName} ${elm.autor.lastName}</p>
						<span>August 20, 2022</span>
					</div>
				</div>
			`
		});
		postsHtml.innerHTML = (postHtml).join(" ");
	}
}