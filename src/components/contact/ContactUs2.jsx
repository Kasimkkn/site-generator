
import { object } from 'prop-types'
const ContactUs2 = ({ data }) => {
    return (
        <main className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-text md:px-8">
                <div className="max-w-xl space-y-3">
                    <h3 className="text-primary font-semibold">
                        Contact
                    </h3>
                    <p className="text-text text-3xl font-semibold sm:text-4xl">
                        {data?.contactTitle}
                    </p>
                    <p>
                        {data?.contactDescription}
                    </p>
                </div>
                <div>
                    <ul className="mt-12 flex flex-wrap gap-x-12 gap-y-6 items-center lg:gap-x-24">
                        {
                            data?.contactsData.map((item, idx) => (
                                <li key={idx + 1}>
                                    <h4 className="text-text text-lg font-medium">{item.title}</h4>
                                    <div className="mt-3 flex items-center gap-x-3">
                                        <p>{item.contact}</p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </main>
    )
}

ContactUs2.propTypes = {
    data: object
}
export default ContactUs2