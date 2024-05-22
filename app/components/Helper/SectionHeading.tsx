import React from 'react'

type Props = {
    heading: string
}

const SectionHeading = ({ heading }: Props) => {
    return (
        <div className='text-center p-3'>
            <h1 className='text-[30px] md:text-[50px] text-black font-semibold'>{heading}</h1>
            <h1 className='text-[15px] mt-1 md:text-[17px] text-black text-opacity-70'>
                We use the lastest technologies and tools in order to create a better code
            </h1>
        </div>
    )
}

export default SectionHeading