'use client'
import { regions } from '@/functions/get_regions'
import React, { useEffect, useState } from 'react'

export default function Clients_Regions_Select() {
    const [all_regions, setall_regions] = useState([])
    useEffect(() => {
     let docs = regions()
     console.log(docs)
    }, [])
    
  return (
    <div>Clients_Regions_Select</div>
  )
}
