"use client";

import { motion } from "framer-motion";

export function NetworkVisual() {
  const nodes = [
    { x: 50, y: 30, size: 6, color: "#7C3AED" },
    { x: 150, y: 60, size: 8, color: "#E879F9" },
    { x: 100, y: 120, size: 5, color: "#A78BFA" },
    { x: 200, y: 100, size: 7, color: "#7C3AED" },
    { x: 250, y: 40, size: 5, color: "#E879F9" },
    { x: 300, y: 110, size: 6, color: "#A78BFA" },
    { x: 180, y: 160, size: 9, color: "#7C3AED" },
    { x: 80, y: 170, size: 5, color: "#E879F9" },
    { x: 280, y: 170, size: 6, color: "#7C3AED" },
    { x: 350, y: 60, size: 5, color: "#A78BFA" },
  ];

  const edges = [
    [0, 1], [1, 2], [1, 3], [3, 4], [4, 5], [3, 5], [3, 6],
    [2, 7], [6, 8], [5, 8], [4, 9], [5, 9], [0, 2], [6, 7],
  ];

  return (
    <div className="relative h-[200px] w-full overflow-hidden">
      <svg viewBox="0 0 400 200" className="h-full w-full">
        {/* Edges */}
        {edges.map(([from, to], i) => (
          <motion.line
            key={`edge-${i}`}
            x1={nodes[from].x}
            y1={nodes[from].y}
            x2={nodes[to].x}
            y2={nodes[to].y}
            stroke="url(#edgeGrad)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.3 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: i * 0.05 }}
          />
        ))}

        {/* Animated data flowing along edges */}
        {edges.slice(0, 6).map(([from, to], i) => (
          <motion.circle
            key={`flow-${i}`}
            r="2"
            fill="#E879F9"
            opacity="0.8"
            animate={{
              cx: [nodes[from].x, nodes[to].x],
              cy: [nodes[from].y, nodes[to].y],
            }}
            transition={{
              duration: 2 + i * 0.3,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5,
            }}
          />
        ))}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <motion.g key={`node-${i}`}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.size + 4}
              fill={node.color}
              opacity="0.1"
              animate={{ r: [node.size + 4, node.size + 8, node.size + 4] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
            />
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.size}
              fill={node.color}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
            />
          </motion.g>
        ))}

        <defs>
          <linearGradient id="edgeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#E879F9" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
