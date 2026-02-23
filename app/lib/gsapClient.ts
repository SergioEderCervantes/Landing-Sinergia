'use client'

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

let registered = false

export function ensureGsap(){
    if (registered) return;
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(useGSAP);
    registered = true; 
}

export { gsap, ScrollTrigger, useGSAP}