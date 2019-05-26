import React from 'react';
import PropTypes from 'prop-types';

import {
    titleStyle,
    subtitleStyle,
    headerStyle,
    containerStyle,
    videoStyle,
} from './Styles';

const FullHeader = ({ title, subtitle, bgColor, textColor, font, bgImg, video }) => {
    const headerStyleCombined = {
        ...headerStyle,
        backgroundColor: bgColor,
        color: textColor,
        fontFamily: font,
        backgroundImage: `url(${bgImg})`,
    };

    const component = (
        <header style={headerStyleCombined}>
            <div style={containerStyle}>
                {title && <h1 style={titleStyle}>{title}</h1>}
                {subtitle && <h2 style={subtitleStyle}>{subtitle}</h2>}
            </div>
            {video && <video autoPlay muted loop src={video} style={videoStyle} />}
        </header>
    );

    return component;
};

const defaultProps = {
    bgColor: '#CCC',
    textColor: '#FFF',
    font: 'sans-serif',
    bgImg: '',
};

const propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
    font: PropTypes.string,
    bgImg: PropTypes.string,
    video: PropTypes.video,
};

FullHeader.defaultProps = defaultProps;
FullHeader.propTypes = propTypes;

export default FullHeader;
