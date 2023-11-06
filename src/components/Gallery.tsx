import {useApi} from "../context/ApiContext";
import {useEffect, useState} from "react";
import Loading from "./Loading";
import {PhotoData, PhotoResponse} from "../types/Response";
import {REQUEST_METHOD} from "../types/Request";
import Photo from "./Photo";

export default function Gallery() {
    const [photoData, setPhotoData] = useState<PhotoData[]>([]);
    const [loading, setLoading] = useState(false);
    const {apiInstance} = useApi();

    useEffect(() => {
        setLoading(true);
        apiInstance.get('', {
            params: {
                method: REQUEST_METHOD.RECENT
            }
        }).then((res) => {
            const data = res.data as PhotoResponse;
            setPhotoData(data.photos.photo)
            setLoading(false)
        })
    }, []);

    const RenderPhotos = () => {
        if (loading) {
            return (
                <Loading/>
            )
        } else {
            return (
                <>
                    {
                        photoData.map((data, ind) => (
                            <Photo key={'photo-' + ind} photoData={data}/>
                        ))
                    }
                </>
            )
        }
    }

    return (
        <div className={'flex gap-[8px] justify-around flex-wrap m-2'}>
            <RenderPhotos/>
        </div>
    )
}