"use client";

import { useState } from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
} from "@heroui/modal";
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { IoIosClose } from "react-icons/io";
import { initialMessages, botReplies, type Message } from "@/data/chatBot";

export default function ChatBotModal({
    open,
    setOpen,
}: {
    open: boolean;
    setOpen: (v: boolean) => void;
}) {

    const [messages, setMessages] = useState<Message[]>(initialMessages);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        setMessages((prev) => [...prev, { sender: "user", text: option }]);

        const replies = botReplies[option];
        if (replies) {
            replies.forEach((reply, index) => {
                setTimeout(() => {
                    setMessages((prev) => [
                        ...prev,
                        { sender: "bot", text: reply },
                    ]);
                }, (index + 1) * 1000);
            });
            const totalDelay = replies.length * 1000;
            setTimeout(() => {
                setSelectedOption(null);
            }, totalDelay + 500);
        }
    };

    return (
        <Modal
            className="
                absolute
                right-10
                bottom-10
                bg-[rgb(94_53_177_/_95%)]
                border-[4px]
                border-[#9575CD]
                rounded-[8px]
                w-[350px]
                h-[600px]
            " 
            isOpen={open} 
            onOpenChange={setOpen}
            hideCloseButton={true}
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader 
                            className="
                                flex 
                                flex-row
                                justify-between
                                items-center
                                gap-1
                                py-4
                                px-4
                                bg-[#512DA8]
                            "
                        >
                            <div
                                className="
                                    flex
                                    items-center
                                    gap-4
                                "
                            >
                                <Avatar className="w-[50px] h-[50px]">
                                    <AvatarImage 
                                        className="object-cover" 
                                        src="https://microsistem.s3.us-east-2.amazonaws.com/portfolio/sergio-avatar.jpeg" 
                                        alt="Sergio Bot"
                                    />
                                </Avatar>
                                <div>
                                    <div>
                                        <h2
                                            className="text-xl font-medium"
                                        >
                                            Sergio Bot
                                        </h2>
                                    </div>
                                    <div>
                                        <p className="text-lg">
                                            Ask me a question
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button
                                    onClick={onClose}
                                    className="p-1 rounded-full hover:bg-white/10 transition cursor-pointer"
                                >
                                    <IoIosClose className="text-white w-11 h-11"/>
                                </button>
                            </div>
                        </ModalHeader>
                        <ModalBody className="gap-2.5 overflow-y-auto">
                            {messages.map((msg, i) => (
                                <p
                                    key={i}
                                    className={`p-3 rounded-md min-w-[fit-content] ${
                                        msg.sender === "bot"
                                        ? "bg-[#7E57C2] text-white self-start"
                                        : "bg-[#9575CD] text-white self-end ml-auto"
                                    }`}
                                >
                                    {msg.text}
                                </p>
                            ))}
                            {!selectedOption && (
                                <div
                                    className="
                                        flex
                                        flex-col
                                        items-end
                                        gap-2
                                        mt-4
                                    "
                                >
                                    {Object.keys(botReplies).map((option) => (
                                        <button
                                            key={option}
                                            onClick={() => handleOptionClick(option)}
                                            className="
                                                bg-[#9575CD] 
                                                text-white 
                                                px-4 
                                                py-2 
                                                rounded-md 
                                                shadow-md 
                                                hover:bg-[#7E57C2] 
                                                transition 
                                                cursor-pointer
                                            "
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}