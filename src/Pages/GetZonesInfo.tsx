import { MarkdownComponent } from '../Components/Layout/Markdown/MarkdownComponent'
import { markdownConfig } from '../Components/Layout/Markdown/mdFiles/markdownConfig'
import React from 'react'

export const GetZonesInfo = () => {
    return (
        <MarkdownComponent
            markdownPath={markdownConfig.path}
            markdownFileName={
                markdownConfig.sections.kerongApi.zones.getZonesInfo
            }
        />
    )
}
