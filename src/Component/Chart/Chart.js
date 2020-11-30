import React, { useEffect, useState } from 'react';
import axios from 'axios';
import datajs from '../../data'
import { getFiveMinData } from '../../API/Axios';
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import Candlestick from '../Candlestick/Candlestick';


const Chart = () => {
    const [data, setData] = useState(null);
    const [ohlc, setOhlc] = useState([]);
    const [volume, setVolume] = useState([]);

    // console.log('OHLC', ohlc)
    // console.log('VOLUME', volume)

    useEffect(()=> {
      getFiveMinData().then(res => setOhlc(res.data.map(arr => (
          [new Date(arr.date).getTime(),
            arr.open,
            arr.high,
            arr.low,
            arr.close,
            arr.volume])))
      )

      getFiveMinData().then(res => setVolume(res.data.map(arr => (
        [new Date(arr.date).getTime(),
          arr.volume])))
    )
    getFiveMinData().then(res => setData(res.data.map(arr => (
      [new Date(arr.date).getTime(),
      arr.open,
      arr.high,
      arr.low,
      arr.close]
    )))
  )
    },[]);

    return (
        <>
          <Candlestick ohlc={ohlc} volume={volume} data={data} />
        </>
    )
}

export default Chart
