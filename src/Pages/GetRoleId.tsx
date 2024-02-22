import React, { FC } from 'react'
import { markdownConfig } from '../Components/Layout/Markdown/mdFiles/markdownConfig'
import { MarkdownComponent } from '../Components/Layout/Markdown/MarkdownComponent'

export const GetRoleId: FC = () => {
    return (
        <MarkdownComponent
            markdownPath={markdownConfig.path}
            markdownFileName={
                markdownConfig.sections.kerongApi.users.getRoleIdUser
            }
        />
    )
}
