import React from 'react';

const Contact = () => {
    return (
        <div className='absolute inset-0 bg-[#F7F2F2]'>
            {/* Scrollable content area */}
            <div className='overflow-y-auto h-full pt-24 lg:pt-32'>
                <div className="container mx-auto flex flex-col lg:flex-row px-4 sm:px-6 lg:px-8 py-8 font-sans text-gray-800 leading-relaxed">
                    <h2>Keep in Touch</h2>
                </div>
            </div>
        </div>
    );
}

export default Contact;