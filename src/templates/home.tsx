import * as React from "react";
import User from './../shared/interfaces/user'
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid'
import Paper from "@material-ui/core/Paper";

// load component-specific styles
import './../scss/pages/home.scss';

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
        // From 0 to 600px wide (smart-phones), I take up 12 columns, or the whole device width!
        // From 600-690px wide (tablets), I take up 6 out of 12 columns, so 2 columns fit the screen.
        // From 960px wide and above, I take up 33% of the device (3/12), so 3 columns fit the screen.
        // From 1280px wide and above, I take up 25% of the device (3/12), so 4 columns fit the screen.
        users.length ?
            (<>
                <Grid container  className="users-list" justify="center" spacing={3}>
                    {users.map((user: User) => (
                        <Grid item className="text-center" xs={12} sm={6} md={4} lg={3} key={user.id}>
                             <Paper className="user">
                                <Link to={`/user/${user.id}`}>
                                    <h2>{user.username}</h2>
                                    <div className="additional-info">
                                        <p>Full Name: {user.name}</p>
                                        <p>Email: {user.email}</p>
                                        <p>Website: {user.website}</p>
                                    </div>
                                </Link>
                             </Paper>
                        </Grid>
                    ))}
                </Grid>

            </>) :
            (<p className="text-center">Loading...</p>)
    );
};

export default ListOfUsers