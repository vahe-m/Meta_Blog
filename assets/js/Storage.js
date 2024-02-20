export class PostsStorage {
	getPosts() {
		return JSON.parse(localStorage.getItem('BlogPosts'));
	}
	savePosts(data) {
		localStorage.setItem('BlogPosts', JSON.stringify(data));
	}
	isEmpty() {
		return localStorage.getItem('BlogPosts') === null;
	}
}
