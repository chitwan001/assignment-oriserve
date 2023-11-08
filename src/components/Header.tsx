import Search from "./Search";

export default function Header(){
    return(
        <div className={'grid relative grid-flow-col bg-gray-950 w-full h-20'}>
            <div className={'hidden lg:grid absolute text-white font-bold text-xl p-2 justify-self-start self-center'}>
                Photo Gallery from Flickr
            </div>
            <div className={'grid absolute place-self-center'}>
                <Search/>
            </div>
        </div>
    )
}