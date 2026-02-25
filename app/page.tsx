"use client";
import { Check, LayoutGrid, Lock, CreditCard } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen p-8 text-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* SIDEBAR */}
        <aside className="lg:col-span-3 bg-white rounded-[40px] p-10 shadow-xl shadow-slate-200/50 flex flex-col justify-between min-h-[700px]">
          <div className="space-y-12">
            <div className="w-12 h-12 bg-brand-blue rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200">
              <div className="w-5 h-5 border-4 border-white/30 rounded-full" />
            </div>

            <nav className="space-y-10">
              <SidebarItem step="1" title="Basic Details" status="completed" />
              <SidebarItem step="2" title="Company Details" status="completed" />
              <SidebarItem step="3" title="Subscription plan" status="active" />
              <SidebarItem step="4" title="Payment details" status="pending" />
            </nav>
          </div>

          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
            <p className="text-xs text-slate-400 font-semibold mb-1 uppercase">Having troubles?</p>
            <p className="text-sm font-bold text-slate-900">Contact us</p>
          </div>
        </aside>

        {/* CONTENIDO PRINCIPAL */}
        <div className="lg:col-span-9 flex flex-col gap-8">
          
          {/* STEPPER SUPERIOR */}
          <div className="bg-white rounded-[32px] p-8 shadow-sm border border-slate-50 flex justify-between items-center">
            <TopStep num="1" label="Card Details" status="completed" />
            <div className="h-[2px] flex-1 bg-brand-green mx-4" />
            <TopStep num="2" label="Form Review" status="completed" />
            <div className="h-[2px] flex-1 bg-brand-blue mx-4" />
            <TopStep num="3" label="Authenticate OTP" status="active" />
            <div className="h-[2px] flex-1 bg-slate-100 mx-4" />
            <TopStep num="4" label="Create Code" status="pending" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-8">
              {/* CARD AZUL */}
              <div className="bg-brand-blue rounded-[35px] p-10 text-white shadow-2xl shadow-blue-300/40 relative overflow-hidden">
                <div className="flex justify-between items-start mb-16 relative z-10">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                    <Check size={24} />
                  </div>
                  <span className="text-[10px] bg-brand-green px-4 py-1.5 rounded-full font-black uppercase tracking-widest">Completed</span>
                </div>
                <h3 className="text-3xl font-bold mb-4 relative z-10">Card Details</h3>
                <p className="text-blue-100/80 text-sm leading-relaxed relative z-10">Application and forms will go through a step by step review process.</p>
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
              </div>

              {/* CARD REVIEW */}
              <div className="bg-white rounded-[35px] p-10 shadow-sm border border-slate-50">
                <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-2xl flex items-center justify-center mb-6">
                  <LayoutGrid size={24} />
                </div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">Step 2</p>
                <h3 className="text-xl font-bold mb-8">Application Review</h3>
                <div className="bg-brand-blue p-6 rounded-[24px] text-white shadow-inner">
                  <p className="text-[10px] uppercase font-bold text-blue-200 mb-2">Time Remaining</p>
                  <p className="text-3xl font-bold">48 hours</p>
                  <div className="w-full bg-blue-900/30 h-2 rounded-full mt-6 overflow-hidden">
                    <div className="bg-yellow-400 h-full w-[65%] rounded-full shadow-[0_0_10px_rgba(250,204,21,0.5)]" />
                  </div>
                </div>
              </div>
            </div>

            {/* FORMULARIO */}
            <div className="bg-white rounded-[40px] p-10 shadow-sm border border-slate-50">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center text-[10px] font-bold text-white italic">S</div>
                <span className="text-[11px] font-bold text-brand-blue uppercase tracking-widest">Step 4 / 5</span>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-10">Payment Details</h2>

              <div className="space-y-8">
                <div className="space-y-3">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Card Details</label>
                  <input type="text" defaultValue="Alex Parkinson" className="w-full p-5 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-brand-blue/10 focus:bg-white transition-all outline-none font-medium" />
                  <div className="relative">
                    <input type="text" defaultValue="4858 3445" className="w-full p-5 bg-slate-50 rounded-2xl border-2 border-transparent outline-none font-medium" />
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 w-8 h-5 bg-orange-500 rounded shadow-sm" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <input type="text" placeholder="Expiry" className="p-5 bg-slate-50 rounded-2xl border-2 border-transparent outline-none font-medium" />
                  <input type="text" placeholder="CVV" className="p-5 bg-slate-50 rounded-2xl border-2 border-transparent outline-none font-medium" />
                </div>
              </div>

              <div className="flex justify-between items-center mt-20">
                <button className="text-sm font-bold text-slate-400 hover:text-slate-600 transition-colors">← Previous</button>
                <button className="bg-brand-blue text-white px-12 py-5 rounded-[20px] font-bold text-sm shadow-xl shadow-blue-200 hover:scale-105 active:scale-95 transition-all">
                  Next →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Componentes pequeños para mantener el código limpio
function SidebarItem({ step, title, status }: { step: string, title: string, status: string }) {
  const isActive = status === 'active';
  const isDone = status === 'completed';
  return (
    <div className="flex items-center gap-6 group cursor-default">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 
        ${isDone ? 'bg-brand-green border-brand-green text-white shadow-md shadow-emerald-100' : 
          isActive ? 'border-brand-blue text-brand-blue ring-8 ring-blue-50' : 
          'border-slate-100 text-slate-300 group-hover:border-slate-200'}`}>
        {isDone ? <Check size={20} strokeWidth={3} /> : isActive ? <LayoutGrid size={20} /> : <span className="text-sm font-bold">$</span>}
      </div>
      <div>
        <p className="text-[10px] font-black text-slate-300 uppercase tracking-tighter">Step {step}</p>
        <p className={`text-base font-bold transition-colors ${status === 'pending' ? 'text-slate-300' : 'text-slate-900'}`}>{title}</p>
      </div>
    </div>
  );
}

function TopStep({ num, label, status }: { num: string, label: string, status: string }) {
  const isDone = status === 'completed';
  const isActive = status === 'active';
  return (
    <div className="flex flex-col items-center gap-3">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs transition-all
        ${isDone ? 'bg-brand-green text-white shadow-md' : 
          isActive ? 'bg-brand-blue text-white shadow-lg shadow-blue-200' : 
          'bg-slate-50 text-slate-300 border border-slate-100'}`}>
        {isDone ? <Check size={16} strokeWidth={3} /> : isActive ? <Lock size={16} /> : num}
      </div>
      <p className={`text-[10px] font-bold uppercase tracking-tight ${status === 'pending' ? 'text-slate-300' : 'text-slate-900'}`}>{label}</p>
    </div>
  );
}