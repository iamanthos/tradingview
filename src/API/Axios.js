import axios from 'axios';

let response = null;

export const getFiveMinData = async() => {
    // response = await axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo');

    response = await axios.get('http://api.marketstack.com/v1/intraday?access_key=87f6dc4bd164ae7fd3f54bbceba8c13f&symbols=AAPL');
    let data = response.data;
    return data;
}