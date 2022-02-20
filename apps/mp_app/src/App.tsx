import './App.css'
import AppScene from "./Shared/components/AppScene";
import {ModelImporter} from "./Shared";
import {Suspense} from 'react'

function App() {

    return (
        <div className="App">
            <AppScene>
                <Suspense fallback={null}>
                    <ModelImporter/>
                </Suspense>
            </AppScene>
        </div>
    )
}

export default App
