import React from 'react';
import { Home, MessageSquare, Users, Settings, Bell, CheckSquare } from 'lucide-react';

export const Sidebar: React.FC<{ mobile?: boolean }> = ({ mobile }) => {
    return (
        <nav className={`flex ${mobile ? 'flex-row justify-around w-full' : 'flex-col items-center gap-6 w-full'}`}>
            {!mobile && (
                <div className="p-2 bg-blue-600 rounded-lg mb-4">
                    <span className="text-white font-bold text-xl">H</span>
                </div>
            )}

            <div className={`flex ${mobile ? 'flex-row gap-8' : 'flex-col items-center gap-4 w-full px-2'}`}>
                <NavItem icon={<Home size={20} />} active />
                <NavItem icon={<MessageSquare size={20} />} />
                <NavItem icon={<CheckSquare size={20} />} />
                <NavItem icon={<Users size={20} />} />
            </div>

            {!mobile && (
                <div className="mt-auto flex flex-col items-center gap-4 w-full px-2 pb-4">
                    <NavItem icon={<Bell size={20} />} />
                    <NavItem icon={<Settings size={20} />} />
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-500 to-yellow-500 mt-2 cursor-pointer"></div>
                </div>
            )}
        </nav>
    );
};

const NavItem = ({ icon, active }: { icon: React.ReactNode; active?: boolean }) => (
    <button
        className={`p-3 rounded-xl transition-colors flex items-center justify-center
      ${active
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20'
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
    >
        {icon}
    </button>
);
