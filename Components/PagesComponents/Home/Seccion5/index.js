import Image from 'next/image'


const Seccion5 = ({ styles }) => {
    return (
        <section id={styles.section5}>
            <div id={styles.innerSection5}>
                <div id={styles.contentSection5}>
                    <h1>Multimedia</h1>
                    <div id={styles.iconMultimedia}>
                        <Image
                            src="/Assets/Images/play.png"
                            width="70px"
                            height="70px"
                            quality={100}
                        />
                    </div>
                </div>
                <div id={styles.conatinerImageSection5}>
                    <Image
                        src="/Assets/Images/portada_oos_bs.png"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                    />
                </div>
            </div>
        </section>
    )
}
export default Seccion5