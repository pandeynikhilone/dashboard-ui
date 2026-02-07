import React, { useState } from 'react';
import { Sidebar } from '../nav/Sidebar';
import { TicketList } from '../tickets/TicketList';
import { ChatArea } from '../chat/ChatArea';
import { DetailsPanel } from '../details/DetailsPanel';

export const MainLayout: React.FC = () => {
    const [mobileView, setMobileView] = useState<'list' | 'chat'>('list');

    return (
        <div className="flex h-screen w-full bg-white text-slate-900 lg:grid lg:grid-cols-[64px_300px_1fr] xl:grid-cols-[64px_300px_1fr_300px] grid-rows-[60px_1fr]">

            {/* Navigation - Hidden on mobile, shown on desktop */}
            <aside className="hidden md:flex row-span-2 bg-sidebar-dark text-white flex-col items-center py-4 border-r border-slate-800">
                <Sidebar />
            </aside>

            {/* Header Area */}
            <header className="fixed top-0 left-0 right-0 h-[60px] z-50 md:static col-span-3 lg:col-span-2 xl:col-span-3 bg-white border-b border-gray-200 flex items-center px-4 md:px-6 justify-between">
                <div className="flex items-center gap-3">
                    {/* Mobile Menu Button Placeholder */}
                    <button className="md:hidden p-2 -ml-2 text-gray-600">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                    </button>
                    <h1 className="text-xl font-bold text-slate-800">Helpdesk</h1>
                </div>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-200"></div>
            </header>

            {/* Content Container for Mobile (Stacking) */}
            <div className="flex-1 w-full overflow-hidden flex flex-col md:grid md:grid-cols-[300px_1fr] lg:contents mt-[60px] md:mt-0">

                {/* Ticket List Column */}
                <section className={`
            flex-1 flex flex-col bg-gray-50 border-r border-gray-200 overflow-hidden
            ${mobileView === 'list' ? 'flex' : 'hidden md:flex'}
        `}>
                    <TicketList onTicketSelect={() => setMobileView('chat')} />
                </section>

                {/* Chat Area - Main Content */}
                <main className={`
            flex-1 flex flex-col relative overflow-hidden bg-white
            ${mobileView === 'chat' ? 'flex' : 'hidden md:flex'}
        `}>
                    <ChatArea onBack={() => setMobileView('list')} />
                </main>

                {/* Details Panel - Hidden on smaller screens */}
                <aside className="bg-white border-l border-gray-200 overflow-y-auto hidden xl:block">
                    <DetailsPanel />
                </aside>
            </div>

            {/* Mobile Bottom Nav (Optional, if Sidebar is hidden) */}
            <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-200 flex justify-around items-center z-50">
                <Sidebar mobile />
            </nav>
        </div>
    );
};
