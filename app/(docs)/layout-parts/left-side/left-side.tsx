"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronDown, Search, ChevronRight, Menu} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { DOCS } from "@/app/(docs)/layout-parts/documentation.constant";

const SidebarItem = ({ children, isActive, href, isNew }) => (
  <motion.div
    whileHover={{ x: 4 }}
    className={cn(
      "relative group",
      isActive && "bg-blue-500/10 dark:bg-blue-500/20"
    )}
  >
    <div
      className={cn(
        "absolute left-0 top-0 w-0.5 h-full bg-blue-500 opacity-0 transition-all",
        isActive && "opacity-100"
      )}
    />
    <Link
      href={href}
      className={cn(
        "flex items-center gap-2 px-4 py-2.5 text-sm rounded-r-lg transition-colors",
        isActive
          ? "text-blue-600 dark:text-blue-400 font-medium"
          : "text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
      )}
    >
      {children}
      {isNew && (
        <span className="px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/30 rounded-full">
          New
        </span>
      )}
    </Link>
  </motion.div>
);

export default function EnhancedSidebar() {
  const [openGroups, setOpenGroups] = useState(DOCS.map(g => g.groupKey));
  const [searchTerm, setSearchTerm] = useState("");
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const sortedDocs = DOCS.map(group => ({
    ...group,
    children: group.children.sort((a, b) => a.label.localeCompare(b.label)),
  })).sort((a, b) => a.groupValue.localeCompare(b.groupValue));

  const filteredDocs = sortedDocs.map(group => ({
    ...group,
    children: group.children.filter(child => 
      child.label.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  })).filter(group => group.children.length > 0);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className={cn(
        "hidden lg:flex flex-col h-screen sticky top-0 transition-all duration-300",
        isCollapsed ? "w-20" : "w-72",
        "border-r border-white/10"
      )}>
        <div className="p-4 border-b border-white/10">
          <div className="flex items-center justify-between mb-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-2 rounded-lg hover:bg-white/5 text-white/80"
            >
              <Menu className="w-5 h-5" />
            </motion.button>
            {!isCollapsed && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative flex-1 ml-2"
              >
                <Search className="absolute left-2 top-2.5 w-4 h-4 text-white/50" />
                <Input
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-white/20"
                />
              </motion.div>
            )}
          </div>
        </div>

        <ScrollArea className="flex-1 py-4">
          <AnimatePresence mode="wait">
            {!isCollapsed && (
              <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-1"
              >
                {filteredDocs.map((group) => (
                  <div key={group.groupKey} className="mb-4">
                    <Button
                      variant="ghost"
                      onClick={() => setOpenGroups(prev => 
                        prev.includes(group.groupKey)
                          ? prev.filter(k => k !== group.groupKey)
                          : [...prev, group.groupKey]
                      )}
                      className="w-full justify-between font-medium text-white/90 hover:bg-white/5 hover:text-white"
                    >
                      <span className="text-sm">{group.groupValue}</span>
                      <motion.div
                        animate={{ rotate: openGroups.includes(group.groupKey) ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-4 h-4 opacity-50" />
                      </motion.div>
                    </Button>
                    
                    <AnimatePresence>
                      {openGroups.includes(group.groupKey) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          {group.children.map((child) => (
                            <SidebarItem
                              key={child.value}
                              href={child.url}
                              isActive={pathname === child.url}
                              isNew={child.new}
                            >
                              {child.label}
                            </SidebarItem>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </motion.nav>
            )}
          </AnimatePresence>
        </ScrollArea>
      </aside>

      {/* Mobile Sidebar */}
      <div className="lg:hidden">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="p-2 mt-16 rounded-full hover:bg-white/5 text-white/80 fixed top-4 left-4  z-50 "
        >
          <ChevronRight  className="w-6 h-6 bg-white/5 rounded-full " />
        </motion.button>

        <AnimatePresence>
          {isMobileOpen && (
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm "
            >
              <div className="flex flex-col h-full w-72 bg-black p-4 mt-16  ">
                <div className="flex items-center justify-between mb-4">
                 
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="relative flex-1 ml-2 mt-12"
                  >
                    <Search className="absolute left-2 top-2.5 w-4 h-4 text-white/50"  />
                    <Input
                      placeholder="Search..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-8 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-white/20"
                    />
                  </motion.div>
                </div>

                <ScrollArea className="flex-1 py-4">
                  <motion.nav
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-1"
                  >
                    {filteredDocs.map((group) => (
                      <div key={group.groupKey} className="mb-4">
                        <Button
                          variant="ghost"
                          onClick={() => setOpenGroups(prev => 
                            prev.includes(group.groupKey)
                              ? prev.filter(k => k !== group.groupKey)
                              : [...prev, group.groupKey]
                          )}
                          className="w-full justify-between font-medium text-white/90 hover:bg-white/5 hover:text-white"
                        >
                          <span className="text-sm">{group.groupValue}</span>
                          <motion.div
                            animate={{ rotate: openGroups.includes(group.groupKey) ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown className="w-4 h-4 opacity-50" />
                          </motion.div>
                        </Button>
                        
                        <AnimatePresence>
                          {openGroups.includes(group.groupKey) && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              {group.children.map((child) => (
                                <SidebarItem
                                  key={child.value}
                                  href={child.url}
                                  isActive={pathname === child.url}
                                  isNew={child.new}
                                >
                                  {child.label}
                                </SidebarItem>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </motion.nav>
                </ScrollArea>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}