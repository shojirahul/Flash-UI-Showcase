import { motion } from "framer-motion";
import { X, Code, Eye, Copy, Check, Trash } from "lucide-react";
import { Snippet } from "@/lib/data";
import { IframeRenderer } from "./IframeRenderer";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ExpandedViewProps {
  snippet: Snippet;
  onClose: () => void;
  onDelete?: () => void;
}

export function ExpandedView({ snippet, onClose, onDelete }: ExpandedViewProps) {
  const [viewMode, setViewMode] = useState<"preview" | "code">("preview");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(snippet.html);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
      />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 pointer-events-none">
        <motion.div
          layoutId={snippet.id}
          className="w-full max-w-6xl h-[85vh] bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col pointer-events-auto"
        >
          {/* Header Metadata */}
          <div className="relative p-6 md:p-8 border-b border-white/10 flex flex-col gap-4 bg-white/5">
            <div className="absolute top-6 right-6 flex items-center gap-3">
              {/* View Toggle */}
              <div className="flex bg-black/40 rounded-full p-1 border border-white/10 backdrop-blur-md">
                <button
                  onClick={() => setViewMode("preview")}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                    viewMode === "preview"
                      ? "bg-white/10 text-cyan-400 shadow-[0_0_20px_-5px_rgba(34,211,238,0.3)]"
                      : "text-white/40 hover:text-white/70"
                  )}
                >
                  <Eye size={16} />
                  Preview
                </button>
                <button
                  onClick={() => setViewMode("code")}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                    viewMode === "code"
                      ? "bg-white/10 text-cyan-400 shadow-[0_0_20px_-5px_rgba(34,211,238,0.3)]"
                      : "text-white/40 hover:text-white/70"
                  )}
                >
                  <Code size={16} />
                  Code
                </button>
              </div>

              {/* Delete Button */}
              {onDelete && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete();
                  }}
                  className="p-3 rounded-full bg-white/5 border border-white/5 hover:bg-red-500/20 hover:text-red-400 hover:border-red-500/30 transition-all text-white/50"
                  title="Delete Snippet"
                >
                  <Trash size={20} />
                </button>
              )}

              {/* Close Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
                className="p-3 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 hover:text-white transition-colors text-white/50"
                title="Close (Esc)"
              >
                <X size={20} />
              </button>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-start justify-between pr-40"
            >
              <div className="space-y-3">
                <span className="inline-block px-3 py-1 text-xs font-bold tracking-wide text-cyan-400 uppercase bg-cyan-400/10 rounded-full border border-cyan-400/20">
                  {snippet.type}
                </span>
                <h2 className="text-xl md:text-3xl font-mono text-white/95 leading-tight max-w-3xl">
                  {snippet.prompt}
                </h2>
              </div>
            </motion.div>
          </div>

          {/* Content Area */}
          <div className="flex-1 relative w-full bg-black/50 overflow-hidden">
            {viewMode === "preview" ? (
              <IframeRenderer
                html={snippet.html}
                title={snippet.prompt}
                scale={1}
                interactive={true}
                className="bg-transparent"
              />
            ) : (
              <div className="relative w-full h-full">
                <div className="absolute top-4 right-8 z-10">
                  <button
                    onClick={handleCopy}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-300 backdrop-blur-md",
                      copied
                        ? "bg-green-500/20 border-green-500/50 text-green-400"
                        : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white"
                    )}
                  >
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                    {copied ? "Copied!" : "Copy Code"}
                  </button>
                </div>
                <div className="w-full h-full overflow-auto p-8 bg-[#0a0a0c]">
                  <pre className="font-mono text-sm text-gray-300 leading-relaxed tab-4">
                    <code>{snippet.html}</code>
                  </pre>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
}
