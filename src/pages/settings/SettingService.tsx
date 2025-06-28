import React, { useContext } from 'react'
import { LayoutContext } from '@/context/LayoutContext'
import SettingOption from '@/components/settingsPanelComponents/SettingOption'
import Service from '@/components/service/Service'
import Service1 from '@/components/service/Service1'
import Service2 from '@/components/service/Service2'
const SettingService = () => {
    const { layout, handleChange, content, activePage } = useContext(LayoutContext);

    const normalizedPage = activePage?.toLowerCase();

    const activePageContent =
        content.find((pageData) => pageData.page.toLowerCase() === normalizedPage)?.content || {};

    const data = {
        label: 'Service', section: 'service', options: [{
            label: 'Service', components: [<Service key={'service'} data={activePageContent.service} />]
        }, {
            label: 'Service1', components: [<Service1 key={'service-one'} data={activePageContent.service} />]
        }, {
            label: 'Service2', components: [<Service2 key={'service-two'} data={activePageContent.service} />]
        }]
    }
    return (
        <SettingOption
            label={data.label}
            onChange={(value) => handleChange(activePage, data.section, value)}
            options={data.options}
            value={layout.find((item) => item.page.toLowerCase() === normalizedPage)?.layout[data.section]}
            key="service"
        />
    )
}

export default SettingService