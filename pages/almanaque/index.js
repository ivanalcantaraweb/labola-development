import styles from '../../styles/Legajo.module.css'
import Archivo from '../../Components/PagesComponents/Home/Seccion8'
import stylesHome from '../../styles/Home.module.css'
import Image from 'next/image'
import { motion } from 'framer-motion';
const Almanaque = () => {
    return (<motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.5 }}
    >
        <div className={styles.legajoWrapper}>
            <h1>Almanaque</h1>
            <div className={styles.innerLegajoWrapper}>
                <div>
                    <div className={styles.containerImageLegajo}>
                        <Image
                            src="/Assets/Images/legajo3.png"
                            width="300px"
                            height="300px"
                            quality={100}
                        />
                    </div>

                    <h4 style={{ color: "black" }}>
                        Magdalena de kino
                     </h4>
                </div>
                <div>
                    <div className={styles.containerImageLegajo}>
                        <Image
                            src="/Assets/Images/legajo.png"
                            width="300px"
                            height="300px"
                            quality={100}
                        />
                    </div>

                    <h4 style={{ color: "black" }}>
                        Inicio de turismo
                     </h4>
                </div>
                <div>
                    <div className={styles.containerImageLegajo}>
                        <Image
                            src="/Assets/Images/legajo2.png"
                            width="300px"
                            height="300px"
                            quality={100}
                        />
                    </div>

                    <h4 style={{ color: "black" }}>
                        El robo de los tesoros
                     </h4>
                </div>

                <div>
                    <div className={styles.containerImageLegajo}>
                        <Image
                            src="/Assets/Images/legajo4.png"
                            width="300px"
                            height="300px"
                            quality={100}
                        />
                    </div>

                    <h4 style={{ color: "black" }}>
                        En defensa del paisaje
                     </h4>
                </div>
            </div>
        </div>
        <Archivo styles={stylesHome} />
    </motion.div>
    )
}

export default Almanaque