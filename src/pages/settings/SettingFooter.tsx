import React, { useContext } from 'react'
import { LayoutContext } from '@/context/LayoutContext'
import SettingOption from '@/components/settingsPanelComponents/SettingOption'
import Footer from '@/components/footer/Footer'
import Footer1 from '@/components/footer/Footer1'
const SettingFooter = () => {
    const { layout, handleChange, content, activePage } = useContext(LayoutContext);

    const normalizedPage = activePage?.toLowerCase();

    const activePageContent =
        content.find((pageData) => pageData.page.toLowerCase() === normalizedPage)?.content || {};

    const data = {
        label: 'Footer', section: 'footer', options: [{
            label: 'Footer', components: [<Footer key={'footer'} data={activePageContent.footer} />]
        }, {
            label: 'Footer1', components: [<Footer1 key={'footer-one'} data={activePageContent.footer} />]
        }]
    }
    return (
        <SettingOption
            label={data.label}
            onChange={(value) => handleChange(activePage, data.section, value)}
            options={data.options}
            value={layout.find((item) => item.page.toLowerCase() === normalizedPage)?.layout[data.section]}
            key="footer"
        />
    )
}

export default SettingFooter