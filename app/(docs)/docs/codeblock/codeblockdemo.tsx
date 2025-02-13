import CodeBlock from "@/components/luminaui/codeblock";

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
      <h1 className="text-2xl font-semibold mb-6">CodeBlock</h1>

      <CodeBlock filename="example.js" language="javascript" code={jsCode} />

      <CodeBlock filename="example.py" language="python" code={pythonCode} />
    </div>
  );
}
