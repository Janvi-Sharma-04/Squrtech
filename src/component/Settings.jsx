import React from "react";

const Settings = () => {


  const Card = ({ children, className }) => (
    <div className={`rounded-2xl bg-white shadow-xl border-0 ${className}`}>
      {children}
    </div>
  );


  return (

    <main className="w-full max-w-9xl mx-auto">
      <Card className="h-[calc(100vh-4rem)] flex flex-col overflow-hidden">

        <div className=" w-full max-w-lg mx-auto flex flex-col justify-center items-center
         my-auto relative   shadow-xl">


          {/* profile img */}
          <div className="border border-black rounded-full mt-5 m-2" >
            <img src="./profileimg.png" alt=""
              className="w-32" />
          </div>

          {/* input fields */}
          <div>
            <div>
              <label htmlFor="name">Name :</label>
              <input type="text"
                className="border-b border-black m-6 text-black  "
                value={"Janvi Sharma"}
              />
            </div>
            <div>
              <label htmlFor="name">Email  :</label>
              <input type="text"
                className="border-b border-black m-6 text-black  "
                value={"Janvi@gmail.com"} />
            </div>

          </div>


          {/* button */}
          <div>
            <button
              className="p-3 border border-black mb-5 text-white bg-black rounded-md hover:scale-105 transition-all"
            >Sign Out</button>
          </div>

        </div>











      </Card>
    </main>



  )
};

export default Settings;
