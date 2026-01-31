
import React, { useMemo } from 'react';
import { Translations, Language } from '../types';
import AIInsights from './AIInsights';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface WarehouseProps {
  t: Translations;
  lang: Language;
  initialTab?: 'dashboard' | 'inefficiency';
}

const Warehouse: React.FC<WarehouseProps> = ({ t, lang, initialTab = 'dashboard' }) => {
  
  const overtimeData = useMemo(() => [
    { day: 'Mon', hours: 42 },
    { day: 'Tue', hours: 38 },
    { day: 'Wed', hours: 55 },
    { day: 'Thu', hours: 22 },
    { day: 'Fri', hours: 68 },
    { day: 'Sat', hours: 40 },
  ], []);

  const stockCategories = useMemo(() => [
    { cat: t.finishedGoods, qty: 6800, color: 'bg-green-500' },
    { cat: t.rawMaterial, qty: 4200, color: 'bg-blue-500' },
    { cat: t.wip, qty: 1100, color: 'bg-amber-500' },
    { cat: t.packaging, qty: 420, color: 'bg-indigo-500' },
  ], [t]);

  const renderDashboard = () => (
    <div className="space-y-8 animate-fadeIn">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">{t.inventoryTurnover}</p>
          <h3 className="text-3xl font-black text-slate-800 mt-1">12.5x</h3>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">{t.emptyShelfRate}</p>
          <h3 className="text-3xl font-black text-slate-800 mt-1">18%</h3>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">{t.stockCount}</p>
          <h3 className="text-3xl font-black text-slate-800 mt-1">94%</h3>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">{t.overtime}</p>
          <h3 className="text-3xl font-black text-red-600 mt-1">265h</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="font-bold text-slate-800 mb-6">{t.overtimeBreakdownWeekly}</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={overtimeData}>
                <XAxis dataKey="day" axisLine={false} tickLine={false} />
                <Tooltip />
                <Bar dataKey="hours" fill="#ef4444" radius={[4, 4, 0, 0]} barSize={24} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <h3 className="font-bold text-slate-800 mb-6">{t.stockLevelByCategory}</h3>
          <div className="space-y-4">
             {stockCategories.map((row, i) => (
               <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="flex items-center space-x-3">
                     <div className={`w-2 h-8 rounded-full ${row.color}`}></div>
                     <p className="text-xs font-bold text-slate-800 uppercase tracking-tight">{row.cat}</p>
                  </div>
                  <p className="text-lg font-black text-slate-700">{row.qty.toLocaleString()}</p>
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );

  return initialTab === 'inefficiency' ? null : renderDashboard();
};

export default Warehouse;
