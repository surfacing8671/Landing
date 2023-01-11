import React from "react";
import Link from "next/link";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Landing() {
  return (
    <>
    
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://gaur-swap.vercel.app/static/media/backdrop2.999a2801e320ef0b6f85.png')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Gaur Vaults
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    Where only the strong survive and dimoand hands are born.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
            style={{ transform: "translateZ(0)" }}
          >
            <png
              className="absolute bottom-0 overflow-hidden"
              xmlns="https://gaur-vaults-gray.vercel.app/_next/static/media/backdrop.a3921f36.png"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </png>
          </div>
        </div>

        <section className="pb-20 bg-blueGray-800 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                     <img src="https://thenounproject.com/api/private/icons/3890734/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABjvwor8oRrbBb8NhV5yVnsvUS5M8Y9PFZWDooE46wm-zZePhOuI387dNjBlufc3gH8rVPmOWi2do86A4TxfddY2R25qg%3D%3D"/>
                    </div>
                    <h6 className="text-xl font-semibold">Auto Compounding </h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                     All of our vaults will auto compound your rewards.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                      <img src="https://techemy.capital/wp-content/uploads/2020/06/about-icon.svg"/>
                    </div>
                    <h6 className="text-xl font-semibold">Reflection Safes</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                     Taxes on deposit and withdraw in our Diomand safes are redistributed to holders in the vault.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                     <img src="https://static.thenounproject.com/png/5045003-200.png"/>
                    </div>
                    <h6 className="text-xl font-semibold">Market Strategies</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Market strategies that include longs and delta nuetral.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              <img src="https://as1.ftcdn.net/v2/jpg/04/75/60/90/1000_F_475609092_vjF5JzMNWqmwvQOfzTiGNyLBZ1BrtMWd.jpg"/>
                </div>
                <h3 className="text-3xl text-white mb-2 font-semibold leading-normal">
                  Deposit your assets and watch them grow! 
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-white">
                  With the reflections from our Diomand safe, your aprs will grow exponentially. To top it off, if your are a premium user and own a qualified NFT, then you will be able to skip the withdraw tax.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-white">
                
                </p>
               
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                
                <div className="relative flex flex-col min-w-0 break-words bg-grey-400 w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                  <img
                    alt="..."
                    src="https://gaur-swap.vercel.app/static/media/center.c652f3925ce6f77a761a.png"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <png
                      preserveAspectRatio="none"
                      xmlns=""
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-blueGray-700 bg-black fill-current"
                      ></polygon>
                    </png>
                    <h4 className="text-xl font-bold text-white">
                      Top notch strategies 
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                     We also strive to push the new ERC-4626 interest bearing token standard. This means that all of your vault deposits could be integgrated into other protocols. 
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <png
              className="absolute bottom-0 overflow-hidden"
              xmlns="https://gaur-vaults-gray.vercel.app/_next/static/media/backdrop.a3921f36.png"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </png>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://gaur-swap.vercel.app/static/media/coin%20based.1544f166af1ef92e873b.png"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blueGray-200">
                    <i className="fas fa-rocket text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">A growing ecosystem</h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                   Our ecosystem is diverse and useful. From NFTs to Vibratile token, our ecosystem is powered by the GAUR token. 
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                            
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                            
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                           
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                          
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                          
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Gaur 2.0 Roadmap!</h2>
                <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                  
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="https://gaur-swap.vercel.app/static/media/coin%20based.1544f166af1ef92e873b.png"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Q1</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Vault Base development platform and new farm launch
                    </p>
                    <div className="mt-6">
                     
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="https://gaur.money/static/media/Gaur.4a2e717f.png"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Q2</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      ERC-4626 Cross Chain integration and refining our strategies
                    </p>
                    
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="https://gaur.money/static/media/GBond.0cf302a9.png"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Q3</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                    AMM Framework design with BlueChip Farming
                    </p>
                   
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="https://gaur-swap.vercel.app/static/media/center.c652f3925ce6f77a761a.png"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Q4</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Fully automated and decentralized RaaS NFT utility with corresponding marketplace. Plus many more suprises along the way!
                    </p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 relative block bg-blueGray-800">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="https://gaur-vaults-gray.vercel.app/_next/static/media/backdrop.a3921f36.png"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-800 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

       
        </section>
       
      </main>
      <Footer />
    </>
  );
}
