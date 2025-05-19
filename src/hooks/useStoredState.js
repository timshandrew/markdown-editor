import { useState } from "react";
import { retrieveFromLocalStorage } from "../utils/localStorageUtils";

export default function useStoredState(key, fallback) {
    const storedState = retrieveFromLocalStorage(key)

    return useState(storedState ? storedState : fallback)
}