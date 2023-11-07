import {useModal} from "../context/ModalContext";

export default function Modal() {
    const {photoData, updatePhotoData} = useModal();
    const RenderPhoto = () => {
        if (photoData) {
            return (
                <div onClick={() => {
                    updatePhotoData(null)
                }}
                     className={'grid z-[100] transition bg-gray-950/70 place-content-center absolute top-0 left-0 w-screen h-screen'}>
                    <div onClick={(e) => {
                        e.stopPropagation()
                    }} className={'rounded-md overflow-hidden grid w-fit h-fit'}>
                        <img alt={photoData.title} className={'grid h-[95%] place-self-center'}
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