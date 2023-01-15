import React from 'react'
import avatar from '../../../assets/images/avatar.png'
import avatar_2 from '../../../assets/images/avatar_2.png'
import avatar_3 from '../../../assets/images/avatar_3.png'
import avatar_4 from '../../../assets/images/avatar_4.png'

export default function UserMentor() {
    return (
        <div className=" mb-12">
            <h1 style={{ color: "#93b2f1" }} className="mt-6 sm:text-4xl text-xl font-bold title-font text-center">Your Recommended Mentor
            </h1>
            <section className="text-2xl sm:text-4xl text-white body-font container mx-auto my-6">
                <h2 className="font-bold text-white text-2xl mb-3">Hear from CONNTECH's Mentors</h2>
                <h2 className="font-bold text-white text-2xl mb-3">Top Mentors</h2>
                <div className="flex justify-between items-center">
                    <div style={{ backgroundColor: "#93b2f1" }} className="rounded-xl p-5 md:w-1/3 lg:w-1/5 flex flex-col">
                        <div className="rounded-xl mb-3">
                            <img style={{height: "200px"}} className='rounded w-full' src={avatar} alt="avatar" />
                        </div>
                        <p style={{ color: "#231350" }} className="text-xl font-bold mb-3">Tran Que An</p>
                        <p style={{ color: "#231350" }} className="text-xl font-bold mb-3"><i class="fa fa-shopping-bag"></i> Google</p>
                        <div className="flex flex-wrap justify-between mb-3">
                            <button style={{ borderWidth: "2px", borderColor: "#231350", color: "#231350" }} className="cursor-text rounded-2xl px-4 font-bold text-xl" type='text'>Design</button>
                            <button style={{ borderWidth: "2px", borderColor: "#231350", color: "#231350" }} className="cursor-text rounded-2xl px-5 font-bold text-xl" type='text'>Leadership</button>
                        </div>
                        <div className="flex flex-wrap justify-between mb-3">
                            <button style={{ borderWidth: "2px", borderColor: "#231350", color: "#231350" }} className="cursor-text rounded-2xl px-8 font-bold text-xl" type='text'>Finance</button>
                            <button style={{ borderWidth: "2px", borderColor: "#231350", color: "#231350" }} className="cursor-text rounded-2xl px-4 font-bold text-xl" type='text'>Python</button>
                        </div>
                        <div className="flex items-center justify-center">
                            <button style={{ backgroundColor: "#5a00b1" }} className="hover:scale-110 duration-500 rounded-lg px-5 py-2 text-white text-xl font-semibold" type="text"><i class="fa fa-users"></i> Book a meeting</button>
                        </div>
                    </div>
                    <div style={{ backgroundColor: "#93b2f1" }} className="rounded-xl p-5 md:w-1/3 lg:w-1/5 flex flex-col">
                        <div className="rounded-xl mb-3">
                            <img style={{height: "200px"}} className='rounded w-full' src={avatar_2} alt="avatar" />
                        </div>
                        <p style={{ color: "#231350" }} className="text-xl font-bold mb-3">Nguyen Tuan Anh</p>
                        <p style={{ color: "#231350" }} className="text-xl font-bold mb-3"><i class="fa fa-shopping-bag"></i> Accenture</p>
                        <div className="flex flex-wrap justify-between mb-3">
                            <button style={{ borderWidth: "2px", borderColor: "#231350", color: "#231350" }} className="cursor-text rounded-2xl px-4 font-bold text-xl" type='text'>Design</button>
                            <button style={{ borderWidth: "2px", borderColor: "#231350", color: "#231350" }} className="cursor-text rounded-2xl px-5 font-bold text-xl" type='text'>Leadership</button>
                        </div>
                        <div className="flex flex-wrap justify-between mb-3">
                            <button style={{ borderWidth: "2px", borderColor: "#231350", color: "#231350" }} className="cursor-text rounded-2xl px-8 font-bold text-xl" type='text'>Finance</button>
                            <button style={{ borderWidth: "2px", borderColor: "#231350", color: "#231350" }} className="cursor-text rounded-2xl px-4 font-bold text-xl" type='text'>Python</button>
                        </div>
                        <div className="flex items-center justify-center">
                            <button style={{ backgroundColor: "#5a00b1" }} className="hover:scale-110 duration-500 rounded-lg px-5 py-2 text-white text-xl font-semibold" type="text"><i class="fa fa-users"></i> Book a meeting</button>
                        </div>
                    </div>
                    <div style={{ backgroundColor: "#93b2f1" }} className="rounded-xl p-5 md:w-1/3 lg:w-1/5 flex flex-col">
                        <div className="rounded-xl mb-3">
                            <img style={{height: "200px"}} className='rounded w-full h-full' src={avatar_3} alt="avatar" />
                        </div>
                        <p style={{ color: "#231350" }} className="text-xl font-bold mb-3">Nguyen Minh Duc</p>
                        <p style={{ color: "#231350" }} className="text-xl font-bold mb-3"><i class="fa fa-shopping-bag"></i> Tencent</p>
                        <div className="flex flex-wrap justify-between mb-3">
                            <button style={{ borderWidth: "2px", borderColor: "#231350", color: "#231350" }} className="cursor-text rounded-2xl px-4 font-bold text-xl" type='text'>Design</button>
                            <button style={{ borderWidth: "2px", borderColor: "#231350", color: "#231350" }} className="cursor-text rounded-2xl px-5 font-bold text-xl" type='text'>Leadership</button>
                        </div>
                        <div className="flex flex-wrap justify-between mb-3">
                            <button style={{ borderWidth: "2px", borderColor: "#231350", color: "#231350" }} className="cursor-text rounded-2xl px-8 font-bold text-xl" type='text'>Finance</button>
                            <button style={{ borderWidth: "2px", borderColor: "#231350", color: "#231350" }} className="cursor-text rounded-2xl px-4 font-bold text-xl" type='text'>Python</button>
                        </div>
                        <div className="flex items-center justify-center">
                            <button style={{ backgroundColor: "#5a00b1" }} className="hover:scale-110 duration-500 rounded-lg px-5 py-2 text-white text-xl font-semibold" type="text"><i class="fa fa-users"></i> Book a meeting</button>
                        </div>
                    </div>
                    <div style={{ backgroundColor: "#93b2f1" }} className="rounded-xl p-5 md:w-1/3 lg:w-1/5 flex flex-col">
                        <div className="rounded-xl mb-3">
                            <img style={{height: "200px"}} className='rounded w-full h-full' src={avatar_4} alt="avatar" />
                        </div>
                        <p style={{ color: "#231350" }} className="text-xl font-bold mb-3">Le An Binh</p>
                        <p style={{ color: "#231350" }} className="text-xl font-bold mb-3"><i class="fa fa-shopping-bag"></i> Amazon</p>
                        <div className="flex flex-wrap justify-between mb-3">
                            <button style={{ borderWidth: "2px", borderColor: "#231350", color: "#231350" }} className="cursor-text rounded-2xl px-4 font-bold text-xl" type='text'>Design</button>
                            <button style={{ borderWidth: "2px", borderColor: "#231350", color: "#231350" }} className="cursor-text rounded-2xl px-5 font-bold text-xl" type='text'>Leadership</button>
                        </div>
                        <div className="flex flex-wrap justify-between mb-3">
                            <button style={{ borderWidth: "2px", borderColor: "#231350", color: "#231350" }} className="cursor-text rounded-2xl px-8 font-bold text-xl" type='text'>Finance</button>
                            <button style={{ borderWidth: "2px", borderColor: "#231350", color: "#231350" }} className="cursor-text rounded-2xl px-4 font-bold text-xl" type='text'>Python</button>
                        </div>
                        <div className="flex items-center justify-center">
                            <button style={{ backgroundColor: "#5a00b1" }} className="hover:scale-110 duration-500 rounded-lg px-5 py-2 text-white text-xl font-semibold" type="text"><i class="fa fa-users"></i> Book a meeting</button>
                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-center items-center mt-12'>
                    <div className='flex'>
                        <button style={{color: "#93b2f1", borderColor: "#93b2f1"}} className="inline-block mr-2 px-4 py-1 border text-xl font-bold" type="text">1</button>
                        <button className="inline-block mr-2 px-4 py-1 border text-xl" type="text">2</button>
                    </div>
                </div>
            </section>
        </div>

    )
}
