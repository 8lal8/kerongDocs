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
                deleteBu:"deleteBuBord.md",
                infoBu: "infoBuBord.md",
                listBu: "ListAddedBuBoards.md",
                regBu: "registrBuBord.md",
                updateBu: "updateBuBord.md"
            },
            cu: {
                getTimeAll: "getValueTimeLockAllCuBord.md",
                getTime: "getValueTimeLockCuBord.md",
                installTime: "instalTimeLock.md",
                installTimeAll : "instalTimeLockAllCuBord.md",
                listCu : "ListCCuBord.md",
            },
            locks: {
                listLocks: "ListLock.md",
                openLock: "openLock.md",
                status : "statusLock.md",
            },
            objectsDescription: "descriptionObjects.md"

        }
    },
}
