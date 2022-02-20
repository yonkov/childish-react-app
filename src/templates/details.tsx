/**
 * Display A Single User Page
 *
 * @param props
 */
import { useRouteMatch } from 'react-router-dom';
import User from '../shared/interfaces/user'
import { useEffect } from 'react';
import { FetchUserById } from './../data';

// load component-specific styles
import './../scss/pages/details.scss';

const Details = () => {

    const match: any = useRouteMatch("/user/:id");
    const user: User | '' = FetchUserById(match.params.id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    function createMarkup(markup: string) {
        return { __html: markup };
    }
    return (
        user ?
            <article id={`user-${user.id}`}>
                <h2>{user.username}</h2>
                <div className="additional-info">
                    <p>Full Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Address: {user.address.city}</p>
                    <p>Phone: {user.phone}</p>
                    <p>Website: <a href={`//${user.website}`} target="_blank">{user.website}</a></p>
                    <p>Company: {user.company.name}</p>
                </div>
            </article> :
            <p className="text-center">Loading...</p>

    );
};

export default Details