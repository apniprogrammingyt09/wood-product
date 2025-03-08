import React from 'react';
import wood1 from '../../assets/wood1.png';
import wood2 from '../../assets/wood2.png';
import wood3 from '../../assets/wood3.png';
const WoodWeWorkWith = () => {
    return (
        <div className="bg-[#211f21] bg-pattern min-h-screen flex items-center justify-center p-4">
    <div className="max-w-4xl mx-auto text-white">
        <h1 className="text-5xl font-bold font-['KyivType'] text-left mb-20">
            THE WOOD WE<br/>WORK WITH
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          
            <div className="wood-card flex flex-col items-center">
                <div className="rounded-3xl overflow-hidden w-40 h-40 mb-4">
                    <img src={wood1} alt="Oak wood texture" className="object-cover w-full h-full"/>
                </div>
                <h2 className="text-xl font-semibold mb-4">Oak</h2>
                <ul className="space-y-2">
                    <li className="flex items-center">
                        <span className="text-amber-400 mr-2">✓</span> Durability
                    </li>
                    <li className="flex items-center">
                        <span className="text-amber-400 mr-2">✓</span> Beautiful texture
                    </li>
                    <li className="flex items-center">
                        <span className="text-amber-400 mr-2">✓</span> Water resistance
                    </li>
                    <li className="flex items-center">
                        <span className="text-red-500 mr-2">✕</span> Expensive
                    </li>
                </ul>
            </div>
            
           
            <div className="wood-card flex flex-col items-center">
                <div className="rounded-3xl overflow-hidden w-40 h-40 mb-4">
                    <img src={wood2} alt="Buk wood texture" className="object-cover w-full h-full"/>
                </div>
                <h2 className="text-xl font-semibold mb-4">Buk</h2>
                <ul className="space-y-2">
                    <li className="flex items-center">
                        <span className="text-amber-400 mr-2">✓</span> Durability
                    </li>
                    <li className="flex items-center">
                        <span className="text-red-500 mr-2">✕</span> Hard to handle
                    </li>
                </ul>
            </div>
            
            
            <div className="wood-card flex flex-col items-center">
                <div className="rounded-3xl overflow-hidden w-40 h-40 mb-4">
                    <img src={wood3} alt="Ash wood texture" className="object-cover w-full h-full"/>
                </div>
                <h2 className="text-xl font-semibold mb-4">Ash</h2>
                <ul className="space-y-2">
                    <li className="flex items-center">
                        <span className="text-amber-400 mr-2">✓</span> Durability
                    </li>
                    <li className="flex items-center">
                        <span className="text-red-500 mr-2">✕</span> Hard to handle
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
    );
};

export default WoodWeWorkWith;