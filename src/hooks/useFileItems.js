import { retrieveFromLocalStorage } from "@/utils/localStorageUtils";

import defaultMarkdown from "../data.json";
import { useEffect, useState } from "react";

export default function useFileItems() {
    let markdown = retrieveFromLocalStorage("markdownDb");
    
    if (!markdown) {
        markdown = defaultMarkdown;
    }

    const metaData = markdown.map((file) => {return {"name": file.name, "createdAt": file.createdAt}});

    const [fileMetaData, setFileMetaData] = useState(metaData);

    useEffect(() => {
        // Avoid triggers not related to this app.
        window.addEventListener("storage", (e) => {
            if (e.key === "markdownDb") {
                console.log(e.newValue);
            }
        })
    }, []);

    return [fileMetaData, setFileMetaData];
}