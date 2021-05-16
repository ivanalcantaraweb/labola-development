import styles from '../../styles/Multimedia.module.css'
import Archivo from '../../Components/PagesComponents/Home/Seccion8'
import stylesHome from '../../styles/Home.module.css'
import { motion } from 'framer-motion';

const Multimedia = () => {
    return (<motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.5 }}
    >
        <div className={styles.multimediaWrapper}>
            <h1>Multimedia</h1>
            <div className={styles.innerMultimediaWrapper}>
                <div>
                    <div className={styles.containerImageMultimedia}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/t44SaHyQcUg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>


                </div>
                <div>
                    <div className={styles.containerImageMultimedia}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/cQ3rXdvb0uA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>


                </div>
                <div>
                    <div className={styles.containerImageMultimedia}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/d7qeQ3gUlW4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>

                </div>


            </div>
        </div>
        <Archivo styles={stylesHome} />
    </motion.div>
    )
}

export default Multimedia