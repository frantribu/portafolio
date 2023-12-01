import Image from "next/image"

export default function Proyectos() {
    return (
        <section id="proyectos" className="pt-14">
            <div class="flex items-center justify-center w-full text-2xl">
                <hr class="sm:w-96 w-72 h-1 my-8 bg-azul-especial border-0 rounded" />
                <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2">
                    <h2>PROYECTOS</h2>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-10 md:pt-9 pt-6 pb-7">
                <div className="flex flex-col items-center p-4 mb-7 rounded-lg border-2 border-slate-300">
                    <div>
                        <h3 className="font-semibold text-lg text-center underline mb-5">
                            StreamChat
                        </h3>
                        <br />
                        <p className="text-justify mx-5">StreamChat es un proyecto personal que he desarrollado utilizando Next.js. Esta plataforma de chat no solo permite a los usuarios mantener conversaciones instantáneas con amigos y familiares, sino que también ofrece la capacidad de compartir fotos al instante. La interfaz intuitiva garantiza una experiencia de usuario agradable y la atención a la privacidad garantiza conversaciones seguras y protegidas. </p>
                    </div>
                    <div className="mt-10">
                        <Image src={"/img/chat.png"} width={300} height={300}></Image>
                    </div>
                </div>

                <div className="h-full flex flex-col items-center p-4 mb-7 rounded-lg border-2 border-slate-300">
                    <div>
                        <h3 className="font-semibold text-lg text-center underline mb-5">
                            Blog de Roberto
                        </h3>
                        <br />
                        <p className="text-justify mx-5">Blog de roberto es un proyecto web creado con Next.js. Esta plataforma de blogs invita a los usuarios a leer o publicar blogs. Además de proporcionar una experiencia de lectura envolvente, ofrece a los usuarios la posibilidad de registrarse e iniciar sesión. </p>
                    </div>
                    <div className="mt-10">
                        <Image src={"/img/blog-de-roberto.png"} width={500} height={400}></Image>
                    </div>
                </div>

                <div className="flex flex-col items-center p-4 mb-7 rounded-lg border-2 border-slate-300">
                    <div>
                        <h3 className="font-semibold text-lg text-center underline mb-5">
                            Tienda shopix
                        </h3>
                        <br />
                        <p className="text-justify mx-5">Tienda shopix fue un proyecto que desarrollé durante la Diplomatura en Desarrollo Web con Next.js, junto con Mateo Camilion. El objetivo principal era crear un e-commerce atractivo que permitiera a los usuarios explorar y comprar una variedad de productos. Utilizamos la FakestroAPI, una herramienta que proporciona información ficticia sobre productos, incluyendo nombres, descripciones, precios, cateogrias e imagenes.</p>
                    </div>
                    <div className="mt-10">
                        <Image src={"/img/shopix.jpeg"} width={370} height={300}></Image>
                    </div>
                </div>
        </div>

    </section >
    )
}