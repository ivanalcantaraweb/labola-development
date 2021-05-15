import Image from 'next/image'
import Link from 'next/link'
import { Search, X } from 'react-feather';

const Menu = (props) => {
    return (
        <div className={`ShowMenu${props.showMenu} menu`}>
            <div>
                <ul>
                    <li>
                        <Image src="/Assets/Images/logo.png" width="100px" height="100px" />
                    </li>
                    <li>
                        <Link href="/legajo">
                            <a>
                                <h1>Legajo</h1>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contrapunto">
                            <a>
                                <h1>Contrapunto</h1>

                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/multimedia">
                            <a>

                                <h1>Multimedia</h1>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/almanaque">
                            <a>
                                <h1>Almanaque</h1>
                            </a>
                        </Link>
                    </li>
                    <li><Link href="/gacetilla">
                        <a>
                            <h1>Gacetilla</h1>
                        </a>
                    </Link>
                    </li>

                </ul>
            </div>
            <div className="innerMenu">
                <div className="controlsMenu">
                    <div className="containerSearchInupt">
                        <input type="text" className="inputSearch" placeholder="Búsqueda..." />
                        <button className="btnSearch" onClick={() => console.log("buscar")} >
                            <Search color="white" />
                        </button>
                    </div>

                    <button className="btnCloseMenu" onClick={() => props.setShowMenu(false)} style={{ width: '100px', height: '100px' }}>
                        <X color="white" />
                    </button>

                </div>
                <div className="innerWrapperMenu">
                    <div>
                        <ul>
                            <li>
                                <Link href="/consejo">
                                    <a>
                                        <h2>Consejo Editorial</h2>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/consejo-honorario">
                                    <a>
                                        <h2>Consejo honorario</h2>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/legajo">
                                    <a>
                                        <h2>Colaboradores</h2>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/legajo">
                                    <a>
                                        <h2>Convocatorias</h2>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/legajo">
                                    <a>
                                        <h2>Normas editoriales</h2>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/legajo">
                                    <a>
                                        <h2>Archivo</h2>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>


                            <li>
                                <Link href="/legajo">
                                    <a>
                                        <h2>Facebook</h2>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/legajo">
                                    <a>
                                        <h2>Twitter</h2>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/legajo">
                                    <a>
                                        <h2>Instagram</h2>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/legajo">
                                    <a>
                                        <h2>Youtube</h2>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/legajo">
                                    <a>
                                        <h2>Spotify</h2>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/legajo">
                                    <a>
                                        <h2>Suscribete</h2>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Menu