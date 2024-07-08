'use client'
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { URI } from '@/functions/uri';
import LoaderUi from '@/ui/LoaderUi';
import AlertUi from '@/ui/Alert';
import dynamic from 'next/dynamic'

const PieGraph = dynamic(()=>import("@/ui/Pie") ,{ssr:false})

export default function Brand() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(URI + '/devicebrand');
        setData(response.data);
        console.log(response)
      } catch (error) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div><LoaderUi /></div>;
  if (error) return <div><AlertUi message={error} /></div>;

  return (
    <div>
      <PieGraph id={"devicebrand"} data={data} title={"Brand"} subtitle="This graph shows data on device brand"/>
    </div>
  );
}
