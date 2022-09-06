import React from "react";
import ReactDOM from "react-dom";
import { AppProvider, Button } from "@shopify/polaris";
import en from '@shopify/polaris/locales/en.json';
import "@shopify/polaris/build/esm/styles.css";


function App() {
    return (
        <AppProvider i18n={en}>
            <Button>Add product</Button>
        </AppProvider>
    );
}

export default App;

if (document.getElementById("root")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}
