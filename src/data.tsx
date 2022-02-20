import { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './shared/interfaces/post'
import User from './shared/interfaces/user'

export function FetchUsers(){

	/**
	 * Put users in state
	 */
	const [users, setUsers] = useState<Array<User> | null>([]);

	/**
	 * Get users via remote rest API
	 */
	const url = 'https://jsonplaceholder.typicode.com/users';
	useEffect(() => {
		axios(url).then(r => {
			setUsers(r.data);
		});
	}, [url]);

    return users

}

export function FetchUserById(id: number){

	console.log(id);

	/**
	 * Put posts in state
	 */
	const [user, setUser] = useState<User | undefined >();

	/**
	 * Get posts via remote API
	 */
	const url = `https://jsonplaceholder.typicode.com/users/${id}`;
	useEffect(() => {
		axios(url).then(r => {
			console.log(r.data);
			setUser(r.data);
		});
	}, [url]);

    return user

}


export function FetchPostsPerPage(page:number){

	/**
	 * Put posts in state
	 */
	const [posts, setPosts] = useState<Array<Post> | null>([]);

	/**
	 * Get posts via remote API and increment pages dynamically
	 */
	const url = `https://www.energymonitor.ai/wp-json/wp/v2/posts?_embed&page=${page}`;
	useEffect(() => {
		axios(url).then(r => {
			setPosts([...posts, ...r.data]);
		});
	}, [url]);

    return posts

}

export function FetchPostById(id: number){

	/**
	 * Put posts in state
	 */
	const [post, setPost] = useState<Post | undefined >();

	/**
	 * Get posts via remote API
	 */
	const url = `https://www.energymonitor.ai/wp-json/wp/v2/posts/${id}?_embed`;
	useEffect(() => {
		axios(url).then(r => {
			setPost(r.data);
		});
	}, [url]);

    return post

}