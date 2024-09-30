import Image from "next/image";
import estilos from "./page.module.css";

import Banner from "./public/banner-home.png";
import BannerSabores from "./public/banner-sabores.jpg";
import eventos from "./public/eventos-image.jpg";
import sobre from "./public/sobre-image.jpg";

export default function Home() {
  return (
    <section>
      <div className={estilos.container}>
        <Image src={Banner} alt="imagem de uma casquinha de sorvete" className={estilos.banner}/>
        <h1 className={estilos.texto}>SORVETE ARTESANAL</h1>
      </div>

      <div className={estilos.container_sabores}>
        <Image src={BannerSabores} alt="imagem de varias bolas de sorvete" className={estilos.img}/>
        <div className={estilos.texto_img}>
          <h2 className={estilos.titulos}>NOSSOS SABORES</h2>
          <p className={estilos.subtitulos}>Novos e deliciosos!</p>
          <p className={estilos.texto_container}>Sorvete bom é aquele feito com os melhores ingrediente! Aqui na
            gelateria todos os nossos produtos são naturais. à base de frutas e sem
            nenhum conservante! Também temos opções sem lactose e sem açúcar.
            Venha conhecer e perceber que tem como o sorvete ser delicioso e
            saudável ao mesmo tempo!          
          </p>
        </div>
      </div>

      <div className={estilos.container_sabores}>
      <div className={estilos.texto_img}>
          <h2 className={estilos.titulos}>NOSSOS EVENTOS</h2>
          <p className={estilos.subtitulos}>Delicias com sorvete!</p>
          <p className={estilos.texto_container}> Mais do que uma sorveteria, uma extensão da sua casa! Estamos Aqui
            prontinhos para te atender e oferecer os melhores eventos com os 
            melhores sorvete da sua vida! Venha nos conhecer e passar um tempo
            aqui com a gente.       
          </p>
        </div>
        <Image src={eventos} alt="imagem da loja" className={estilos.img}/>
      </div>

      <div className={estilos.container_sabores}>
        <Image src={sobre} alt="imagem de amigos com sorvetes" className={estilos.img}/>
        <div className={estilos.texto_img}>
          <h2 className={estilos.titulos}>SOBRE NÓS</h2>
          <p className={estilos.subtitulos}>Alegria em cada casquinha!</p>
          <p className={estilos.texto_container}>Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos 
            há anos no mercado produzindo o que tem de melhor para os nossos
            clientes e você não pode ficar fora dessa. Venha nos fazer uma visita e
            aproviete o melhor atendimento e o melhor sorvete da cidade.          
          </p>
        </div>  
      </div>
    </section>
  );
}
