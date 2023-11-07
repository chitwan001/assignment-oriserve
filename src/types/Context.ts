import {AxiosInstance} from "axios";
import {PhotoData} from "./Response";

export type ApiContextType = {
    apiInstance: AxiosInstance
}

export type ModalContextType = {
    photoData: PhotoData | null,
    updatePhotoData: (updateData: PhotoData | null) => void
}