import * as React from 'react';
import './App.css';
import Link from './components/Link/Link';
import history from './history';
import AboutPage from './pages/AboutPage/AboutPage';
import HomePage from './pages/HomePage/HomePage';

import logo from './logo.svg';

export interface IAppProps {
  pathname: string;
}

export interface IAppState {
  pathname: string;
}

const getHandler = (pathname: string) => {
  if (pathname === '/about') {
    return AboutPage;
  } else {
    return HomePage;
  }
};

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      pathname: props.pathname
    };
  }

  public componentDidMount() {
    history.onChange(pathname => {
      this.setState({ pathname });
    });
  }

  public render() {
    const Handler = getHandler(this.state.pathname);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            Welcome to React<br />
            <Link href="/">Home</Link> |
            <Link href="/about">About</Link>
          </h1>
        </header>
        <Handler />
      </div>
    );
  }
}

export default App;
