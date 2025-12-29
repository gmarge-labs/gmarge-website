import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface BubbleDisplayProps {
  items: string[];
  className?: string;
}

interface Bubble {
  id: number;
  text: string;
  initialX: number;
  initialY: number;
  size: number;
  moveX: number[];
  moveY: number[];
  duration: number;
}

// Helper function to check if two circles overlap
function checkOverlap(
  x1: number, y1: number, size1: number,
  x2: number, y2: number, size2: number,
  containerWidth: number = 100,
  containerHeight: number = 100
): boolean {
  // Convert percentages to actual pixels for accurate collision detection
  const actualX1 = (x1 / 100) * containerWidth;
  const actualY1 = (y1 / 100) * containerHeight;
  const actualX2 = (x2 / 100) * containerWidth;
  const actualY2 = (y2 / 100) * containerHeight;
  
  const radius1 = size1 / 2;
  const radius2 = size2 / 2;
  const distance = Math.sqrt(Math.pow(actualX2 - actualX1, 2) + Math.pow(actualY2 - actualY1, 2));
  const minDistance = radius1 + radius2 + 30; // Add 30px buffer space
  
  return distance < minDistance;
}

// Helper function to generate a safe position that doesn't overlap with existing bubbles
function generateSafePosition(
  existingBubbles: Bubble[],
  newSize: number,
  maxAttempts: number = 50
): { x: number; y: number } {
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const x = Math.random() * 70 + 10; // 10% to 80%
    const y = Math.random() * 50 + 20; // 20% to 70%
    
    let hasOverlap = false;
    for (const bubble of existingBubbles) {
      if (checkOverlap(x, y, newSize, bubble.initialX, bubble.initialY, bubble.size, 1200, 384)) {
        hasOverlap = true;
        break;
      }
    }
    
    if (!hasOverlap) {
      return { x, y };
    }
  }
  
  // Fallback: use a grid-based position if random placement fails
  const gridIndex = existingBubbles.length;
  const cols = Math.ceil(Math.sqrt(existingBubbles.length + 1));
  const x = ((gridIndex % cols) / cols) * 60 + 15;
  const y = (Math.floor(gridIndex / cols) / cols) * 40 + 25;
  
  return { x, y };
}

// Helper function to generate safe movement path
function generateSafeMovementPath(
  initialX: number,
  initialY: number,
  size: number,
  allBubbles: Bubble[],
  currentIndex: number
): { moveX: number[]; moveY: number[] } {
  const moveX = [initialX];
  const moveY = [initialY];
  
  for (let i = 0; i < 4; i++) {
    let attempts = 0;
    let newX, newY;
    
    do {
      newX = initialX + (Math.random() - 0.5) * 35; // Reduced range to minimize collision
      newY = initialY + (Math.random() - 0.5) * 25;
      
      // Keep within bounds
      newX = Math.max(10, Math.min(75, newX));
      newY = Math.max(20, Math.min(70, newY));
      
      attempts++;
      if (attempts > 20) break; // Prevent infinite loop
    } while (
      attempts < 20 &&
      allBubbles.some((bubble, idx) => {
        if (idx === currentIndex) return false;
        // Check against the bubble's movement path
        return bubble.moveX.some((bx, pathIdx) => 
          checkOverlap(newX, newY, size, bx, bubble.moveY[pathIdx], bubble.size, 1200, 384)
        );
      })
    );
    
    moveX.push(newX);
    moveY.push(newY);
  }
  
  moveX.push(initialX);
  moveY.push(initialY);
  
  return { moveX, moveY };
}

export function BubbleDisplay({ items }: BubbleDisplayProps) {
  return (
    <div className="relative w-full h-32 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center gap-8">
        {items.map((item, index) => (
          <motion.div
            key={item}
            className="px-6 py-3 rounded-full bg-white border-2 border-[#BFC0C2] text-[#002B6B] font-semibold shadow-sm"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -20, 0],
            }}
            transition={{
              opacity: { duration: 0.5, delay: index * 0.1 },
              scale: { duration: 0.5, delay: index * 0.1 },
              y: {
                duration: 3,
                repeat: Infinity,
                delay: index * 0.3,
                ease: 'easeInOut',
              },
            }}
            whileHover={{
              scale: 1.1,
              borderColor: '#002B6B',
              backgroundColor: '#E8F0FF',
            }}
          >
            {item}
          </motion.div>
        ))}
      </div>
    </div>
  );
}