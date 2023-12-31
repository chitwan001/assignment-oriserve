import {createRef, useCallback, useEffect, useState} from "react";
import Loading from "./Loading";
import {PhotoData, PhotoResponse} from "../types/Response";
import {REQUEST_METHOD, REQUEST_TYPE} from "../types/Request";
import Photo from "./Photo";
import useFetch from "../hooks/useFetch";

export default function Gallery() {
    const [photoData, setPhotoData] = useState<PhotoData[]>([]);
    const [initialLoading, setInitialLoading] = useState(true);
    const [pageCounter, setPageCounter] = useState(1);

    const loaderRef = createRef<HTMLDivElement>()
    const {loading: successiveLoading} = useFetch(REQUEST_METHOD.GET, '', (res) => {
        const data = res.data as PhotoResponse;
        setPhotoData([...photoData, ...data.photos.photo])
        if (initialLoading) setInitialLoading(false)
        //although adding safe_search parameter, safe search is not working.
        // Seems API has not provided any such functionality for recent searches.
    }, {
        method: REQUEST_TYPE.RECENT,
        safe_search: 1,
        page: pageCounter,
        per_page: 20,
        extras: "description"
    }, {}, [pageCounter])

    const RenderPhotos = () => {
        if (initialLoading) {
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

    const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
        const target = entries[0];
        if (target.isIntersecting) {
            setPageCounter((prev) => prev + 1);
        }
    }, []);

    useEffect(() => {
        const option = {
            root: null,
            rootMargin: "0px",
            threshold: 1.0
        };
        const observer = new IntersectionObserver(handleObserver, option);
        if (loaderRef.current) observer.observe(loaderRef.current);
        else observer.disconnect()
    }, [handleObserver]);

    return (
        <div className={'grid max-h-[calc(100vh_-_6rem)] overflow-y-scroll m-2'}>
            <div className={'flex gap-[8px] justify-around flex-wrap'}>
                <RenderPhotos/>
            </div>
            <div ref={loaderRef} className={''}>

            </div>
            <div className={'grid mt-3 w-full h-fit place-content-center'}>
                {
                    !initialLoading && successiveLoading && (
                        <Loading/>
                    )
                }
            </div>
        </div>
    )
}