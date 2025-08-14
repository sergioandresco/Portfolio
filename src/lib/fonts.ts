import localFont from "next/font/local";

export const acornFont = localFont({
    src: [
        {
            path: "../resources/fonts/acorn/Acorn-ExtraLight.woff",
            weight: "300",
            style: "normal",
        },
        {
            path: "../resources/fonts/acorn/Acorn-Light.woff",
            weight: "400",
            style: "normal",
        },
        {
            path: "../resources/fonts/acorn/Acorn-Medium.woff",
            weight: "500",
            style: "normal",
        },
        {
            path: "../resources/fonts/acorn/Acorn-Bold.woff",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-acorn",
    display: "swap",
});

export const gtPlanarFont = localFont({
    src: [
        {
            path: "../resources/fonts/gt-planar/GT-Planar-Light-Trial-BF63bcd77b74df6.otf",
            weight: "300",
            style: "normal",
        },
        {
            path: "../resources/fonts/gt-planar/GT-Planar-Medium-Trial-BF63bcd77600d58.otf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../resources/fonts/gt-planar/GT-Planar-Bold-Trial-BF63bcd77557486.otf",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-gt-planar",
    display: "swap",
});