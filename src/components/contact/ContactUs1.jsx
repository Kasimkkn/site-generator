import React from "react";
import { object, string } from 'prop-types'
const ContactUs1 = ({ data }) => {
    return (

        <section className="relative overflow-hidden bg-background p-10"
            style={{ backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/005/851/678/non_2x/grid-room-3d-perspective-black-background-virtual-reality-construction-interior-design-technology-and-template-illustration-vector.jpg')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
        >
            <div className="container px-10">
                <div className="-mx-4 flex flex-wrap lg:justify-between">
                    <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
                        <div className="max-w-[570px] lg:mb-0">
                            <span className="
                                text-[32px] font-bold uppercase text-text sm:text-[40px] lg:text-[36px] xl:text-[40px]
                                block text-2xl text-white">
                                Contact Us
                            </span>
                            <h2 className="my-10 text-white  font-semibold text-primary text-2xl">
                                {data?.contactTitle}
                            </h2>
                            <p className="mb-9 text-base text-white leading-relaxed text-text">
                                {data?.contactDescription}
                            </p>
                            {data?.contactsData?.map((item, index) => (
                                <div key={index + 1} className="mb-8 flex w-full max-w-[370px]">
                                    <div className="w-full">
                                        <h4 className="mb-1 text-xl text-white font-bold text-text">
                                            {item.title}
                                        </h4>
                                        <p className="text-base text-white text">
                                            {item.contact}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                        <div className="relative rounded-lg  p-8 shadow-lg dark:bg-dark-2 sm:p-12">
                            <form>
                                <ContactInputBox
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                />
                                <ContactInputBox
                                    type="text"
                                    name="email"
                                    placeholder="Your Email"
                                />
                                <ContactInputBox
                                    type="text"
                                    name="phone"
                                    placeholder="Your Phone"
                                />
                                <ContactTextArea
                                    row="6"
                                    placeholder="Your Message"
                                    name="details"
                                    defaultValue=""
                                />
                                <div>
                                    <button
                                        type="submit"
                                        className="w-full rounded border border-primary bg-primary p-3 text-background transition hover:bg-opacity-90"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

ContactUs1.propTypes = {
    data: object
}
export default ContactUs1;

const ContactTextArea = ({ row, placeholder, name, defaultValue }) => {
    return (
        <div className="mb-6">
            <textarea
                rows={row}
                placeholder={placeholder}
                name={name}
                className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
                defaultValue={defaultValue}
            />
        </div>
    );
};

ContactTextArea.propTypes = {
    row: string,
    placeholder: string,
    name: string,
    defaultValue: string
}

const ContactInputBox = ({ type, placeholder, name }) => {
    return (
        <div className="mb-6">
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                className="w-full rounded border border-stroke px-[14px] py-3 text-base text-text outline-none focus:border-primary"
            />
        </div>
    );
};

ContactInputBox.propTypes = {
    type: string,
    placeholder: string,
    name: string
}
