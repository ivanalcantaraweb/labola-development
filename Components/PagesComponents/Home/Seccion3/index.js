import SliderLegajo from '../../../Sliders/Legajo'

const Seccion3 = ({ styles }) => {
    return (
        <section id={styles.section3}>
            <div className={styles.content}>
                <h1>Legajo</h1>
                <div className={styles.containerSliderLegajo}>
                    <SliderLegajo
                        propClass={styles.sliderLegajo}
                        slideClass={styles.sliderItemLegajo}
                        containerInnerSlide={styles.containerInnerSlide}
                        containerImageSlide={styles.containerImageSlide}
                        containerContentSlide={styles.containerContentSlide}
                    />
                </div>
            </div>

        </section>
    )
}

export default Seccion3;