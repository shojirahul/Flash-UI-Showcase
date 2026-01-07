import { motion } from "framer-motion";
import { Snippet } from "@/lib/data";
import { IframeRenderer } from "./IframeRenderer";
import { cn } from "@/lib/utils";

interface SnippetCardProps {
  snippet: Snippet;
  onClick: () => void;
}

export function SnippetCard({ snippet, onClick }: SnippetCardProps) {
  return (
    <motion.div
      layoutId={snippet.id}
      onClick={onClick}
      className={cn(
        "group relative w-full aspect-[4/3] rounded-xl overflow-hidden cursor-pointer",
        "bg-white/5 backdrop-blur-sm border border-white/10",
        "hover:scale-[1.02] hover:border-cyan-400/50 hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.2)]",
        "transition-all duration-300 ease-out"
      )}
      whileHover={{ y: -5 }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <IframeRenderer
          html={snippet.html}
          title={snippet.prompt}
          scale={0.3}
          interactive={false}
        />
      </div>

      {/* Gradient Overlay for better text visibility (optional) or just glass effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-xs text-cyan-400 font-mono mb-1">{snippet.type}</p>
        <p className="text-sm text-white/90 line-clamp-1">{snippet.prompt}</p>
      </div>
    </motion.div>
  );
}
