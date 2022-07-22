import React from "react";
import { Link } from "react-router-dom";

const CollectionItem = ({ callout }) => {
  return (
    <div key={callout.name} className="group relative">
      <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
        <Link to={`/collections/${callout.name}`}>
          <img
            src={callout.imageSrc}
            alt={callout.description}
            className="w-full h-full object-center object-cover"
          />
        </Link>
      </div>

      <p className="text-base font-semibold text-gray-900">
        {callout.description}
      </p>
    </div>
  );
};
export default CollectionItem;
