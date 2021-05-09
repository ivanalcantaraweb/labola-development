import Image from "next/image"

const Seccion2 = ({ styles }) => {
    return (
        <section id={styles.section2}>
            <div  id={styles.section2Wrapper} className={styles.content}>
                <div id={styles.sectionContainerContent}>
                    <h1>Editorial</h1>
                    <p>Todas las comunidades y sociedades poseen un conjunto de elementos (símbolos, valores, bienes, formas de comunicación y expresión, conocimientos y habilidades) cuyas funciones son permitirles entender el mundo, brindarles herramientas para enfrentar problemas y darles cohesión. A lo anterior se le denomina cultura. Estos elementos están presentes en la vida cotidiana de las personas, por lo que casi siempre son invisibles o hay poca consciencia de ellos. Algunos se destacan por su continuidad y por su importancia en la memoria colectiva de dichas sociedades, y en ese sentido, se puede hablar del patrimonio cultural. En otras palabras, éste es todo bien material (monumentos, zonas arqueológicas, vestimentas, muebles) o inmaterial (tradiciones, técnicas, sonidos) con valor suficiente para ser conservado y transmitido a próximas generaciones.
                        </p>
                    <p>
                        La definición anterior no es única. El concepto de patrimonio cultural se encuentra a debate constante desde 1972, cuando fue publicada la Convención sobre la protección del patrimonio mundial, cultural y natural por la Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura (UNESCO). Desde entonces sigue generando polémica y propuestas. En nuestro país, el tema está muy presente gracias a hechos recientes, como el incendio acaecido en la parroquia de la Santa Veracruz en la Ciudad de México, las pintas realizadas a monumentos hechas con la idea de visibilizar demandas sociales, o la polémica mediática suscitada a partir de la solicitud de préstamos de códices y de piezas como el llamado “Penacho de Moctezuma” que el gobierno de México realizó a otros países. Con esta base, nuestra pretensión es analizar objetos, constructos y expresiones de las sociedades humanas con la finalidad de reflexionar sobre la existencia de múltiples culturas, de comprender su relevancia y generar consciencia sobre la trascendencia de aceptar y promover la diversidad, única fuente de riqueza cultural. 
                        
                        </p>
                    <p>
                        Para concluir, no queremos dejar pasar la oportunidad para agradecer a la Revista de la Universidad de México el otorgamiento de un apoyo económico –perteneciente al Programa de Apoyos a Agentes Culturales y brindado a otros once proyectos a quienes extendemos nuestra felicitación– que correrá a lo largo del año 2021. Con él, y con el esfuerzo de los colaboradores de La Bola, tenemos el compromiso de seguir publicando un año más… cuando menos. De igual forma, aprovechamos este número bisagra en el cambio de año, para desear un 2021 menos inquietante que el 2020, marcado este último por una inesperada pandemia, cuyas consecuencias nos tocará estudiar en algún momento futuro.</p>
                </div>
                <div id={styles.sectionContainerImage}>
                    <Image
                        src="/Assets/Images/portada_oos_cb.png"
                        width="600px"
                        height="600px"
                    />
                </div>
            </div>
        </section>)
}

export default Seccion2