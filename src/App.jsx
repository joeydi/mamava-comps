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
                        <img src="/hero.png" width="3580" height="200" />
                    </div>
                </section>
                <section className="usp-features">
                    <div className="container">
                        <img src="/usp-features.png" width="3580" height="600" />
                    </div>
                </section>
                <Features />
            </main>
            <footer>
                <img src="/footer.png" width="3840" height="2441" />
            </footer>
        </>
    );
}

export default App;
