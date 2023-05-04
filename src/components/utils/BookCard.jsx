import React from 'react'

function BookCard({ cover, price, desc, publisher, title }) {
    return (
        <>
            <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div class="md:flex">
                    <div class="md:flex-shrink-0">
                        <img class="h-48 w-full object-cover md:w-48" src={cover} alt="Book cover" />
                    </div>
                    <div class="p-8">
                        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Non-Fiction</div>
                        <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{title}</a>
                        <p class="mt-2 text-gray-500">{desc}</p>
                        <div class="mt-4">
                            <span class="text-gray-500 font-semibold">Author:</span> <span class="text-gray-600">{publisher}</span>
                        </div>
                        <div class="mt-4">
                            <span class="text-gray-500 font-semibold">Price:</span> <span class="text-gray-600">ZMW{price}</span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default BookCard