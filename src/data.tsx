import { useState, useEffect } from 'react';
import axios from 'axios';
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