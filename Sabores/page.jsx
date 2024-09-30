import Image from "next/image"
import estilos from "./sabores.module.css";

import banner from "../public/banner-sabores.jpg";
import oreo from "../public/sabor-oreo.png";
import pistache from "../public/sabor-pistache.png";
import avela from "../public/sabor-cookies-avela.png";
import kiwi from "../public/sabor-kiwi.png";
import morango from "../public/sabor-morango.png";
import limao from "../public/sabor-limao.png";

export default function Sabores() {
    return(
        <div>
            <div className={estilos.container_banner}>
                <Image src={banner} alt="fotos de sorvetes" className={estilos.banner}/>
                <h1 className={estilos.titulo}>NOSSOS SABORES</h1>
            </div>

            <div className={estilos.container_titulo}>
                <h2 className={estilos.titulo_container}>SABORES DE SORVETE</h2>
            </div>

            <div className={estilos.container_sabores}>
                <div className={estilos.card_sabores}>
                    <Image src={oreo} alt="Sorvete de Oreo" className={estilos.sabores_Sorvete}/>
                    <p className={estilos.titulo_sabores}>Sorvete de Oreo</p>
                    <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                </div>

                <div className={estilos.card_sabores}>
                    <Image src={pistache} alt="Sorvete de Pistache" className={estilos.sabores_Sorvete}/>
                    <p className={estilos.titulo_sabores}>Sorvete Pistache</p>
                    <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                </div>
                
                <div className={estilos.card_sabores}>
                    <Image src={avela} alt="Sorvete de Cookies & avelã" className={estilos.sabores_Sorvete}/>
                    <p className={estilos.titulo_sabores}>Sorvete Cookies & Avelã</p>
                    <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                </div>
            </div>

            <div className={estilos.container_sabores}>
                <div className={estilos.card_sabores}>
                    <Image src={kiwi} alt="Sorvete de kiwi" className={estilos.sabores_Sorvete}/>
                    <p className={estilos.titulo_sabores}>Sorvete de Kiwi</p>
                    <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                </div>

                <div className={estilos.card_sabores}>
                    <Image src={morango} alt="Sorvete de Morango" className={estilos.sabores_Sorvete}/>
                    <p className={estilos.titulo_sabores}>Sorvete de Morango</p>
                    <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                </div>
                
                <div className={estilos.card_sabores}>
                    <Image src={limao} alt="Sorvete de Cookies & avelã" className={estilos.sabores_Sorvete}/>
                    <p className={estilos.titulo_sabores}>Sorvete de Limão Siciliano</p>
                    <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
                </div>
            </div>
        </div>
    )
}