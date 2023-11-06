import Header from "./components/Header";
import Gallery from "./components/Gallery";

function App() {

    return (
        <div className={'grid bg-gray-100 grid-rows-[auto_1fr]'}>
            <Header/>
            <Gallery/>
        </div>
    );
}

export default App;
