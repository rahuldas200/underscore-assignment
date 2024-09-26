import React from 'react';
import Boll from '../../assets/boll.jpeg';
import Boll1 from '../../assets/boll-1.jpeg';
import car from '../../assets/car-1.jpeg';
import bat from '../../assets/bat.jpeg';

const categoryData = [
  {
    id: "Football",
    image: Boll,
  },
  {
    id: "Basketball",
    image: Boll1,
  },
  {
    id: "Tennis",
    image: car,
  },
  {
    id: "Cricket",
    image: bat,
  },
];

const styles = {
  gradientText: {
    backgroundImage: 'linear-gradient(180deg, #262626 0%, #B8C2CE 100%)',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
  },
};

export default function Category() {
  return (
    <div className="w-11/12 mx-auto mt-10">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Category</h1>
      </div>

      {/* Swiping Container using grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {categoryData.map((category, index) => (
          <div key={index} className="flex flex-col gap-3">
            {/* Conditional rendering: If index is even, show text first, else show image first */}
            {index % 2 === 0 ? (
              <>
                <div className="text-center bg-gray-200 font-sequel-sance uppercase px-3 py-4 flex justify-center font-semibold rounded-md">
                  <p style={styles.gradientText} className='text-3xl'>{category.id}</p>
                </div>
                <div className="w-full h-[288px] rounded-md">
                  <img src={category.image} alt={category.id} className="w-full h-full object-cover rounded-md" />
                </div>
              </>
            ) : (
              <>
                <div className="w-full h-[288px] rounded-md">
                  <img src={category.image} alt={category.id} className="w-full h-full object-cover rounded-md" />
                </div>
                <div className="text-center bg-gray-200 font-sequel-sance uppercase px-3 py-4 flex justify-center font-semibold rounded-md">
                  <p style={styles.gradientText}>{category.id}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
