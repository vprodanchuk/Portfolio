import { techStack } from "../data/techStack";

export default function TechStack() {
    return (
        <section className="py-12 px-6 md:px-12">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-semibold tracking-tight text-gray-900 text-center mb-8">
                    Tech Stack
                </h2>

                <div className="border-t border-gray-200 mt-6 mb-8"></div>

                <div className="grid grid-cols-1 md:grid-cols-3 border border-gray-200 rounded-md overflow-hidden">
                    {techStack.map((column, index) => (
                        <div
                            key={column.title}
                            className={index < techStack.length - 1 ? "border-r border-gray-200" : ""}>
                            <div className="bg-gray-100 px-6 py-3 font-semibold text-gray-800">
                                {column.title}
                            </div>

                            <div className="p-4">
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    {column.items.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="border-t border-gray-200 mt-6"></div>
            </div>
        </section>
    );
}