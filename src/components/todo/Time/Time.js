import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Time = () => {
  const [timeCheck, setTimeCheck] = useState('');

  const getClock = () => {
    const date = new Date();
    const standard = date.getHours() >= 12 ? 'PM' : 'AM';
    const hour =
      date.getHours() >= 13
        ? String(date.getHours() - 12).padStart(2, '0')
        : String(date.getHours()).padStart(2, '0');
    const minute = String(date.getMinutes()).padStart(2, '0');
    setTimeCheck(`${standard} ${hour} : ${minute}`);
  };

  useEffect(() => {
    getClock();
    const timer = setInterval(getClock, 1000);
    return () => clearInterval(timer);
  }, []);

  return <TimeDiv>{timeCheck}</TimeDiv>;
};

const TimeDiv = styled.span`
  font-weight: 700;
`;
export default Time;
