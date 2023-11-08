import Search from "./Search";

export default function Header(){
    return(
        <div className={'grid grid-flow-col bg-gray-950 w-full h-20'}>
            <div className={'grid text-white font-bold text-xl p-2 justify-self-start self-center'}>
                Photo Gallery from Flickr
            </div>
            <div className={'grid place-self-center'}>
                <Search/>
            </div>
            <div className={'grid text-white p-2 justify-self-end self-center'}>
                Made with ❤️ by Chitwan Bindal
            </div>
        </div>
    )
}