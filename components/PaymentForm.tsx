export default function PaymentForm() {
return (
    <div className="flex flex-col gap-6">
    <header className="border-b border-slate-100 pb-4">
        <p className="text-[10px] font-bold text-brand-blue uppercase tracking-widest">Step 4 / 5</p>
        <h2 className="text-xl font-bold text-slate-900">Payment Details</h2>
    </header>

    <div className="space-y-5">
        <section className="flex flex-col gap-2">
        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Card Details</label>
        <input type="text" placeholder="Alex Parkinson" className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-brand-blue outline-none transition-all" />
        <div className="relative">
            <input type="text" placeholder="4858 3445" className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl outline-none" />
            <div className="absolute right-4 top-4 w-6 h-4 bg-orange-400 rounded-sm"></div>
        </div>
        </section>

        <div className="grid grid-cols-2 gap-4">
        <input type="text" placeholder="Expiry" className="p-3 bg-slate-50 border border-slate-100 rounded-xl outline-none" />
        <input type="text" placeholder="CVV" className="p-3 bg-slate-50 border border-slate-100 rounded-xl outline-none" />
        </div>

        <section className="flex flex-col gap-4 mt-4">
        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Billing Address</label>
        <input type="text" placeholder="Street Address" className="p-3 bg-slate-50 border border-slate-100 rounded-xl outline-none" />
        <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="City" className="p-3 bg-slate-50 border border-slate-100 rounded-xl outline-none" />
            <input type="text" placeholder="State" className="p-3 bg-slate-50 border border-slate-100 rounded-xl outline-none" />
        </div>
        </section>
    </div>

    <footer className="flex justify-between items-center pt-6">
        <button className="text-sm font-bold text-slate-400 hover:text-slate-600 transition-colors">← Previous</button>
        <button className="bg-brand-blue text-white px-8 py-3 rounded-xl font-bold text-sm shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all">
        Next →
        </button>
    </footer>
    </div>
);
}