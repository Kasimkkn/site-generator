import { PageHeaderData } from "@/types/global";

interface PageHeaderProps {
    data: PageHeaderData;
}
const PageHeader: React.FC<PageHeaderProps> = ({ data }) => {
    return (
        <div className="relative">
            <div className="relative h-96">
                <div className="absolute inset-0">
                    <img
                        src={data.image}
                        alt="Header background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gray-900/70"></div>
                </div>

                <div className="relative max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col justify-center h-full">
                        <div className="max-w-3xl">
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                                {data.title}
                            </h1>
                            <p className="mt-6 text-xl text-gray-300 max-w-2xl">
                                {data.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageHeader