import Image from 'next/image'
const Seccion8 = ({ styles }) => {
    return (
        <section id={styles.section8}>
            <div style={{ zIndex: '10', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                <div style={{ border: "16px solid white", width: '300px', height: '300px', borderRadius: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h2 style={{ fontSize: '3.5em' }}>Archivo</h2>
                </div>
            </div>
            <Image src="/Assets/Images/archivo.png"
                layout="fill"
                objectFit="cover"
            />
        </section>
    )
}
export default Seccion8