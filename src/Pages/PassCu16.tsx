import React, { FC } from 'react'
import { markdownConfig } from '../Components/Layout/Markdown/mdFiles/markdownConfig'
import { MarkdownComponent } from '../Components/Layout/Markdown/MarkdownComponent'

export const PassCu16: FC = () => {
    return (
        <MarkdownComponent
            markdownPath={markdownConfig.path}
            markdownFileName={markdownConfig.sections.equipment.passCu16}
        />
    )
}
