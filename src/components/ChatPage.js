import React from 'react'

const ChatPage = () => {
  return (
    <div
  id="ChatRoot"
  className="overflow-hidden bg-[#5d9e46] relative flex flex-col gap-10 w-full items-start"
>
  <div className="bg-[#d9d9d9] relative flex flex-row justify-between pr-8 w-full items-start">
    <div className="flex flex-row w-2/5 items-start">
      <img
        src="https://file.rendit.io/n/TNB9N7Y7TtoUmpIxb8an.png"
        alt="Ellipse"
        id="Ellipse"
      />
      <div className="text-4xl font-['Inika'] mt-10">Leaf The World Alone</div>
    </div>
    <div className="flex flex-row mt-6 gap-16 w-1/2 items-start">
      <div className="flex flex-row gap-8 w-2/3 items-start">
        <button
          id="HomeButton"
          className="shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] flex flex-row w-2/5 cursor-pointer items-start"
        >
          <div
            id="BehindHome"
            className="text-3xl font-['Inter'] bg-[#71d57b] flex flex-row justify-center pt-4 w-full h-16 items-start rounded-lg"
          >
            Home
          </div>
        </button>
        <div className="relative flex flex-row justify-end w-1/2 items-start">
          <div className="w-2/3 h-12 bg-[#d9d9d9] absolute top-4 left-0" />
          <button
            id="AboutButton"
            className="shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] relative flex flex-row mb-px w-5/6 cursor-pointer items-start"
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
          className="text-3xl font-['Inter'] text-white bg-[#036a0e] flex flex-row w-full h-16 items-start pt-4 pl-12 pr-16 rounded-lg"
        >
          Chat
        </div>
      </button>
    </div>
  </div>
  <div className="w-1/6 h-[1279px] origin-top-left rotate-[-90.25deg] bg-white absolute top-[320.502197265625px] left-8 rounded-[19px]" />
  <div className="relative flex flex-col ml-8 gap-10 w-full items-start">
    <div className="text-4xl font-['Irish_Grover'] ml-8 w-5/6">
      Welcome! My name is Leafy! I came from the future to rid of the world of
      humans, But since I’m just a chat bot I can only really give you some fun
      facts to hear.
    </div>
    <div className="relative flex flex-row justify-end w-full items-start">
      <img
        src="https://file.rendit.io/n/lwS3Tk7XavvsOi7Mk0pz.png"
        alt="Cartoonleafremovebgpreview"
        className="w-[328px] h-[338px] absolute top-[342px] left-0"
      />
      <div className="bg-[#d9d9d9] relative flex flex-row justify-center mb-6 pt-5 w-4/5 h-[654px] items-start rounded-[40px]">
        <div className="text-4xl font-['Irish_Grover'] text-[#8d8d8d] bg-white flex flex-row mt-[542px] w-full h-16 items-start pt-3 px-6 rounded-[60px]">
          Type here:
        </div>
      </div>
    </div>
  </div>
</div>
  )
}
export default ChatPage