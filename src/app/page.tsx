"use client";

import { useState, useEffect } from "react";
import { LayoutGroup, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { SAMPLE_SNIPPETS, Snippet } from "@/lib/data";
import { SnippetCard } from "@/components/SnippetCard";
import { ExpandedView } from "@/components/ExpandedView";
import { AddSnippetModal } from "@/components/AddSnippetModal";
import { ConfirmModal } from "@/components/ConfirmModal";

export default function Home() {
  const [snippets, setSnippets] = useState<Snippet[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [snippetToDelete, setSnippetToDelete] = useState<string | null>(null);

  // Initialize from localStorage or fallback to defaults
  useEffect(() => {
    const saved = localStorage.getItem("app-snippets");
    if (saved) {
      try {
        setSnippets(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse snippets", e);
        setSnippets(SAMPLE_SNIPPETS);
      }
    } else {
      setSnippets(SAMPLE_SNIPPETS);
    }
  }, []);

  // Persist changes
  useEffect(() => {
    if (snippets.length > 0) {
      localStorage.setItem("app-snippets", JSON.stringify(snippets));
    }
  }, [snippets]);

  const selectedSnippet = snippets.find((s) => s.id === selectedId);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (snippetToDelete) {
          setSnippetToDelete(null);
          return;
        }
        setSelectedId(null);
        setIsAddModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [snippetToDelete]);

  const handleSaveSnippet = (newSnippet: Snippet) => {
    setSnippets((prev) => [newSnippet, ...prev]);
  };

  const handleRequestDelete = (id: string) => {
    setSnippetToDelete(id);
  };

  const confirmDelete = () => {
    if (snippetToDelete) {
      setSnippets((prev) => prev.filter((s) => s.id !== snippetToDelete));
      setSnippetToDelete(null);
      setSelectedId(null);
    }
  };

  return (
    <main className="min-h-screen p-8 md:p-12 lg:p-16">
      <div className="max-w-7xl mx-auto space-y-12">
        <header className="flex justify-between items-start">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent">
              AI UI Showcase
            </h1>
            <p className="text-white/60 max-w-xl text-lg">
              A collection of generative UI components. Click any card to interact with the full fidelity code.
            </p>
          </div>

          <button
            onClick={() => setIsAddModalOpen(true)}
            className="group flex items-center justify-center w-12 h-12 bg-white rounded-full hover:scale-110 transition-transform shadow-lg shadow-white/10"
            title="Add New Snippet"
          >
            <Plus className="w-6 h-6 text-black" />
          </button>
        </header>

        <LayoutGroup>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {snippets.map((snippet) => (
              <SnippetCard
                key={snippet.id}
                snippet={snippet}
                onClick={() => setSelectedId(snippet.id)}
              />
            ))}
          </div>

          <AnimatePresence>
            {selectedSnippet && (
              <ExpandedView
                snippet={selectedSnippet}
                onClose={() => setSelectedId(null)}
                onDelete={() => handleRequestDelete(selectedSnippet.id)}
              />
            )}

            {isAddModalOpen && (
              <AddSnippetModal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                onSave={handleSaveSnippet}
              />
            )}

            {snippetToDelete && (
              <ConfirmModal
                isOpen={!!snippetToDelete}
                title="Delete Snippet?"
                description="This action cannot be undone. The snippet will be permanently removed from your library."
                onClose={() => setSnippetToDelete(null)}
                onConfirm={confirmDelete}
              />
            )}
          </AnimatePresence>
        </LayoutGroup>
      </div>
    </main>
  );
}
