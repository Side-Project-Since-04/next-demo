import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Test = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3030/test').then((res) => setText(res.data)); // useText 대신 setText 사용
  }, [text]);

  return <div>테스트 : 1</div>;
};

export default Test;
