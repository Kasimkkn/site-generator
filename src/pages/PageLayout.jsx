import React, { useContext } from "react";
import PropTypes from "prop-types";

import { LayoutContext } from "../context/LayoutContext";
import { componentMap } from "../components";

const PageLayout = ({ pageName }) => {
    const { layout, content } = useContext(LayoutContext);

    const pageLayout = layout.find((p) => p.page === pageName)?.layout || {};

    const activePageContent = content.find((p) => p.page === pageName)?.content || {};

    return (
        <>
            {Object.entries(pageLayout).map(([layoutKey, componentName]) => {
                const Component = componentMap[componentName];

                if (!Component) {
                    console.error(`Component ${componentName} is not defined.`);
                    return null;
                }

                return <Component data={activePageContent[layoutKey]} key={layoutKey} />;
            })}
        </>
    );
};

PageLayout.propTypes = {
    pageName: PropTypes.string.isRequired,
};

export default PageLayout;
