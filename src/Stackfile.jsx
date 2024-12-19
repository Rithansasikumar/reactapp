
import React, { useState } from 'react';
import { Button, CircularProgress, Pagination } from '@mui/material';
import SignupModal from './SignupModal';

const StackFile = () => {
  
        const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    
    <div className='ml-20'>
    <h1 class="text-sky-500">Welcome to Our App</h1>
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
    <CircularProgress color="success" />
    <div class="w-96 bg-black shadow rounded">
    w-96
      </div>
      <div id="main" class="grid grid-cols-3 gap-1 justify-evenly">  
        <div class="bg-green-700 w-26 h-12">1</div>  
        <div class="bg-green-500 w-26 h-12">2</div>  
        <div class="bg-green-300 w-26 h-12">3</div>  
        <div class="bg-green-700 w-26 h-12">4</div>  
        <div class="bg-green-500 w-26 h-12">5</div>  
        <div class="bg-green-300 w-26 h-12">6</div>  
    </div>
  </div>
    )
}
export default StackFile;