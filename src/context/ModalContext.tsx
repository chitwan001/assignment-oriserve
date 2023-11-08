import React, {useState} from "react";
import {ModalContextType} from "../types/Context";
import {PhotoData} from "../types/Response";

const ModalContext = React.createContext<ModalContextType>(
    {
        photoData: null,
        updatePhotoData: () => {
            return
        },
        loading: true,
        updateLoadingStatus: () => {
            return
        }
    }
);
ModalContext.displayName = "ModalContext";

/**
 * ModalContext provider wrapper to provide context value to children
 * @param params
 * @constructor
 */
export function ModalProvider(params: { children: React.ReactNode }) {
    const [photoData, setPhotoData] = useState<PhotoData | null>(null);
    const [loading, setLoading] = useState(true);
    const updatePhotoData = (updateData: PhotoData | null) => {
        setPhotoData(updateData);
        setLoading(true);
    }

    const updateLoadingStatus = (status: boolean) => {
        setLoading(status)
    }

    return (
        <ModalContext.Provider
            value={{
                photoData,
                updatePhotoData,
                loading,
                updateLoadingStatus
            }}
            {...params}
        ></ModalContext.Provider>
    )
}

export function useModal() {
    const context = React.useContext(ModalContext);
    if (context !== undefined) {
        return context;
    }
    throw new Error("useModal must be used within ModalProvider");
}