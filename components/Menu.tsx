import React from 'react';
import type { MenuCategory, MenuItem as MenuItemType } from '../types';

interface MenuProps {
  content: {
    title: string;
    categories: MenuCategory[];
  };
}

const MenuItem: React.FC<MenuItemType> = ({ name, description, price, image }) => {
  if (image) {
    return (
      <div className="bg-slate-800/50 rounded-lg overflow-hidden flex flex-col shadow-lg h-full">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <div className="p-4 flex flex-col flex-grow">
          <div className="flex justify-between items-baseline">
            <h4 className="text-xl font-bold text-white">{name}</h4>
            {price && <p className="text-xl font-semibold text-amber-500 flex-shrink-0 ms-4">{price}</p>}
          </div>
          <p className="text-slate-400 mt-1 flex-grow whitespace-pre-line">{description}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-4">
      <div className="flex justify-between items-baseline">
        <h4 className="text-xl font-bold text-white">{name}</h4>
        {price && <p className="text-xl font-semibold text-amber-500 flex-shrink-0 ms-4">{price}</p>}
      </div>
      <p className="text-slate-400 mt-1 whitespace-pre-line">{description}</p>
    </div>
  );
};

const Menu: React.FC<MenuProps> = ({ content }) => {
  return (
    <section id="menu" className="py-20 bg-slate-950">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold font-display text-center mb-12 text-white">
          {content.title}
        </h2>
        <div className="max-w-6xl mx-auto">
          {content.categories.map((category, index) => {
            const hasImages = category.items.some(item => item.image);
            const gridCols = hasImages 
              ? 'sm:grid-cols-2 lg:grid-cols-3 gap-8' 
              : 'md:grid-cols-2 gap-x-8';

            return (
              <div key={index} className="mb-16">
                <h3 className="text-3xl font-display font-bold text-amber-500 mb-2 text-center">{category.title}</h3>
                {category.description && (
                  <p className="text-center text-slate-300 mb-8 whitespace-pre-line max-w-4xl mx-auto">{category.description}</p>
                )}
                <div className={`grid grid-cols-1 ${gridCols}`}>
                  {category.items.map((item, itemIndex) => (
                    <MenuItem key={itemIndex} {...item} />
                  ))}
                </div>
                 {category.note && (
                  <p className="text-center text-slate-400 mt-10 whitespace-pre-line border-t border-slate-800 pt-6 max-w-4xl mx-auto">{category.note}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Menu;
