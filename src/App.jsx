import "./main.scss";
import Features from "./features.jsx";

function App() {
    return (
        <>
            <header>
                <img src="/header.png" width="3840" height="245" />
            </header>
            <main>
                <section className="hero">
                    <div className="container">
                        <img src="/hero.png" width="3580" height="2000" />
                    </div>
                </section>
                <section className="usp-features">
                    <div className="container">
                        <img src="/usp-features.png" width="3580" height="600" />
                    </div>
                </section>
                <Features />
                <section className="benefits">
                    <div className="container">
                        <img src="/benefits.png" width="3580" height="2098" />
                    </div>
                </section>
                <section className="specs">
                    <img src="/specs.png" width="3840" height="2100" />
                </section>
                <section className="conclusion">
                    <div className="container">
                        <img src="/conclusion.png" width="3580" height="520" />
                    </div>
                </section>
                <section className="contact">
                    <div className="container">
                        <img src="/contact.png" width="3580" height="2252" />
                    </div>
                </section>
            </main>
            <footer>
                <img src="/footer.png" width="3840" height="2441" />
            </footer>
        </>
    );
}

export default App;
