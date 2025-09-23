export type Message = {
    sender: 'bot' | 'user';
    text: string;
}

export const initialMessages: Message[] = [
    {
        sender: 'bot',
        text: "Hi!",
    },
    {
        sender: 'bot',
        text: "I'm Sergio Bot. I'm here to help you with some questions you might have about Sergio's profile.",
    },
    { 
        sender: "bot", 
        text: "How can I help you?" 
    },
];

export const botReplies: Record<string, string[]> = {
    "Looking for your old portfolio": [
      "Sure! You can still check my old portfolio here: [Old Portfolio Link]",
    ],
    "Just saying hello!": [
      "Hello there! 👋",
      "How are you doing today?",
      "I hope you're enjoying browsing Sergio's portfolio!",
    ],
    "Interested in mentorship": [
      "Awesome! Sergio loves mentoring.",
      "Please reach out through the contact form!",
    ],
    "We'd like to hire you": [
      "That's great! 🚀",
      "You can contact Sergio directly via the contact page.",
    ],
  };