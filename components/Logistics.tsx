
import React, { useMemo } from 'react';
import { Translations, Language } from '../types';
import AIInsights from './AIInsights';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface LogisticsProps {
  t: Translations;
  lang: Language;
  initialTab?: 'reservation' | 'transport';
}

const Logistics: React.FC<LogisticsProps> = ({ t, lang, initialTab = 'reservation' }) => {
  
  const transportUtilizationData = useMemo(() => [
    { type: t.importLabel, loadFactor: 88, count: 12 },
    { type: t.exportLabel, loadFactor: 95, count: 8 },
    { type: t.localLabel, loadFactor: 72, count: 24 },
  ], [t]);

  const shipmentPlanData = useMemo(() => [
    { id: 'TRK-9001', route: 'Munich -> Istanbul', type: t.importLabel, vehicle: 'Container Truck', load: 92, eta: '2025-05-24' },
    { id: 'SHP-4421', route: 'Istanbul -> New York', type: t.exportLabel, vehicle: 'Vessel MSC Ambra', load: 98, eta: '2025-06-12' },
    { id: 'LCL-1022', route: 'Gebze -> Ankara', type: t.localLabel, vehicle: 'Box Truck', load: 65, eta: '2025-05-22' },
  ], [t]);

  const renderTransportation = () => (
    <div className="space-y-8 animate-fadeIn">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: t.importShipments, count: 12, trend: '8 Active Vessel' },
          { label: t.exportShipments, count: 8, trend: '3 Scheduled Today' },
          { label: t.localShipments, count: 24, trend: 'Daily City Loop' },
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center space-x-5">
            <div>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">{item.label}</p>
              <h3 className="text-2xl font-black text-slate-800">{item.count} <span className="text-sm font-medium text-slate-400">{t.loads}</span></h3>
              <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">{item.trend}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <h3 className="font-bold text-slate-800 mb-6">{t.vehicleUtilization} (%)</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={transportUtilizationData} layout="vertical">
                <XAxis type="number" hide />
                <YAxis dataKey="type" type="category" axisLine={false} tickLine={false} tick={{fill: '#475569', fontSize: 12, fontWeight: 700}} width={80} />
                <Tooltip />
                <Bar dataKey="loadFactor" radius={[0, 4, 4, 0]} barSize={32}>
                  {transportUtilizationData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.loadFactor > 80 ? '#3b82f6' : '#f59e0b'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <AIInsights section="Transportation" data={transportUtilizationData} lang={lang} t={t} />
      </div>
    </div>
  );

  return initialTab === 'reservation' ? null : renderTransportation();
};

export default Logistics;
