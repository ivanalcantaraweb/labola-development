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
                    <li onClick={() => props.setShowMenu(false)}>
                        <Link href="/legajo">
                            <a>
                                <h2>Legajo</h2>
                            </a>
                        </Link>
                    </li>
                    <li onClick={() => props.setShowMenu(false)} className="notInfo">
                        <Link href="#">
                            <a>
                                <h2>Contrapunto</h2>

                            </a>
                        </Link>
                    </li>
                    <li onClick={() => props.setShowMenu(false)} >
                        <Link href="/multimedia">
                            <a>

                                <h2>Multimedia</h2>
                            </a>
                        </Link>
                    </li>
                    <li onClick={() => props.setShowMenu(false)}>
                        <Link href="/almanaque">
                            <a>
                                <h2>Almanaque</h2>
                            </a>
                        </Link>
                    </li>
                    <li onClick={() => props.setShowMenu(false)} >
                        <Link href="/gacetilla">
                            <a>
                                <h2>Gacetilla</h2>
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
                            <li onClick={() => props.setShowMenu(false)} >
                                <Link href="/consejo-editorial">
                                    <a >
                                        <h3>Consejo Editorial</h3>
                                    </a>
                                </Link>
                            </li>
                            <li onClick={() => props.setShowMenu(false)} >
                                <Link href="/consejo-honorario" >
                                    <a>
                                        <h3>Consejo honorario</h3>
                                    </a>
                                </Link>
                            </li>
                            <li onClick={() => props.setShowMenu(false)} >
                                <Link href="/colaboradores" >
                                    <a>
                                        <h3>Colaboradores</h3>
                                    </a>
                                </Link>
                            </li>
                            <li onClick={() => props.setShowMenu(false)} className="notInfo">
                                <Link href="/convocatorias">
                                    <a>
                                        <h3>Convocatorias</h3>
                                    </a>
                                </Link>
                            </li>
                            <li onClick={() => props.setShowMenu(false)} className="notInfo">
                                <Link href="/normas">
                                    <a>
                                        <h3>Normas editoriales</h3>
                                    </a>
                                </Link>
                            </li>
                            <li onClick={() => props.setShowMenu(false)} className="notYet">
                                <Link href="/archivo">
                                    <a>
                                        <h3>Archivo</h3>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>


                            <li>
                                <Link href="www.facebook.com">
                                    <a>
                                        <h3>Facebook</h3>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="www.twitter.com">
                                    <a>
                                        <h3>Twitter</h3>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="www.instagram.com"  >
                                    <a>
                                        <h3>Instagram</h3>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="www.youtube.com" >
                                    <a>
                                        <h3>Youtube</h3>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="www.spotify.com" >
                                    <a>
                                        <h3>Spotify</h3>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" >
                                    <a>
                                        <h3>Suscribete</h3>
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