import {PhotoData} from "../types/Response";

export default function Photo({photoData}: { photoData: PhotoData }) {
    return (
        <div id={photoData.id} className={'grid place-self-center w-fit h-fit rounded-md overflow-hidden'}>
            <img alt={photoData.title} src={`https://live.staticflickr.com/${photoData.server}/${photoData.id}_${photoData.secret}_w.jpg`}/>
        </div>
    )
}