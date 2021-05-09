import Image from 'next/image'

const Seccion1 = ({ styles }) => {

    return (
        <section id={styles.section1}>
            <div className={styles.imageWrapper}>
                <Image
                    src="/Assets/Images/portada_oos_bs.png"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            </div>
            <div className={styles.contentWrapper}>
                <h1>Memoria de la humanidad</h1>
                <h2>El patrimonio cultural</h2>
            </div>
        </section>
    )
}

export default Seccion1