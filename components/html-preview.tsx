"use client"; // Enables client-side rendering for this component

// Import necessary hooks from React
import React, { useState, ChangeEvent } from "react";

// Import custom UI components from the UI directory
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// Import predefined HTML content
import { predefinedHtml } from "./predefinedHtml";

// Default export of the HTMLPreviewComponent function
export default function HTMLPreview() {
  // State hooks for managing HTML code input and preview
  const [htmlCode, setHtmlCode] = useState<string>("");
  const [previewHtml, setPreviewHtml] = useState<string>("");

  // Handler to generate HTML preview
  const handlePreview = (): void => {
    setPreviewHtml(htmlCode);
  };

  // Handler to paste predefined HTML into the textarea
  const handlePasteHtml = (): void => {
    setHtmlCode(predefinedHtml);
  };

  // Handler for updating HTML code state on textarea change
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setHtmlCode(e.target.value);
  };

  // JSX return statement rendering the HTML previewer UI
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-300">
      {/* Center the HTML previewer card within the screen */}
      <div className="w-2/5 p-6 rounded-lg shadow-lg bg-card bg-gradient-to-tr to-pink-300 from-orange-300">
        <h1 className="text-4xl font-bold mb-4 text-center text-blue-600">HTML Previewer</h1>
        <p className="mb-4 text-center text-white font-mono bg-blue-400">
          Enter your HTML code and see the preview.
        </p>
        <div className="grid gap-6">
          {/* Textarea for entering HTML code */}
          <Textarea
            value={htmlCode}
            onChange={handleChange}
            placeholder="Enter your HTML code here..."
            className="p-4 rounded-lg border border-input bg-blue-200 text-gray-900 font-bold"
            rows={10}
          />
          {/* Buttons to generate preview and paste predefined HTML */}
          <div className="flex justify-center">
            <div className="flex gap-4">
              <Button onClick={handlePreview} className="bg-blue-700 text-white font-bold hover:bg-green-400">Generate Preview</Button>
              <Button onClick={handlePasteHtml} className="bg-blue-700 text-white font-bold  hover:bg-green-400">Paste HTML</Button>
            </div>
          </div>
          {/* Div to display the HTML preview */}
          <div className="p-4 bg-blue-200 rounded-lg border border-input bg-background text-black">
            <div dangerouslySetInnerHTML={{ __html: previewHtml }} />
          </div>
        </div>
      </div>
      <div>
        <p className="text-sm">Designed by <b>MARYAM ANSARI</b></p>
      </div>
    </div>
  );
}