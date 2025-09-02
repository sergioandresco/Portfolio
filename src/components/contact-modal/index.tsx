"use client";

import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
} from "@heroui/modal";
import { Button } from "@heroui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { IoIosClose } from "react-icons/io";

export default function ChatBotModal({
    open,
    setOpen,
}: {
    open: boolean;
    setOpen: (v: boolean) => void;
}) {
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
                                gap-1
                            "
                        >
                            <div>
                                <Avatar>
                                    <AvatarImage src="https://microsistem.s3.us-east-2.amazonaws.com/portfolio/sergio-avatar.jpeg" />
                                </Avatar>
                                <div>
                                    <div>
                                        <h2>
                                            Sergio Bot
                                        </h2>
                                    </div>
                                    <div>
                                        <p>
                                            Ask me a question
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button
                                    onClick={onClose}
                                    className="p-1 rounded-full hover:bg-white/10 transition"
                                >
                                    <IoIosClose className="w-5 h-5 text-white" />
                                </button>
                            </div>
                        </ModalHeader>
                        <ModalBody>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                                risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                                quam.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                                risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                                quam.
                            </p>
                            <p>
                                Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor
                                adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit
                                officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                                nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
                                deserunt nostrud ad veniam.
                            </p>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={onClose}>
                                Close
                            </Button>
                            <Button color="primary" onPress={onClose}>
                                Action
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}