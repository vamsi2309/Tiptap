"use client";

import React from "react";
import { type Editor } from "@tiptap/react";
import {
    Bold,
    Italic,
    List,
    ListOrdered,
    Underline,
} from "lucide-react";

type Props = {
    editor: Editor | null;
    content: string;
};

const Toolbar = ({ editor }: Props) => {
    if (!editor) {
        return null;
    }
    return (
        <div className="w-full shadow-md rounded-md">
            {/* Toolbar */}
            <div className="bg-gray-50 border border-gray-300 rounded-t-md px-4 py-2 flex gap-3">
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().toggleBold().run();
                    }}
                    className={`border border-gray-300 rounded-md px-3 py-1 text-gray-700 hover:bg-gray-100 transition ${editor.isActive("bold") ? "bg-gray-200 text-gray-900" : ""
                        }`}
                >
                    <Bold className="w-5 h-5" />
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().toggleItalic().run();
                    }}
                    className={`border border-gray-300 rounded-md px-3 py-1 text-gray-700 hover:bg-gray-100 transition ${editor.isActive("italic") ? "bg-gray-200 text-gray-900" : ""
                        }`}
                >
                    <Italic className="w-5 h-5" />
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().toggleUnderline().run();
                    }}
                    className={`border border-gray-300 rounded-md px-3 py-1 text-gray-700 hover:bg-gray-100 transition ${editor.isActive("underline") ? "bg-gray-200 text-gray-900" : ""
                        }`}
                >
                    <Underline className="w-5 h-5" />
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        console.log("Toggling Bullet List");
                        editor.chain().focus().toggleBulletList().run();
                    }}
                    className={`border border-gray-300 rounded-md px-3 py-1 text-gray-700 hover:bg-gray-100 transition ${editor.isActive("bulletList") ? "bg-gray-200 text-gray-900" : ""}`}
                >
                    <List className="w-5 h-5" />
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        console.log("Toggling Ordered List");
                        editor.chain().focus().toggleOrderedList().run();
                    }}
                    className={`border border-gray-300 rounded-md px-3 py-1 text-gray-700 hover:bg-gray-100 transition ${editor.isActive("orderedList") ? "bg-gray-200 text-gray-900" : ""}`}
                >
                    <ListOrdered className="w-5 h-5" />
                </button>
            </div>
        </div>

    );
};

export default Toolbar;