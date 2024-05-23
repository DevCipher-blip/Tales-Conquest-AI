import { Skyline } from './Skyline';
import { Door } from './Door';
import { CharacterColumn } from './CharacterColumn';
import './Stage.css';

/**
 * The street scene. It repeats the latest line from each side, so it is
 * hidden from assistive technology: the transcript is the accessible record.
 */
export function Stage({ playerMessage, doormanMessage, isLoading, isOpen }) {
  return (
    <div className="stage" aria-hidden="true">
      <Skyline />
      <div className="stage-content">
        <CharacterColumn type="player" message={playerMessage} />
        <Door isOpen={isOpen} />
        <CharacterColumn type="doorman" message={doormanMessage} isLoading={isLoading} />
      </div>
    </div>
  );
}
