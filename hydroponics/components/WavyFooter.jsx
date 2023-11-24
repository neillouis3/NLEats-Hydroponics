import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const WavyFooter = ({ customStyles }) => {
    return (
      <View style={customStyles}>
        <View style={{ backgroundColor: '#5000ca', height: 160 }}>
          <Svg
            height="60%"
            width="100%"
            viewBox="0 0 1440 320"
            style={{ position: 'absolute', top: 130 }}
          >
            <path fill="#9AC58B" fill-opacity="1" d="M0,192L48,192C96,192,192,192,288,208C384,224,480,256,576,224C672,192,768,96,864,58.7C960,21,1056,43,1152,80C1248,117,1344,171,1392,197.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
            
          </Svg>
        </View>
      </View>
    );
  }

  export default WavyFooter;