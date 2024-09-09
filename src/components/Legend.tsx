import React from 'react';
import { LegendProps } from './LegentProps';

const Legend: React.FC<LegendProps> = ({
  isOpen,
  toggleLegend,
  destination,
  onExitNav,
}) => {
  return (
    <div
      className={`sidebar-container ${isOpen ? '' : 'closed'}`}
      style={{ zIndex: isOpen ? 1000 : 999 }}
    >
      <button
        className={`legend-toggle ${isOpen ? 'open' : 'closed'}`}
        onClick={toggleLegend}
      >
        {isOpen ? 'Close' : 'Legend'}
      </button>
      {destination && (
        <button
          className={`exit-nav-btn ${isOpen ? 'open' : 'closed'}`}
          onClick={onExitNav}
        >
          Exit navigation
        </button>
      )}
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className="w-full flex flex-col">
          <div className="flex-1 w-full flex flex-col items-start">
            <div className="flex-1 bg-red flex-row flex px-2 mb-2 overflow-scroll">
              <img
                src="/num1.png"
                alt="Zone 1 icon"
                height={32}
                width={32}
                className="mr-3"
              />
              Officials zone
            </div>
            <div className="flex-1 bg-red flex-row flex px-2 mb-2">
              <img
                src="/num2.png"
                alt="Zone 2 icon"
                height={32}
                width={32}
                className="mr-3"
              />
              Competition area
            </div>
            <div className="flex-1 bg-red flex-row flex px-2 mb-2">
              <img
                src="/num3.png"
                alt="Zone 3 icon"
                height={32}
                width={32}
                className="mr-3"
              />
              Athlete area
            </div>
            <div className="flex-1 bg-red flex-row flex px-2 mb-2">
              <img
                src="/num4.png"
                alt="Zone 4 icon"
                height={32}
                width={32}
                className="mr-3"
              />
              TV area
            </div>
            <div className="flex-1 bg-red flex-row flex px-2 mb-2">
              <img
                src="/num5.png"
                alt="Zone 5 icon"
                height={32}
                width={32}
                className="mr-3"
              />
              Media
            </div>
            <div className="flex-1 bg-red flex-row flex px-2 mb-2">
              <img
                src="/num6.png"
                alt="Zone 6 icon"
                height={32}
                width={32}
                className="mr-3"
              />
              Operational area
            </div>
            <div className="flex-1 bg-red flex-row flex px-2 mb-2">
              <img
                src="/num7.png"
                alt="Zone 7 icon"
                height={32}
                width={32}
                className="mr-3"
              />
              VIP area
            </div>
            <div className="flex-1 bg-red flex-row flex px-2 mb-2">
              <img
                src="/num8.png"
                alt="Zone 8 icon"
                height={32}
                width={32}
                className="mr-3"
              />
              Masters camp
            </div>
            <div className="flex-1 bg-red flex-row flex px-2 mb-2">
              <img
                src="/letterC.png"
                alt="Zone C icon"
                height={32}
                width={32}
                className="mr-3"
              />
              Catering for teams
            </div>
            <div className="flex-1 bg-red flex-row flex px-2 mb-2">
              <img
                src="/restricted.png"
                alt="Restricted area"
                height={32}
                width={32}
                className="mr-3"
              />
              Restricted area
            </div>
            <div className="flex-1 bg-red flex-row flex px-2 mb-2">
              <img
                src="/portage.png"
                alt="Portage"
                height={32}
                width={32}
                className="mr-3"
              />
              Portage
            </div>
            <div className="flex-1 bg-red flex-row flex px-2 mb-2">
              <img
                src="/pontoons.png"
                alt="Pontoons"
                height={32}
                width={32}
                className="mr-3"
              />
              Pontoons
            </div>
            <div className="flex-1 bg-red flex-row flex px-2 mb-2">
              <img
                src="/paraathletes.png"
                alt="Para-athletes ramp"
                height={32}
                width={32}
                className="mr-3"
              />
              Para-athletes ramp
            </div>
            <div className="flex-1 bg-red flex-row flex px-2 mb-2">
              <img
                src="/photographers.png"
                alt="Photographers area"
                height={32}
                width={32}
                className="mr-3"
              />
              Photographers
            </div>
            <div className="flex-1 bg-red flex-row flex px-2 mb-2">
              <img
                src="/mixed.png"
                alt="Mixed zone"
                height={32}
                width={32}
                className="mr-3"
              />
              Mixed zone
            </div>
            <div className="flex-1 bg-red flex-row flex px-2 mb-2">
              <img
                src="https://img.icons8.com/?size=100&id=gmkcYylpvKxx&format=png&color=000000"
                alt="Entrance icon"
                height={32}
                width={32}
                className="mr-3"
              />
              Zone entrance
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legend;

/* export default function Legend() {
  return (
    <div>
      
    </div>
  );
}
*/
