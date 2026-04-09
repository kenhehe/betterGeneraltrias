import { useState, useEffect } from 'react';
import { DollarSign, Thermometer, Clock } from 'lucide-react';

interface InfoBarData {
  forex: string;
  temp: string;
  datetime: string;
}

function formatDatetime(): string {
  const now = new Date();
  const date = now.toLocaleDateString('en-PH', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'Asia/Manila',
  });
  const time = now.toLocaleTimeString('en-PH', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZone: 'Asia/Manila',
  });
  return `${date} · ${time} PHT`;
}

export default function InfoBar() {
  const [info, setInfo] = useState<InfoBarData>({
    forex: '--',
    temp: '--',
    datetime: formatDatetime(),
  });

  useEffect(() => {
    // Update datetime every minute
    const timer = setInterval(() => {
      setInfo(prev => ({ ...prev, datetime: formatDatetime() }));
    }, 60_000);

    // Fetch forex (USD → PHP) from exchangerate-api (free, no key needed for this endpoint)
    const cachedForex = localStorage.getItem('bt_forex');
    const cachedForexTime = localStorage.getItem('bt_forex_time');
    const ONE_HOUR = 3600_000;
    if (
      cachedForex &&
      cachedForexTime &&
      Date.now() - parseInt(cachedForexTime) < ONE_HOUR
    ) {
      setInfo(prev => ({ ...prev, forex: cachedForex }));
    } else {
      fetch('https://open.er-api.com/v6/latest/USD')
        .then(r => r.json())
        .then(data => {
          if (data?.rates?.PHP) {
            const rate = `₱${Number(data.rates.PHP).toFixed(2)}`;
            localStorage.setItem('bt_forex', rate);
            localStorage.setItem('bt_forex_time', String(Date.now()));
            setInfo(prev => ({ ...prev, forex: rate }));
          }
        })
        .catch(() => {});
    }

    // Fetch weather from Open-Meteo (no API key needed)
    const cachedTemp = localStorage.getItem('bt_temp');
    const cachedTempTime = localStorage.getItem('bt_temp_time');
    const THIRTY_MIN = 1_800_000;
    if (
      cachedTemp &&
      cachedTempTime &&
      Date.now() - parseInt(cachedTempTime) < THIRTY_MIN
    ) {
      setInfo(prev => ({ ...prev, temp: cachedTemp }));
    } else {
      fetch(
        'https://api.open-meteo.com/v1/forecast?latitude=14.3833&longitude=120.8833&current_weather=true'
      )
        .then(r => r.json())
        .then(data => {
          if (data?.current_weather?.temperature !== undefined) {
            const t = `${Math.round(data.current_weather.temperature)}°C`;
            localStorage.setItem('bt_temp', t);
            localStorage.setItem('bt_temp_time', String(Date.now()));
            setInfo(prev => ({ ...prev, temp: t }));
          }
        })
        .catch(() => {});
    }

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-primary-900 text-white text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-end gap-6">
        <span className="flex items-center gap-1.5 opacity-90">
          <DollarSign className="h-3 w-3 opacity-70" />
          <span className="text-gray-300">1 USD =</span>
          <span className="font-semibold">{info.forex}</span>
        </span>
        <span className="text-gray-600 hidden sm:inline">|</span>
        <span className="hidden sm:flex items-center gap-1.5 opacity-90">
          <Thermometer className="h-3 w-3 opacity-70" />
          <span className="text-gray-300">General Trias</span>
          <span className="font-semibold">{info.temp}</span>
        </span>
        <span className="text-gray-600 hidden sm:inline">|</span>
        <span className="hidden md:flex items-center gap-1.5 opacity-90">
          <Clock className="h-3 w-3 opacity-70" />
          <span className="font-semibold">{info.datetime}</span>
        </span>
      </div>
    </div>
  );
}
