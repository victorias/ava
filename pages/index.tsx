import { useSelector } from 'react-redux';

const Index = () => {
  const data: any = useSelector(state => state);
  return (
    <div>
      <p>Hello Next.js</p>
      <p>{`${data}`}</p>
    </div>
  );
};

export default Index;
