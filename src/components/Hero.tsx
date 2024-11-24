export default function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen flex flex-col justify-center items-center bg-dark text-light"
        >
            <h1 className="uppercase mb-4">JEAN MARC</h1>
            <h2 className="taviraj mb-2">LARHANTEC</h2>
            <h3 className="text-2xl mb-6">
                Ready to start working on your next big idea?
            </h3>
            <a
                href="#about"
                className="bg-light text-dark px-6 py-3 rounded-full shadow-lg hover:bg-border hover:text-light transition-all duration-300"
            >
                Get Started
            </a>
        </section>
    );
}
