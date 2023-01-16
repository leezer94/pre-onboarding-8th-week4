import Form from 'components/Form/Form';
import Pagination from 'components/Pagination/Pagination';

import Comments from '../components/Comments/Comments';

const Main = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '50%',
        margin: '0 auto',
        height: '950px',
        border: '1px solid red',
        padding: '10px',
      }}
    >
      <Comments />
      <Form />
      <Pagination />
    </div>
  );
};

export default Main;
