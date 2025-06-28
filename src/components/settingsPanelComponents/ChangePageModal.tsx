
import React, { useContext } from "react";
import { LayoutContext } from "@/context/LayoutContext";

const ChangePageModal: React.FC = () => {
    const { openDifferentPages, setOpenDifferentPages, setActivePage } = useContext(LayoutContext);

    const handlePageChange = (selectedPage: string): void => {
        setOpenDifferentPages((prevPages) => {
            const updatedPages = Object.keys(prevPages).reduce((acc, page) => {
                acc[page] = false;
                return acc;
            }, {} as typeof prevPages);

            updatedPages[selectedPage as keyof typeof updatedPages] = true;
            setActivePage(selectedPage);

            return updatedPages;
        });
    };

    return (
        <div>
            <h2 className="text-2xl font-black mb-6 text-lime-400 uppercase tracking-wide transform -rotate-1">
                Select a Page
            </h2>
            <div className="grid grid-cols-2 gap-3">
                {Object.keys(openDifferentPages).map((page) => (
                    <button
                        key={page}
                        className={`px-4 py-3 text-center font-black uppercase tracking-wide transition-all duration-200 transform hover:scale-105 border-2 ${openDifferentPages[page as keyof typeof openDifferentPages]
                                ? "bg-lime-400 text-black border-pink-500 rotate-1"
                                : "bg-black text-lime-400 border-lime-400 hover:bg-lime-400 hover:text-black hover:border-pink-500 hover:rotate-1"
                            }`}
                        onClick={() => handlePageChange(page)}
                    >
                        {page.charAt(0).toUpperCase() + page.slice(1)}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ChangePageModal;
