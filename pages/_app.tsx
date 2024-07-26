import type { AppProps } from "next/app";

import "@/styles/globals.css";
import { RobotoMono } from "@/lib/client/fonts";
import { merge } from "@/lib/utils/cssUtils";


export default function App({
    Component,
    pageProps
}: AppProps) {
    return (
        <div className={merge(RobotoMono.variable, "font-roboto-mono")}>
            <Component {...pageProps} />
        </div>
    );
}