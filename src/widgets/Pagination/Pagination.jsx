import { Typography } from '@material-tailwind/react';
import React from 'react'

const Pagination = () => {
  return (
    <div>
      <footer className="w-full bg-white p-1 fixed bottom-0 flex gap-2 -ms-10 justify-center">
        <Typography color="blue-gray" className="text-center font-normal">
          Rows per page: 10
        </Typography>
        <Typography color="blue-gray" className="text-center font-normal">
          Page
        </Typography>
        <div>
          <input
            type="text"
            className=" w-6 text-center border rounded-lg"
            value={1}
          />
        </div>
        <Typography color="blue-gray" className="text-center font-normal">
          of 10
        </Typography>
      </footer>
    </div>
  );
}

export default Pagination