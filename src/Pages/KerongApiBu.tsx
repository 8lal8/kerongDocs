import React, { FC } from 'react'
import { markdownConfig } from '../Components/Layout/Markdown/mdFiles/markdownConfig'
import { MarkdownComponent } from '../Components/Layout/Markdown/MarkdownComponent'

export const KerongApiBu: FC = () => {
    return (
<>
    <MarkdownComponent
        markdownPath={markdownConfig.path}
        markdownFileName={markdownConfig.sections.kerongApi.bu.infoBu}
    />
    <MarkdownComponent
        markdownPath={markdownConfig.path}
        markdownFileName={markdownConfig.sections.kerongApi.bu.listBu}
    />
    <MarkdownComponent
        markdownPath={markdownConfig.path}
        markdownFileName={markdownConfig.sections.kerongApi.bu.infoBu}
    />
    <MarkdownComponent
        markdownPath={markdownConfig.path}
        markdownFileName={markdownConfig.sections.kerongApi.bu.deleteBu}
    />
    <MarkdownComponent
        markdownPath={markdownConfig.path}
        markdownFileName={markdownConfig.sections.kerongApi.bu.updateBu}
    />
</>

    )
}
