import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { MobileMenu } from './components/MobileMenu';
import { TicketList } from './components/TicketList';
import { ChatWindow } from './components/ChatWindow';
import { ProfileDetails } from './components/ProfileDetails';
import { Menu, X } from 'lucide-react';

export const Layout: React.FC = () => {
    const [mobileView, setMobileView] = useState<'list' | 'chat'>('list');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className="flex h-screen w-full bg-white text-slate-900 lg:grid lg:grid-cols-[64px_300px_1fr] xl:grid-cols-[64px_300px_1fr_300px] grid-rows-[60px_1fr]">

            {/* Mobile Menu */}
            <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

            {/* Details Panel Overlay (Tablet/Mobile) */}
            <div
                className={`fixed inset-0 bg-black/20 z-40 transition-opacity duration-300 xl:hidden ${showDetails ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setShowDetails(false)}
            />
            <aside className={`
            fixed inset-y-0 right-0 w-[300px] bg-white border-l border-gray-200 shadow-xl z-50 transition-transform duration-300 transform xl:hidden
            ${showDetails ? 'translate-x-0' : 'translate-x-full'}
        `}>
                <button
                    onClick={() => setShowDetails(false)}
                    className="absolute top-4 right-4 z-10 p-2 text-gray-400 hover:text-gray-600 bg-white/80 rounded-full"
                >
                    <X size={20} />
                </button>
                <div className="h-full overflow-y-auto">
                    <ProfileDetails />
                </div>
            </aside>


            {/* Navigation - Hidden on mobile, shown on desktop */}
            <aside className="hidden md:flex row-span-2 bg-sidebar-dark text-white flex-col items-center py-4 border-r border-slate-800">
                <Sidebar />
            </aside>

            {/* Header Area */}
            <header className="fixed top-0 left-0 right-0 h-[60px] z-30 md:static col-span-3 lg:col-span-2 xl:col-span-3 bg-white border-b border-gray-200 flex items-center px-4 md:px-6 justify-between">
                <div className="flex items-center gap-3">
                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className="md:hidden p-2 -ml-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                    >
                        <Menu size={24} />
                    </button>
                    <h1 className="text-xl font-bold text-slate-800">Helpdesk</h1>
                </div>
            </header>

            {/* Content Container for Mobile (Stacking with transitions) */}
            <div className="flex-1 w-full overflow-hidden relative md:grid md:grid-cols-[300px_1fr] lg:contents mt-[60px] md:mt-0">

                {/* Ticket List Column */}
                <section className={`
            absolute inset-0 md:static flex flex-col bg-gray-50 border-r border-gray-200 overflow-hidden transition-transform duration-300 ease-in-out z-10
            ${mobileView === 'list' ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}>
                    <TicketList onTicketSelect={() => setMobileView('chat')} />
                </section>

                {/* Chat Area - Main Content */}
                <main className={`
            absolute inset-0 md:static flex flex-col relative overflow-hidden bg-white transition-transform duration-300 ease-in-out z-20 md:z-auto
            ${mobileView === 'chat' ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
        `}>
                    <ChatWindow
                        onBack={() => setMobileView('list')}
                        onToggleDetails={() => setShowDetails(!showDetails)}
                    />
                </main>

                {/* Details Panel - Hidden on smaller screens */}
                <aside className="bg-white border-l border-gray-200 overflow-y-auto hidden xl:block">
                    <ProfileDetails />
                </aside>
            </div>
        </div>
    );
};
