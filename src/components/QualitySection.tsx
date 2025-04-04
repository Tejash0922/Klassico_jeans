
import React from 'react';
import { Link } from 'react-router-dom';

const QualitySection: React.FC = () => {
  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10"></div>
        <img 
          src="https://cdn.qwenlm.ai/output/8167762c-8ddb-4af8-8ab4-624b7ac6e158/t2i/3310c127-c6f1-4055-8dff-21843d14b49d/1cf88019-d437-40ed-a4ca-4094b31195b9.png?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZV91c2VyX2lkIjoiODE2Nzc2MmMtOGRkYi00YWY4LThhYjQtNjI0YjdhYzZlMTU4IiwicmVzb3VyY2VfaWQiOiIxY2Y4ODAxOS1kNDM3LTQwZWQtYTRjYS00MDk0YjMxMTk1YjkiLCJyZXNvdXJjZV9jaGF0X2lkIjpudWxsfQ.MYU2qpPVx66cUNjQU5LPSLvuxjS6w9YEYDygkpluucU" 
          alt="Quality products" 
          className="w-full h-full object-cover scale-105 transform transition-transform duration-10000 hover:scale-110"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 h-full flex items-center">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-display text-white mb-6 drop-shadow-lg">
            KLA<span className="text-red-600">SS</span>ICO Quality Products <br />At Affordable Prices
          </h2>
          
          <Link 
            to="/about" 
            className="inline-flex px-10 py-3 bg-black/80 backdrop-blur-sm text-white uppercase tracking-widest text-sm font-serif hover:bg-red-600 transition-all duration-500 hover:shadow-lg"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
