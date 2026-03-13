import { experience } from "../data/experience";

export default function Experience() {
    return (
        <section className="py-12 px-6 md:px-12">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-semibold tracking-tight text-gray-900 text-center">
                    Experience
                </h2>

                <div className="border-t border-gray-200 mt-6 mb-8"></div>

                <div>
                    {experience.map((item) => (
                        <div key={item.id} className="mb-8">
                            <div className="text-gray-900 flex flex-col md:flex-row md:items-center">
                                <span className="font-semibold">{item.company}</span>
                                <span className="text-gray-500 md:ml-2"> | {item.role} | {item.dates}</span>
                            </div>

                            <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
                                {item.bullets.map((bullet) => (
                                    <li key={bullet}>{bullet}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-gray-200 mt-6 mb-8"></div>
            </div>
        </section>
    );
}