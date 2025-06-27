import React, { useContext } from "react";
import { LayoutContext } from "../../context/LayoutContext";

const ChangePageModal = () => {
    const { openDifferentPages, setOpenDifferentPages, setActivePage } = useContext(LayoutContext);

    const handlePageChange = (selectedPage) => {
        setOpenDifferentPages((prevPages) => {
            const updatedPages = Object.keys(prevPages).reduce((acc, page) => {
                acc[page] = false;
                return acc;
            }, {});

            updatedPages[selectedPage] = true;
            setActivePage(selectedPage)

            return updatedPages;
        });
    };

    return (
        <div className="p-2">
            <h2 className="text-lg font-semibold mb-4">Select a Page</h2>
            <ul className="grid grid-cols-2 gap-2">
                {Object.keys(openDifferentPages).map((page) => (
                    <li key={page}>
                        <button
                            className={`px-4 py-2 w-full text-center rounded-lg transition ${openDifferentPages[page] ? "bg-primary text-background" : "bg-gray-200 text-text"
                                }`}
                            onClick={() => handlePageChange(page)}
                        >
                            {page.charAt(0).toUpperCase() + page.slice(1)}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ChangePageModal;
