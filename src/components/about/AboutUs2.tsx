import { AboutData } from '../../types/global';

interface AboutUsProps {
    data?: AboutData;
}

const AboutUs2: React.FC<AboutUsProps> = ({ data }) => {

    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-text md:px-8">
                <div className="relative max-w-2xl mx-auto sm:text-center">
                    <div className="relative z-10">
                        <h3 className="text-text text-3xl font-semibold sm:text-4xl">
                            {data?.aboutTitle}
                        </h3>
                        <p className="mt-3">
                            {data?.aboutDescription}
                        </p>
                    </div>
                    <div className="absolute inset-0 max-w-xs mx-auto h-44 blur-[118px]" style={{ background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)" }}></div>
                </div>
                <div className="relative mt-12">
                    <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {
                            data.aboutCardsData.map((item, idx) => (
                                <li key={idx + 1} className="bg-background space-y-3 p-4 border rounded-lg">
                                    {item.icon && (
                                        <div className="text-primary pb-3">
                                            {item.icon}
                                        </div>
                                    )}
                                    <h4 className="text-lg text-text font-semibold">
                                        {item.title}
                                    </h4>
                                    <p>
                                        {item.text}
                                    </p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default AboutUs2