import { Box } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import React from 'react'
import emptybag from '../../../assets/emptybag.png';
import { ArrowLeftIcon, ArrowUpIcon } from '@heroicons/react/24/outline';

const Confirmation = () => {
  return (
    <Box m="90px auto" width="80%" height="50vh">
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        You have successfully made an Order —{" "}
        <strong>Congrats on Making your Purchase</strong>
      </Alert>
      <div className='flex items-center justify-center flex-col px-11 text-center gap-7'>
        <img
          src={emptybag}
          alt="emptybag/img"
          className='w-40 lg:w-36 sm:w-28 h-auto object-fill transition-all duration-300 hover:scale-110'
        />
        <a href='/' className='button-theme bg-gradient-to-b from-amber-500 to-orange-500 shadow-lg shadow-orange-500 flex items-center justify-center text-slate-900 py-2 gap-3 text-sm px-5 font-semibold active:scale-110' >
          <ArrowUpIcon className='w-5 h-5 text-slate-900' />
          <span className=''>Continue shopping with Bookhub.!</span>
        </a>
      </div>
    </Box>
  );
};

export default Confirmation;
