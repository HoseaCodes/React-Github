import './App.css';
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "../../Component/useDarkMode"
import { GlobalStyles } from "../../GlobalStyles";
import { lightTheme, darkTheme } from "../../Themes"
import Toggle from '../../Component/Toggler';
import Users from '../../Pages/Users/User';
import Follower from '../../Pages/Followers/Followers';
import Repo from '../../Pages/Repo/Repo';

function App() {

  const [githubUser, setAppState] = useState({
    loading: false,
  });
  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;


  useEffect(() => {
    setAppState({ loading: true });
  }, [setAppState]);


  if (!mountedComponent) return <div />
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <div className='App'>
          <Toggle theme={theme} toggleTheme={themeToggler} />
          <div className='container'>
            <h1> User Github Info</h1>
          </div>
          {/* <form>
            <input type="text" placeholder="Find a Github User" size="50"></input>
            <button type='submit'><span role='img' aria-label='eyes'>👀</span> Look Around <span role='img' aria-label='eyes'>👀</span></button>
          </form> */}
          <div className='repo-container'>
            <Users isLoading={githubUser.loading} user={githubUser.user} />
            <Repo isLoading={githubUser.loading} repos={githubUser.repos} />
            <Follower isLoading={githubUser.loading} followers={githubUser.followers} />
          </div>
          <footer>
            <div className='footer'>
              <span role='img' aria-label='what'>🥴</span>  Sample Project <span role='img' aria-label='what'>🥴</span>
            </div>
          </footer>
        </div>
      </>
    </ThemeProvider>
  );
}
export default App;
