/* eslint-disable @next/next/no-page-custom-font */
import React from 'react'
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Head from 'next/head';

const message = "Happy Fathers Day Dada!";

const colors = [
  "#FF6B6B", "#FF9F1C", "#FFD93D",
  "#6BCB77", "#4D96FF", "#9F86C0",
  "#FF6B6B", "#FF9F1C", "#FFD93D",
  "#6BCB77", "#4D96FF", "#9F86C0",
  "#FF6B6B", "#FF9F1C", "#FFD93D",
  "#6BCB77", "#4D96FF", "#9F86C0",
];


function Wishing() {

    const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    window.addEventListener("resize", () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    });

    class Particle {
      x = w / 2;
      y = h / 2;
      size = Math.random() * 8 + 4;
      color = colors[Math.floor(Math.random() * colors.length)];
      vx = (Math.random() - 0.5) * 10;
      vy = (Math.random() - 1.5) * 10;
      gravity = 0.05;

      update() {
        this.vy += this.gravity;
        this.x += this.vx;
        this.y += this.vy;
        this.size *= 0.96;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.size, this.size);
      }
    }

    // create an initial burst of particles
    const particles: Particle[] = [];
    const count = 150;
    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }

    let raf: number;
    const render = () => {
      ctx.clearRect(0, 0, w, h);

      particles.forEach((p, i) => {
        p.update();
        p.draw();
        if (p.size < 0.5) particles.splice(i, 1);
      });

      if (particles.length > 0) {
        raf = requestAnimationFrame(render);
      }
    };

    render();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
        <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* canvas sits behind text */}
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        className="flex items-center justify-center min-h-screen p-4 sm:p-10"
        style={{ position: "relative", zIndex: 1 }}
      >
        <h1
          className="flex flex-wrap justify-center text-center leading-none"
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: "clamp(2rem, 10vw, 10rem)",
            flexWrap: "wrap",
            wordBreak: "break-word",
          }}
        >
          {message.split("").map((char, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              style={{
                color: colors[idx % colors.length],
                display: "inline-block",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>
      </div>
    </>
  )
}

export default Wishing;