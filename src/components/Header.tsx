export default function Header() {
    return (
        <header className="bg-white w-full py-12 px-6 md:px-12 border-b border-gray-200">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                {/* Left: Name and Title */}
                <div className="flex flex-col">
                    <h1 className="text-4xl font-bold text-gray-900">Vlad Prodanchuk</h1>
                    <p className="text-xl text-gray-600 mt-2">Backend Developer</p>
                    <p className="text-gray-500 mt-4 max-w-md">
                        Software developer with over 3.5 years of experience. Primary focus on backend development, microservices, and REST APIs.
                    </p>
                </div>
                <div className="flex flex-col md:items-end gap-2 mt-4 md:mt-0">
                    <a
                        href="mailto:vprodanchuk.work@gmail.com"
                        className="text-gray-700 hover:text-gray-900"
                    >
                        vprodanchuk.work@gmail.com
                    </a>
                    <a
                        href="https://github.com/vprodanchuk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-gray-900"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/vlad-prodanchuk-81ba75132/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-gray-900"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </header>
    );
}