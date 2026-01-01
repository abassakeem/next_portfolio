'use client'
import React, { useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';

// Use the standard plugin registration
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, SplitText);
}

interface CopyProps {
    children: React.ReactNode;
    animateOnScroll?: boolean;
    delay?: number;
    blackColor?: string;
    stagger?: number;
    duration?: number;
}

export default function Copy({
    children,
    animateOnScroll = true,
    delay = 0,
    blackColor = "#000",
    stagger = 0.1,
    duration = 0.6,
}: CopyProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const splitRefs = useRef<any[]>([]);

    useGSAP(() => {
        if (!containerRef.current) return;

        // Reset refs
        splitRefs.current = [];
        const allLines: HTMLElement[] = [];
        const allBlocks: HTMLElement[] = [];

        // 1. Determine which elements to split
        let elements: HTMLElement[] = [];
        if (containerRef.current.hasAttribute('data-copy-wrapper')) {
            elements = Array.from(containerRef.current.children) as HTMLElement[];
        } else {
            elements = [containerRef.current];
        }

        // 2. Create SplitText and inject block elements
        elements.forEach((element) => {
            const split = new SplitText(element, { type: "lines" });
            splitRefs.current.push(split);

            split.lines.forEach((line) => {
                // Wrap line in a relative container
                const wrapper = document.createElement('div');
                wrapper.style.position = "relative";
                wrapper.style.overflow = "hidden";
                wrapper.style.display = "block";
                wrapper.className = "blockLineWrapper";
                
                line.parentNode?.insertBefore(wrapper, line);
                wrapper.appendChild(line);

                // Create the reveal block
                const block = document.createElement('div');
                block.className = "blockRevealer";
                block.style.position = "absolute";
                block.style.top = "0";
                block.style.left = "0";
                block.style.width = "100%";
                block.style.height = "100%";
                block.style.backgroundColor = blackColor;
                block.style.zIndex = "2";
                wrapper.appendChild(block);

                allLines.push(line);
                allBlocks.push(block);
            });
        });

        // 3. Set initial states
        gsap.set(allLines, { opacity: 0 });
        gsap.set(allBlocks, { scaleX: 0, transformOrigin: "left center" });

        // 4. Animation logic
        allBlocks.forEach((block, index) => {
            const line = allLines[index];
            const tl = gsap.timeline({
                paused: animateOnScroll,
                delay: delay + (index * stagger)
            });

            tl.to(block, { scaleX: 1, duration: duration, ease: "power4.inOut" })
              .set(line, { opacity: 1 })
              .to(block, { transformOrigin: "right center" }, "<") // Switch origin to pull away
              .to(block, { scaleX: 0, duration: duration, ease: "power4.inOut" });

            if (animateOnScroll) {
                ScrollTrigger.create({
                    trigger: line,
                    start: "top 90%",
                    onEnter: () => tl.play(),
                    once: true
                });
            }
        });

        // Cleanup
        return () => {
            splitRefs.current.forEach(split => split.revert());
        };
    }, { scope: containerRef, dependencies: [children] });

    return (
        <div ref={containerRef} data-copy-wrapper>
            {children}
        </div>
    );
}