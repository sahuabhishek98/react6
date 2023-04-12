import { Link } from 'react-router-dom';
import './Layout.css';
const Nav = () => {
    return (
        <>
        <ul>
           <li> <Link id="one" to="/Home">Home</Link> </li>
           <li> <Link id="one" to="/Students">Students</Link> </li>
           <li> <Link id="one" to="/ContactUs">Contact-Us</Link> </li>
          </ul>
        </>
    )
}
export default Nav;