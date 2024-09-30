import Image from "next/image";
import Logo from '@/app/public/logo.png';

import estilos from './Rodape.module.css';

export default function Rodape() {
    return(
        <footer className={estilos.rodape}>
            <div className={estilos.container}>
                <Image src={Logo} alt="Logo da Sorveteria" className={estilos.img}/>
                <div className={estilos.container_texto}>
                    <h3 className={estilos.titulos}>ENDEREÇO</h3>
                    <p className={estilos.texto}>Av.Bernardino de campos, 98</p>
                    <p className={estilos.texto}>São paulo, SP 12345-678</p>
                </div>
                <div className={estilos.container_texto0}>
                    <h3 className={estilos.titulos}>CONTATO</h3>
                    <p className={estilos.texto}>info@meusite.com</p>
                    <p className={estilos.texto}>Tel: (11) 93456-7890</p>
                </div>
                <div className={estilos.container_texto}>
                    <h3 className={estilos.titulos}>HORÁRIOS</h3>
                    <p className={estilos.texto}>ABERTO TODOS OS DIAS</p>
                    <p className={estilos.texto}>10:00 - 22:00</p>
                </div>
            </div>
            <p className={estilos.nome}>Gelateria. Orgulhosamente desenvolvido por "GUSTAVO PRADO"</p>
        </footer>
    )
}