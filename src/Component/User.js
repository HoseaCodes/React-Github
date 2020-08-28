import React from 'react';
const User = (props) => {
    const { user } = props;
    if (!user || user.length === 0) return <p>No users available</p>;

    return (
        <>
            <h2 className='list-head'> {user.name}</h2>
            <h3 className='list-head'> Username: {user.login}</h3>
            <img src={user.avatar_url} alt={user.name} />
            <br />
            <a href={user.html_url}>{user.html_url}</a>
        <div>
            <a href={user.html_url}>Follow</a>
        </div>
        <p className='repo-description'>{user.bio}</p>
        <div>
            <p>Twitter Handle @{user.twitter_username || 'No Twitter Info.'}</p>
        </div>
        <div>
            <hr />
            <label>Current Employer:</label>
            <p>{user.company || 'Independent'}</p>
            <hr />
        </div>
        <div>
            <label>Location:</label>
            <p>{user.location || 'GA Lounge Couch'}</p>
            <hr />
            <label>LinkedIn</label>
            <br />
            <a href={`https://${user.blog}`}>{user.blog}</a>
        </div>        </>
    );
};
export default User;
