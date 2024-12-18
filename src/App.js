
import React, { useState } from 'react';
import { Button } from '@mui/material';
import SignupModal from './SignupModal';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <h1>Welcome to Our App</h1>
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
    </div>
  );
};

export default App;
