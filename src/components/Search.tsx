import CachedTerms from "./CachedTerms";

export default function Search() {
    return (
        <div className={'grid relative w-80'}>
            <input type="text" id="search_query"
                   className="bg-gray-50 peer text-gray-900 text-sm rounded-lg focus:rounded-b-none outline-0 block w-full p-2.5"
                   placeholder="Search title or description or tags" required/>
            <div className={'peer-focus:grid hidden rounded-b-lg shadow-searchResult w-full h-fit max-h-[300px] z-[99] absolute top-full left-0 bg-gray-50'}>
                <CachedTerms/>
            </div>
        </div>
    )
}