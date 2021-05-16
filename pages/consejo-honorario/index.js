import styles from '../../styles/Legajo.module.css'
import Archivo from '../../Components/PagesComponents/Home/Seccion8'
import stylesHome from '../../styles/Home.module.css'
import Image from 'next/image'
import { motion } from 'framer-motion';

const ConsejoHonorario = () => {
    return (<motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.5 }}
    >
        <div className={styles.legajoWrapper}>
            <h1>ConsejoHonorario</h1>
            <div className={styles.innerLegajoWrapper}>
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


            </div>
        </div>

    </motion.div>
    )
}

export default ConsejoHonorario