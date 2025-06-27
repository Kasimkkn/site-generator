import React, { useContext } from 'react'
import { LayoutContext } from '../../context/LayoutContext'
import SettingOption from '../../components/settingsPanelComponents/SettingOption'
import Hero from '../../components/hero/Hero'
import Hero1 from '../../components/hero/Hero1'
import Hero2 from '../../components/hero/Hero2'
import Hero3 from '../../components/hero/Hero3'

const SettingHero = () => {
    const { layout, handleChange, content, activePage } = useContext(LayoutContext);

    const normalizedPage = activePage?.toLowerCase();

    const activePageContent =
        content.find((pageData) => pageData.page.toLowerCase() === normalizedPage)?.content || {};

    const data = {
        label: 'Hero', section: 'hero', options: [{
            label: 'Hero', components: [<Hero key="hero" data={activePageContent.hero} />]
        }, {
            label: 'Hero1', components: [<Hero1 key="hero-one" data={activePageContent.hero} />]
        }, {
            label: 'Hero2', components: [<Hero2 key="hero-two" data={activePageContent.hero} />]
        }, {
            label: 'Hero3', components: [<Hero3 key="hero-three" data={activePageContent.hero} />]
        }]
    }

    return (
        <SettingOption
            label={data.label}
            onChange={(value) => handleChange(activePage, data.section, value)}
            options={data.options}
            value={layout.find((item) => item.page.toLowerCase() === normalizedPage)?.layout[data.section]}
            key="hero"
        />
    )
}

export default SettingHero