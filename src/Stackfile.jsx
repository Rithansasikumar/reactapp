
import React, { useState } from 'react';
import { Button, CircularProgress, Pagination } from '@mui/material';
import SignupModal from './SignupModal';

const StackFile = () => {
  
        const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className='ml-20'>
      <h1 >Welcome to Our App</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setIsModalOpen(true)}
      >
        Open Signup Modal
      </Button>
      <SignupModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <Button variant="contained" color="">Iam Button</Button>
      <Pagination count={10} color="standard" />
      <CircularProgress color="warning" />
      <p>iam tailwind css</p>
    </div>
    )
}
export default StackFile;