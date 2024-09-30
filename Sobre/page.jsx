import Image from "next/image";
import estilos from './sobre.module.css';

import Banner from "../public/banner-sobre.png";
import sobre from "../public/sobre-image.jpg";
import sorveteria from "../public/sorveteria.jpg";


export default function Sobre() {
    return(
        <div>
            <div className={estilos.container_banner}>
                <Image src={Banner} alt="imagem de sorvetes" className={estilos.img_banner}/>
                <h1 className={estilos.titulo}>A GELATERIA</h1>
            </div>

            <div className={estilos.container}>
                <div className={estilos.container_texto}>
                    <h2 className={estilos.titulo_sobre}>Sobre Nós</h2>
                    <h3 className={estilos.subtitulo_sobre}>Nós simplemente amanos sorvete!</h3>
                    <p className={estilos.texto_sobre}>Samos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido. Fazemos o melhor sorvete
                    para os nossos clientes e gostamos de receber elogios. Estamos operando desde 2009 com as melhores matérias
                    para a produção final do sorvete. Vendemos tanto para varejo como para atacado. 
                    </p>
                    <p className={estilos.texto_sobre}>Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para sua residência e aproveitar
                        junto com a familia. Também vendemos para estabelecimentos e criamos eventos como festa de aniversários, formaturas
                        e eventos empresariais. Para contratar os nossos serviços, basta entrar em contato conosco. Iremos proporcionar o 
                        melhor atendimento e os melhores produtos para você fazer a sua festa mais saborasa, com o melhor sorvete da cidade.
                    </p>
                </div>
            </div>

            <div className={estilos.container_fotos}>
                <Image src={sobre} className={estilos.fotos}/>
                <Image src={sorveteria} className={estilos.fotos}/>
            </div>
        </div>
    )
}