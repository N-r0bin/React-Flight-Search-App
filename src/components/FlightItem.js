import React from 'react';
import './ListingComponent.css';

const FlightItem = ({ flight }) => {
    return (
        <li className="flight-box mb-3 p-3">
            <div className="flight-info">
                <div className="row">
                    <div className="col-md-4">
                        <p>
                            <span className="detail-header">From:</span> {flight.departureAirport}
                        </p>
                    </div>
                    <div className="col-md-4">
                        <p>
                            <span className="detail-header">To:</span> {flight.arrivalAirport}
                        </p>
                    </div>
                    <div className="col-md-4">
                        <p>
                            <span className="detail-header">Date:</span> {flight.date}
                        </p>
                    </div>
                </div>

                <div className="row mt-2">
                    <div className="col-md-4">
                        <p>
                            <span className="detail-header">Airline:</span> {flight.airline}
                        </p>
                    </div>
                    <div className="col-md-4">
                        <p>
                            <span className="detail-header">Price:</span> ${flight.price}
                        </p>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default FlightItem;
