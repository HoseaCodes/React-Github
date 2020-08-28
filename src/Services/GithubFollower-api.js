// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {
// useEffect(() => {
//     setAppState({ loading: true });
//     const followersURL = 'https://api.github.com/users/hoseacodes/followers';
//     axios.get(followersURL).then((followers) => {
//       const allfollowers = followers.data;
//       setAppState({ loading: false, followers: allfollowers });
//     });
//   }, [setAppState]);