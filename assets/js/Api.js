import {PostsStorage} from "./Storage.js";
export class Api {
	constructor() {
		this.postsStore = new PostsStorage();
	}
	async blogApi() {
		const posts = [];
		await Promise.all([
			fetch('https://api.slingacademy.com/v1/sample-data/blog-posts?offset=0&limit=10'),
			fetch('https://api.slingacademy.com/v1/sample-data/users?offset=0&limit=100')
		]).then((streams) => {
			return Promise.all(streams.map((stream) => stream.json()))
		}).then((res) => {
			res[0].blogs.forEach((elm) => {
				let blog = {
					userId: elm.user_id,
					photo: elm.photo_url,
					description: elm.description,
					autor: {}
				}
				res[1].users.forEach((elm1) => {
					let user = {
						id: elm1.id,
						firstName: elm1.first_name,
						lastName: elm1.last_name,
						profilePic: elm1.profile_picture
					}
					if(blog.userId === user.id) {
						blog.autor = user;
						posts.push(blog);
					}
				})
			});
			this.postsStore.savePosts(posts);
		}).catch((error) => {
			console.log(error)
		})
	}
}