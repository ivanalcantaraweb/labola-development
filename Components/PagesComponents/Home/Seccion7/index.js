import SliderGacetilla from '../../../Sliders/Gacetilla'


const Seccion7 = ({ styles }) => {
    return (
        <section id={styles.section7} className="sliderItemGacetillaGlobal">
            <h1>Gacetilla</h1>
            <div className={styles.containerSliderGacetilla}>
                <SliderGacetilla
                    propClass={styles.sliderGacetilla}
                    slideClass={styles.sliderItemGacetilla}
                ></SliderGacetilla>
            </div>
        </section>
    )
}
export default Seccion7