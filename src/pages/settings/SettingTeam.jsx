import React, { useContext } from 'react'
import { LayoutContext } from '../../context/LayoutContext'
import SettingOption from '../../components/settingsPanelComponents/SettingOption'
import Teams from '../../components/teams/Teams'
const SettingTeam = () => {
    const { layout, handleChange, content, activePage } = useContext(LayoutContext);

    const normalizedPage = activePage?.toLowerCase();

    const activePageContent =
        content.find((pageData) => pageData.page.toLowerCase() === normalizedPage)?.content || {};

    const data =
    {
        label: 'Teams', section: 'teams', options: [{
            label: 'Teams', components: [<Teams key={'teams'} data={activePageContent.teams} />]
        }]
    }
    return (
        <SettingOption
            label={data.label}
            onChange={(value) => handleChange(activePage, data.section, value)}
            options={data.options}
            value={layout.find((item) => item.page.toLowerCase() === normalizedPage)?.layout[data.section]}
            key="teams"
        />
    )
}

export default SettingTeam