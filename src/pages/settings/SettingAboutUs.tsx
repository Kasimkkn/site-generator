import { useContext } from 'react'
import AboutUs from '@/components/about/AboutUs'
import AboutOne from '@/components/about/AboutUs1'
import AboutUs2 from '@/components/about/AboutUs2'
import AboutUs3 from '@/components/about/AboutUs3'
import AboutUs4 from '@/components/about/AboutUs4'
import SettingOption from '@/components/settingsPanelComponents/SettingOption'
import { LayoutContext } from '@/context/LayoutContext'

const SettingAboutUs = () => {
    const { layout, handleChange, content, activePage } = useContext(LayoutContext);

    const normalizedPage = activePage?.toLowerCase();

    const activePageContent =
        content.find((pageData) => pageData.page.toLowerCase() === normalizedPage)?.content || {};


    const data = {
        label: 'About', section: 'about', options: [{
            label: "AboutUs", components: [<AboutUs key={'aboutUs'} data={activePageContent.about} />]
        },
        {
            label: "AboutOne", components: [<AboutOne key={'aboutOne'} data={activePageContent.about} />]
        },
        {
            label: "AboutUs2", components: [<AboutUs2 key={'AboutUs2'} data={activePageContent.about} />]
        },
        {
            label: "AboutUs3", components: [<AboutUs3 key={'AboutUs3'} data={activePageContent.about} />]
        },
        {
            label: "AboutUs4", components: [<AboutUs4 key={'AboutUs4'} data={activePageContent.about} />]
        },
        ]
    }
    return (
        <SettingOption
            label={data.label}
            onChange={(value) => handleChange(activePage, data.section, value)}
            options={data.options}
            value={layout.find((item) => item.page.toLowerCase() === normalizedPage)?.layout[data.section]}
            key="about"
        />
    )
}

export default SettingAboutUs