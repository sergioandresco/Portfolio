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
    "Just saying hello!": [
      "Hello there! 👋",
      "How are you doing today?",
      "I hope you're enjoying browsing Sergio's portfolio!",
    ],
    "Interested in the Sergio's projects": [
      "Awesome! Sergio has worked on some cool projects.",
      "You can find the projects section on his portfolio.",
      "But if you need the code repositories, enter in the next link 👇",
      "https://github.com/sergioandresco",
    ],
    "We'd like to hire you": [
      "That's great! 🚀",
      "You can contact Sergio directly through the following channels.",
      "LinkedIn: https://www.linkedin.com/in/sergio-andres-cobos-suarez-942637219/",
    ],
  };