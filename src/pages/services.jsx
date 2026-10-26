import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Dot } from "lucide-react";
import Popper from '../assets/popper.json';
import Lottie from 'lottie-react';

const Services = () =>{



    const miniservices = [
        {
            name: "web", 
            title: "Tech and Web Services",
            divisions: [
                {title:'Mobile & Web Development', imageUrl: 'https://images.pexels.com/photos/39559/ipad-mockup-apple-business-39559.jpeg', link:'/conversion'},
                 {title: 'AI & API Integration', imageUrl: 'https://images.pexels.com/photos/3888149/pexels-photo-3888149.jpeg', link:'/conversion'},
                 {title:'Domain Setup', imageUrl: 'https://images.pexels.com/photos/4160089/pexels-photo-4160089.jpeg', link:'/conversion'},
                 {title:'Search Engine Optimization', imageUrl: 'https://images.pexels.com/photos/942331/pexels-photo-942331.jpeg', link:'/conversion'}
            ], 
            highlights: [
                'Rapid increase in Web Traffic, up to 89%',
                '93% Reduction in CAC',
                '1500+ of Campaigns Overseen'
            ]
        }, 

        {
            name: "marketing", 
            title: "Marketing",
            divisions: [
                {title: 'Brand Development', imageUrl: 'https://images.pexels.com/photos/7661184/pexels-photo-7661184.jpeg', link:'/conversion'},
                {title: 'Content Strategy', imageUrl: 'https://images.pexels.com/photos/1181537/pexels-photo-1181537.jpeg', link:'/conversion'},
                {title: 'Advertising', imageUrl:'https://images.pexels.com/photos/615292/pexels-photo-615292.jpeg', link:'/conversion'}
            ],
            highlights:[
                '800+ Accounts Managed',
                '375+ Entities Managed',
                '42% Reduction in Client Turnover'
            ]
        }
    ] 

    return(
        <>
        <div className="bg-black ">
            <div className=" min-h-[60vh] md:min-h-[74vh] relative flex items-center justify-center overflow-hidden">
                <div className=" relative bg-transparent  z-40">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-zinc-900 text-center font-LiberalFranklin">Make Your Brand Pop!</h2>

               <div className="flex flex-col items-center justify-center">
                    <div className='pt-0 w-3/5 md:w-3/5 text-center font-LiberalFranklin'>
                        <span className='text-neutral-400'> We'll build your website, grow your brand, and automate your processes— so you can focus on your clients.</span>
                    </div>
                    
                    <div className="pt-6 pb-6">
                        <Link to='/conversion'>
                        <button
                        className="relative group px-5 py-3 text-sm font-bold rounded text-black bg-green-400 hover:bg-green-500 transition-all duration-300 transform active:scale-95 hover:cursor-pointer overflow-hidden shadow-[0_0_30px_rgba(74,222,128,0.2)]"
                        >
                        Get Started!
                        </button>
                        </Link>
                    </div>
                    
               </div>
                </div>


                <div className="inset-0 w-full absolute z-30">
                <Lottie animationData={Popper} className=" w-full h-full mx-auto bg-white"/>
                </div>


            </div>


            <MiniService data={miniservices[0]} />
            <MiniService data={miniservices[1]}/>

           


            <h2>Services</h2>


        </div>

        </>
    )
}

export default Services; 

const MiniService = ({data}) =>{
console.log('data is', data.divisions.map(item=>item.title))
    return (
        <>
        <div className="w-full md:w-9/10 lg:w-7/10 mx-auto mt-3 md:mt-5 lg:mt-10 lg:mb-10 ">
            <h2 className=" ml-1 md:ml-5 text-white text-2xl md:text-3xl lg:text-4xl p-3 font-LiberalFranklin">{data.title}</h2>
            <div className="ml-2 md:ml-7 hidden md:flex flex-row gap-3 text-xs text-zinc-500 p-2">

                {data.highlights.map((item, index)=>(
                    <span className="flex flex-row"><Dot size={24} className="pb-2" />{item}</span>
                ))}
             </div>

            <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center max-w-[1010px] mx-auto mt-2 sm:mt-5 sm:mb-5 text-white gap-4">
                {
                    data.divisions.map((item, index)=>(
                 <div key={item.id || index} className="flex flex-col py-2" >
                    <Link to={item.link} className="w-full ">
                        <img src={item.imageUrl} className="w-full object-cover min-w-[350px] h-[180px] sm:min-w-[420px] md:h-[220px] md:min-w-[450px] lg:h-[250px] lg:min-w-[500px]"/>
                        <div className="py-2 bg-zinc-800 flex flex-row">
                            <span className="flex flex-row px-2 py-1 text-lg font-LiberalFranklin">{item.title}<ChevronRight size={24} className="ml-5 mt-1"/></span>
                        </div>
                    </Link>
                </div>
                    ))
                }
 


            </div>
        </div>

        </>
    )
}