'use client'

import React from 'react'
import FileStructure from './filestructure'

const fileStructureData = {
  name: 'project-root',
  type: 'folder' as const,
  children: [
    {
      name: 'src',
      type: 'folder' as const,
      children: [
        {
          name: 'components',
          type: 'folder' as const,
          children: [
            { name: 'Header.tsx', type: 'file' as const },
            { name: 'Footer.tsx', type: 'file' as const },
            { name: 'Sidebar.tsx', type: 'file' as const },
          ],
        },
        {
          name: 'pages',
          type: 'folder' as const,
          children: [
            { name: 'index.tsx', type: 'file' as const },
            { name: 'about.tsx', type: 'file' as const },
            { name: 'contact.tsx', type: 'file' as const },
          ],
        },
        { name: 'styles', type: 'folder' as const, children: [{ name: 'globals.css', type: 'file' as const }] },
      ],
    },
    { name: 'package.json', type: 'file' as const },
    { name: 'tsconfig.json', type: 'file' as const },
    { name: 'README.md', type: 'file' as const },
  ],
}

export default function Home() {
  return (
    <div className=" relative bg-gradient-to-br from-violet-50 to-blue-50 dark:from-gray-400 dark:to-gray-500 p-8">
      {/* Dot pattern overlay */}
      <div 
        className="absolute inset-0 opacity-100" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(99 102 241 / 4) 1px, transparent 0)`,
          backgroundSize: '24px 24px',
        }}
      />
      
      {/* Gradient orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl" />
      
      {/* Content */}
      <div className="relative max-w-2xl mx-auto">
        <div className="backdrop-blur-xl bg-white/60 dark:bg-gray-900/60 rounded-2xl shadow-2xl overflow-hidden border border-white/20 dark:border-gray-800/20">
          <div className="p-8">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-violet-600 to-blue-600 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
              Project File Structure
            </h1>
            <div className="bg-white/40 dark:bg-gray-950/40 rounded-xl p-6 shadow-inner border border-gray-200/50 dark:border-gray-800/50">
              <FileStructure data={fileStructureData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}