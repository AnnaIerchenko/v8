import { NavLink, Outlet } from 'react-router-dom';
import { CustomLink } from './CustomLink';

/*const setActive = ({isActive}) => isActive ? 'active-link' : '';*/

 const Layout = () => {
  return (
      <>
    <header>
     { /*  <NavLink to ='/' className={setActive}>Home</NavLink>*/}
        <CustomLink to='/'>Home</CustomLink>
        <NavLink to ='/posts' >Blog</NavLink> 
        <NavLink to ='/about' style={({isActive}) => ({color: isActive ? 'var(--color-active)' : 'white'})}>About</NavLink>
    </header>

    <main className='container'>
         <Outlet />
    </main>
   

    <footer className='container'>2022</footer>
    </>
  )
}

export {Layout}