import { useParams, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import axios from "axios";
import MediaCard from "@/components/Card";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));
export default function MagicCity() {
  const [data, setData] = useState([])
  const name = useParams();
  async function getData(city) {
    try {
      let { data } = await axios.get("/api/bricks?city=" + city)
      console.log(data)
      setData(data)
    } catch (error) {
      console.log(error);

    }
  }
  useEffect(() => {
    getData(name?.cityName)



  }, [name])


  return (
    <>
      <div className="container">
        <div className="row gy-4">
          {data && data.map((item) => {
            return (
              <>
                <MediaCard item={item} />
              </>
            )
          })}

        </div>
      </div>



      
    </>

  );
}
