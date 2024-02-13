import { Link } from "react-router-dom";
const NavBar = ()=>{
    return (
        <div className="flex justify-between w-full bg-transparent text-white items-center fixed pt-3">
            <div>
                <h2 className="text-2xl ml-2">Race</h2>
            </div>
            <div>
                <ul className="flex space-x-10 text-md">
                    <li><Link to={'/'} className="btn-1">Power</Link></li>
                    <li><Link to={'speed'} className="btn-1">Speed</Link></li>
                    <li><Link to={'handling'} className="btn-1">Handling</Link></li>
                    <li><Link to={'option'} className="btn-1">Option</Link></li>
                    <li><Link to={'contact'} className="btn-1">Contact</Link></li>
                </ul>
            </div>
            <div className="mr-2">
                <ul className="flex space-x-4 text-md">
                    <li><a href="" className="btn-1">Shop</a></li>
                    <li><a href="" className="btn-1">Account</a></li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;