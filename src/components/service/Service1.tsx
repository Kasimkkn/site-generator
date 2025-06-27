import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { ServiceData } from "@/types/global";

interface ServiceProps {
    data: ServiceData
}
const Service1: React.FC<ServiceProps> = ({ data }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <div className="min-h-screen bg-black text-white flex justify-center items-center p-4"
            style={{ backgroundImage: `url('https://www.shutterstock.com/shutterstock/videos/1099873353/thumb/1.jpg?ip=x480')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
        >
            <motion.div
                className="w-full max-w-6xl"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h1
                    className="text-4xl font-bold text-center mb-4"
                    variants={textVariants}
                >
                    {data?.serviceTitle}
                </motion.h1>
                <motion.p
                    className="text-gray-400 text-center mb-12"
                    variants={textVariants}
                >
                    {data?.serviceDescription}
                </motion.p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data?.serviceCardsData.map((card, index) => (
                        <motion.div
                            key={card.id}
                            className="bg-white text-black p-6 rounded-lg shadow-lg cursor-pointer overflow-hidden"
                            variants={cardVariants}
                            whileHover="hover"
                        >
                            <motion.div
                                className="w-full h-48 bg-cover bg-center rounded-t-lg mb-4"
                                style={{ backgroundImage: `url(${card.image})` }}
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                            ></motion.div>

                            <motion.h2
                                className="text-2xl font-bold mb-2 flex items-center gap-2"
                                variants={textVariants}
                            >
                                <FaStar className="text-yellow-400" /> {card.title}
                            </motion.h2>

                            <motion.p
                                className="text-gray-600 mb-4"
                                variants={textVariants}
                            >
                                {card.description}
                            </motion.p>

                            <motion.div
                                className="flex items-center text-primary hover:text-primary transition-colors"
                                whileHover={{ x: 5 }}
                            >
                                Learn More <BsArrowRight className="ml-1" />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Service1;