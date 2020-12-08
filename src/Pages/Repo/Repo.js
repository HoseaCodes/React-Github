import React, { useEffect, useState } from 'react';
import List from '../../Component/List';
import withListLoading from '../../Component/withListLoading';
import axios from 'axios'

function Repo() {
    const ListLoading = withListLoading(List);
    const [githubUser, setAppState] = useState({
        loading: false,
        repos: null,
    });

    useEffect(() => {
        setAppState({ loading: true });
        const githubURL = 'https://api.github.com/users/hoseacodes/repos';
        axios.get(githubURL).then((repos) => {
            const allRepos = repos.data;
            console.log(allRepos)
            setAppState({ loading: false, repos: allRepos });
        });
    }, [setAppState]);


    return (
        <>
            <ListLoading isLoading={githubUser.loading} repos={githubUser.repos} />
        </>

    );
}
export default Repo;
