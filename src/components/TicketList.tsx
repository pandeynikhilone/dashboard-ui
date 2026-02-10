import React, { useState } from 'react';
import { Search, Filter, ChevronDown, Plus } from 'lucide-react';
import { TicketItem } from './TicketItem';
import { TicketModal } from './TicketModal';

interface Ticket {
    id: string;
    title: string;
    status: 'todo' | 'inprogress' | 'done';
    priority: 'high' | 'medium' | 'low';
    date: string;
    active?: boolean;
}

interface TicketListProps {
    onTicketSelect?: () => void;
}

export const TicketList: React.FC<TicketListProps> = ({ onTicketSelect }) => {
    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const dateTimeObj = new Date();
    const [filterPriority, setFilterPriority] = useState<'all' | 'high' | 'low' | 'medium'>('all');
    const [filterVisible, setFilterVisible] = useState(false);

    // Initial mock data
    const [tickets, setTickets] = useState<Ticket[]>([
        { id: 'OPS-216', title: 'Soluta quam velit', status: 'todo', priority: 'high', date: '2 Jun' },
        { id: 'OPS-102', title: 'Laudantium neque veritatis', status: 'todo', priority: 'high', date: new Date().toLocaleDateString(), active: true },
        { id: 'OPS-217', title: 'Molestiae saepe illum', status: 'done', priority: 'medium', date: '1 Jun' },
        { id: 'APP-992', title: 'Deploy new authentication service', status: 'inprogress', priority: 'low', date: '31 May' },
        { id: 'APP-881', title: 'Fix CSS overflow in dashboard mobile view', status: 'todo', priority: 'medium', date: '31 May' },
    ]);

    const handleCreateTicket = (ticketData: any) => {
        const newTicket: Ticket = {
            id: `NEW-${Math.floor(Math.random() * 1000)}`,
            title: ticketData.title,
            status: 'todo',
            priority: ticketData.priority as 'high' | 'medium' | 'low',
            date: `${dateTimeObj.toLocaleDateString()}`,
            active: false
        };
        setTickets([newTicket, ...tickets]);
        setIsCreateOpen(false);
    };

    const filterData = filterPriority === 'all' ? tickets : tickets.filter(ticket => ticket.priority === filterPriority);

    return (
        <div className="flex flex-col h-full bg-white relative">
            <TicketModal
                isOpen={isCreateOpen}
                onClose={() => setIsCreateOpen(false)}
                onSubmit={handleCreateTicket}
            />

            {/* Header / Filter */}
            <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-1 cursor-pointer hover:bg-gray-50 p-1 rounded transition-colors group">
                    <span className="font-semibold text-gray-800">My Tickets</span>
                    <ChevronDown size={16} className="text-gray-400 group-hover:text-gray-600" />
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={() => setIsCreateOpen(true)}
                        className="p-2 text-brand-blue hover:bg-blue-50 rounded-lg transition-colors"
                        title="New Ticket"
                    >
                        <Plus size={20} />
                    </button>
                    <button onClick={() => setFilterVisible(true)} className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                        <Filter size={20} />
                    </button>
                </div>
            </div>

            {/* filter UI  */}
            {filterVisible && (
                <div className='flex flex-col relative  left-10'>
                    <button onClick={()=>setFilterPriority('high')}>high</button>
                    <button onClick={()=> setFilterPriority('medium')}>medium</button>
                    <button onClick={()=> setFilterPriority('low')}>low</button>
                </div>
            )}

            {/* Search */}
            <div className="px-4 py-3">
                <div className="relative">
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search tickets"
                        className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-gray-400"
                    />
                </div>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto px-2 pb-4 space-y-1">
                <div className="px-2 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Today
                </div>

                {filterData.map((ticket) => (
                    <TicketItem
                        key={ticket.id}
                        id={ticket.id}
                        title={ticket.title}
                        status={ticket.status}
                        priority={ticket.priority}
                        date={ticket.date}
                        active={ticket.active}
                        onClick={onTicketSelect}
                    />
                ))}
            </div>
        </div>
    );
};
