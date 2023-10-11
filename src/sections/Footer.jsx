const Footer = () => {
    return (
        <footer className="max-container">
            <div className="flex xl:flex-row justify-between items-baseline mx-20 h-full">
                <div className="flex xl:flex-col flex-row justify-between items-center ">
                    <h1 className="text-5xl text-black font-normal">Vaibhav</h1>
                    <p className="text-lg text-slate-500 font-light">
                        made by{" "}
                        <span className="text-black font-thin text-2xl ">
                            vien.in
                        </span>
                    </p>
                </div>
                <div>
                    <h2 className="text-3xl font-normal">Address</h2>
                    <p className="text-lg text-slate-500 mt-4">
                        Gaganan Colney, Near Navanagapur,
                        <br />
                        Ahmednagar MIDC, Ahmednagar, 414601
                    </p>
                </div>
                <div>
                    <h2 className="text-3xl font-normal">Contact</h2>
                    <p className="text-lg text-slate-500 mt-4">
                        +91 9273491821{" "}
                    </p>
                </div>
                <div>
                    <h2 className="text-3xl font-normal">Social</h2>
                    <p className="mt-4">
                        <a href="https://www.linkedin.com/in/vaibhav-ghuge-1b4b5b1a4/">
                            link3edin
                        </a>
                        <a href="">instagram</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
