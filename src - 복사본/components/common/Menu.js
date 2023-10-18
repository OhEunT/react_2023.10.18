import { useState, useRef, forwardRef, useImperativeHandle } from "react"
import { NavLink, Link } from "react-router-dom/cjs/react-router-dom.min"


const Menu = forwardRef(() => {
    const [Open, setOpen] = useState(false);
    const active = { color: "orange" }
    useImperativeHandle(ref, () => {
        return {
            toggle: () => setOpen(!Open),
        }
    })
    return (
        <nav>
            <h1>
                <Link to="/">
                    <img src={process.env.PUBLIC_URL + "/img/logo_w.png"} alt="logo" />
                </Link>
            </h1>
            <ul>
                <li>
                    <NavLink to="/department" activeStyle={active}>
                        Department
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/community" activeStyle={active}>
                        Community
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/gallery" activeStyle={active}>
                        Gallery
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/youtube" activeStyle={active}>
                        Youtube
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/location" activeStyle={active}>
                        Location
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/members" activeStyle={active}>
                        Members
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
})

export default Menu