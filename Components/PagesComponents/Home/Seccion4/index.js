import Image from 'next/image'
import Link from 'next/link'

const Seccion4 = ({ styles }) => {
    return (
        <section id={styles.section4}>
            <div id={styles.section4Background}>
                <div id={styles.section4ContentWrapper}>
                    <div id={styles.section4Content}>
                        <h1>Contrapunto</h1>
                        <h2>Memoriales de las mujeres de Juárez</h2>

                        <p>
                            Invito a hacer un ejercicio de imaginación. Pensemos que venimos de otro lugar, de otra ciudad, de otro país o de alguna otra realidad donde no existe el feminicidio. Nos encontramos en el año 2020 en Ciudad Juárez, Chihuahua. Al transitar las calles de la ciudad nos topamos con algunos elementos visuales que saltan a la vista, más allá de las peculiaridades urbanas de una ciudad fronteriza, económica y culturalmente marcada por la cercanía con Estados Unidos de América.
                        </p>

                        <p>
                            Hay un distintivo, en ningún otro lado visto: mientras caminamos por la ciudad encontramos cruces de madera de color rosa, también en los postes hay cruces de color negro con fondo rosa, murales con rostros de mujeres, inscripciones en las paredes en las que se lee «ni una más» o «justicia». Observamos botones de pánico distribuidos en los postes para activarse en caso de sentir peligro y señalética que dice «corredor seguro para mujeres», esto nos pone a pensar en la vulnerabilidad: ¿acaso al estar lejos de esa señal habrá peligro?, ¿de qué peligro advierte esta señal?
                        </p>
                        <Link href="/contrapunto">
                            <a className="btn-primario">
                                Continuar leyendo
                        </a>
                        </Link>
                    </div>
                </div>
                <Image src="/Assets/Images/Moore_Tosca_2.png"
                    layout="fill"
                    objectFit="cover"
                />

            </div>

        </section>
    )
}
export default Seccion4