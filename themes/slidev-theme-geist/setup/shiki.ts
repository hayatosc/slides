import { defineShikiSetup } from "@slidev/types";
import fs from "node:fs";

const __dirname = new URL(".", import.meta.url).pathname;

export default defineShikiSetup(async () => {
    return {
        theme: {
            dark: JSON.parse(
                fs.readFileSync(`${__dirname}/shiki/dark.json`, "utf-8")
            ),
            light: JSON.parse(
                fs.readFileSync(`${__dirname}/shiki/light.json`, "utf-8")
            ),
        },
    };
});
