import React, { useContext } from 'react'
import { LayoutContext } from '@/context/LayoutContext'
import SettingOption from '@/components/settingsPanelComponents/SettingOption'
import Reviews from '@/components/reviews/Reviews'
import Reviews2 from '@/components/reviews/Reviews2'

const SettingReviews = () => {
    const { layout, handleChange, content, activePage } = useContext(LayoutContext);

    const normalizedPage = activePage?.toLowerCase();

    const activePageContent =
        content.find((pageData) => pageData.page.toLowerCase() === normalizedPage)?.content || {};
    const data =
    {
        label: 'Reviews', section: 'reviews', options: [{
            label: 'Reviews', components: [<Reviews key={'reviews'} data={activePageContent.reviews} />]
        }, {
            label: 'Reviews2', components: [<Reviews2 key={'Reviews2'} data={activePageContent.reviews} />]
        }]
    }
    return (
        <SettingOption
            label={data.label}
            onChange={(value) => handleChange(activePage, data.section, value)}
            options={data.options}
            value={layout.find((item) => item.page.toLowerCase() === normalizedPage)?.layout[data.section]}
            key="reviews"
        />
    )
}

export default SettingReviews