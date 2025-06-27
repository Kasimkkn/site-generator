import React, { useContext } from 'react'
import { LayoutContext } from '../../context/LayoutContext'
import SettingOption from '../../components/settingsPanelComponents/SettingOption'
import ContactUs1 from '../../components/contact/ContactUs1'
import ContactUs2 from '../../components/contact/ContactUs2'

const SettingContactUs = () => {
    const { layout, handleChange, content, activePage } = useContext(LayoutContext);

    const normalizedPage = activePage?.toLowerCase();

    const activePageContent =
        content.find((pageData) => pageData.page.toLowerCase() === normalizedPage)?.content || {};

    const data = {
        label: 'Contact', section: 'contact', options: [{
            label: 'ContactUs1', components: [<ContactUs1 key={'ContactUs1'} data={activePageContent.contact} />]
        }, {
            label: 'ContactUs2', components: [<ContactUs2 key={'ContactUs2'} data={activePageContent.contact} />]
        }]
    }
    return (
        <SettingOption
            label={data.label}
            onChange={(value) => handleChange(activePage, data.section, value)}
            options={data.options}
            value={layout.find((item) => item.page.toLowerCase() === normalizedPage)?.layout[data.section]}
            key="contact"
        />
    )
}

export default SettingContactUs