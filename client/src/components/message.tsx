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
      className="w-screen min-h-screen relative overflow-hidden bg-no-repeat bg-center"
      style={{
        backgroundImage: "url(/scroll.png)",
        backgroundSize: "100% 100%",
      }}
    >

                {/* Overlay box with message and button */}
                <div className="absolute inset-0   flex flex-col items-center justify-center p-8 space-y-6">
                    <h1
                        style={{ fontFamily: "'Dancing Script', cursive" }}
                        className="text-4xl sm:text-6xl text-black"
                    >
                        Thank You, Dad!
                    </h1>


                    <p className="text-lg sm:text-2xl text-gray-900 text-center max-w-2xl">
                        This year I&apos;ve created a small game just for you to enjoy. Your guidance and support mean the world to me. From teaching me the importance of perseverance and creativity to always encouraging me to chase my dreams, you&apos;ve been my rock and my inspiration every step of the way. I hope this little game brings a smile to your face and reminds you of all the fun moments we&apos;ve shared together. Happy Father&apos;s Day, Dad I love you more than words can express.
                    </p>

              <button
            onClick={() => (window.location.href = '/game')}
            className="glare-button px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-lg font-semibold"
          >
            Play Game
          </button>
        </div>

        {/* Custom styles for glare and border shine */}
        <style jsx>{`
          .glare-button {
            position: relative;
            overflow: hidden;
            border: 2px solid transparent;
            border-radius: 0.5rem;
            border-image: linear-gradient(45deg, #ffffff, #00d8ff) 1;
            animation: borderShine 3s linear infinite;
          }
          .glare-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 50%;
            height: 100%;
            background: rgba(255, 255, 255, 0.4);
            transform: skewX(-25deg);
            border-radius: inherit;
            animation: glare 2s ease-in-out infinite;
          }
          @keyframes glare {
            0% {
              left: -100%;
            }
            50% {
              left: 100%;
            }
            100% {
              left: -100%;
            }
          }
          @keyframes borderShine {
            0% {
              border-image-source: linear-gradient(45deg, #ffffff, #00d8ff);
            }
            50% {
              border-image-source: linear-gradient(45deg, #ffea00, #ff0044);
            }
            100% {
              border-image-source: linear-gradient(45deg, #ffffff, #00d8ff);
            }
          }
        `}</style>
            </div>
        </>
    );
}
