"use client";
import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string[]>([]);
  const [bought, setBought] = useState(false);
  const [status, setStatus] = useState("Idle");

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const selectedFile = files[0];
    
    const text = await selectedFile.text();
    setFile(selectedFile);
  };

  return (
  <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-indigo-900 text-white flex items-center justify-center">
    <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-3xl">
      
      <h1 className="text-4xl font-bold mb-6 text-center">
        🚀 DataMarket
      </h1>

      <p className="text-center text-gray-300 mb-6">
        Decentralized AI Dataset Exchange
      </p>

      <input
        type="file"
        accept=".csv"
        onChange={handleFile}
        className="mb-4 block w-full text-sm text-gray-200
        file:mr-4 file:py-2 file:px-4
        file:rounded-full file:border-0
        file:text-sm file:font-semibold
        file:bg-purple-600 file:text-white
        hover:file:bg-purple-700"
      />

      {preview.length > 0 && (
        <div>
          <h2 className="mt-5 font-bold text-lg">Dataset Preview</h2>

          <div className="bg-black/40 p-4 rounded-lg mt-3 h-52 overflow-auto text-sm">
            {preview.join("\n")}
          </div>
          <p className="mt-3 text-yellow-400">
            {status}
          </p>

          <div className="mt-4 flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-300">
                Rows: {preview.length}
              </p>
              <p className="text-sm text-gray-300">
                Columns: {preview.length > 0 ? preview[0].split(",").length : 0}
              </p>
            </div>

            {!bought ? (
              <button
                onClick={() => {
                  setStatus("Verifying with Icarus AI...");
                  setTimeout(() => {
                    setStatus("Payment Released ✔");
                    setBought(true);
                  }, 2000);
                }}
                className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-lg transition"
              >
                Lock WUSD (Buy)
              </button>
            ) : (
              <a
                href={URL.createObjectURL(file)}
                download
                className="bg-green-500 hover:bg-green-600 px-5 py-2 rounded-lg transition"
              >
                Download Dataset
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  </div>
);
            
          
            
          
            
          
              
              
            
              
            
          
        
      
    
  
}