import { navLinks } from "../constants";

const Nav = () => {
    return (
        <header className="px-24 py-12 z-20 w-full absolute">
            <nav className="flex justify-center items-center max-container">
                <a href="/" className="flex-1 ">
                    <h1 className="text-3xl ml-12 text-white">
                        Testing Fonsts
                    </h1>
                </a>
                <ul className="flex justify-center items-center gap-14 flex-1">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                className="text-slate-grey leading-normal text-white text-xl"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                    <button className="border-2 px-8 py-2 text-white text-xl">
                        Contact Us
                    </button>
                </ul>
            </nav>
        </header>
    );
};

export default Nav;
