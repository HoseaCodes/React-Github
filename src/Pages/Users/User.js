import React, { useEffect, useState } from 'react';
import withListLoading from '../../Component/withListLoading';
import axios from 'axios'
import User from '../../Component/User';

function Users() {
    const UserLoading = withListLoading(User);
    const [githubUser, setAppState] = useState({
        loading: false,
        user: null
    });

    useEffect(() => {
        setAppState({ loading: true });
        const githubUserURL = 'https://api.github.com/users/hoseacodes';
        axios.get(githubUserURL).then((user) => {
            const alluser = user.data;
            setAppState({ loading: false, user: alluser });
        });
    }, [setAppState]);

    return (
        <>
            <UserLoading isLoading={githubUser.loading} user={githubUser.user} />
        </>
    );
}
export default Users;
