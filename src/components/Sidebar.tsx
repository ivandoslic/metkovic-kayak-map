import React from 'react';
import { SidebarProps } from './SidebarProps.types';

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  isFollowing,
  toggleSidebar,
  loadedZone,
  onNavigate,
  onUserFollow,
}) => {
  return (
    <div className={`sidebar-container ${isOpen ? '' : 'closed'}`}>
      <button
        className={`sidebar-toggle ${isOpen ? 'open' : 'closed'}`}
        onClick={toggleSidebar}
      >
        {isOpen ? 'Close' : 'Menu'}
      </button>
      <button
        className={`sidebar-follow ${isOpen ? 'open' : 'closed'}`}
        onClick={onUserFollow}
        title="Center on user"
      >
        {isFollowing ? (
          <img
            src="https://img.icons8.com/?size=100&id=13722&format=png&color=000000"
            alt="FollowUserIcon"
            className="h-[2rem]"
          />
        ) : (
          <img
            src="https://img.icons8.com/?size=100&id=19328&format=png&color=000000"
            alt="FollowUserIcon"
            className="h-[2rem]"
          />
        )}
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
        <hr className="w-full border-solid border-1 border-[#bbb] mt-6" />
        <div>
          <h3 className="text-lg font-bold">Credits:</h3>
          <p>
            Icons by{' '}
            <u>
              <a href="https://icons8.com/" className="text-[blue]">
                Icons8
              </a>
            </u>
          </p>
          <p>
            Map data from{' '}
            <a href="https://www.openstreetmap.org/" className="text-[blue]">
              <u>OpenStreetMap</u>
            </a>
          </p>
          <p>
            Routing by{' '}
            <a href="https://project-osrm.org/" className="text-[blue]">
              <u>Project OSRM</u>
            </a>
          </p>
          <p>
            International canoe federation{' '}
            <a href="https://www.canoeicf.com/" className="text-[blue]">
              <u>ICF</u>
            </a>
          </p>
          <p>
            Croatian kayak association{' '}
            <a href="https://kajak.hr/" className="text-[blue]">
              <u>HKS</u>
            </a>
          </p>
          <br />
          <p>Thank you!</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
