import { AboutData } from '@/types/global';

interface AboutUsProps {
    data?: AboutData;
}

const AboutUs4: React.FC<AboutUsProps> = ({ data }) => {
    return (
        <section className="py-20 px-[10%] md:px-[5%] lg:px-[10%] bg-background">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-primary mb-4">{data?.aboutTitle}</h2>
                <p className="text-lg text-text max-w-3xl mx-auto">{data?.aboutDescription}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="relative">
                    <img src={data?.image} alt="About Us" className="w-full rounded-xl shadow-lg" />
                    <div className="absolute top-4 left-4 bg-primary text-background px-6 py-3 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold">{data?.aboutCardsData[0].title}</h3>
                        <p className="text-lg">{data?.aboutCardsData[0].text}</p>
                    </div>
                </div>

                <div className="space-y-6">
                    {data?.aboutCardsData.slice(1).map((item, index) => (
                        <div key={index + 1} className="flex items-center gap-6 p-6 rounded-lg shadow-md">
                            <div className="text-primary text-4xl font-bold">{item.title}</div>
                            <p className="text-lg text-text">{item.text}</p>
                        </div>
                    ))}
                    <a href="#services" className="inline-block mt-4 px-12 py-4 bg-primary text-background rounded-md text-xl capitalize">
                        {data?.aboutBtnText}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AboutUs4;
