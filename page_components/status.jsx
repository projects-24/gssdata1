'use client'
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { URI } from '@/functions/uri';
import LoaderUi from '@/ui/LoaderUi';
import AlertUi from '@/ui/Alert';
import dynamic from 'next/dynamic'

const PieGraph = dynamic(()=>import("@/ui/Pie") ,{ssr:false})

export default function Status() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(URI + '/devicestatus');
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
      <PieGraph id={"status_chart"} data={data} title={"Status"} subtitle="This grahps shows data on device status"/>
    </div>
  );
}
