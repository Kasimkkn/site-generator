import React from 'react'
import { func, node } from "prop-types";
import { CgClose } from 'react-icons/cg';
const SmallModal = ({ onClose, children }) => {
    return (
        <section className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
            <div className='p-2 flex justify-center bg-background relative rounded-lg'>
                <button onClick={onClose} className='absolute bg-primary transition-all p-2 rounded-full hover:rotate-90 -top-4 -right-4'>
                    <CgClose className='text-xl cursor-pointer text-background' />
                </button>
                {children}
            </div>
        </section>
    )
}

SmallModal.propTypes = {
    onClose: func,
    children: node
}

export default SmallModal