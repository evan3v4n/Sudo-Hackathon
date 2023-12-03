import React from 'react'

const DonatePage = () => {
  return (
    <div
  id="DonateRoot"
  className="bg-[#68a254] flex flex-col gap-6 w-full items-start pt-px pb-10"
>
  <div className="relative flex flex-row w-full items-start">
    <div className="w-full h-[110px] bg-[#d9d9d9] absolute top-0 left-0 flex flex-row items-start pt-4 pl-[337px] pr-64">
      <button
        id="DonateTopButton"
        className="shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] flex flex-row mt-2 w-full cursor-pointer items-start"
      >
        <div
          id="BehindAbout"
          className="text-3xl font-['Inter'] text-white bg-[#036a0e] flex flex-row w-full h-16 items-start pt-4 pl-[341px] pr-[358px] rounded-lg"
        >
          Donate
        </div>
      </button>
    </div>
    <img
      src="https://file.rendit.io/n/TNB9N7Y7TtoUmpIxb8an.png"
      alt="Ellipse"
      id="Ellipse"
      className="relative"
    />
  </div>
  <div className="flex flex-row ml-3 gap-20 w-full items-start">
    <div className="flex flex-row gap-8 w-1/2 items-start">
      <button
        id="DonateTopButton1"
        className="shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] flex flex-row w-12 cursor-pointer items-start"
      >
        <div
          id="BehindAbout1"
          className="bg-[#036a0e] flex flex-row pt-5 w-12 h-20 items-start rounded-lg"
        >
          <img
            src="https://file.rendit.io/n/IluV2tPZTYjhl3HXoytj.png"
            alt="NavigationArrowBackIos icon"
            id="Image1"
            className="mt-px w-12"
          />
        </div>
      </button>
      <div className="shadow-[inset_0px_4px_4px_0px_rgba(0,_0,_0,_0.25),_0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-col mt-5 gap-20 w-5/6 items-start pt-5 pb-10 px-2 rounded-lg">
        <div className="flex flex-col justify-between gap-12 w-5/6 items-start">
          <div className="flex flex-col gap-12 w-full items-start">
            <div className="flex flex-col gap-10 w-full items-start">
              <div className="text-4xl font-['Inter'] ml-40">Top Donors</div>
              <div className="flex flex-col gap-6 w-full items-start">
                <div className="flex flex-col gap-3 w-full items-start">
                  <div className="flex flex-row justify-between mb-px w-full items-start">
                    <div className="text-2xl font-['Inter'] font-bold">
                      Matt Damon
                    </div>
                    <div className="text-2xl font-['Inter'] bg-[linear-gradient(180deg,_#71d57b_0%,_#71d57b_100%)]">
                      $500
                    </div>
                  </div>
                  <div className="text-lg font-['Inter'] text-[#8d8d8d] ml-px">
                    I donated in support of this campaign.
                  </div>
                  <div className="text-xl font-['Inter'] text-black/25 ml-3">
                    3 months ago
                  </div>
                </div>
                <div
                  id="Line2"
                  className="border-solid blur-[0px] ml-5 w-full h-px border-t border-b-0 border-black border-x-0"
                />
              </div>
            </div>
            <div className="flex flex-col gap-8 w-full items-start">
              <div className="flex flex-col gap-3 w-full items-start">
                <div className="flex flex-row justify-between mb-px w-full items-start">
                  <div className="text-2xl font-['Inter'] font-bold">
                    Anonymous
                  </div>
                  <div className="text-2xl font-['Inter'] bg-[linear-gradient(180deg,_#71d57b_0%,_#71d57b_100%)]">
                    $400
                  </div>
                </div>
                <div className="text-lg font-['Inter'] text-[#8d8d8d] ml-px">
                  I donated in support of this campaign.
                </div>
                <div className="text-xl font-['Inter'] text-black/25 ml-3">
                  3 months ago
                </div>
              </div>
              <div
                id="Line1"
                className="border-solid blur-[0px] ml-5 w-full h-px border-t border-b-0 border-black border-x-0"
              />
            </div>
          </div>
          <div className="flex flex-col ml-px gap-3 w-full items-start">
            <div className="flex flex-row justify-between mb-px w-full items-start">
              <div className="text-2xl font-['Inter'] font-bold">Anonymous</div>
              <div className="text-2xl font-['Inter'] bg-[linear-gradient(180deg,_#71d57b_0%,_#71d57b_100%)]">
                $250
              </div>
            </div>
            <div className="text-lg font-['Inter'] text-[#8d8d8d] ml-px">
              I donated in support of this campaign.
            </div>
            <div className="text-xl font-['Inter'] text-black/25 ml-3">
              3 months ago
            </div>
          </div>
          <div
            id="Line"
            className="border-solid blur-[0px] ml-5 w-full h-px border-t border-b-0 border-black border-x-0"
          />
        </div>
        <div className="text-2xl font-['Inter'] font-bold text-[#c5ffbb] bg-[#5d9e46] flex flex-row ml-24 w-3/5 h-20 items-start pt-6 pl-16 pr-24 rounded-[20px]">
          View all
          {"  "}
          Donors
        </div>
      </div>
    </div>
    <div className="shadow-[inset_0px_4px_4px_0px_rgba(0,_0,_0,_0.25),_0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-col justify-between mt-4 gap-40 w-2/5 items-start pt-8 pb-6 px-4 rounded-lg">
      <div className="flex flex-col ml-px gap-24 w-full items-start">
        <div className="bg-[#71d57b] flex flex-row w-full items-start rounded-[30px]">
          <div className="bg-[#da2323] w-1/4 h-12 rounded-[30px]" />
        </div>
        <div className="flex flex-col gap-20 w-5/6 items-start">
          <div className="flex flex-col gap-10 w-2/3 items-start">
            <div className="text-6xl font-['Inter'] bg-[linear-gradient(180deg,_#000000_0%,_#000000_100%)]">
              $ 1,874
            </div>
            <div className="text-2xl font-['Inter'] text-[#8d8d8d] bg-[linear-gradient(180deg,_#000000_0%,_#000000_100%)]">
              raised towards $15,000 goal
            </div>
          </div>
          <div className="flex flex-row justify-between ml-12 w-5/6 items-start">
            <div className="flex flex-col mb-1 gap-1 w-1/3 items-start">
              <div className="text-6xl font-['Inter'] bg-[linear-gradient(180deg,_#000000_0%,_#000000_100%)] ml-4">
                20
              </div>
              <div className="text-2xl font-['Inter'] text-[#8d8d8d] bg-[linear-gradient(180deg,_#000000_0%,_#000000_100%)]">
                Supporters
              </div>
            </div>
            <div className="flex flex-col mt-1 gap-px w-1/4 items-start">
              <div className="text-6xl font-['Inter'] bg-[linear-gradient(180deg,_#000000_0%,_#000000_100%)] ml-8">
                3
              </div>
              <div className="text-2xl font-['Inter'] text-[#8d8d8d] bg-[linear-gradient(180deg,_#000000_0%,_#000000_100%)]">
                Days left
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-6xl font-['Inter'] text-white bg-[#5d9e46] flex flex-row justify-center ml-10 pt-5 w-5/6 h-[116px] items-start rounded-lg">
        Donate
      </div>
    </div>
  </div>
</div>
  )
}
export default ChatPage