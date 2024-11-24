import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from "@/components/Hero";
import Works from "@/components/Works";

export default function HomePage() {
    return (
        <>

            {/* Hero Section */}
            {/*<section className="flex flex-col justify-center items-center min-h-screen">*/}
            {/*    <h1 className="text-6xl font-bold mb-4">Muse</h1>*/}
            {/*    <h2 className="text-4xl mb-2">art</h2>*/}
            {/*    <h3 className="text-2xl">Ready to start working on your next big idea?</h3>*/}
            {/*</section>*/}
            <Works/>
            <Hero/>

            {/* Add other sections here as needed */}
            <Footer/>
        </>
    );
}
