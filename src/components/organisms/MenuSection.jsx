import React from 'react'
import MenuItem from '../molecules/MenuItem'

const MenuSection = ({ title, items, location, onItemClick }) => {
  return (
    <div className="space-y-2">
      <p className="
        text-sidebar-text dark:text-dark-text
        text-xs
        uppercase
        px-2
        mt-4
        mb-2
        block
        md:opacity-0 md:group-hover:opacity-100
        transition-opacity duration-300 ease-out
      ">
        {title}
      </p>
      {items.map((item) => (
        <MenuItem
          key={item.path}
          icon={item.icon}
          label={item.label}
          badge={item.badge}
          isActive={location.pathname === item.path}
          onClick={() => onItemClick(item.path)}
        />
      ))}
    </div>
  )
}

export default MenuSection
