import DarkModeProvider from "./Context";
import Forem from "./forem";
function App() {
    return (
        <DarkModeProvider>
            <Forem></Forem>
        </DarkModeProvider>
    );
}

export default App;
