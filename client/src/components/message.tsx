/* eslint-disable @next/next/no-page-custom-font */
"use client";

import Head from 'next/head';
import React from 'react';

export default function Message() {
    return (
        <>
            <Head>
                <title>Happy Father&apos;s Day</title>
                <link
                    href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap"
                    rel="stylesheet"
                />
            </Head>

            {/* Full-width container with scroll image as rotated background */}
            <div
                className="w-screen min-h-screen relative overflow-hidden bg-no-repeat bg-center bg-animate"
                style={{
                    backgroundImage: "url(/scroll.png)",
                    backgroundSize: "100% 100%",
                }}
            >

                {/* Overlay box with message and button */}
                <div className="absolute inset-0   flex flex-col items-center justify-center p-8 space-y-6">
                    <h1
                        style={{ fontFamily: "'Dancing Script', cursive" }}
                        className="text-4xl sm:text-6xl text-black fade-in fade-delay-300"
                    >
                        Thank You, Dad!
                    </h1>


                  <p className="text-lg sm:text-2xl text-gray-900 text-center max-w-2xl">
                        Your guidance and support mean the world to me. From teaching me the importance of perseverance and creativity to always encouraging me to chase my dreams, you&apos;ve been my rock and my inspiration every step of the way. I hope this message brings a smile to your face and reminds you of all the fun moments we&apos;ve shared together. Happy Father&apos;s Day, Dad. I love you more than words can express.
                    </p>
                </div>
                <style jsx>{`
                          /* 1) Outer background fade+zoom */
          @keyframes bgEntrance {
            from { opacity: 0; transform: scale(0.8); }
            to   { opacity: 1; transform: scale(1); }
          }
          .bg-animate {
            animation: bgEntrance 1s ease-out forwards;
          }

          /* 2) Inner content pop-in */
          @keyframes contentEntrance {
            from { opacity: 0; transform: scale(0.9); }
            to   { opacity: 1; transform: scale(1); }
          }
          .content-animate {
            opacity: 0;
            animation: contentEntrance 0.6s ease-out forwards;
            animation-delay: 0.8s;
          }

          /* 3) Text fade-in + slide-up (as before) */
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          .fade-in {
            opacity: 0;
            animation: fadeInUp 0.8s ease-out forwards;
          }
          .fade-delay-300 { animation-delay: 0.3s; }
          .fade-delay-600 { animation-delay: 0.6s; }
          .fade-delay-900 { animation-delay: 0.9s; }

          /* 4) Button pulse (as before) */
          @keyframes pulseScale {
            0%, 100% { transform: scale(1); }
            50%      { transform: scale(1.05); }
          }
          .pulse {
            animation: pulseScale 2s ease-in-out infinite;
          }
        `}</style>
            </div>
        </>
    );
}
