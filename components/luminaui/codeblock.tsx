"use client";
import React, { useState } from "react";
import { Highlight, themes } from "prism-react-renderer";
import { Check, Copy, FileCode } from "lucide-react";

interface TooltipProps {
  content: string;
  children: React.ReactNode;
}

const Tooltip = ({ content, children }: { content: string; children: React.ReactNode }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div className="absolute left-1/2 top-full z-50 mt-2 w-max -translate-x-1/2 scale-95 transform rounded-lg bg-zinc-900 px-3 py-1 text-sm text-white opacity-100 shadow-lg transition-all duration-200">
          <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-zinc-900" />
          {content}
        </div>
      )}
    </div>
  );
};


const CustomButton = ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => (
  <button
    onClick={onClick}
    className="h-8 w-8 rounded-md p-1.5 transition-colors hover:bg-muted/80 focus:outline-none focus:ring-2 focus:ring-primary/50"
  >
    {children}
  </button>
);

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
      <div className="flex items-center justify-between border-b bg-muted/40 px-4 py-3">
        <div className="flex items-center gap-3">
          <FileCode className="h-4 w-4 text-muted-foreground" />
          <span className="font-mono text-sm text-muted-foreground">{filename}</span>
          <span className="rounded-full bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary">
            {language}
          </span>
        </div>

        <Tooltip content={copied ? "Copied!" : "Copy code"}>
          <CustomButton onClick={copyToClipboard}>
            {copied ? (
              <Check className="h-4 w-4 text-green-500" />
            ) : (
              <Copy className="h-4 w-4 text-muted-foreground" />
            )}
          </CustomButton>
        </Tooltip>
      </div>

      <Highlight theme={themes.dracula} code={code.trim()} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <div className="group relative max-h-[650px] overflow-auto">
            <pre 
              className="relative py-4 text-sm"
              style={{
                ...style,
                backgroundColor: "transparent",
                marginBottom: 10,
                padding: "1rem",
              }}
            >
              {tokens.map((line, i) => (
                <div 
                  key={i} 
                  {...getLineProps({ line, key: i })}
                  className="relative whitespace-pre px-4 [&:hover]:bg-muted/50"
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