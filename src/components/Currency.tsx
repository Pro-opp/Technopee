'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Chart } from 'chart.js/auto';

interface CurrencyData {
  [key: string]: number;
}

const CurrencyConverter: React.FC = () => {
  const [fromCurrency, setFromCurrency] = useState<string>('');
  const [toCurrency, setToCurrency] = useState<string>('');
  const [amount, setAmount] = useState<number>(1);
  const [conversionRate, setConversionRate] = useState<number>(0);
  const [currencyOptions, setCurrencyOptions] = useState<string[]>([]);
  const [priceHistoryData, setPriceHistoryData] = useState<number[]>([]);

  useEffect(() => {
    const fetchCurrencyOptions = async () => {
      const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
      const baseCurrency: string = Object.keys(response.data.rates)[0];
      setFromCurrency(baseCurrency);
      setToCurrency('EUR');
      setCurrencyOptions([baseCurrency, ...Object.keys(response.data.rates)]);
    };
    fetchCurrencyOptions();
  }, []);

  useEffect(() => {
    const fetchConversionRate = async () => {
      const response = await axios.get<{ rates: CurrencyData }>(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
      const rate: number = response.data.rates[toCurrency];
      setConversionRate(rate);
    };
    if (fromCurrency && toCurrency) {
      fetchConversionRate();
    }
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    const fetchPriceHistory = async () => {
      const response = await axios.get<{ bpi: CurrencyData }>(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${getFormattedDate(new Date(Date.now() - 7 * 24 * 60 * 60 * 1000))}&end=${getFormattedDate(new Date())}`);
      const prices: number[] = Object.values(response.data.bpi);
      setPriceHistoryData(prices);
    };
    fetchPriceHistory();
  }, []);

  const getFormattedDate = (date: Date): string => {
    const year: number = date.getFullYear();
    const month: string = (date.getMonth() + 1).toString().padStart(2, '0');
    const day: string = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const handleFromCurrencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFromCurrency(event.target.value);
  };

  const handleToCurrencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setToCurrency(event.target.value);
  };

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(event.target.value));
  };

  useEffect(() => {
    if (priceHistoryData.length > 0) {
      const ctx = document.getElementById('priceChart') as HTMLCanvasElement;
      if (ctx) {
         new Chart(ctx, {
          type: 'line',
          data: {
            labels: Array.from({ length: priceHistoryData.length }, (_, i) => ''),
            datasets: [{
              label: 'Price History',
              data: priceHistoryData,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      }
    }
  }, [priceHistoryData]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex mb-4">
        <div className="flex-1 mr-4">
          <input type="number" value={amount} onChange={handleAmountChange} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        <div className="flex-1 ml-4">
          <select value={fromCurrency} onChange={handleFromCurrencyChange} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            {currencyOptions.map((currency: string) => (
              <option key={currency} value={currency}>{currency}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex mb-4">
        <div className="flex-1 mr-4">
          <input type="number" value={conversionRate * amount || ''} disabled className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        <div className="flex-1 ml-4">
          <select value={toCurrency} onChange={handleToCurrencyChange} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            {currencyOptions.map((currency: string) => (
              <option key={currency} value={currency}>{currency}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="mb-8">
        <canvas id="priceChart" width="400" height="400"></canvas>
      </div>
    </div>
  );
};

export default CurrencyConverter;
