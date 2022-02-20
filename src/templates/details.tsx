/**
 * Display A Single User Page
 *
 * @param props
 */
import { useRouteMatch } from 'react-router-dom';
import User from '../shared/interfaces/user'
import { useEffect } from 'react';
import { FetchUserById } from './../data'

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
                <h2>{user.name}</h2>
                <div className="additional-info">
                    {user.username}
                    {user.email}
                    {user.address.city}
                    {user.phone}
                    {user.website}
                    {user.company.name}
                </div>
            </article> :
            <p className="text-center">Loading...</p>

    );
};

export default Details