"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Save, Play } from "lucide-react";
import { IframeRenderer } from "./IframeRenderer";
import { Snippet } from "@/lib/data";

interface AddSnippetModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (snippet: Snippet) => void;
}

export function AddSnippetModal({ isOpen, onClose, onSave }: AddSnippetModalProps) {
  const [prompt, setPrompt] = useState("");
  const [type, setType] = useState("Custom Component");
  const [htmlCode, setHtmlCode] = useState(
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    body { 
      background: #111; 
      color: white; 
      display: flex; 
      justify-content: center; 
      align-items: center; 
      height: 100vh; 
      margin: 0; 
      font-family: sans-serif;
    }
  </style>
</head>
<body>
  <h1>Hello World</h1>
</body>
</html>`
  );

  // Generate a temporary snippet for preview
  const previewSnippet: Snippet = {
    id: "preview",
    prompt: prompt || "Preview",
    type: type,
    html: htmlCode,
  };

  const handleSave = () => {
    if (!htmlCode.trim()) return;

    const newSnippet: Snippet = {
      id: `custom-${Date.now()}`,
      prompt: prompt || "Untitled Snippet",
      type: type || "Custom",
      html: htmlCode,
    };

    onSave(newSnippet);
    // Reset form
    setPrompt("");
    setType("Custom Component");
    setHtmlCode("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-4 md:inset-10 bg-[#0c0c0e] border border-white/10 z-50 rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
          >
            {/* Header / Close for mobile */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-white/5 hover:bg-white/10 rounded-full z-[60] md:hidden"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Left Column: Form */}
            <div className="w-full md:w-1/2 lg:w-1/3 border-b md:border-b-0 md:border-r border-white/10 flex flex-col bg-[#0c0c0e]">
              <div className="p-6 border-b border-white/10 flex justify-between items-center">
                <h2 className="text-xl font-bold text-white">Add Snippet</h2>
                <div className="hidden md:block">
                  <kbd className="px-2 py-1 bg-white/5 rounded text-xs text-white/50">ESC</kbd>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-white/40 font-mono">Prompt / Title</label>
                  <input
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="e.g. Neon Button"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-white/40 font-mono">Type / Category</label>
                  <input
                    type="text"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    placeholder="e.g. Button"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>

                <div className="space-y-2 flex-1 flex flex-col">
                  <label className="text-xs uppercase tracking-wider text-white/40 font-mono">HTML Code</label>
                  <textarea
                    value={htmlCode}
                    onChange={(e) => setHtmlCode(e.target.value)}
                    placeholder="<!DOCTYPE html>..."
                    className="w-full h-64 md:h-96 bg-[#08080a] border border-white/10 rounded-lg p-4 text-sm font-mono text-white/80 placeholder-white/20 focus:outline-none focus:border-white/30 resize-none leading-relaxed"
                    spellCheck={false}
                  />
                </div>
              </div>

              <div className="p-6 border-t border-white/10 bg-[#0c0c0e] flex gap-3">
                <button
                  onClick={onClose}
                  className="flex-1 px-4 py-3 rounded-lg border border-white/10 text-white/60 hover:text-white hover:bg-white/5 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  disabled={!htmlCode.trim()}
                  className="flex-1 px-4 py-3 rounded-lg bg-white text-black font-bold hover:bg-white/90 transition-colors flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Save className="w-4 h-4" />
                  Save Snippet
                </button>
              </div>
            </div>

            {/* Right Column: Preview */}
            <div className="w-full md:w-1/2 lg:w-2/3 bg-[#08080a] relative flex flex-col">
              <div className="absolute top-4 right-4 z-10 hidden md:block">
                <button onClick={onClose} className="p-2 bg-black/50 hover:bg-black/70 rounded-full text-white/50 hover:text-white transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 relative overflow-hidden flex items-center justify-center p-8">
                {/* Phone frame mock or just container */}
                <div className="w-full h-full border border-white/10 rounded-lg overflow-hidden bg-black shadow-2xl relative">
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
                  <IframeRenderer code={htmlCode} interactive={true} />
                </div>
              </div>

              <div className="p-4 border-t border-white/5 flex justify-between items-center text-xs text-white/30 font-mono uppercase tracking-widest">
                <span>Live Preview</span>
                <span>Interactive</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
