import {PhotoData} from "../types/Response";

export default function SearchResult({result, query}: { result: PhotoData[], query: string }) {

    const RenderResults = () => {
        //no data available
        if (result.length === 0 && query !== "") {
            return (
                <div className={'grid py-1.5 place-content-center text-sm text-gray-600 font-semibold'}>
                    No search results available
                </div>
            )
        } else if (query === "") {
            return (
                <></>
            )
        } else {
            return (
                <div className={'grid h-fit gap-1.5'}>
                    {
                        result.map((photoData, ind) => (
                            <div key={'search-result-' + ind}
                                 className={'grid text-sm px-5 py-2 cursor-pointer hover:bg-gray-200 font-semibold'}>
                                {
                                    photoData.title ? photoData.title : "No title available"
                                }
                            </div>
                        ))
                    }
                </div>
            )
        }
    }

    return (
        <div className={'grid h-fit overflow-y-scroll max-h-[200px]'}>
            <RenderResults/>
        </div>
    )
}