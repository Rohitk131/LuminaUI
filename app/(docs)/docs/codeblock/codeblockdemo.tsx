import CodeBlock from './codeblock';

// Example code snippets
const jsCode = `function greeting(name) {
  return \`Hello, \${name}!\`;
}

// Call the function
console.log(greeting('World'));`;

const pythonCode = `def factorial(n):
    if n == 0:
        return 1
    return n * factorial(n - 1)

# Calculate factorial of 5
result = factorial(5)
print(f"5! = {result}")`;

export default function CodeBlockPreview() {
  return (
    <div className="max-w-4xl mx-auto px-20 space-y-8 relative  ">
       <div 
        className="absolute inset-0 opacity-50 " 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(99 102 241 / 0.6) 1px, transparent 0)`,
          backgroundSize: '24px 24px',
        }}
      />
      
      {/* Gradient orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl" />
      <h1 className="text-2xl font-semibold mb-6">CodeBlock</h1>
      
      <CodeBlock 
        filename="example.js"
        language="javascript"
        code={jsCode}
      />
      
      <CodeBlock 
        filename="example.py"
        language="python"
        code={pythonCode}
      />
    </div>
  );
}