import Image from 'next/Image'
import Link from 'next/Link'
import logo from '../public/logo.png'

const NavBar = () => {
    return (
        <nav className="nav-container">
            <div className="nav-item-container">
                <Link href="/">
                    <Image src={logo} alt="Travel Blog Logo" width={140} height={140}/>
                </Link>
                
            </div>
            <div className="nav-item-container">
                <p>aiushaush</p>
            </div>
        </nav>
    )
}

export default NavBar