import User from './../shared/interfaces/user'
import { Link } from 'react-router-dom';

/**
 * Display a list of users
 *
 * @param props
 */

const ListOfUsers = (props: {
    users: Array<User>;
}) => {
    const { users } = props;
    return (
        users.length ?
            (<div className="users-list">
                {users.map((user: User) => (
                    <div className="user" key={user.id}>
                        <Link to={`/user/${user.id}`}>
                            <h2>{user.username}</h2>
                            <div className="additional-info">
                                {user.email}
                                {user.name}
                                {user.website}
                            </div>
                        </Link>
                    </div>
                ))}
            </div>) :
            (<p className="text-center">Loading...</p>)
    );
};

export default ListOfUsers