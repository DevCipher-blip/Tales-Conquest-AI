import { useEffect, useState } from 'react';
import './Door.css';

/** Milliseconds the leaves take to swing before the room behind is visible. */
const DOOR_SWING_MS = 500;

export function Door({ isOpen }) {
  const [showInterior, setShowInterior] = useState(false);

  useEffect(() => {
    if (!isOpen) return undefined;
    const timer = setTimeout(() => setShowInterior(true), DOOR_SWING_MS);
    return () => {
      clearTimeout(timer);
      setShowInterior(false);
    };
  }, [isOpen]);

  return (
    <div className="door-container">
      <div className={`club-marquee ${isOpen ? 'open' : ''}`}>
        <span className="marquee-name">BLVD</span>
        <span className="marquee-tagline">MEMBERS &amp; GUESTS</span>
      </div>

      <div className="door-frame">
        <div className={`club-interior ${showInterior ? 'visible' : ''}`}>
          <div className="lights-container">
            <div className="light-beam rose" style={{ left: '20%', transform: 'rotate(15deg)' }} />
            <div className="light-beam teal" style={{ left: '35%', transform: 'rotate(-10deg)', animationDelay: '0.1s' }} />
            <div className="light-beam mint" style={{ left: '50%', animationDelay: '0.2s' }} />
            <div className="light-beam amber" style={{ left: '65%', transform: 'rotate(10deg)', animationDelay: '0.15s' }} />
            <div className="light-beam brass" style={{ left: '80%', transform: 'rotate(-15deg)', animationDelay: '0.25s' }} />
          </div>
          
          <div className="silhouettes">
            <div className="silhouette" style={{ width: '32px', height: '80px', animationDuration: '0.5s' }} />
            <div className="silhouette" style={{ width: '40px', height: '96px', animationDuration: '0.6s', animationDelay: '0.1s' }} />
            <div className="silhouette" style={{ width: '32px', height: '72px', animationDuration: '0.45s', animationDelay: '0.2s' }} />
            <div className="silhouette" style={{ width: '48px', height: '104px', animationDuration: '0.55s', animationDelay: '0.15s' }} />
            <div className="silhouette" style={{ width: '32px', height: '80px', animationDuration: '0.5s', animationDelay: '0.25s' }} />
          </div>
        </div>

        <div className="doors">
          <div className={`door-leaf left ${isOpen ? 'open' : ''}`}>
            <div className="door-decoration">
              <div className="door-decoration-inner" />
            </div>
          </div>
          <div className={`door-leaf right ${isOpen ? 'open' : ''}`}>
            <div className="door-decoration">
              <div className="door-decoration-inner" />
            </div>
          </div>
        </div>

        <div className="door-glow" />
      </div>

      <div className="velvet-rope">
        <div className="rope-post" />
        <div className="rope" />
        <div className="rope-post" />
      </div>
    </div>
  );
}

