import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [isAdmin, setIsAdmin] = React.useState(false)

    React.useEffect(() => {
        fetch('https://dry-harbor-48669.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(res => setIsAdmin(res))
    }, [])
 
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-white">
                         <span>Dashboard</span>
                    </Link>
                </li>
                {
                    isAdmin && <div>
                        <li>
                            <Link to="/orderList" className="text-white">
                                 <span>Order List</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/addService" className="text-white">
                                 <span>Add Service</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/makeAdmin" className="text-white">
                                <span>Make Admin</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/manageService" className="text-white">
                                <span>Manage Order</span>
                            </Link>
                        </li>
                    </div>
                }
                <li>
                    <Link to="/service/book" className="text-white">
                       <span>Book order</span>
                    </Link>
                </li>
                <li>
                    <Link to="/book/booklist" className="text-white">
                         <span>Booking List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/book/review" className="text-white">
                         <span>Review</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="text-white">
                       <span> Home</span>
                    </Link>
                </li>

              
                <li>
                    {loggedInUser.email ? <Link to="/" className="text-white" onClick={() => setLoggedInUser('')}> <span>Logout</span></Link> :
                        <Link to="/" className="text-white"> <span>LogIn</span></Link>}
                </li>
            </ul>
           
        </div>
    );
};

export default Sidebar;