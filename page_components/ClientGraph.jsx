'use client'
import React, { useEffect, useState } from 'react';
import MainChart from '@/ui/MainGraph';
import Axios from 'axios';
import { URI } from '@/functions/uri';
import LoaderUi from '@/ui/LoaderUi';
import AlertUi from '@/ui/Alert';

export default function ClientGraph() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(URI + '/devicebyregion');
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
  if (error) return <div><AlertUi message={error}/></div>;

  return (
    <div id='all'>
      <MainChart data={data} />
    </div>
  );
}
