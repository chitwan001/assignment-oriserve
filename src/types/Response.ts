export type PhotoData = {
    farm: number,
    id: string,
    isfamily: number,
    isfriend: number,
    ispublic: number,
    owner: string,
    secret: string,
    server: string,
    title: string,
    description: {
        _content: string
    }
}

export type PhotoResponse = {
    photos: {
        page: number,
        pages: number,
        perpage: number,
        total: number,
        photo: PhotoData[]
    }
}