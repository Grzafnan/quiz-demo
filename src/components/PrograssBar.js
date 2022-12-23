import ProgressBar from 'react-bootstrap/ProgressBar';

function Progress({ score, length, wrongScore }) {

  // console.log(score * 25, length);

  return (
    <div className='mb-5 d-flex flex-row justify-content-between w-full'>
      <div className='w-100'>
        <ProgressBar className='w-100' variant="success" now={score * 25} />
        <span className='text-dark'>
          {score} / {length}
        </span>
      </div>

      <div className='mx-5'>
        <span className='rounded-circle text-white bg-dark p-2 fw-bold'>
          {score * 25}
        </span>
      </div>

      <div className='w-100'>
        <ProgressBar className='w-100' variant="danger" now={wrongScore * 25} />

        <span className='text-dark'>
          {wrongScore} / {length}
        </span>
      </div>
    </div>
  );
}

export default Progress;