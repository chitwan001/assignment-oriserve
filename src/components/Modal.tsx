import {useModal} from "../context/ModalContext";
import {createRef, useEffect, useState} from "react";
import Loading from "./Loading";

export default function Modal() {
    const {photoData, loading, updatePhotoData, updateLoadingStatus} = useModal();
    const imageRef = createRef<HTMLImageElement>();
    const handleLoadEnd = () => {
        updateLoadingStatus(false);
    }

    useEffect(() => {
        if (imageRef.current) {
            imageRef.current.addEventListener('load', handleLoadEnd)
        }
        return () => {
            imageRef.current?.removeEventListener('load', handleLoadEnd);
        }
    }, [imageRef]);

    const RenderPhoto = () => {
        if (photoData) {
            return (
                <div onClick={() => {
                    updatePhotoData(null)
                }}
                     className={'grid z-[100] transition bg-gray-950/70 place-content-center absolute top-0 left-0 w-screen h-screen'}>
                    <div onClick={(e) => {
                        e.stopPropagation()
                    }} className={'rounded-md relative overflow-hidden grid min-h-[2rem] min-w-[2rem] w-fit h-fit'}>
                        {
                            loading && (
                                <div className={`grid absolute top-0 left-0 place-self-center`}>
                                    <Loading/>
                                </div>
                            )
                        }
                        <img ref={imageRef} alt={photoData.title}
                             className={`${loading ? 'opacity-0' : 'opacity-100'} transition grid h-[95%] place-self-center`}
                             src={`https://live.staticflickr.com/${photoData.server}/${photoData.id}_${photoData.secret}_c.jpg`}/>

                    </div>

                </div>
            )
        } else {
            return (<></>)
        }
    }
    return (
        <RenderPhoto/>
    )
}