import { getCurrentDate } from "@/lib/utils";

import defaultMarkdown from "../data.json";

const storageUpdatedEvent = new Event("storageUpdated");

export function initLocalStorage() {
    if (!localStorage.getItem("markdownDb")) {
        localStorage.setItem("markdownDb", JSON.stringify(defaultMarkdown));
    }
}

export function saveToLocalStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value))
        dispatchEvent(storageUpdatedEvent);
    } catch (error) {
        console.log(error)
    }
}

export function retrieveFromLocalStorage(key) {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : undefined
    } catch (error) {
        console.log(error)
    }
}

export function getMarkdownFile(index) {
    return retrieveFromLocalStorage("markdownDb")[index]
}

export function addFileToStorage(fileName) {
    let markdownDb = retrieveFromLocalStorage("markdownDb");

    markdownDb.push({
        name: fileName,
        createdAt: getCurrentDate(),
        content: "# New file."
    });

    saveToLocalStorage("markdownDb", markdownDb);
}

export function deleteFileFromStorage(index) {
    let markdownDb = retrieveFromLocalStorage("markdownDb");

    markdownDb = markdownDb.filter((_, i) => i !== index);

    saveToLocalStorage("markdownDb", markdownDb);
}