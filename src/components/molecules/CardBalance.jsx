import { CreditCard } from "lucide-react";

const CardBalance = () => {
  return (
    <div className="w-full max-w-lg mx-auto p-2">
      <div
        className="relative overflow-hidden rounded-3xl p-8 text-white shadow-[0_25px_80px_-10px_rgba(113,131,232,0.4),0_15px_35px_-5px_rgba(113,131,232,0.3)] transition-all duration-300 hover:shadow-[0_35px_100px_-10px_rgba(113,131,232,0.5),0_20px_45px_-5px_rgba(113,131,232,0.4)] hover:-translate-y-2"
        style={{ background: "linear-gradient(135deg, #7183e8 0%, #6470c4 100%)" }}
      >

        {/* Card Balance Label */}
        <div className="mb-2">
          <p className="text-sm font-medium text-white/80">Card balance</p>
        </div>

        {/* Balance Amount */}
        <div className="mb-8">
          <h2 className="text-5xl font-bold tracking-tight text-white">Rp 32,819.00</h2>
        </div>

        {/* Card Details */}
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-medium text-white/70 mb-1">Card type</p>
            <p className="text-lg font-semibold text-white">Standart</p>
          </div>
          <div className="text-right">
            <p className="text-xs font-medium text-white/70 mb-1">Valid thru</p>
            <p className="text-lg font-semibold text-white">05/26</p>
          </div>
        </div>

        {/* Card Number */}
        <div className="mt-4 pt-4 border-t border-white/20">
          <p className="text-lg font-mono tracking-wider text-white">•••• •••• •••• 1890</p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute -left-8 -bottom-8 h-32 w-32 rounded-full bg-white/5 blur-2xl"></div>
      </div>
    </div>
  );
};

export default CardBalance;
