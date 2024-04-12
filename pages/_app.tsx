import type { AppProps } from "next/app";

import "@/styles/globals.css";
import { RobotoMono } from "@/lib/fonts";


export default function App({
    Component,
    pageProps
}: AppProps) {
    return (
        <div className={`${RobotoMono.variable} font-roboto-mono`}>
            <Component {...pageProps} />
        </div>
    );
}