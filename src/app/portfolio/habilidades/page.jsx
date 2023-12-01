import { habilidades } from "@/app/habilidades"
import Image from "next/image"

export default function Habilidades() {
    return (

        <section id="habilidades" className="pt-14">
            <div class="flex items-center justify-center w-full text-2xl">
                <hr class="sm:w-96 w-72 h-1 my-8 bg-azul-especial border-0 rounded"/>
                    <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2">
                        <h2>HABILIDADES</h2>
                    </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-7 my-9">
                {
                    habilidades.map(({title, description, image1, image2}, i) => (
                        <div key={i} className="hover:scale-105 transition duration-300 rounded-lg border-2 border-azul-especial p-6 flex flex-col justify-center text-center">
                            <h3 className="font-semibold">{title}</h3>
                            <p className="my-5">{description}</p>
                            
                            <div className="flex space-x-11 justify-center ">
                            <Image src={image1} width={37} height={37}/>
                            <Image src={image2} width={37} height={37}/>
                            </div>
                        </div>
                    ))
                }  

             
            </div>

        </section>
    )
}