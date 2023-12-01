import Image from "next/image"
import Link from "next/link"

export default function SobreMi() {
    return (

        <section id="sobre-mi" >
            <div className="flex flex-col items-center text-center md:flex-row md:pt-16 md:px-16">
                <Image src={"/img/perfil.jpg"} width={250} height={250} className="rounded-full md:mr-10 pb-3" />
                <br />
                <div>
                    <p className="text-lg text-justify">Hola, mi nombre es <Link className="text-azul-especial font-semibold" href={""}>Franco Triboulard</Link>, y actualmente, estoy estudiando en la Universidad Tecnológica Nacional (UTN). Este año me dedique a hacer tres diplomaturas.</p>
                    <p className="text-lg text-justify">La primera de estas diplomaturas fue en Iniciacion al Desarrollo Web con JavaScript en donde aprendi el desarrollo web moderno. La siguiente fue una Diplomatura en Iniciacion a la Programacion con Java, la cual me proporciono los conocimientos de programación orientada y estructuras de datos. La tercera fue una Diplomatura en Desarrollo Web con Next JS, donde profundice el desarrollo frontend y backend.</p>
                    <p className="text-lg text-justify">Estoy emocionado por continuar aprendiendo y aplicando mis habilidades en proyectos prácticos. La UTN ha sido el lugar perfecto para mi desarrollo académico, y estoy ansioso por enfrentar nuevos desafíos y oportunidades en este campo.</p>
                </div>
            </div>
        </section>
    )
}