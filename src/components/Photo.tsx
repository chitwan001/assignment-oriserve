import {PhotoData} from "../types/Response";
import Markdown from "react-markdown";
import {useModal} from "../context/ModalContext";

export default function Photo({photoData}: {
    photoData: PhotoData
}) {
    const {updatePhotoData} = useModal()
    const RenderTitleAndDescription = () => {
        if (photoData.title !== "" || photoData.description._content !== "") {
            return (
                <div
                    className={'group-hover:grid p-2 bg-gray-950/50 transition text-white place-content-center cursor-pointer hidden absolute top-0 left-0 w-full h-full'}>
                    <div className={'text-center grid font-bold text-lg'}>
                        {photoData.title}
                    </div>
                    <br/>
                    <div className={'text-center line-clamp-4'}>
                        <Markdown>{photoData.description._content}</Markdown>
                    </div>
                </div>
            )
        } else {
            return (
                <></>
            )
        }
    }

    const handlePhotoOpen = () => {
        updatePhotoData(photoData);
    }
    return (
        <div id={photoData.id} onClick={handlePhotoOpen}
             className={'grid group relative place-self-center w-fit h-fit rounded-md overflow-hidden'}>
            <img className={'cursor-pointer duration-300 transition'} alt={photoData.title}
                 src={`https://live.staticflickr.com/${photoData.server}/${photoData.id}_${photoData.secret}_w.jpg`}/>
            <RenderTitleAndDescription/>
        </div>
    )
}