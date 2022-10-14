import { Rate } from 'antd';
import './Stars.css';

const Stars = ({ stars }) => {
  return <Rate allowHalf disabled defaultValue={stars} count="10" />;
};

export default Stars;
