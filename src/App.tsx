import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Modal from "./components/Modal";
import {ModalProvider} from "./context/ModalContext";

function App() {

    return (
        <div className={'grid relative bg-gray-100 grid-rows-[auto_1fr]'}>
            <Header/>
            <ModalProvider>
                <Gallery/>
                <Modal/>
            </ModalProvider>
        </div>
    );
}

export default App;
