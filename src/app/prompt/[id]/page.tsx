"use client";

import { motion } from 'framer-motion';
import { notFound } from 'next/navigation';
import { Header } from '../../../features/shared/components/header';
import { PromptHeader } from '../../../features/prompt-details/components/prompt-header';
import { PromptContent } from '../../../features/prompt-details/components/prompt-content';
import { AuthorCard } from '../../../features/prompt-details/components/author-card';
import { AIToolCard } from '../../../features/prompt-details/components/ai-tool-card';
import { use, useEffect, useState } from 'react';
import { Prompt } from '../../../types';

interface PromptPageProps {
  params: Promise<{ id: string }>;
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function PromptPage({ params }: PromptPageProps) {
  const { id } = use(params);
  const [prompt, setPrompt] = useState<Prompt | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function fetchPrompt() {
      try {
        const response = await fetch(`/api/prompts/${id}`);
        if (!response.ok) {
          if (response.status === 404) {
            notFound();
          }
          throw new Error('Failed to fetch prompt');
        }
        const data = await response.json();
        setPrompt(data);
      } catch (error) {
        console.error('Error fetching prompt:', error);
        notFound();
      } finally {
        setLoading(false);
      }
    }
    fetchPrompt();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="h-20 bg-gray-100 dark:bg-gray-800 rounded-lg animate-pulse mb-6" />
              <div className="h-96 bg-gray-100 dark:bg-gray-800 rounded-lg animate-pulse" />
            </div>
            <div className="lg:col-span-1">
              <div className="h-40 bg-gray-100 dark:bg-gray-800 rounded-lg animate-pulse mb-6" />
              <div className="h-40 bg-gray-100 dark:bg-gray-800 rounded-lg animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!prompt) {
    notFound();
  }

  // Simulamos que el usuario NO está logueado
  const isLoggedIn = false;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Main Content */}
          <div className="lg:col-span-2">
            <PromptHeader prompt={prompt} category={prompt.category} aiTool={prompt.aiTool} />
            <PromptContent prompt={prompt} aiTool={prompt.aiTool} isLoggedIn={isLoggedIn} />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <AuthorCard prompt={prompt} />
            <AIToolCard aiTool={prompt.aiTool} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}