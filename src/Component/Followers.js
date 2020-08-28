import React from 'react';


const Followers = (props) => {
    const { followers } = props;
    if (!followers || followers.length === 0) return <p>You do not have any followers yet</p>;
    return (
        <ul>
            <h2 className='list-head'> Followers</h2>
            <hr />
            {followers.map((follower, index) => {
                const number = index + 1;
                return (
                    <li key={follower.id} className='list'>
                        <div className='list2'>
                            <p className="followerNo">Follower #{number}</p>
                            <img width="50px" height="50px" className='img' src={follower.avatar_url} alt={follower.login} />
                        </div>
                        <div>
                            <h4>{follower.login}</h4>
                            <a href={follower.html_url}>{follower.html_url}</a>
                        </div>
                        <hr />
                    </li>
                );

            })}
        </ul>
    );
};
export default Followers;
