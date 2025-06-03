'use client';

import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';
import { useTheme } from 'next-themes';

interface MermaidProps {
  chart: string;
}

export function Mermaid({ chart }: MermaidProps) {
  const { theme } = useTheme();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    // Initialize mermaid with theme
    mermaid.initialize({
      startOnLoad: true,
      theme: theme === 'dark' ? 'dark' : 'default',
      securityLevel: 'loose',
      fontFamily: 'system-ui, -apple-system, sans-serif',
    });

    // Clear previous content
    ref.current.innerHTML = '';

    // Create a unique ID for this chart
    const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
    const element = document.createElement('div');
    element.id = id;
    element.innerHTML = chart;
    ref.current.appendChild(element);

    // Render the chart
    mermaid.run({ nodes: [element] });
  }, [chart, theme]);

  return (
    <div className="mermaid-container my-6 overflow-x-auto">
      <div ref={ref} className="mermaid" />
    </div>
  );
}