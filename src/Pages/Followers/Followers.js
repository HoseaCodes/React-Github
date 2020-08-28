import React, { useEffect, useState } from 'react';
import withListLoading from '../../Component/withListLoading';
import axios from 'axios'
import Followers from '../../Component/Followers';

function Follower() {
    const FollowersLoading = withListLoading(Followers);
    const [githubUser, setAppState] = useState({
        loading: false,
        followers: null,
    });

    useEffect(() => {
        setAppState({ loading: true });
        const followersURL = 'https://api.github.com/users/hoseacodes/followers';
        axios.get(followersURL).then((followers) => {
            const allfollowers = followers.data;
            setAppState({ loading: false, followers: allfollowers });
        });
    }, [setAppState]);

    return (
        <>
            <FollowersLoading isLoading={githubUser.loading} followers={githubUser.followers} />
        </>
    );
}
export default Follower;
