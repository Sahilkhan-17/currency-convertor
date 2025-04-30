import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div className="w-full h-screen flex bg-gray-50 overflow-hidden">
      {/* Left side - Creative visual element */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-indigo-600 to-purple-600 p-12 flex-col justify-between relative overflow-hidden">
        {/* Animated currency bubbles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-white/10 animate-float1"></div>
          <div className="absolute top-1/3 right-1/5 w-24 h-24 rounded-full bg-white/15 animate-float2"></div>
          <div className="absolute bottom-1/4 right-1/3 w-28 h-28 rounded-full bg-white/20 animate-float3"></div>
          <div className="absolute bottom-1/3 left-1/4 w-20 h-20 rounded-full bg-white/10 animate-float4"></div>
        </div>

        {/* Currency symbols animation */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="text-white text-9xl font-bold animate-pulse">$ € ¥ £ ₹</div>
        </div>

        <div className="relative z-10 text-white">
          <h1 className="text-5xl font-bold mb-3">Currency<span className="text-yellow-300">X</span></h1>
          <p className="text-xl opacity-90 mb-6">Real-time exchange at your fingertips</p>
          <div className="w-16 h-1 bg-yellow-300 mb-8"></div>
          
          <div className="flex items-center mb-8 group">
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mr-4 transition-all duration-300 group-hover:bg-white/30">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold group-hover:text-yellow-300 transition-colors">160+ Currencies</h3>
              <p className="opacity-80">Global coverage</p>
            </div>
          </div>
          
          <div className="flex items-center group">
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mr-4 transition-all duration-300 group-hover:bg-white/30">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold group-hover:text-yellow-300 transition-colors">Instant Conversion</h3>
              <p className="opacity-80">Live exchange rates</p>
            </div>
          </div>
        </div>
        
        <div className="relative z-10 text-white/80 text-sm mt-8">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p>Rates update every 60 seconds</p>
          </div>
        </div>
      </div>

      {/* Right side - Converter  */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">
            <h2 className="text-2xl font-bold flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
              Currency Converter
            </h2>
            <p className="opacity-90 text-sm">Get accurate exchange rates</p>
          </div>
          
          <div className="p-6">
            <form onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}>
              <div className="mb-6">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  selectCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)}
                />
              </div>
              
              <div className="relative w-full h-1 my-4">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-lg hover:bg-indigo-700 transition-all transform hover:scale-110"
                  onClick={swap}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className="w-full border-t border-gray-200"></div>
              </div>
              
              <div className="mb-8">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                  amountDisable
                />
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Add these styles for animations */}
      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-10px, -20px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(15px, 10px); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(5px, -15px); }
        }
        @keyframes float4 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-15px, 5px); }
        }
        .animate-float1 { animation: float1 8s ease-in-out infinite; }
        .animate-float2 { animation: float2 10s ease-in-out infinite; }
        .animate-float3 { animation: float3 12s ease-in-out infinite; }
        .animate-float4 { animation: float4 9s ease-in-out infinite; }
      `}</style>
    </div>
  );
}

export default App