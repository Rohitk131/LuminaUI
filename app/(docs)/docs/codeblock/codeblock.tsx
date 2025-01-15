'use client'
import React, { useState } from 'react';
import { Highlight, themes } from "prism-react-renderer";
import { Check, Copy, FileCode } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface CodeBlockProps {
  code: string;
  language: string;
  filename: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language, filename }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-lg border bg-background shadow-md transition-all hover:shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between border-b bg-muted/40 px-4 py-3">
        <div className="flex items-center gap-3">
          <FileCode className="h-4 w-4 text-muted-foreground" />
          <span className="font-mono text-sm text-muted-foreground">
            {filename}
          </span>
          <div className="flex items-center">
            <span className="rounded-full bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary">
              {language}
            </span>
          </div>
        </div>

        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 hover:bg-muted"
                onClick={copyToClipboard}
              >
                {copied ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4 text-muted-foreground" />
                )}
                <span className="sr-only">
                  {copied ? 'Copied' : 'Copy code'}
                </span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left" className="select-none">
              <p>{copied ? 'Copied!' : 'Copy code'}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {/* Code Content */}
      <Highlight theme={themes.dracula} code={code.trim()} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <div className="group relative max-h-[650px] overflow-auto">
            <pre 
              className="relative py-4 text-sm"
              style={{
                ...style,
                backgroundColor: 'transparent',
                margin: 0,
                padding: '1rem',
              }}
            >
              {tokens.map((line, i) => (
                <div 
                  key={i} 
                  {...getLineProps({ line, key: i })}
                  className="relative whitespace-pre px-4 [&:hover]:bg-muted/50 "
                >
                  <span className="sticky left-0 inline-block w-8 select-none pr-4 text-right font-mono text-xs text-muted-foreground">
                    {i + 1}
                  </span>
                  <span className="inline-block">
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </span>
                </div>
              ))}
            </pre>
          </div>
        )}
      </Highlight>
    </div>
  );
};

export default CodeBlock;