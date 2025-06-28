import React, { useContext } from 'react'
import { LayoutContext } from '@/context/LayoutContext'
import SettingOption from '@/components/settingsPanelComponents/SettingOption'
import Projects from '@/components/projects/Projects'
import Project1 from '@/components/projects/Projects1'
const SettingProjects = () => {
    const { layout, handleChange, content, activePage } = useContext(LayoutContext);

    const normalizedPage = activePage?.toLowerCase();

    const activePageContent =
        content.find((pageData) => pageData.page.toLowerCase() === normalizedPage)?.content || {};

    const data = {
        label: 'Projects', section: 'projects', options: [{
            label: 'Projects', components: [<Projects key={'projects'} data={activePageContent.projects} />]
        },
        {
            label: 'Projects1', components: [<Project1 key={'projects-one'} data={activePageContent.projects} />]
        }
        ]
    }
    return (
        <SettingOption
            label={data.label}
            onChange={(value) => handleChange(activePage, data.section, value)}
            options={data.options}
            value={layout.find((item) => item.page.toLowerCase() === normalizedPage)?.layout[data.section]}
            key="projects"
        />
    )
}

export default SettingProjects