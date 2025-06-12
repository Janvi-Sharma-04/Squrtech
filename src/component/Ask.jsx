import React, { useState, useEffect, useRef } from "react";
import data from "../component/data.json";
import { Search } from "lucide-react";

const Ask = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [chatHistory, setChatHistory] = useState([]);
    const [faqData] = useState(data);
    const chatEndRef = useRef(null);
    const textAreaRef = useRef(null);


    //search mate 
    const handleSearch = () => {
        if (!searchQuery.trim()) return;

        const found = faqData.find(item =>
            item.question.toLowerCase().includes(searchQuery.toLowerCase())
        );

        const response = found || {
            question: searchQuery,
            answer: "Sorry, no answer found."
        };

        setChatHistory(prev => [...prev, response]);
        setSearchQuery("");
    };


    // enter key mate
    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSearch();
        }
    };


    // chat smooth effect 
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [chatHistory]);


    // input resize mate
    const autoResizeTextArea = () => {
        const el = textAreaRef.current;
        if (el) {
            el.style.height = "auto";
            el.style.height = `${Math.min(el.scrollHeight, 128)}px`; // 128px ≈ 5 lines
        }
    };

    return (
        <main className="w-full max-w-9xl  mx-auto  bg-[#f4f3fb]">
            <div className="h-[calc(100vh-4rem)] max-w-9xl flex flex-col rounded-2xl bg-white shadow-xl overflow-hidden ">



                {/* Scrollable Chat Section */}
                <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4 ">
                    {chatHistory.length === 0 && (

                        <div className="text-center  text-black mt-48">
                            <div className="  text-center flex items-center justify-center mx-auto ">
                                <Search className="w-12  h-12 mb-2"  />
                            </div>
                            <h2 className="text-xl font-semibold">Ask Anything</h2>
                            <p className="mt-2 ">Type your question below and hit enter to get answers.</p>
                        </div>
                    )}

                    {chatHistory.map((chat, index) => (
                        <div key={index} className="space-y-2 p-3">
                            <div className="bg-gray-100 border p-4 rounded-xl w-fit max-w-full break-words">
                                <p className="text-xs text-gray-500">You asked:</p>
                                <p className="text-black">{chat.question}</p>
                            </div>
                            <div className="pl-4">
                                <p className=" text-sm font-semibold text-black">Answer:</p>
                                <p className="text-gray-700">{chat.answer}</p>
                            </div>
                        </div>
                    ))}
                    <div ref={chatEndRef} />
                </div>

                {/* Input Section (fixed at bottom) */}
                <div className="p-4 border-t bg-gray-50  ">
                    <div className="flex gap-4 items-center">
                        <textarea
                            ref={textAreaRef}
                            value={searchQuery}
                            onChange={(e) => {
                                setSearchQuery(e.target.value);
                                autoResizeTextArea();
                            }}
                            onKeyDown={handleKeyDown}
                            className="flex-1 px-8 py-3 overflow-y-auto rounded-full border text-black  border-black shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                            style={{
                                minHeight: "2.5rem",
                                maxHeight: "8rem",
                                overflow: "hidden",
                                resize: "none",
                                lineHeight: "1.6rem",

                            }}
                            placeholder="Type your question here... "
                            rows={1}
                        />
                        <button
                            onClick={handleSearch}
                            className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800"
                        >
                            ↑
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Ask;
