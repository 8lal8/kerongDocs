export const markdownConfig = {
    path: './mdFiles/',
    sections: {
        docs: {
            index: 'docs.md',
            architecture: 'architecture.md',
            structure: 'structure.md',
            installApi: 'install-api.md',
        },
        token: 'token.md',
        keronglcs: 'kerong-lcs-api.md',
        kerongApi: {
            bu: {
                deleteBu: 'deleteBuBord.md',
                infoBu: 'infoBuBord.md',
                listBu: 'ListAddedBuBoards.md',
                regBu: 'registrBuBord.md',
                updateBu: 'updateBuBord.md',
            },
            cu: {
                getTimeAll: 'getValueTimeLockAllCuBord.md',
                getTime: 'getValueTimeLockCuBord.md',
                installTime: 'instalTimeLock.md',
                installTimeAll: 'instalTimeLockAllCuBord.md',
                listCu: 'ListCCuBord.md',
            },
            locks: {
                listLocks: 'ListLock.md',
                openLock: 'openLock.md',
                status: 'statusLock.md',
            },
            auth: 'token',
            users: {
                deleteUser: 'deleteUser.md',
                getListRoles: 'getListRoles.md',
                getRoleIdUser: 'getRoleIdUser.md',
                getUserId: 'getUserId.md',
                getUsers: 'getUsers.md',
                patchRole: 'patchRole.md',
                patchUser: 'patchUser.md',
                postRole: 'postRole.md',
                postUser: 'postUser.md',
                deleteRole: 'deleteRole.md',
            },
            identifiers: {
              getIdentifiers: "getIdentif.md",
                getIdentifiersId: "getIdentifId.md",
                getTypeIdentifiers: "getTypeIdentif.md",
                getTypeIdentifiersId: "getTypeIdentifId.md",
                patchIdentifiersId: "patchIdentifId.md",
                patchTypeIdentifiers: "patchTypeIdentifId.md",
                postIdentifiers: "postIdentif.md",
                postTypeIdentifiers: "postIdentifType.md"
            },
            objectsDescription: 'descriptionObjects.md',
        },
        equipment: {
            cu16: 'cu16.md',
            passCu16: 'passCu16.md',
            cu48: 'cu48.md',
            passCu48: 'passCu48.md',
            cu48b: 'cu48b.md',
            passCu48b: 'passCu48b.md',
            bu: 'bu.md',
            passBu: 'passBu.md',
            scu: 'scu.md',
            passScu: 'passScu.md',
            sbu: 'passSbu.md',
        },
    },
}
