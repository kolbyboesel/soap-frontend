import React, { useState } from 'react';
import axios from 'axios';
import ConstructBoard from '../components/ConstructBoard';

const LiveScores = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [liveDataPage, setLiveDataPage] = useState([]);
  const [liveScoreMessage, setLiveScoreMessage] = useState('Click One of the Sports Above to View Current Live Scores');

  // Function to fetch live scores based on the sport
  const fetchLiveScores = async (seasonName) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://soapscores-dvbnchand2byhvhc.centralus-01.azurewebsites.net/api/sofaScores/live-scores/${seasonName}`
      );
      setLiveDataPage(response.data); // Update the live data page with the new data
      if (response.data.length === 0) {
        setLiveScoreMessage('Currently No Live Scores Available For The Selected Sport');
      }
    } catch (error) {
      console.error('Error fetching live scores:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle clicking a sport to load its live scores
  const handleSportClick = (sport) => {
    fetchLiveScores(sport); // Fetch live scores based on selected sport
  };

  return (
    <div>
      <div className="no-gutters align-flex-start">
        {/* Navigation for different sports */}
        <div className="no-gutters responsiveScrollContainer">
          <div className="col scrollmenu mobileScroll">
            <button
              onClick={() => handleSportClick('baseball')}
              className="w3-hover-text-white bg-red"
            >
              Baseball
            </button>
            <button
              onClick={() => handleSportClick('american-football')}
              className="w3-hover-text-white bg-red"
            >
              Football
            </button>
            <button
              onClick={() => handleSportClick('basketball')}
              className="w3-hover-text-white bg-red"
            >
              Basketball
            </button>
            <button
              onClick={() => handleSportClick('ice-hockey')}
              className="w3-hover-text-white bg-red"
            >
              Hockey
            </button>
            <button
              onClick={() => handleSportClick('football')}
              className="w3-hover-text-whit bg-red"
            >
              Soccer
            </button>
          </div>
        </div>

        {/* Loading state */}
        {isLoading && <div className="loading liveLoading">Loading&#8230;</div>}

        <div className="container scroll-view pt-3">
          <div className="v-stack">
            {liveDataPage.length !== 0 ? (
              liveDataPage.map((data, index) => (
                <ConstructBoard key={index} EventData={data} />
              ))
            ) : (
              <div className="row no-gutters score-container-scroll indexContainerPad xs-padding overflow-auto liveScoresContainer">
                <div className="page-text text-center">
                  {liveScoreMessage}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveScores;