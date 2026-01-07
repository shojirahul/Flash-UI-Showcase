"use client";

import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle } from "lucide-react";

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description: string;
}

export function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
}: ConfirmModalProps) {
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
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
          />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-[70] p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-[#0c0c0e] border border-white/10 rounded-xl p-6 max-w-sm w-full shadow-2xl pointer-events-auto"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-3 bg-red-500/10 rounded-full text-red-500">
                  <AlertTriangle size={32} />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white">{title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {description}
                  </p>
                </div>

                <div className="flex gap-3 w-full mt-4">
                  <button
                    onClick={onClose}
                    className="flex-1 px-4 py-2.5 rounded-lg border border-white/10 text-white/70 hover:bg-white/5 hover:text-white transition-colors text-sm font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={onConfirm}
                    className="flex-1 px-4 py-2.5 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors text-sm font-medium shadow-[0_0_20px_-5px_rgba(239,68,68,0.5)]"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
