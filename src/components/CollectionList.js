import React from "react";
import CollectionItem from "./CollectionItem";
const CollectionList = ({ callouts }) => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-8 sm:py-8 lg:py-8 lg:max-w-none">
          <h2 className="text-2xl font-bold font-sans text-gray-900">
            Collections
          </h2>

          <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
            {callouts.map((callout) => (
              <CollectionItem key={callout.name} callout={callout} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CollectionList;
