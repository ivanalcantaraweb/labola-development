import Image from 'next/image'
import Link from 'next/link'

const Seccion6 = ({ styles }) => {
    return (
        <section id={styles.section6}>
            <h1>Alamaque</h1>
            <div id={styles.section6inner}>

                <div className={styles.section6ItemContent}>
                    <Link href="/">
                        <a>
                            <Image
                                src="/Assets/Images/almanaque.png"
                                width="100%"
                                height="100%"
                                quality={100}>
                            </Image>
                        </a>
                    </Link>

                </div>
                <div className={styles.section6ItemContent}>
                    <Link href="/">
                        <a>
                            <Image
                                src="/Assets/Images/almanaque_2.png"
                                width="100%"
                                height="100%"
                                quality={100}>
                            </Image>
                        </a>
                    </Link>
                </div>
                <div className={styles.section6ItemContent}>
                    <Link href="/">
                        <a>
                            <Image
                                src="/Assets/Images/almanaque_3.png"
                                width="100%"
                                height="100%"
                                quality={100}>
                            </Image>
                        </a>
                    </Link>
                </div>
                <div className={styles.section6ItemContent}>
                    <Link href="/">
                        <a>
                            <Image
                                src="/Assets/Images/almanaque_4.png"
                                width="100%"
                                height="100%"
                                quality={100}>
                            </Image>
                        </a>
                    </Link>
                </div>
            </div>
        </section>
    )
}
export default Seccion6