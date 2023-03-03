import { Header, NavigationLink } from './AppBar.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Spinner from 'Services/Spinner/Spinner';

const AppBar = () => {
  return (
    <>
      <Header>
        <NavigationLink to="/">Home</NavigationLink>
        <NavigationLink to="/movies">Movies</NavigationLink>
      </Header>
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default AppBar;
