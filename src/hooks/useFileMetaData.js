import { retrieveFromLocalStorage } from "@/utils/localStorageUtils";

import defaultMarkdown from "../data.json";
import { useEffect, useState } from "react";

export function useFileMetaData() {
    let markdown = retrieveFromLocalStorage("markdownDb")
    
        if (!markdown) {
            markdown = defaultMarkdown;
        }

    const metaData = markdown.map((file) => {return {"name": file.name, "createdAt": file.createdAt}});

    const [fileMetaData, setFileMetaData] = useState(metaData);

    useEffect(() => {
        let markdownDb = retrieveFromLocalStorage("markdownDb");
        
        if (!markdownDb) {
            markdownDb = defaultMarkdown;
        }

        
    },[fileMetaData]);

    return [fileMetaData, setFileMetaData];
}