import { render } from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import './styles/index.scss'
import ThemeProvider from "./theme/ThemeProvider";

render(
    <div>
        <BrowserRouter>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </BrowserRouter>
    </div>, 
    document.getElementById('root')
)