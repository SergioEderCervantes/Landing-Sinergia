import { Button } from "../components/Button";

const Header = () => {
    return (
        <header className="flex flex-col justify-between items-center px-12 py-4 min-h-[10vh] bg-transparent md:flex-row  w-full">
            <div className="w-40 ">
                <a href="/" className="cursor-pointer">
                    <img src="/logos/logotipo_blanco.svg" alt="sinergia logo " className="w-full" />
                </a>
            </div>
            <div className="hidden md:block border-x-2 group hover:border-shock-pink px-2 transition-colors">
                {/* <nav>
                    <a className="text-lg font-bold relative group-hover:text-shock-pink transition-colors" href="/#casos">
                        Casos
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-shock-pink group-hover:w-full transition-all "></span>
                    </a>
                </nav> */}
            </div>
            <div className="btn">
                <Button size="md" href="/contacto">
                    Evalua mi negocio
                </Button>
            </div>
        </header>
    );
};

export default Header;