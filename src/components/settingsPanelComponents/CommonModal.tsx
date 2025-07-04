import React from 'react'
import { CgClose } from 'react-icons/cg'

interface CommonModalProps {
    children: React.ReactNode
    closeModal: () => void
    width?: string
    height?: string
    marginLeft?: string
}

const CommonModal = ({ children, closeModal, width = 'max-w-7xl', height = 'h-screen', marginLeft = 'lg:ml-56' }: CommonModalProps) => {
    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60]'>
            <button className='absolute border border-lime-400 text-lime-400 transition-all p-2 rounded-full hover:rotate-90 top-2 left-2'
                onClick={closeModal}
            >
                <CgClose className='text-2xl cursor-pointer' />
            </button>
            <div className={`${width} ${height} ${marginLeft} w-full bg-background p-3 rounded-tl-xl rounded-bl-xl`}>
                {children}
            </div>
        </div>
    )
}

export default CommonModal