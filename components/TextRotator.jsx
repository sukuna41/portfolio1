"use client";
import { useState, useEffect, useCallback } from "react";

const TextRotator = ({
  words,
  typingSpeed = 140,
  erasingSpeed = 80,
  pauseDuration = 1200,
}) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const handleTyping = useCallback(() => {
    if (isTyping) {
      // Mengetik kata per huruf
      if (charIndex < words[wordIndex].length) {
        setText((prev) => prev + words[wordIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        // Jeda setelah selesai mengetik
        setTimeout(() => setIsTyping(false), pauseDuration);
      }
    } else {
      // Menghapus kata per huruf
      if (charIndex > 0) {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else {
        // Pindah ke kata berikutnya
        setWordIndex((prev) => (prev + 1) % words.length);
        setIsTyping(true);
      }
    }
  }, [charIndex, isTyping, wordIndex, words, pauseDuration]);

  useEffect(() => {
    const timeout = setTimeout(
      handleTyping,
      isTyping ? typingSpeed : erasingSpeed
    );
    return () => clearTimeout(timeout);
  }, [handleTyping, isTyping, typingSpeed, erasingSpeed]);

  return (
    <div className="inline-flex items-center">
      <span className="">{text}</span>
      <span className="w-[5px] h-6 bg-gradient-to-t from-accent to-accent-hover ml-1 animate-blink" />
    </div>
  );
};

export default TextRotator;
