import React from 'react';
import type { AllergensContent } from '../types';

interface AllergensProps {
  content: AllergensContent;
}

const Allergens: React.FC<AllergensProps> = ({ content }) => {
  return (
    <section id="allergens" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold font-display text-center mb-4 text-white">
            {content.title}
          </h2>
          <p className="text-center text-slate-300 mb-12 max-w-3xl mx-auto">
            {content.content}
          </p>

          <div className="bg-slate-800/50 rounded-lg p-6 md:p-8 mb-12">
            <h3 className="text-2xl font-display font-bold text-amber-500 mb-4 text-center">
              {content.list_title}
            </h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-3 text-slate-300 text-center">
              {content.list.map((item, index) => (
                <li key={index} className="py-1">{item}</li>
              ))}
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Calorie Guide */}
            <div className="bg-slate-800/50 rounded-lg p-6 md:p-8">
              <h3 className="text-2xl font-display font-bold text-amber-500 mb-6 text-center">
                {content.calorieGuide.title}
              </h3>
              <div className="space-y-6">
                {content.calorieGuide.categories.map((category, index) => (
                  <div key={index}>
                    <h4 className="text-xl font-bold text-white mb-3 text-center md:text-start">{category.title}</h4>
                    <ul className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex justify-between items-center border-b border-slate-700 py-2">
                          <span className="text-slate-300">{item.level}</span>
                          <span className="font-semibold text-amber-500 text-end">{item.calories}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Exercise Guide */}
            <div className="bg-slate-800/50 rounded-lg p-6 md:p-8">
               <h3 className="text-2xl font-display font-bold text-amber-500 mb-6 text-center">
                {content.exerciseGuide.title}
              </h3>
               <ul className="space-y-2 h-[450px] overflow-y-auto pr-2">
                {content.exerciseGuide.items.map((item, index) => (
                  <li key={index} className="flex justify-between items-center border-b border-slate-700 py-2">
                    <span className="text-slate-300">{item.activity}</span>
                    <span className="font-semibold text-amber-500">{item.calories}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Allergens;
