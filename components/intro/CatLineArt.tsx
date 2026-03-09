"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

type CatLineArtProps = {
  className?: string;
  reducedMotion?: boolean;
};

const strokes = [
  {
    d: "M203 374C186 349 178 314 180 276C183 237 196 203 219 175C236 154 251 136 254 112C258 90 251 69 236 54C252 61 265 74 273 91C280 70 294 56 312 50C296 67 290 91 294 115C299 148 317 175 341 198C366 223 380 255 380 292C380 328 369 357 348 375",
    delay: 0.04,
    duration: 1.12,
    stroke: "#121417",
    strokeWidth: 6.75,
  },
  {
    d: "M258 178C239 191 224 209 214 233C202 262 197 294 202 327C206 349 217 364 235 373C245 378 255 379 265 375C254 367 248 353 245 337C239 305 241 276 250 248C258 222 274 200 295 188",
    delay: 0.62,
    duration: 0.54,
    stroke: "#121417",
    strokeWidth: 6.25,
  },
  {
    d: "M296 253C287 276 286 302 291 326C296 349 307 365 324 374C334 379 345 380 355 376C340 368 331 354 328 336C323 309 325 281 337 255",
    delay: 1.02,
    duration: 0.4,
    stroke: "#121417",
    strokeWidth: 5.95,
  },
  {
    d: "M344 348C374 362 403 358 426 341C448 325 460 300 460 272C460 241 447 216 424 198C403 181 378 175 352 180C333 183 317 192 304 206",
    delay: 0.8,
    duration: 0.7,
    stroke: "#121417",
    strokeWidth: 6.35,
  },
  {
    d: "M237 134C245 129 253 129 260 134",
    delay: 1.22,
    duration: 0.16,
    stroke: "#121417",
    strokeWidth: 4.8,
  },
  {
    d: "M262 155C254 169 245 181 233 191",
    delay: 1.3,
    duration: 0.22,
    stroke: "#b47d4a",
    strokeWidth: 4.8,
  },
];

export function CatLineArt({ className, reducedMotion = false }: CatLineArtProps) {
  return (
    <motion.svg
      viewBox="0 0 520 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-auto w-full overflow-visible", className)}
      aria-hidden="true"
      initial={false}
      animate={
        reducedMotion
          ? { opacity: 1, scale: 1 }
          : {
              opacity: 1,
              scale: [1.012, 1],
            }
      }
      transition={{
        duration: reducedMotion ? 0.12 : 0.72,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.ellipse
        data-intro-shadow="true"
        cx="268"
        cy="390"
        rx="110"
        ry="8"
        fill="#121417"
        initial={reducedMotion ? { opacity: 0.06 } : { opacity: 0, scaleX: 0.82 }}
        animate={reducedMotion ? { opacity: 0.06 } : { opacity: 0.06, scaleX: 1 }}
        transition={{
          delay: reducedMotion ? 0 : 1.42,
          duration: reducedMotion ? 0 : 0.32,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      <motion.g
        animate={
          reducedMotion
            ? undefined
            : {
                y: [4, 0],
                opacity: [0.96, 1],
              }
        }
        transition={{
          duration: 0.58,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {strokes.map((stroke) => (
          <motion.path
            key={stroke.d}
            d={stroke.d}
            data-intro-stroke="true"
            pathLength={1}
            stroke={stroke.stroke}
            strokeWidth={stroke.strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            strokeDasharray="1"
            initial={reducedMotion ? { strokeDashoffset: 0, opacity: 1 } : { strokeDashoffset: 1, opacity: 0.32 }}
            animate={reducedMotion ? { strokeDashoffset: 0, opacity: 1 } : { strokeDashoffset: 0, opacity: 1 }}
            transition={{
              delay: reducedMotion ? 0 : stroke.delay,
              duration: reducedMotion ? 0 : stroke.duration,
              ease: [0.33, 0, 0.14, 1],
            }}
          />
        ))}
      </motion.g>
    </motion.svg>
  );
}
