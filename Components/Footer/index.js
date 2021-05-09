import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Footer.module.css'

const Footer = () => {
    return (
        <footer id={styles.footer}>
            <div id={styles.footerLinks}>
                <div id={styles.metaLinks}>

                    <ul>
                        <li>
                            <Link href="/acerca">
                                <a>
                                    Acerca de nosotros
                                    </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contacto">
                                <a>
                                    Contacto
                                    </a>
                            </Link>
                        </li>
                    </ul>

                    <div id={styles.socialLinks}>
                        <div>
                            <Link href="www.google.com">
                                <a>
                                    <img src="/Assets/Logos/facebook.png" />
                                </a>

                            </Link>
                        </div>
                        <div>
                            <Link href="www.google.com">
                                <a>
                                    <img src="/Assets/Logos/instagram.png" />
                                </a>

                            </Link>
                        </div>
                        <div>
                            <Link href="www.google.com">
                                <a>
                                    <img src="/Assets/Logos/spotify.png" />
                                </a>

                            </Link>
                        </div>
                        <div>
                            <Link href="www.google.com">
                                <a>
                                    <img src="/Assets/Logos/twitter.png" />
                                </a>

                            </Link>
                        </div>
                        <div>
                            <Link href="www.google.com">
                                <a>
                                    <img src="/Assets/Logos/youtube.png" />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div id={styles.unamLinks}>

                    <Link href="www.google.com">
                        <a style={{ textAlign: 'center' }}>
                            <img src="/Assets/Logos/labolalogo.png" width="400px" />
                        </a>
                    </Link>

                    <div id={styles.innerUnamLinks}>
                        <Link href="www.google.com">
                            <a>
                                <img src="/Assets/Logos/logo_cultura_bhz.png" />
                            </a>
                        </Link>
                        <Link href="www.google.com">
                            <a>
                                <img src="/Assets/Logos/logo_unam_bhy.png" />
                            </a>
                        </Link>
                        <Link href="www.google.com">
                            <a>
                                <img src="/Assets/Logos/logo_universidad_bh.png" />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div id={styles.copyright}>
                <p>
                    La Bola. Revista de Divulgación de la Historia es una publicación electrónica bimestral, cuyo sitio web es labola.com.mx y su editor responsable Huitzilihuitl Pallares Gutiérrez. La Reserva de Derechos al Uso Exclusivo y el ISSN se encuentran en trámite ante el Instituto Nacional de Derechos de Autor. Los artículos firmados son responsabilidad de sus autores. Cualquier comentario es bien recibido en labola.revistadedivulgacion@gmail.com
                </p>
            </div>
        </footer>
    )
}

export default Footer;