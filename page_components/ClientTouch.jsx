'use client'
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { URI } from '@/functions/uri';
import LoaderUi from '@/ui/LoaderUi';
import AlertUi from '@/ui/Alert';
import dynamic from 'next/dynamic'

const PieGraph = dynamic(()=>import("@/ui/Pie") ,{ssr:false})

export default function ClientTouch() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(URI + '/devicetouchcapability');
        setData(response.data);
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
      <PieGraph id={"touch_capability"} data={data} title={"Touch Capability"} subtitle="This graph shows data on Touch Capability"/>
    </div>
  );
}
