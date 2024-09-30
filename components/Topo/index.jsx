import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/public/logo.png";
import estilos from './Topo.module.css';

export default function Topo () {
    return(
        <header className={estilos.container}>
            <Image src={Logo} alt="Logo da sorveteria" className={estilos.img}/>
            <nav className={estilos.container_navegacao}>
                <Link href="/" className={estilos.navegacao}>Home</Link>
                <Link href="/Sabores" className={estilos.navegacao}>Sabores</Link>
                <Link href="/Sobre" className={estilos.navegacao}>Sobre</Link>
            </nav>
        </header>
    )
}