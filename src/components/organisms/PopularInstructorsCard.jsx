import React from "react";
import Card from "../atoms/Card";
import { DropdownMenu } from "../molecules/Ellipsis";

const PopularInstructorsCard = ({ instructors }) => {
  return (
    <Card className="h-full">
      {/* Header */}
      <div className="flex items-center justify-between pb-3">
        <h5 className="font-semibold text-sidebar-text dark:text-dark-text">Popular Instructors</h5>
        <DropdownMenu />
      </div>

      {/* Column titles */}
      <div className="flex justify-between items-center border-y py-2 mt-3 text-xs font-semibold uppercase">
        <p className="text-sidebar-text">Instructors</p>
        <p className="text-sidebar-text">Courses</p>
      </div>

      {/* Body */}
      <div className="mt-4 space-y-4">
        {instructors.map((instructor, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center"
          >
            <div className="flex items-center">
              <img
                src={instructor.avatar}
                alt={instructor.name}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <h6 className="font-medium text-sidebar-text dark:text-dark-text truncate">
                  {instructor.name}
                </h6>
                <small className="text-sidebar-text truncate">
                  {instructor.role}
                </small>
              </div>
            </div>
            <div className="text-end">
              <h6 className="font-semibold text-sidebar-text dark:text-dark-text">
                {instructor.courses}
              </h6>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default PopularInstructorsCard;
