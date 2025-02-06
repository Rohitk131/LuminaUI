'use client'

import React, { useState } from 'react'
import { ChevronRight, ChevronDown, File, Folder } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface FileNode {
  name: string
  type: 'file' | 'folder'
  children?: FileNode[]
}

interface FileStructureProps {
  data: FileNode
}

const FileStructure: React.FC<FileStructureProps> = ({ data }) => {
  const [expanded, setExpanded] = useState(false)

  const toggleExpand = () => {
    setExpanded(!expanded)
  }

  const isFolder = data.type === 'folder'

  return (
    <div className="font-mono text-sm">
      <motion.div
        className={`flex items-center p-2 rounded-md transition-all duration-200 ${
          isFolder ? 'cursor-pointer hover:bg-gradient-to-r hover:from-purple-100 hover:to-blue-100 dark:hover:from-gray-900 dark:hover:to-gray-950' : ''
        }`}
        onClick={isFolder ? toggleExpand : undefined}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.div
          initial={false}
          animate={{ rotate: expanded ? 90 : 0 }}
          transition={{ duration: 0.2 }}
          className="mr-1"
        >
          {isFolder && (expanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />)}
        </motion.div>
        {isFolder ? (
          <Folder size={16} className="mr-2 text-blue-500" />
        ) : (
          <File size={16} className="mr-2 text-gray-500" />
        )}
        <span className="text-gray-800 dark:text-gray-200">{data.name}</span>
      </motion.div>
      <AnimatePresence>
        {expanded && isFolder && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="ml-4 border-l-2 border-gradient-to-b from-purple-200 to-blue-200 dark:from-purple-800 dark:to-blue-800"
          >
            {data.children?.map((child, index) => (
              <FileStructure key={index} data={child} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default FileStructure

