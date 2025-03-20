
import { toast } from "sonner";

const sarcasmMessages = {
  demo: [
    "Demo? We haven't even built the product yet!",
    "Our calendar is mysteriously full until 2030",
    "We'll get back to you never™",
    "Your demo request has been filed in our digital paper shredder",
    "Congratulations! You're the 10,000th person to request a demo that won't happen"
  ],
  getStarted: [
    "Getting started with what exactly? We're still figuring that out ourselves",
    "Starting is the easy part. Finishing is... not our specialty",
    "ERROR: Product not found. Would you like to invest anyway?",
    "Let's face it, you're just clicking buttons randomly at this point",
    "Welcome aboard our journey to nowhere in particular!"
  ],
  contact: [
    "Your message will be carefully ignored by our team",
    "We'll add your email to our 'definitely will spam' list",
    "Our AI has analyzed your message and rated it: Meh",
    "Your feedback is important to us... said no tech company ever",
    "Message received! Now entering our black hole of unread contacts"
  ]
};

export const showSarcasticToast = (type: 'demo' | 'getStarted' | 'contact') => {
  const messages = sarcasmMessages[type];
  const randomIndex = Math.floor(Math.random() * messages.length);
  
  toast(messages[randomIndex], {
    duration: 4000,
    position: "top-center",
  });
};
