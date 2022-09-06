import enTranslations from "@shopify/polaris/locales/en.json";
import {
    AppProvider,
    Page,
    Card,
    Button,
    ButtonGroup,
    Frame,
    Navigation,
} from "@shopify/polaris";
import React from "react";
import ReactDOM from "react-dom";
import { HomeMinor, OrdersMinor, ProductsMinor } from "@shopify/polaris-icons";

function Example() {
    return (
        <AppProvider i18n={enTranslations}>
            <Frame>
                <Navigation location="/">
                    <Navigation.Section
                        items={[
                            {
                                url: "/",
                                label: "Home",
                                icon: HomeMinor,
                            },
                            {
                                url: "/path/to/place",
                                label: "Orders",
                                icon: OrdersMinor,
                                badge: "15",
                            },
                            {
                                url: "/path/to/place",
                                label: "Products",
                                icon: ProductsMinor,
                            },
                        ]}
                    />
                </Navigation>
            </Frame>
        </AppProvider>
    );
}

export default Example;

if (document.getElementById("root")) {
    ReactDOM.render(<Example />, document.getElementById("root"));
}
