"use client";
import React, { useState } from "react";
import { SearchForm } from "@/components/search-form";
import { VersionSwitcher } from "@/components/version-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";

// Sample data.
const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "Components",
      url: "/components", // Main components page
      items: [
        {
          title: "Input Designs",
          url: "/components/input-fields", // Correct relative path
        },
        {
          title: "Buttons Designs",
          url: "/components/buttons", // Correct relative path
        },
        {
          title: "Card Designs",
          url: "/components/card-designs", // Correct relative path
        },
        // ... other items
      ],
    },
  ],
};


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  // State to track active item
  const [activeItem, setActiveItem] = useState<string | null>(null);

  // Function to handle click
  const handleItemClick = (title: string) => {
    setActiveItem(title); // Set the clicked item as active
  };

  return (
    <SidebarProvider>
      <Sidebar {...props}>
        <SidebarHeader className="mt-20">
          <VersionSwitcher
            versions={data.versions}
            defaultVersion={data.versions[0]}
          />
          <div className="flex justify-center items-center">
            <SearchForm />
            <SidebarTrigger />
          </div>
        </SidebarHeader>
        <SidebarContent>
          {/* We create a SidebarGroup for each parent. */}
          {data.navMain.map((item) => (
            <SidebarGroup key={item.title}>
              <SidebarGroupLabel  className="text-teal-300">{item.title}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {item.items.map((subItem) => (
                    <SidebarMenuItem key={subItem.title}>
                      <SidebarMenuButton
                        asChild
                        className={
                          activeItem === subItem.title ? "active-class " : ""
                        }
                        onClick={() => handleItemClick(subItem.title)} // Handle click
                      >
                        <a href={subItem.url}>{subItem.title}</a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
    </SidebarProvider>
  );
}
