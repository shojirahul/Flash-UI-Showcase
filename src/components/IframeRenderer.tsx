import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface IframeRendererProps {
  html: string;
  title: string;
  scale?: number;
  interactive?: boolean;
  className?: string;
}

export function IframeRenderer({
  html,
  title,
  scale = 1,
  interactive = false,
  className,
}: IframeRendererProps) {
  return (
    <div
      className={cn(
        "relative w-full h-full overflow-hidden bg-white/5",
        className
      )}
    >
      <motion.div
        className="w-full h-full origin-top-left"
        animate={{ scale }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{
          width: `${100 / scale}%`,
          height: `${100 / scale}%`,
        }}
      >
        <iframe
          srcDoc={html}
          title={title}
          className={cn(
            "w-full h-full border-0 block bg-black",
            interactive ? "pointer-events-auto" : "pointer-events-none"
          )}
          sandbox="allow-scripts allow-same-origin"
          loading="lazy"
        />
      </motion.div>
      {/* Overlay to catch clicks in non-interactive mode if needed, though pointer-events-none on iframe helps */}
      {!interactive && <div className="absolute inset-0 z-10" />}
    </div >
  );
}
