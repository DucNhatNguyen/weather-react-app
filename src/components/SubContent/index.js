import React from 'react';
import moment from 'moment';

function SubContent({data}) {
    const {sys, wind, main} = data;


    let sunrise = sys ? moment.unix(sys.sunrise).format('H:mm') : '';
    let sunset = sys ? moment.unix(sys.sunset).format('H:mm') : '';
    let humidity = main ? main.humidity : '';
    let windSpeed = wind ? (wind.speed * 3.6).toFixed(2) : '';

    return (
        <div className="additional-section">
            <div className="row">
                <div className="item">
                    <div className="label">MT Mọc</div>
                    <div className="value sunrise">{sunrise}</div>
                </div>
                <div className="item">
                    <div className="label">MT Lặn</div>
                    <div className="value sunset">{sunset}</div>
                </div>
            </div>
            <div className="row">
                <div className="item">
                    <div className="label">Độ ẩm</div>
                    <div className="value"><span className="humidity">{humidity}</span>%</div>
                </div>
                <div className="item">
                    <div className="label">Gió</div>
                    <div className="value"><span className="wind-speed">{windSpeed}</span> km/h</div>
                </div>
            </div>
        </div>
    );
}

export default SubContent;