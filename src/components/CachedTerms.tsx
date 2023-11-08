import useLocalStorage from "../hooks/useLocalStorage";

export default function CachedTerms() {
    const {terms} = useLocalStorage('flickr-searched-terms');

    const RenderTerms = () => {
        if (terms.length > 0) {
            return (
                <div className={'grid grid-flow-col gap-2 w-fit'}>
                    {
                        terms.map((term, ind) => (
                            <div key={'term' + ind}
                                 className={'rounded hover:bg-gray-400 cursor-pointer px-5 py-2 bg-gray-300 text-black text-sm font-medium'}>
                                {term}
                            </div>
                        ))
                    }
                </div>
            )
        } else {
            return (
                <></>
            )
        }
    }
    return (
        <div className={'grid max-w-[20rem] min-h-[30px] h-fit overflow-x-scroll p-3'}>
            <RenderTerms/>
        </div>
    )
}