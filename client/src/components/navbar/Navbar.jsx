import { useState } from 'react'
import { Link } from 'react-router-dom'
import Cart from '../cart/Cart'
import './navbar.css'

export default function Navbar() {
    const [ toggleCart, setToggleCart ] = useState(false)

    const toggleCartFunc = () => {
        setToggleCart(!toggleCart)
        console.log(toggleCart)
    }

    return (
        <nav>
            <h3>Navbar</h3>
            <Link to="/shop">Shop</Link>
            <button onClick={toggleCartFunc}>Cart</button>
            {toggleCart && (
                <Cart />
            )}
        </nav>
    )
}