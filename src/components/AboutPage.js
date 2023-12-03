import React from 'react'

const AboutPage = () => {
  return (
    <div
  id="AboutRoot"
  className="bg-[#5d9e46] flex flex-col justify-between gap-12 w-full items-start"
>
  <div className="relative flex flex-row w-full items-start">
    <div className="w-full h-[117px] bg-[#d9d9d9] absolute top-0 left-0 flex flex-row justify-between items-start pt-6 pl-[142px] pr-6">
      <div className="text-4xl font-['Inika'] mt-5">Leaf The World Alone</div>
      <div className="flex flex-row justify-between mt-1 w-1/2 items-start">
        <button
          id="HomeButton"
          className="shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] flex flex-row w-1/4 cursor-pointer items-start"
        >
          <div
            id="BehindHome"
            className="text-3xl font-['Inter'] bg-[#71d57b] flex flex-row justify-center pt-4 w-full h-16 items-start rounded-lg"
          >
            Home
          </div>
        </button>
        <button
          id="AboutButton"
          className="shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] flex flex-row w-1/4 cursor-pointer items-start"
        >
          <div
            id="BehindAbout"
            className="text-3xl font-['Inter'] text-white bg-[#036a0e] flex flex-row justify-center pt-4 w-full h-16 items-start rounded-lg"
          >
            About
          </div>
        </button>
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
    <img
      src="https://file.rendit.io/n/TNB9N7Y7TtoUmpIxb8an.png"
      alt="Ellipse"
      id="Ellipse"
      className="relative mt-px"
    />
  </div>
  <div className="bg-[url(https://file.rendit.io/n/Zd1JRYSwllxQau5g4lNq.png)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col justify-end ml-16 gap-24 w-full h-[721px] items-start pl-6 py-48">
    <img
      src="https://file.rendit.io/n/SeuRmBuKB3hfoDh63k1R.svg"
      alt="Plus"
      id="Plus"
      className="ml-[1225px] w-10"
    />
    <div
      id="Line"
      className="border-solid border-white ml-[1245px] w-1 h-10 border-r-4 border-l-0 border-y-0"
    />
  </div>
  <div className="text-3xl font-['Inter'] bg-[#d9d9d9] flex flex-row ml-[1036px] w-1/4 h-24 items-start pt-5 px-10 rounded-[20px]">
    Key:
  </div>
</div>
  )
}
export default AboutPage
