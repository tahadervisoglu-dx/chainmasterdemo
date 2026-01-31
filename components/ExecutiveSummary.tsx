
import React from 'react';
import { Translations, Language } from '../types';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, ReferenceLine 
} from 'recharts';

interface ExecutiveSummaryProps {
  t: Translations;
  lang: Language;
}

const ExecutiveSummary: React.FC<ExecutiveSummaryProps> = ({ t, lang }) => {
  const cards = [
    { title: 'Strategic Goal', desc: 'Transition from Manual Tracking to Autonomous Supply Chain Decisioning.', icon: '🎯', color: 'bg-blue-600' },
    { title: 'Bottom Line', desc: 'Projected EBITDA impact of +2.4% via SCM cost reductions.', icon: '💰', color: 'bg-green-600' },
    { title: 'Timeline', desc: 'Full core engine integration within 4 months (Agile Sprints).', icon: '⏱️', color: 'bg-amber-600' },
  ];

  const breakEvenData = [
    { month: 'M1', cost: 20, savings: 3 },
    { month: 'M2', cost: 20.2, savings: 7 },
    { month: 'M3', cost: 20.4, savings: 12 },
    { month: 'M4', cost: 20.6, savings: 18 },
    { month: 'M5', cost: 20.8, savings: 25 }, // Cross
    { month: 'M6', cost: 21, savings: 35 },
    { month: 'M7', cost: 21.2, savings: 48 },
    { month: 'M8', cost: 21.4, savings: 65 },
  ];

  return (
    <div className="space-y-10 animate-fadeIn pb-12">
      {/* Title */}
      <div className="border-l-8 border-slate-900 pl-6">
        <h2 className="text-5xl font-black text-slate-900 uppercase tracking-tighter">{t.executiveSummary}</h2>
        <p className="text-slate-500 font-medium text-lg mt-2">Board of Directors Presentation - Q1 2026</p>
      </div>

      {/* High Level Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((c, i) => (
          <div key={i} className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 flex flex-col space-y-4">
            <div className={`w-14 h-14 ${c.color} text-white rounded-2xl flex items-center justify-center text-2xl shadow-lg`}>
              {c.icon}
            </div>
            <h4 className="text-xl font-black text-slate-800">{c.title}</h4>
            <p className="text-slate-500 text-sm leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>

      {/* Financial Performance Summary with Chart */}
      <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100 grid grid-cols-1 lg:grid-cols-3 gap-12">
         <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
               <h3 className="text-2xl font-black text-slate-800 uppercase tracking-tight">Finansal Geri Dönüş (ROI) Özeti</h3>
               <div className="flex space-x-4">
                  <div className="flex items-center space-x-2"><div className="w-2 h-2 bg-slate-300 rounded-full"></div><span className="text-[10px] font-bold text-slate-400">Kümülatif Yatırım</span></div>
                  <div className="flex items-center space-x-2"><div className="w-2 h-2 bg-blue-600 rounded-full"></div><span className="text-[10px] font-bold text-slate-400">Net Tasarruf</span></div>
               </div>
            </div>
            <div className="h-64 w-full">
               <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={breakEvenData}>
                    <defs>
                      <linearGradient id="colorSavings" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10}} />
                    <YAxis hide />
                    <Tooltip contentStyle={{borderRadius: '12px', border: 'none'}} />
                    <ReferenceLine x="M5" stroke="#6366f1" strokeDasharray="3 3" label={{ value: 'Payback Point', position: 'top', fill: '#6366f1', fontSize: 9, fontWeight: 'bold' }} />
                    <Area type="monotone" dataKey="savings" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorSavings)" />
                    <Line type="monotone" dataKey="cost" stroke="#cbd5e1" strokeWidth={2} strokeDasharray="5 5" dot={false} />
                  </AreaChart>
               </ResponsiveContainer>
            </div>
            <p className="text-xs text-slate-400 font-medium italic">Projeksiyon, 300 kişilik üretim tesisimizin mevcut ERP verilerine dayalı Chain Master modellemesi üzerinden yapılmıştır.</p>
         </div>
         <div className="bg-slate-50 p-8 rounded-[2rem] flex flex-col justify-center space-y-6 border border-slate-100">
            <div className="space-y-1">
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Payback Period</p>
               <h5 className="text-4xl font-black text-slate-900">5.0 <span className="text-lg text-slate-400">Ay</span></h5>
            </div>
            <div className="space-y-1">
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Year 1 Net Impact</p>
               <h5 className="text-4xl font-black text-green-600">+$120k</h5>
            </div>
            <div className="pt-4 border-t border-slate-200">
               <p className="text-sm font-bold text-slate-700 leading-tight">Düşük giriş maliyeti ($20k) ile yatırımın kendini amorti etme hızı rekor seviyededir.</p>
            </div>
         </div>
      </div>

      {/* Main Statement */}
      <div className="bg-slate-900 text-white rounded-[3rem] p-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
        <div className="relative z-10 space-y-8">
           <h3 className="text-3xl font-black max-w-2xl leading-tight">"We don't need an AI that talks; we need an AI that saves."</h3>
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-slate-400 text-lg leading-relaxed">
                  While <b>Generative AI</b> (Chatbots) is the visible face of technology, it is merely the interface. For a 300-person firm, 
                  the real ROI lies in <b>Chain Master's</b> decision engine. This system lives inside our ERP, making micro-decisions on reorder points, 
                  vessel selection, and procurement hedging that human operators cannot process at scale.
                </p>
                <div className="pt-4 border-t border-slate-800">
                   <p className="text-blue-400 font-black uppercase tracking-widest text-sm">Key Strategic Takeaway</p>
                   <p className="text-slate-200 mt-2 font-bold italic">"Efficiency is not just about doing things faster; it's about doing the right things mathematically."</p>
                </div>
              </div>

              <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700/50 space-y-6">
                 <h4 className="text-indigo-400 font-black uppercase tracking-widest text-xs">2026 Hybrid Roadmap</h4>
                 <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                       <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-1.5"></div>
                       <span className="text-sm text-slate-300"><b>Phase 1:</b> Data Lake Consolidation (Month 1)</span>
                    </li>
                    <li className="flex items-start space-x-3">
                       <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-1.5"></div>
                       <span className="text-sm text-slate-300"><b>Phase 2:</b> Demand Prediction Pilot (Month 2)</span>
                    </li>
                    <li className="flex items-start space-x-3">
                       <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-1.5"></div>
                       <span className="text-sm text-slate-300"><b>Phase 3:</b> Warehouse Route Optimization Go-Live (Month 3)</span>
                    </li>
                    <li className="flex items-start space-x-3">
                       <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-1.5"></div>
                       <span className="text-sm text-slate-300"><b>Phase 4:</b> Gen-AI Natural Language Overlay (Month 4)</span>
                    </li>
                 </ul>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveSummary;
