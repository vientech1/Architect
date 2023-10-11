import "./App.css";
import Nav from "./components/Nav";
import About from "./sections/About";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Newsletter from "./sections/Newsletter";
import Projects from "./sections/Projects";
import What from "./sections/What";
const App = () => {
    return (
        <main className="relative">
            <Nav />
            <section className=" bg-black">
                <Hero />
            </section>
            <section className="px-8 py-12 bg-black">
                <About />
            </section>
            <section className="px-8 py-12 bg-black">
                <What />
            </section>
            <section className="px-8 py-12 bg-black">
                <Projects />
            </section>
            <section className="px-8 py-12 bg-black ">
                <Newsletter />
            </section>
            <section className="px-8 py-12 bg-white">
                <Footer />
            </section>
        </main>
    );
};

export default App;
