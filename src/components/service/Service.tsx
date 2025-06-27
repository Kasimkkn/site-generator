import { ServiceData } from "@/types/global";

interface ServiceProps {
    data: ServiceData
}
const ServiceComponent: React.FC<ServiceProps> = ({ data }) => {
    return (
        <section className="py-12">
            <div className="container max-w-6xl mx-auto px-4 xl:px-0">
                <header className="mb-12">
                    <h2 className="text-3xl font-extrabold leading-tight text-text mb-1">
                        {data?.serviceTitle}
                    </h2>
                    <p className="text-lg text-text">
                        {data?.serviceDescription}
                    </p>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {data?.serviceCardsData.map((card, index) => (
                        <ServiceCard
                            key={index + 1}
                            title={card.title}
                            description={card.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceComponent;

interface ServiceCardProps {
    title: string;
    description: string;
}
const ServiceCard = ({ title, description }: ServiceCardProps) => (
    <div className="w-full mb-10 ">
        <div className="relative h-full">
            <span className={`absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-primary rounded-lg`} />
            <div className={`relative h-full p-5 bg-background border-2 border-primary rounded-lg`}>
                <div className="flex items-center -mt-1">
                    <h3 className="text-lg font-bold text-text">{title}</h3>
                </div>
                <p className={`mt-1 mb-1 text-xs font-medium text-primary uppercase`}>------------</p>
                <p className="mb-2 text-text">{description}</p>
            </div>
        </div>
    </div>
);
