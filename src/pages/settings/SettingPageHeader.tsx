import React, { useContext } from 'react'
import { LayoutContext } from '@/context/LayoutContext';
import PageHeader from '@/components/pageheader/PageHeader';
import SettingOption from '@/components/settingsPanelComponents/SettingOption';

const SettingPageHeader = () => {
    const { layout, handleChange, content, activePage } = useContext(LayoutContext);

    const normalizedPage = activePage?.toLowerCase();

    const activePageContent =
        content.find((pageData) => pageData.page.toLowerCase() === normalizedPage)?.content || {};

    const data = {
        label: 'pageHeader', section: 'pageheader', options: [{
            label: 'pageHeader', components: [<PageHeader key="pageheader" data={activePageContent.pageheader} />]
        },]
    }

    return (
        <SettingOption
            label={data.label}
            onChange={(value) => handleChange(activePage, data.section, value)}
            options={data.options}
            value={layout.find((item) => item.page.toLowerCase() === normalizedPage)?.layout[data.section]}
            key="page-header"
        />
    )
}

export default SettingPageHeader