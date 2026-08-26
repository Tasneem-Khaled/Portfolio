import type { Testimonial } from "./types";

import hagerQotbWithMe from "../../assets/images/hager-with-me.png";
import hagerHamdyWithMe from "../../assets/images/hager-hamdy.jpg";

export const testimonials: Testimonial[] = [
  {
    name: "Hager Qotb",
    role: "Mentavia Team Member",
    quote:
      "Tasneem gives her full effort to everything she does and brings positive energy to the whole team. As our team leader, she understood each member’s strengths and organized the work accordingly. I’d proudly recommend her to any team or company — she’ll definitely add value.",
    memoryImage: hagerQotbWithMe,
    memoryLabel: "Hager & me at Femi Tech",
  },

  {
    name: "Hager Hamdy",
    role: "Route Front-End Mentor",
    quote:
      "Tasneem was one of the most committed students I’ve had the pleasure of teaching. She was always consistent, dedicated, and often went beyond what was expected, especially in design. Her work was polished, clean, and professional, with great attention to detail. I’m genuinely proud of her progress.",
    memoryImage: hagerHamdyWithMe,
    memoryLabel: "She taught me so much",
  },
];