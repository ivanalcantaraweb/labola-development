import Link from 'next/link'
import styles from '../../styles/Navbar.module.css'
import { useEffect, useState } from 'react'
import Menu from './Menu'

const Navbar = () => {
    const [date, setDate] = useState()
    const [showMenu, setShowMenu] = useState(false)

    useEffect(() => {
        const fecha = new Date();
        setDate(`Año 2 | no. 10 | Diciembre 2010 - Enero 2021`)
    }, [])

    return (
        <nav className={styles.navbar}>
            <div id={styles.containerNavbar}>
                <Link href="/">
                    <a>
                        <img src="/Assets/Images/logo.png"></img>
                    </a>
                </Link>
                <div id={styles.containerMenu}>
                    <span>{date}</span>
                    <ul>
                        <li>
                            <Link href="/">
                                <a>
                                    Número actual
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>
                                    Suscripción
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>
                                    Donaciones
                                </a>
                            </Link>
                        </li>

                        <li onClick={() => setShowMenu(true)}>
                            <a>
                                MENU

                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
        </nav>
    )
}

export default Navbar;