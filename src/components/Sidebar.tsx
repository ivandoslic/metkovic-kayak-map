import React from 'react';
import { SidebarProps } from './SidebarProps.types';

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  toggleSidebar,
  loadedZone,
  onNavigate,
}) => {
  return (
    <div className={`sidebar-container ${isOpen ? '' : 'closed'}`}>
      <button
        className={`sidebar-toggle ${isOpen ? 'open' : 'closed'}`}
        onClick={toggleSidebar}
      >
        {isOpen ? 'Close' : 'Menu'}
      </button>
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        {loadedZone && (
          <div className="sidebar-content">
            <h3 className="text-3xl text-center font-bold">
              {loadedZone.name}
            </h3>
            {loadedZone.icon && (
              <img
                src={loadedZone.icon.iconUrl}
                alt={loadedZone.name}
                width="65"
                height="65"
                className="my-5"
              />
            )}
            <p className="text-center text-lg">{loadedZone.description}</p>
            <button
              className="app-button"
              onClick={() => onNavigate(loadedZone)}
            >
              Navigate Here
            </button>
          </div>
        )}
        {!loadedZone && (
          <div className="sidebar-content">
            <h3 className="text-3xl text-center font-bold">
              You should pick a zone!
            </h3>
            <img
              src="https://img.icons8.com/?size=100&id=qbHw9Wccg3MB&format=png&color=000000"
              alt="WhereTo"
              width="65"
              height="65"
              className="my-5"
            />
            <p className="text-center text-lg">
              You can pick a zone by clicking on one on the map.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
