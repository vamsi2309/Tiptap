"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";
import Underline from "@tiptap/extension-underline";
// import { BulletList, OrderedList } from "@tiptap/extension-list";

interface TiptapProps {
    onChange: (newContent: string) => void;
    content: string;
}
const Tiptap = ({ onChange, content }: TiptapProps) => {
    const handleChange = (newContent: string) => {
        onChange(newContent);
    };

    const editor = useEditor({
        extensions: [StarterKit, Underline],
        editorProps: {
            attributes: {
                class:
                    "flex flex-col px-4 py-3 justify-start border border-gray-300 text-black items-start w-full gap-3 font-medium text-[16px] pt-4 rounded-b-md outline-none caret-black", // Ensures black cursor
            },
        },
        content: content || "&nbsp;",
        autofocus: true,
        onUpdate: ({ editor }) => {
            handleChange(editor.getHTML());
        },
    });

    return (
        <div className="w-full max-w-3xl mx-auto shadow-md rounded-md">
            <Toolbar editor={editor} content={content} />
            <EditorContent
                editor={editor}
                style={{ whiteSpace: "pre-line" }}
                className="border-t border-gray-300"
                onClick={() => editor?.commands.focus()} // Ensure focus on click
            />
        </div>
    );
};

export default Tiptap;