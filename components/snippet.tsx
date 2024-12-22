"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Copy from "./copy";
interface SnippetProps {
  text: string;
  width?: string;
}

export function Snippet({ text, width = "300px" }: SnippetProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <Card className="flex items-center justify-between p-2" style={{ width }}>
      <code className="text-sm font-mono">{text}</code>
      <Copy content={text} />
    </Card>
  );
}
