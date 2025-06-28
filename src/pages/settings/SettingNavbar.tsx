import React, { useContext } from "react";
import Navbar from "@/components/navbar/Navbar";
import Navbar1 from "@/components/navbar/Navbar1";
import Navbar3 from "@/components/navbar/Navbar3";
import { LayoutContext } from "@/context/LayoutContext";
import SettingOption from "@/components/settingsPanelComponents/SettingOption";

const SettingNavbar = () => {
    const { layout, handleChange, content, activePage } = useContext(LayoutContext);

    const normalizedPage = activePage?.toLowerCase();

    const activePageContent =
        content.find((pageData) => pageData.page.toLowerCase() === normalizedPage)?.content || {};


    const data = {
        label: "Navbar",
        section: "navbar",
        options: [
            {
                label: "Navbar",
                components: [<Navbar key="navbar" data={activePageContent.navbar} />],
            },
            {
                label: "Navbar1",
                components: [<Navbar1 key="navbar-one" data={activePageContent.navbar} />],
            },
            {
                label: "Navbar3",
                components: [<Navbar3 key="navbar-three" data={activePageContent.navbar} />],
            }
        ],
    };

    return (
        <SettingOption
            label={data.label}
            onChange={(value) => handleChange(activePage, data.section, value)}
            options={data.options}
            value={layout.find((item) => item.page.toLowerCase() === normalizedPage)?.layout[data.section]}
            key="navbar"
        />
    );
};

export default SettingNavbar;
