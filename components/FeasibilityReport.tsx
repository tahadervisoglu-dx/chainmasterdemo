
import React from 'react';
import { Translations, Language } from '../types';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  Cell, PieChart, Pie, LineChart, Line, Legend, ReferenceLine 
} from 'recharts';

interface FeasibilityReportProps {
  t: Translations;
  lang: Language;
}

const FeasibilityReport: React.FC<FeasibilityReportProps> = ({ t, lang }) => {
  const roiData = [
    { name: 'Year 1', cost: 20000, savings: 85000 },
    { name: 'Year 2', cost: 5000, savings: 210000 },
    { name: 'Year 3', cost: 5000, savings: 350000 },
  ];

  const costStructure = [
    { name: 'Inventory Holding', value: 35, fill: '#ef4444' },
    { name: 'Logistics Waste', value: 25, fill: '#f59e0b' },
    { name: 'Procurement Overpay', value: 20, fill: '#3b82f6' },
    { name: 'Warehouse Labor Inefficiency', value: 20, fill: '#8b5cf6' },
  ];

  // Break-even Data (12 Months Projection)
  // Initial Investment: $20,000
  // Target Payback: Month 5
  const breakEvenData = [
    { month: 'M1', cumulativeCost: 20200, cumulativeSavings: 3000 },
    { month: 'M2', cumulativeCost: 20400, cumulativeSavings: 7500 },
    { month: 'M3', cumulativeCost: 20600, cumulativeSavings: 12500 },
    { month: 'M4', cumulativeCost: 20800, cumulativeSavings: 18000 },
    { month: 'M5', cumulativeCost: 21000, cumulativeSavings: 24500 }, // Break-even point reached here
    { month: 'M6', cumulativeCost: 21200, cumulativeSavings: 32000 },
    { month: 'M7', cumulativeCost: 21400, cumulativeSavings: 41000 },
    { month: 'M8', cumulativeCost: 21600, cumulativeSavings: 52000 },
    { month: 'M9', cumulativeCost: 21800, cumulativeSavings: 65000 },
    { month: 'M10', cumulativeCost: 22000, cumulativeSavings: 80000 },
    { month: 'M11', cumulativeCost: 22200, cumulativeSavings: 98000 },
    { month: 'M12', cumulativeCost: 22400, cumulativeSavings: 120000 },
  ];

  return (
    <div className="space-y-12 animate-fadeIn pb-12">
      <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8">
           <span className="bg-slate-900 text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-xl">Confidential - Strategy 2026</span>
        </div>
        
        <div className="max-w-4xl space-y-8">
          <div className="space-y-2">
            <h2 className="text-4xl font-black text-slate-800 tracking-tight uppercase">{t.feasibilityReport}</h2>
            <p className="text-indigo-600 font-bold tracking-widest text-sm">300 PERSON MANUFACTURING ENTITY - SCM OPTIMIZATION (2026)</p>
          </div>

          <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
            <p className="text-lg">
              Implementing <b>Chain Master</b> (Decision Intelligence) instead of generic "Co-pilot" chat tools shifts the focus from 
              <i>"How can I talk to my data?"</i> to <i>"What is the best possible decision for my bottom line?"</i>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
             <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100">
                <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-1">{t.annualSavings}</p>
                <h3 className="text-3xl font-black text-blue-900">$150k - $350k</h3>
                <p className="text-[10px] text-blue-400 mt-2">Estimated Year 1 Gain</p>
             </div>
             <div className="bg-amber-50 p-6 rounded-3xl border border-amber-100">
                <p className="text-[10px] font-black text-amber-500 uppercase tracking-widest mb-1">{t.implementationCost}</p>
                <h3 className="text-3xl font-black text-amber-900">$20,000</h3>
                <p className="text-[10px] text-amber-400 mt-2">Fixed Turnkey Cost</p>
             </div>
             <div className="bg-green-50 p-6 rounded-3xl border border-green-100">
                <p className="text-[10px] font-black text-green-500 uppercase tracking-widest mb-1">{t.paybackPeriod}</p>
                <h3 className="text-3xl font-black text-green-900">5.0 Months</h3>
                <p className="text-[10px] text-green-400 mt-2">Accelerated Break-even</p>
             </div>
          </div>
        </div>
      </div>

      {/* Break-even Analysis Graph */}
      <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl space-y-8">
         <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-black text-slate-800 uppercase tracking-tight">Başabaş (Break-even) Analizi</h3>
              <p className="text-sm text-slate-500 font-medium">Kümülatif Yatırım vs Kümülatif Tasarruf (12 Aylık Projeksiyon)</p>
            </div>
            <div className="flex items-center space-x-6 text-[10px] font-black uppercase tracking-widest bg-slate-50 px-6 py-3 rounded-2xl border border-slate-100">
               <div className="flex items-center space-x-2">
                  <div className="w-3 h-1 bg-red-400 rounded-full"></div>
                  <span className="text-slate-400">Toplam Maliyet</span>
               </div>
               <div className="flex items-center space-x-2">
                  <div className="w-3 h-1 bg-green-500 rounded-full"></div>
                  <span className="text-slate-400">Toplam Tasarruf</span>
               </div>
            </div>
         </div>
         <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
               <LineChart data={breakEvenData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 'bold'}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11}} tickFormatter={(v) => `$${v/1000}k`} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }}
                    formatter={(value: any) => [`$${value.toLocaleString()}`, ""]}
                  />
                  <Legend hide />
                  <ReferenceLine x="M5" stroke="#6366f1" strokeDasharray="5 5" label={{ value: 'Payback Point', position: 'top', fill: '#6366f1', fontSize: 10, fontWeight: 'bold' }} />
                  <Line type="monotone" dataKey="cumulativeCost" stroke="#f87171" strokeWidth={4} dot={{ r: 4, fill: '#f87171', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="cumulativeSavings" stroke="#22c55e" strokeWidth={4} dot={{ r: 4, fill: '#22c55e', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 8 }} />
               </LineChart>
            </ResponsiveContainer>
         </div>
         <div className="p-6 bg-green-50 rounded-3xl border border-green-100 flex items-start space-x-4">
            <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center shrink-0">
               <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
            </div>
            <p className="text-sm text-green-800 font-medium leading-relaxed">
               <b>Analiz Notu:</b> Başabaş noktasına 5. ayın ortasında ulaşılmaktadır. Düşük kurulum maliyeti ($20k) ve yüksek operasyonel verimlilik sayesinde proje ilk yıl içerisinde yatırım tutarının 6 katı tasarruf üretmektedir.
            </p>
         </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
         <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl space-y-6">
            <h3 className="text-xl font-black text-slate-800 uppercase tracking-tight border-b border-slate-50 pb-4">Financial Projection (Yearly ROI)</h3>
            <div className="h-72">
               <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={roiData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} tickFormatter={(v) => `$${v/1000}k`} />
                    <Tooltip />
                    <Bar dataKey="cost" name="Investment" fill="#cbd5e1" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="savings" name="Savings" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                  </BarChart>
               </ResponsiveContainer>
            </div>
         </div>

         <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl space-y-6">
            <h3 className="text-xl font-black text-slate-800 uppercase tracking-tight border-b border-slate-50 pb-4">Where the Money Leaks</h3>
            <div className="h-72 flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={costStructure} innerRadius={60} outerRadius={100} paddingAngle={5} dataKey="value">
                      {costStructure.map((entry, index) => <Cell key={index} fill={entry.fill} />)}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="w-1/2 space-y-3">
                   {costStructure.map((s, i) => (
                     <div key={i} className="flex items-center space-x-2 text-xs">
                        <div className="w-3 h-3 rounded-full" style={{backgroundColor: s.fill}}></div>
                        <span className="font-bold text-slate-600">{s.name}: {s.value}%</span>
                     </div>
                   ))}
                </div>
            </div>
         </div>
      </div>

      <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white shadow-2xl space-y-10">
         <h3 className="text-3xl font-black tracking-tight">How Chain Master Optimizes Your Bottom Line</h3>
         
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
               <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-black">1</div>
                  <h4 className="text-xl font-bold">Demand Forecasting (Inventory)</h4>
               </div>
               <p className="text-slate-400 text-sm leading-relaxed">
                  Generative AI can explain stock levels, but <b>Chain Master</b> runs advanced models on your 300-person firm's specific SCM data. 
                  Result: <b>-22% Safety Stock</b> without increasing stock-out risks.
               </p>
            </div>
            <div className="space-y-4">
               <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center font-black">2</div>
                  <h4 className="text-xl font-bold">Route & Fleet Optimization</h4>
               </div>
               <p className="text-slate-400 text-sm leading-relaxed">
                  Solves complex bin-packing algorithms for your distribution fleet. 
                  Result: <b>-14% Fuel Costs</b> and maximized vehicle utilization.
               </p>
            </div>
            <div className="space-y-4">
               <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-amber-600 rounded-xl flex items-center justify-center font-black">3</div>
                  <h4 className="text-xl font-bold">Price Prediction (Procurement)</h4>
               </div>
               <p className="text-slate-400 text-sm leading-relaxed">
                  Analyzes commodity indices against currency volatility. 
                  Result: <b>Purchase Timing Optimization</b> saves 4-6% on bulk hammadde orders.
               </p>
            </div>
            <div className="space-y-4">
               <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-rose-600 rounded-xl flex items-center justify-center font-black">4</div>
                  <h4 className="text-xl font-bold">Warehouse Flow Intelligence</h4>
               </div>
               <p className="text-slate-400 text-sm leading-relaxed">
                  Heat-mapping forklift paths and SKU velocity. 
                  Result: <b>-30% Travel Time</b> in picking, allowing same staff to handle 20% more volume.
               </p>
            </div>
         </div>
      </div>
    </div>
  );
};

export default FeasibilityReport;
