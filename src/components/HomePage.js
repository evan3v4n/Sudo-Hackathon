import React from 'react'

const HomePage = () => {
  return (
    <div
    id="HomeRoot"
    className="bg-[#2d5e1b] flex flex-col pb-5 gap-10 w-full items-start" 
    >
    <div className="bg-[#d9d9d9] flex flex-row justify-between pr-6 w-full items-start">
      <div className="flex flex-row w-2/5 items-start">
        <img
          src="https://file.rendit.io/n/TNB9N7Y7TtoUmpIxb8an.png"
          alt="Ellipse"
          id="Ellipse"
        />
        <div className="text-4xl font-['Inika'] mt-10">Leaf The World Alone</div>
      </div>
      <div className="flex flex-row mt-6 gap-16 w-1/2 items-start">
        <div className="flex flex-row gap-2 w-2/3 items-start">
          <button
            id="HomeButton"
            className="shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] flex flex-row w-2/5 cursor-pointer items-start"
          >
            <div
              id="BehindHome"
              className="text-3xl font-['Inter'] text-white bg-[#036a0e] flex flex-row justify-center pt-4 w-full h-16 items-start rounded-lg"
            >
              Home
            </div>
          </button>
          <div className="relative flex flex-row justify-end w-1/2 items-start">
            <div className="w-3/5 h-12 bg-[#d9d9d9] absolute top-3 left-0" />
            <button
              id="AboutButton"
              className="shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] relative flex flex-row w-4/5 cursor-pointer items-start"
            >
              <div
                id="BehindAbout"
                className="text-3xl font-['Inter'] bg-[#71d57b] flex flex-row justify-center pt-4 w-full h-16 items-start rounded-lg"
              >
                About
              </div>
            </button>
          </div>
        </div>
        <button
          id="ChatButton"
          className="shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] flex flex-row w-1/4 cursor-pointer items-start"
        >
          <div
            id="BehindAbout1"
            className="text-3xl font-['Inter'] bg-[#71d57b] flex flex-row w-full h-16 items-start pt-4 pl-12 pr-16 rounded-lg"
          >
            Chat
          </div>
        </button>
      </div>
    </div>
    <div className="flex flex-col ml-12 gap-8 w-full items-start">
      <div className="bg-[url(https://file.rendit.io/n/DtvhkXtgwf9NHsa99F33.png)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat relative flex flex-row w-full items-start pt-32 px-10">
        <div className="text-4xl font-['Irish_Grover'] text-[#c5ffbb] absolute top-[171px] left-10 h-12 w-[622px]">
          Action today save earth tomorrow
        </div>
        <div className="text-4xl font-['Irish_Grover'] text-[#17dab7] relative mb-64">
          How much carbon emissions do you cause?
        </div>
      </div>
      <div className="bg-[#d9d9d9] flex flex-row justify-between ml-32 w-5/6 items-start pt-4 pl-10 pr-8 rounded-[20px]">
        <div className="relative flex flex-row w-2/3 items-start mt-8 mb-6 pt-12 px-56">
          <div className="text-4xl font-['Inika'] absolute top-0 left-0 h-[312px] w-full">
            Welcome to leavetheworldalone.com, This website allows you to see the
            amounts of carbon emissions based on location and learn why that is
            with our chatbot <br />
          </div>
          <div className="text-4xl font-['Inika'] underline text-[#0070e0] relative mt-40 mb-12">
            Leafy!
          </div>
        </div>
        <div className="text-4xl font-['Inika'] bg-[#036a0e] flex flex-row justify-center mt-[281px] pt-2 w-1/5 items-start rounded-lg">
          Donate
        </div>
      </div>
    </div>
  </div>
  )
}

export default HomePage