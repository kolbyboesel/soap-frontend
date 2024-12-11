import React from 'react';

const Home = () => {
  return (
    <div>
      <div className="container-fluid infoContainer" id="top">
        <h3 className="w3-center text-black indexContainerPad xs-padding">WELCOME TO SOAP!</h3>
        <div className="row InfoElement xs-padding indexContainerPad">
          <div className="col-lg-6 center-elements">
            <h4 className="w3-center text-black"><em>ABOUT</em></h4>
            <p className="text-black w3-center">
              Thank you for visiting SOAP! This website is your hub for sport scores, betting odds, and current news.
              The currently supported sports are MLB, NFL, NBA, NHL, College Football, College Basketball, Soccer, and more.
            </p>
          </div>
          <div className="col-lg-6 center-elements">
            <img className="img-home-info" src="/images/homeImage.jpeg" alt="Home Info" />
          </div>
        </div>

        <div className="row InfoElement xs-padding BackgroundNorm indexContainerPad" style={{ paddingTop: '50px' }}>
          <div className="col-lg-6 center-elements">
            <img className="img-home-info" src="/images/proExample.png" alt="Pro Example" />
          </div>
          <div className="col-lg-6 center-elements">
            <h4 className="w3-center text-white"><em>ACCOUNT BENEFITS</em></h4>
            <p className="text-white w3-center">
              Why create an account with SOAP? Creating an account gives you access to high-quality betting picks intended to give you +EV bets.
            </p>
          </div>
        </div>

        <div className="row InfoElement xs-padding indexContainerPad">
          <div className="col-lg-6 center-elements">
            <h4 className="w3-center text-black"><em>NOW AVAILABLE!</em></h4>
            <p className="text-black w3-center">
              Now when creating a SOAP Pro account you get access to soccer betting predictions for Europe's top 5 leagues, as well as the MLS.
            </p>
          </div>
          <div className="col-lg-6 center-elements">
            <img className="img-home-info" src="/images/soccerExample.png" alt="Soccer Example" />
          </div>
        </div>

        <div className="row InfoElement xs-padding BackgroundNorm indexContainerPad" style={{ paddingTop: '50px' }}>
          <div className="col-lg-6 center-elements">
            <img className="img-home-info" src="/images/eventPreview.png" alt="Event Preview" />
          </div>
          <div className="col-lg-6 center-elements">
            <h4 className="w3-center text-white"><em>NEW FEATURE</em></h4>
            <p className="text-white w3-center">
              In the latest update, we've added a search by date function to load events from any date. To search, click the calendar icon, select a day, and then click the search icon to load events from that date.
            </p>
          </div>
        </div>
      </div>

      <footer className="w3-center footer-style w3-padding-64 w3-hover-opacity-off">
        <a href="#top" className="w3-button w3-light-grey">
          <i className="fa fa-arrow-up w3-margin-right"></i>To the top
        </a>
      </footer>
    </div>
  );
};

export default Home;