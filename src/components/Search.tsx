import CachedTerms from "./CachedTerms";
import React, {useEffect, useState} from "react";
import {PhotoData, PhotoResponse} from "../types/Response";
import {useApi} from "../context/ApiContext";
import {REQUEST_TYPE} from "../types/Request";
import SearchResult from "./SearchResult";
import Loading from "./Loading";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Search() {
    const [query, setQuery] = useState('');
    const [responseData, setResponseData] = useState<PhotoData[]>([])
    const [loading, setLoading] = useState(false);

    const {setTermsIntoStorage} = useLocalStorage()
    const {apiInstance} = useApi()

    const handleQueryChange = (newQuery: string) => {
        setQuery(newQuery)
    }

    const RenderSearchResult = () => {
        if (loading) {
            return (
                <div className={'grid w-full h-fit py-2 place-content-center'}>
                    <Loading/>
                </div>
            )
        }
        return (
            <SearchResult query={query} result={responseData}/>
        )
    }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            //save search result on enter press
            setTermsIntoStorage([query])
        }
    }


    useEffect(() => {
        if (query !== "") {
            setLoading(true);
            apiInstance.get('', {
                params: {
                    method: REQUEST_TYPE.SEARCH,
                    safe_search: 3,
                    text: query,
                    per_page: 10,
                }
            }).then((res) => {
                const data = res.data as PhotoResponse;
                setResponseData(data.photos.photo)
                setLoading(false);
            })
        } else {
            setResponseData([])
        }
    }, [query]);
    return (
        <div className={'grid relative w-80'}>
            <input value={query} onKeyDown={handleKeyPress} onChange={(e) => {
                handleQueryChange(e.target.value)
            }} type="text" id="search_query"
                   className="bg-gray-50 peer text-gray-900 text-sm rounded-lg focus:rounded-b-none outline-0 block w-full p-2.5"
                   placeholder="Search title or description or tags" required/>
            <div
                className={'peer-focus:grid focus:grid hidden rounded-b-lg shadow-searchResult w-full h-fit max-h-[300px] z-[99] absolute top-full left-0 bg-gray-50'}>


                <RenderSearchResult/>

                <CachedTerms/>
            </div>
        </div>
    )
}