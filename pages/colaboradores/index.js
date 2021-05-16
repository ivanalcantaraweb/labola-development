import styles from '../../styles/Legajo.module.css'

import Image from 'next/image'
import { motion } from 'framer-motion';

const Colaboradores = () => {
    return (<motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.5 }}
    >
        <div className={styles.legajoWrapper}>
            <h1>Colaboradores</h1>
            <div className={styles.innerLegajoWrapper}>
                <div>
                    <div className={styles.containerImageLegajo}>
                        <Image
                            src="/Assets/Colaboradores/mariana_bs.png"
                            width="300px"
                            height="300px"
                            quality={100}
                        />
                    </div>

                    <h4 style={{ color: "black" }}>
                        mariana_bs
                     </h4>
                </div>
                <div>
                    <div className={styles.containerImageLegajo}>
                        <Image
                            src="/Assets/Colaboradores/agustin_b.png"
                            width="300px"
                            height="300px"
                            quality={100}
                        />
                    </div>

                    <h4 style={{ color: "black" }}>
                        agustin_b
                     </h4>
                </div>
                <div>
                    <div className={styles.containerImageLegajo}>
                        <Image
                            src="/Assets/Colaboradores/agustin_ba.png"
                            width="300px"
                            height="300px"
                            quality={100}
                        />
                    </div>

                    <h4 style={{ color: "black" }}>
                        agustin_ba
                     </h4>
                </div>
                <div>
                    <div className={styles.containerImageLegajo}>
                        <Image
                            src="/Assets/Colaboradores/huitzi.png"
                            width="300px"
                            height="300px"
                            quality={100}
                        />
                    </div>

                    <h4 style={{ color: "black" }}>
                        huitzi
                     </h4>
                </div>

                <div>
                    <div className={styles.containerImageLegajo}>
                        <Image
                            src="/Assets/Colaboradores/huitzi_bf.png"
                            width="300px"
                            height="300px"
                            quality={100}
                        />
                    </div>

                    <h4 style={{ color: "black" }}>
                        huitzi_bf
                     </h4>
                </div>


            </div>
        </div>

    </motion.div>
    )
}

export default Colaboradores