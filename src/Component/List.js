import React from 'react';
const List = (props) => {
    const { repos } = props;
    if (!repos || repos.length === 0) return <p>No repos available</p>;
    return (
        <ul>
            <hr />
            <h2 className='list-head'> Repository</h2>
            <hr />

            {/* {repos.owner.login[0]} */}
            {repos.map((repo, index) => {
                const number = index + 1;

                return (
                    <li key={repo.id} className='list'>
                        <span className='repo-text'>Repo {number}: {repo.name} </span>
                        <p className='repo-description'>{repo.description}</p>
                        <hr />
                    </li>
                );
            })}
        </ul>
    );
};
export default List;
