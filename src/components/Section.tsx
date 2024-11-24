interface SectionProps {
    id: string;
    title: string;
    content: string;
}

export default function Section({ id, title, content }: SectionProps) {
    return (
        <section
            id={id}
            className="py-20 px-6 bg-dark text-light border-t border-border"
        >
            <div className="max-w-7xl mx-auto text-center px-4 sm:px-6">
                <h2 className="text-2xl lg:text-4xl font-bold mb-4">{title}</h2>
                <p className="text-base lg:text-lg">{content}</p>
            </div>
        </section>
    );
}
