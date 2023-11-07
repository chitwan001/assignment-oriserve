import React, {useState} from "react";
import {ModalContextType} from "../types/Context";
import {PhotoData} from "../types/Response";

const ModalContext = React.createContext<ModalContextType>(
    {
        photoData: null,
        updatePhotoData: () => {
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

    const updatePhotoData = (updateData: PhotoData | null) => {
        setPhotoData(updateData);
    }

    return (
        <ModalContext.Provider
            value={{
                photoData,
                updatePhotoData
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