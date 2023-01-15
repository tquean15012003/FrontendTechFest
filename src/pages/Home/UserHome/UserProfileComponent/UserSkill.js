import React from 'react'

export default function UserSkill() {
    return (
        <section className="m-5 text-gray-600 body-font px-8 py-5 flex flex-col place-self-center border-b">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <h2 className="mr-5 text-2xl font-bold title-font text-white">SKILLS</h2>
                <button style={{backgroundColor: "#5a00b1"}} className="flex space-x-3 items-center px-2 py-2 duration-500 hover:scale-110 rounded-full" data-bs-toggle="modal" data-bs-target="#skillModal">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="white">
                        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                </button>
                {/* Modal */}
                <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="skillModal" tabIndex={-1} aria-labelledby="exampleModalLongLabel" aria-hidden="true">
                    <div className="modal-dialog relative w-auto pointer-events-none">
                        <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                                <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalLongLabel">
                                    Add skill
                                </h5>
                                <button type="button" className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="relative mb-4 px-3">
                                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Skill</label>
                                <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-4 px-3">
                                <label htmlFor="level" className="leading-7 text-sm text-gray-600">Level</label>
                                <select name="level" id="level" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                            <div className="relative mb-4 px-3">
                                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Additional details</label>
                                <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" defaultValue={""} />
                            </div>
                            <div className="relative mb-4 px-3">
                                <label htmlFor="issuer" className="leading-7 text-sm text-gray-600">Issuer</label>
                                <select name="issuer" id="issuer" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                    <option value="user">Nanyang Technological University</option>
                                    <option value="company">AWS</option>
                                    <option value="company">Coursera</option>
                                    <option value="company">LinkedIn</option>
                                    <option value="company">Udemy</option>
                                </select>
                            </div>
                            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                                <button type="button" className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-dismiss="modal">
                                    Close
                                </button>
                                <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Skills */}
            <div className="container px-5 py-6 mx-auto">
                <div className="flex flex-auto gap-3">
                    <div className="flex justify-center">
                        <div className="block p-6 rounded-lg shadow-lg bg-white/20 max-w-sm">
                            <h5 className="text-black text-xl leading-tight font-semibold mb-2">Python</h5>
                            <p className="text-black text-xl mb-4 font-medium">
                                Level 3 (<span className="text-xl text-green-500">Verified</span>)
                            </p>
                            <p className="text-black text-lg mb-4">
                                Issued by: NTU
                            </p>
                            <button style={{backgroundColor: "#5a00b1"}} type="button" className="font-medium inline-block px-6 py-2.5 duration-500 hover:scale-110 text-white text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition ease-in-out" data-bs-toggle="modal" data-bs-target="#editVeModal">Edit</button>
                            <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="editVeModal" tabIndex={-1} aria-labelledby="exampleModalLongLabel" aria-hidden="true">
                                <div className="modal-dialog relative w-auto pointer-events-none">
                                    <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                                        <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                                            <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalLongLabel">
                                                Edit skill
                                            </h5>
                                            <button type="button" className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-bs-dismiss="modal" aria-label="Close" />
                                        </div>
                                        <div className="relative mb-4 px-3">
                                            <label htmlFor="issuer" className="leading-7 text-sm text-gray-600">Do you want to add another issuer?</label>
                                            <select name="issuer" id="issuer" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                                <option value="user">Nanyang Technological University</option>
                                                <option value="company">AWS</option>
                                                <option value="company">Coursera</option>
                                                <option value="company">LinkedIn</option>
                                                <option value="company">Udemy</option>
                                            </select>
                                        </div>
                                        <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                                            <button type="button" className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-dismiss="modal">
                                                Close
                                            </button>
                                            <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">
                                                Edit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="block p-6 rounded-lg shadow-lg bg-white/20 max-w-sm">
                            <h5 className="text-black text-xl leading-tight font-semibold mb-2">C++</h5>
                            <p className="text-black font-medium text-lg mb-4">
                                Level 2 (<span className="text-lg text-green-500">Verified</span>)
                            </p>
                            <p className="text-black text-lg mb-4">
                                Issued by: AWS, LinkedIn
                            </p>
                            <button style={{backgroundColor: "#5a00b1"}} type="button" className="duration-500 hover:scale-110 inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition ease-in-out">Edit</button>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="block p-6 rounded-lg shadow-lg bg-white/20 max-w-sm">
                            <h5 className="text-black text-xl leading-tight font-semibold mb-2">Java</h5>
                            <p className="text-black font-medium text-lg mb-4">
                                Level 4 (<span className="text-lg text-yellow-500">Pending review</span>)
                            </p>
                            <p className="text-black text-lg mb-4">
                                Issued by: Coursera
                            </p>
                            <button style={{backgroundColor: "#5a00b1"}} type="button" className="hover:scale-110 duration-500 inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition ease-in-out">Edit</button>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="block p-6 rounded-lg shadow-lg bg-white/20 max-w-sm">
                            <h5 className="text-black text-xl leading-tight font-semibold mb-2">Business Administrator</h5>
                            <p className="text-black text-lg mb-4 font-medium">
                                Level 1 (<span className="text-lg font-medium text-green-500">Verified</span>)
                            </p>
                            <p className="text-black text-lg mb-4">
                                Issued by: Coursera
                            </p>
                            <button style={{backgroundColor: "#5a00b1"}} type="button" className="duration-500 inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition ease-in-out">Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
