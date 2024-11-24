export default function Footer() {
    return (
        <footer className="bg-dark text-light w-full py-6 mt-10">
            <div className="max-w-7xl mx-auto text-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Muse. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
