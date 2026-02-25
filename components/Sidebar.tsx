import { Check, LayoutGrid, CreditCard, User } from 'lucide-react';

const steps = [
{ id: 1, title: 'Basic Details', status: 'completed' },
{ id: 2, title: 'Company Details', status: 'completed' },
{ id: 3, title: 'Subscription plan', status: 'active' },
{ id: 4, title: 'Payment details', status: 'pending' },
];

export default function Sidebar() {
return (
    <div className="flex flex-col h-full justify-between py-4">
    <div className="space-y-8">
        <div className="w-10 h-10 bg-brand-blue rounded-xl flex items-center justify-center text-white mb-12">
        <div className="w-4 h-4 bg-white rounded-full opacity-40"></div>
        </div>

        {steps.map((step, index) => (
        <div key={step.id} className="relative flex items-center gap-4">
            {/* Línea conectora */}
            {index !== steps.length - 1 && (
            <div className={`absolute left-5 top-10 w-0.5 h-8 ${step.status === 'completed' ? 'bg-brand-green' : 'bg-slate-200'}`} />
            )}
            
            <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 z-10 
            ${step.status === 'completed' ? 'bg-brand-green border-brand-green text-white' : 
                step.status === 'active' ? 'border-brand-blue text-brand-blue ring-4 ring-blue-50' : 
                'border-slate-200 text-slate-300 bg-white'}`}>
            {step.status === 'completed' ? <Check size={18} /> : 
            step.status === 'active' ? <LayoutGrid size={18} /> : 
            <span className="text-xs font-bold">$</span>}
            </div>

            <div className="flex flex-col">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Step {step.id}</span>
            <span className={`text-sm font-bold ${step.status === 'pending' ? 'text-slate-300' : 'text-slate-800'}`}>
                {step.title}
            </span>
            </div>
        </div>
        ))}
    </div>

    <div className="bg-slate-50 p-4 rounded-2xl mt-20">
        <p className="text-xs text-slate-400 font-medium">Having troubles?</p>
        <p className="text-sm font-bold text-slate-800">Contact us</p>
    </div>
    </div>
);
}