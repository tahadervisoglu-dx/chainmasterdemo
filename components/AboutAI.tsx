
import React from 'react';
import { Translations, Language } from '../types';

interface AboutAIProps {
  t: Translations;
  lang: Language;
}

const AboutAI: React.FC<AboutAIProps> = ({ t, lang }) => {
  // Localized Strategy Points for Business Owners with specific calculations
  const strategyPoints = {
    en: {
      hero: "Co-pilots save seconds on emails. Chain Master saves millions on inventory.",
      heroSub: "While a 'Co-pilot' can summarize a report, it cannot tell you the mathematically optimal stock level to prevent a factory shutdown. Chain Master is the decision engine designed for leaders who care about EBITDA, not just chat bubbles.",
      copilot: "Assistive AI (Co-pilot)",
      chainmaster: "Strategic AI (Chain Master)",
      genRows: [
        { 
          feature: "Primary Goal", 
          copilot: "Draft content and summarize text.", 
          master: "Maximize profit and minimize waste via math.",
          calc: "ROI: Eliminating 12% operational waste."
        },
        { 
          feature: "Intelligence Type", 
          copilot: "Conversational (Based on word patterns).", 
          master: "Operational (Based on optimization logic).",
          calc: "Precision: 99.8% decision accuracy."
        },
        { 
          feature: "Business Value", 
          copilot: "Speed up clerical work (emails, memos).", 
          master: "Direct bottom-line impact (Margin expansion).",
          calc: "Impact: +2.4% EBITDA growth."
        },
        { 
          feature: "Inventory Optimization", 
          copilot: "Writing stock descriptions for ERP.", 
          master: "Reducing safety stock by 15% via prediction.",
          calc: "Calculation: $2M stock x 15% = $300k freed cash flow."
        },
        { 
          feature: "Logistics Efficiency", 
          copilot: "Explaining shipping delays to clients.", 
          master: "Increasing vehicle load factor via bin-packing.",
          calc: "Calculation: Moving from 72% to 94% load = $120k annual freight saving."
        },
        { 
          feature: "Procurement Strategy", 
          copilot: "Drafting supplier negotiation letters.", 
          master: "Hedged buying based on commodity index trends.",
          calc: "Calculation: 5% saving on $3M raw mat spend = $150k profit increase."
        },
      ]
    },
    tr: {
      hero: "Co-pilot e-posta yazarken saniye kazandırır. Chain Master stok yönetirken milyonlar kazandırır.",
      heroSub: "Bir 'Co-pilot' raporunuzu özetleyebilir, ancak fabrikanızın durmasını engelleyecek matematiksel olarak en doğru stok seviyesini size söyleyemez. Chain Master, sadece sohbet balonlarıyla değil, EBITDA (FAVÖK) marjıyla ilgilenen liderler için tasarlanmış bir karar motorudur.",
      copilot: "Asistan YZ (Co-pilot)",
      chainmaster: "Stratejik YZ (Chain Master)",
      genRows: [
        { 
          feature: "Temel Amaç", 
          copilot: "İçerik taslağı ve metin özeti oluşturmak.", 
          master: "Kârı maksimize etmek, israfı sıfırlamak.",
          calc: "ROI: %12 operasyonel israfın yok edilmesi."
        },
        { 
          feature: "Zeka Türü", 
          copilot: "Sohbet Odaklı (Kelime örüntüleri).", 
          master: "Operasyonel (Matematik ve Optimizasyon).",
          calc: "Hassasiyet: %99.8 karar doğruluğu."
        },
        { 
          feature: "İş Değeri", 
          copilot: "Büro işlerini hızlandırır (E-posta, notlar).", 
          master: "Doğrudan kâr marjı etkisi (Maliyet düşürme).",
          calc: "Etki: +%2.4 FAVÖK artışı."
        },
        { 
          feature: "Stok Optimizasyonu", 
          copilot: "ERP için ürün açıklaması yazar.", 
          master: "Emniyet stoğunu tahmine dayalı %15 düşürür.",
          calc: "Hesaplama: 2M USD stok x %15 = 300.000 USD nakit akışı."
        },
        { 
          feature: "Lojistik Verimliliği", 
          copilot: "Müşteriye gecikme açıklamasını yazar.", 
          master: "Araç doluluk oranını (bin-packing) maksimize eder.",
          calc: "Hesaplama: Doluluk %72 -> %94 = Yıllık 120.000 USD navlun tasarrufu."
        },
        { 
          feature: "Satınalma Stratejisi", 
          copilot: "Tedarikçiye fiyat sorma e-postası yazar.", 
          master: "LME endeks tahminiyle zamanlanmış alım yapar.",
          calc: "Hesaplama: 3M USD alımda %5 tasarruf = 150.000 USD doğrudan kâr."
        },
      ]
    },
    hi: {
      hero: "को-पायलट ईमेल पर सेकंड बचाता है। Chain Master इन्वेंट्री पर लाखों बचाता है।",
      heroSub: "जबकि एक 'को-पायलट' रिपोर्ट का सार प्रस्तुत कर सकता है, यह आपको गणितीय रूप से इष्टतम स्टॉक स्तर नहीं बता सकता है। Chain Master उन नेताओं के लिए डिज़ाइन किया गया निर्णय इंजन है जो EBITDA की परवाह करते हैं।",
      copilot: "सहायक एआई",
      chainmaster: "रणनीतिक एआई",
      genRows: [
         { feature: "प्राथमिक लक्ष्य", copilot: "सामग्री का मसौदा तैयार करना।", master: "लाभ को अधिकतम करना।", calc: "ROI: 12% बर्बादी में कमी।" },
         { feature: "व्यवसायिक मूल्य", copilot: "लिपिक कार्य में तेजी।", master: "सीधा लाभ प्रभाव।", calc: "+2.4% EBITDA लाभ।" },
         { feature: "इन्वेंट्री", copilot: "ईमेल लिखना।", master: "15% स्टॉक कम करना।", calc: "$300k बचत।" },
      ]
    }
  };

  const currentStrategy = strategyPoints[lang] || strategyPoints.en;

  return (
    <div className="space-y-12 animate-fadeIn pb-12">
      {/* Executive Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden border border-white/10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -mr-64 -mt-64"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[100px] -ml-32 -mb-32"></div>
        
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 mb-8">
             <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
             <span className="text-[10px] font-black uppercase tracking-[0.3em]">Executive Strategic Briefing (300 Staff Target)</span>
          </div>
          <h2 className="text-5xl font-black mb-8 leading-[1.1] tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
            {currentStrategy.hero}
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed max-w-3xl font-medium">
            {currentStrategy.heroSub}
          </p>
        </div>
      </div>

      {/* The Strategic Comparison Matrix */}
      <div className="space-y-8">
        <div className="flex items-center justify-between px-4">
           <h3 className="text-2xl font-black text-slate-800 uppercase tracking-tight">{t.aiComparison}</h3>
           <div className="flex space-x-6 text-[10px] font-black uppercase tracking-widest text-slate-400">
              <span className="flex items-center"><div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div> GENERAL ASSISTANT</span>
              <span className="flex items-center"><div className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></div> PROFIT & ROI ENGINE</span>
           </div>
        </div>

        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="px-10 py-6 text-xs font-black text-slate-400 uppercase tracking-widest">{t.aiType}</th>
                <th className="px-10 py-6 text-xs font-black text-blue-500 uppercase tracking-widest bg-blue-50/30">{currentStrategy.copilot}</th>
                <th className="px-10 py-6 text-xs font-black text-indigo-700 uppercase tracking-widest bg-indigo-50/30">{currentStrategy.chainmaster}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {currentStrategy.genRows?.map((row, i) => (
                <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-10 py-8 text-sm font-black text-slate-800 bg-slate-50/10 align-top w-1/4">{row.feature}</td>
                  <td className="px-10 py-8 text-sm text-slate-500 leading-relaxed align-top w-3/8 border-r border-slate-50">
                    <p className="font-medium">{row.copilot}</p>
                    <div className="mt-4 p-3 bg-slate-100 text-slate-400 rounded-xl text-[10px] font-bold uppercase tracking-tight">
                       Saves Time only
                    </div>
                  </td>
                  <td className="px-10 py-8 text-sm text-slate-700 leading-relaxed align-top w-3/8 bg-indigo-50/5">
                    <p className="font-bold text-slate-900">{row.master}</p>
                    {row.calc && (
                      <div className="mt-4 p-4 bg-indigo-900 text-white rounded-2xl border border-indigo-700 shadow-lg">
                        <p className="text-[9px] font-black text-indigo-300 uppercase tracking-[0.2em] mb-1">Calculation Case (300 Staff Firm)</p>
                        <p className="text-xs font-black leading-tight italic">"{row.calc}"</p>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* The Bottom Line Statement */}
      <div className="bg-white p-12 rounded-[2.5rem] border border-slate-100 shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
         <div className="space-y-6">
            <h4 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">Decision Intelligence vs. Chat</h4>
            <p className="text-slate-500 text-lg leading-relaxed">
               A Co-pilot is built for communication. <b>Chain Master</b> is built for capital efficiency. In a 300-person factory, the human error margin in manual SCM data entry costs roughly <b>$8,000 per month</b>. Chain Master eliminates this cost on day one.
            </p>
            <div className="pt-6 border-t border-slate-100 flex items-center space-x-4">
               <div className="w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center font-black">ROI</div>
               <p className="text-sm font-bold text-slate-800 italic">"Chain Master users pay for the software within the first 8 months just by optimizing truck loads."</p>
            </div>
         </div>
         <div className="bg-slate-900 rounded-3xl p-8 text-white space-y-6">
            <h5 className="text-indigo-400 font-black uppercase tracking-widest text-xs">Chain Master Core Differentiators</h5>
            <ul className="space-y-4">
               {[
                 "Linear Programming for Bin-Packing (Logistics)",
                 "Monte Carlo Simulation for Demand (Inventory)",
                 "LME Commodity Price Forecasting (Procurement)",
                 "Capital Cost / Opportunity Loss Engine",
                 "Real-time HS-Code Compliance Matrix"
               ].map((item, i) => (
                 <li key={i} className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span className="text-sm font-bold text-slate-200">{item}</span>
                 </li>
               ))}
            </ul>
         </div>
      </div>
    </div>
  );
};

export default AboutAI;
