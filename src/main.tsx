import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { SWRConfig } from "swr";
import { REFRESH_INTERVAL } from "./helpers/env.ts";
import { fetcher } from "./helpers";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <SWRConfig
            value={{
                refreshInterval: REFRESH_INTERVAL,
                fetcher,
                onErrorRetry: (
                    error,
                    _key,
                    _config,
                    revalidate,
                    { retryCount }
                ) => {
                    if (error.status === 404) return;

                    if (retryCount >= 2) return;

                    setTimeout(() => revalidate({ retryCount }), 2000);
                },
            }}
        >
            <App />
        </SWRConfig>
    </React.StrictMode>
);
