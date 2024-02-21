import React, { FC } from 'react'
import { markdownConfig } from '../Components/Layout/Markdown/mdFiles/markdownConfig'
import { MarkdownComponent } from '../Components/Layout/Markdown/MarkdownComponent'

export const KerongApiCu: FC = () => {
    return (
        <>
        <MarkdownComponent
            markdownPath={markdownConfig.path}
            markdownFileName={markdownConfig.sections.kerongApi.cu.listCu}
        />
            <MarkdownComponent
                markdownPath={markdownConfig.path}
                markdownFileName={markdownConfig.sections.kerongApi.cu.getTimeAll}
            />
            <MarkdownComponent
                markdownPath={markdownConfig.path}
                markdownFileName={markdownConfig.sections.kerongApi.cu.getTime}
            />
            <MarkdownComponent
                markdownPath={markdownConfig.path}
                markdownFileName={markdownConfig.sections.kerongApi.cu.installTime}
            />
            <MarkdownComponent
                markdownPath={markdownConfig.path}
                markdownFileName={markdownConfig.sections.kerongApi.cu.installTimeAll}
            />
        </>
    )
}
