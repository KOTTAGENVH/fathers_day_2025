"use client";

import Message from "@/components/message";
import Wishing from "@/components/wishing";
import { useEffect, useState } from "react";



export default function Home() {
  const [showWishing, setShowWishing] = useState(true);

  useEffect(() => {
    // after 3 seconds, hide it
    const timer = setTimeout(() => {
      setShowWishing(false);
    }, 3000);

    // cleanup if the component unmounts early
    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      {showWishing ? <Wishing /> : <Message />}

    </>
  );
}
