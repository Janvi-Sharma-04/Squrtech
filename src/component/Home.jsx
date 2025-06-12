import React from "react";

const Home = () => {
    const Card = ({ children, className }) => (
        <div className={`rounded-2xl bg-white shadow-xl border-0 ${className}`} >
            {children}
        </div>
    );
    return (
        <main className="w-full max-w-9xl mx-auto">
            <Card className="h-[calc(100vh-4rem)] flex flex-col overflow-hidden ">
                <div className="h-full flex items-center justify-center">
                    <div className="text-center  space-y-4 max-w-md ">

                        <div className="w-20 h-20  rounded-2xl   text-center flex items-center justify-center mx-auto ">
                            <img src="./logoicon.svg" alt="icon"  />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome to Squrtech</h2>
                        <p className="text-gray-500 max-w-md text-center">
                            Start a conversation by clicking <span className="font-extrabold text-black">"+"</span> to unlock powerful insights and analytics for your business.
                        </p>
                        <div className="mt-6 px-4 py-2 rounded-full bg-gray-50 text-sm text-gray-600 flex items-center justify-center gap-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            Ready to help
                        </div>


                    </div>
                </div>
            </Card>
        </main>
    )
};

export default Home;
