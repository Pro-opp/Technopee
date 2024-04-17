'use client'
import React, { useState }  from 'react'
import { useNetworkSpeedTest} from '@rtbjs/network-speed-test'

export const Speedtest : React.FC = () => {
    
    const { runTest, download, upload } = useNetworkSpeedTest();

    const test = () =>{
        runTest();
    }
  return (
    <div>
        <button onClick={test}>
            Run Test
        </button>
        <h1>
            {
                download.result.meanClientMbps
            }
        </h1>
        <h1>
            {
                upload.result.meanClientMbps
            }
        </h1>
    </div>
  )
}
