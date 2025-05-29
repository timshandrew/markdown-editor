import { extendTailwindMerge } from "tailwind-merge";

// A function used in place of the regular twMerge. Set up to recognize my custom theme Tailwind theme.
export const customTwMerge = extendTailwindMerge({extend: {
        classGroups: {
            "font-size": ["text-preview-h1", "text-preview-h2", "text-preview-h3", "text-preview-h4", "text-preview-p"],
        }
    }})

