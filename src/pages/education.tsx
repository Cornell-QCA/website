import React from 'react'
const EducationPage: React.FC = () => {
    let isReady = false;
    return isReady ? (
        <div className='max-w-screen-xl mx-auto'>
            <div className="px-6 py-8">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Education</h1>
                    <div className="w-24 h-px bg-qca_red_dark-500 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        Resources for learning about Quantum online and at Cornell
                    </p>
                </div>

                {/* Getting Started with Quantum */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Getting Started with Quantum</h2>
                    <div className="space-y-3">
                        <div>
                            <a
                                href="https://qiskit.org/textbook/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg font-semibold text-qca_red_dark-500 hover:text-qca_red_dark-600 underline decoration-2 underline-offset-2"
                            >
                                Qiskit Textbook
                            </a>
                            <p className="text-gray-700 text-sm">Comprehensive introduction to quantum computing with Qiskit.</p>
                        </div>
                        <div>
                            <a
                                href="https://quantum-computing.ibm.com/composer"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg font-semibold text-qca_red_dark-500 hover:text-qca_red_dark-600 underline decoration-2 underline-offset-2"
                            >
                                IBM Quantum Composer
                            </a>
                            <p className="text-gray-700 text-sm">Hands-on quantum circuit building and simulation.</p>
                        </div>
                        <div>
                            <a
                                href="https://azure.microsoft.com/en-us/products/quantum/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg font-semibold text-qca_red_dark-500 hover:text-qca_red_dark-600 underline decoration-2 underline-offset-2"
                            >
                                Microsoft Quantum Development Kit (QDK)
                            </a>
                            <p className="text-gray-700 text-sm">Learn Q# and quantum algorithms with Microsoft's tools.</p>
                        </div>
                    </div>
                </div>

                {/* Other Quantum at CMU */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Quantum Computing @ Cornell</h2>
                    <div className="mb-12">
                        <div className="space-y-3">
                            <div>
                                <a
                                    href="https://www.cmu.edu/quantum/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-qca_red_dark-500 hover:text-qca_red_dark-600 font-medium underline decoration-2 underline-offset-2"
                                >
                                    Quantum Computing and Information Technologies
                                </a>
                                <span className="text-gray-700 ml-3">- Carnegie Mellon's flagship center exploring quantum applications.</span>
                            </div>
                            <div>
                                <a
                                    href="https://www.cmu.edu/quantum/research/quantum-technologies-group.html"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-qca_red_dark-500 hover:text-qca_red_dark-600 font-medium underline decoration-2 underline-offset-2"
                                >
                                    Quantum Technologies Group
                                </a>
                                <span className="text-gray-700 ml-3">- Applies quantum to solve problems in supply chain, finance, healthcare, and more.</span>
                            </div>
                            <div>
                                <a
                                    href="https://www.pittsburghquantum.org/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-qca_red_dark-500 hover:text-qca_red_dark-600 font-medium underline decoration-2 underline-offset-2"
                                >
                                    Pittsburgh Quantum Initiative (PQI)
                                </a>
                                <span className="text-gray-700 ml-3">- Unites over 100 faculty from CMU, Pitt, and Duquesne to promote quantum science.</span>
                            </div>
                        </div>
                    </div>
                    {/* CMU Faculty Contributions */}
                    <div className="mb-12">
                        <h3 className="text-xl font-semibold text-gray-800 mb-6">CMU Faculty Contributions</h3>
                        <div className="space-y-3">
                            <div>
                                <a
                                    href="https://www.youtube.com/channel/UCVCdoQMwJTh6vRJr8O1uSFw"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-qca_red_dark-500 hover:text-qca_red_dark-600 font-medium underline decoration-2 underline-offset-2"
                                >
                                    Dr. Tayur's Quantum Lectures & Blogs
                                </a>
                                <span className="text-gray-700 ml-3">- Insightful discussions on quantum theory and business applications.</span>
                            </div>
                            <div>
                                <a
                                    href="https://www.youtube.com/channel/UCVCdoQMwJTh6vRJr8O1uSFw"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-qca_red_dark-500 hover:text-qca_red_dark-600 font-medium underline decoration-2 underline-offset-2"
                                >
                                    Ryan O'Donnell's YouTube Channel
                                </a>
                                <span className="text-gray-700 ml-3">- Hundreds of theory-rich lectures in quantum computing and theoretical CS.</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Other Great Online Learning Resources */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Other Great Online Learning Resources</h2>
                    {/* Online Learning Platforms */}
                    <div className="mb-12">
                        <h3 className="text-xl font-semibold text-gray-800 mb-6">Online Learning Platforms</h3>
                        <div className="space-y-3">
                            <div>
                                <a
                                    href="https://www.qubitguide.org/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-qca_red_dark-500 hover:text-qca_red_dark-600 font-medium underline decoration-2 underline-offset-2"
                                >
                                    Qubit Guide
                                </a>
                            </div>
                            <div>
                                <a
                                    href="https://quantum.country/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-qca_red_dark-500 hover:text-qca_red_dark-600 font-medium underline decoration-2 underline-offset-2"
                                >
                                    Linear Algebra for Quantum Computing
                                </a>
                            </div>
                            <div>
                                <a
                                    href="https://qiskit.org/learn/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-qca_red_dark-500 hover:text-qca_red_dark-600 font-medium underline decoration-2 underline-offset-2"
                                >
                                    IBM Quantum Learning
                                </a>
                            </div>
                            <div>
                                <a
                                    href="https://qiskit.org/textbook/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-qca_red_dark-500 hover:text-qca_red_dark-600 font-medium underline decoration-2 underline-offset-2"
                                >
                                    Qiskit Textbook
                                </a>
                            </div>
                            <div>
                                <a
                                    href="https://docs.ocean.dwavesys.com/en/stable/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-qca_red_dark-500 hover:text-qca_red_dark-600 font-medium underline decoration-2 underline-offset-2"
                                >
                                    Ocean Documentation
                                </a>
                            </div>
                            <div>
                                <a
                                    href="https://pennylane.ai/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-qca_red_dark-500 hover:text-qca_red_dark-600 font-medium underline decoration-2 underline-offset-2"
                                >
                                    Pennylane Documentation
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Books */}
                    <div className="mb-12">
                        <h3 className="text-xl font-semibold text-gray-800 mb-6">Books</h3>
                        <div className="space-y-3">
                            <div>
                                <a
                                    href="https://www.cambridge.org/core/books/quantum-computation-and-quantum-information/01E10196D0A682A6AEFFEA52D53BE9AE"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-qca_red_dark-500 hover:text-qca_red_dark-600 font-medium underline decoration-2 underline-offset-2"
                                >
                                    Quantum Computation and Quantum Information
                                </a>
                                <span className="text-gray-700 ml-3">- By Michael Nielsen and Isaac Chuang – foundational quantum textbook.</span>
                            </div>
                            <div>
                                <a
                                    href="https://mitpress.mit.edu/9780262045254/an-introduction-to-quantum-algorithms-via-linear-algebra/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-qca_red_dark-500 hover:text-qca_red_dark-600 font-medium underline decoration-2 underline-offset-2"
                                >
                                    Intro to Quantum Algorithms via Linear Algebra
                                </a>
                                <span className="text-gray-700 ml-3">- By Lipton and Regan – algorithm-focused with mathematical rigor.</span>
                            </div>
                            <div>
                                <a
                                    href="https://www.cambridge.org/core/books/quantum-computing-for-computer-scientists/8AEA723BEE5CC9F5C03FDD4BA850C711"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-qca_red_dark-500 hover:text-qca_red_dark-600 font-medium underline decoration-2 underline-offset-2"
                                >
                                    Quantum Computing for Computer Scientists
                                </a>
                                <span className="text-gray-700 ml-3">- An accessible, CS-oriented intro to quantum computing.</span>
                            </div>
                        </div>
                    </div>
                    {/* Other Community & Open Source Resources */}
                    <div className="mb-12">
                        <h3 className="text-xl font-semibold text-gray-800 mb-6">Other Community & Open Source Resources</h3>
                        <div className="space-y-3">
                            <div>
                                <a
                                    href="https://qosf.org/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-qca_red_dark-500 hover:text-qca_red_dark-600 font-medium underline decoration-2 underline-offset-2"
                                >
                                    Quantum Open Source Foundation (QOSF)
                                </a>
                            </div>
                            <div>
                                <a
                                    href="https://medium.com/tag/quantum-computing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-qca_red_dark-500 hover:text-qca_red_dark-600 font-medium underline decoration-2 underline-offset-2"
                                >
                                    Quantum on Medium
                                </a>
                            </div>
                            <div>
                                <a
                                    href="https://github.com/desireevl/awesome-quantum-machine-learning"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-qca_red_dark-500 hover:text-qca_red_dark-600 font-medium underline decoration-2 underline-offset-2"
                                >
                                    Awesome Quantum
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div className='max-w-screen-xl'>
            <div className="px-4 mt-8">
                <h2 className="text-4xl font-bold text-center mb-8">Education</h2>
                <p className="text-lg text-center mb-12">
                    Educational content coming soon!
                </p>
            </div>
        </div>
    )
}
export default EducationPage
