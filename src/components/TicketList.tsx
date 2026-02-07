import React from 'react';
import { Search, Filter, ChevronDown } from 'lucide-react';
import { TicketItem } from './TicketItem';

interface TicketListProps {
    onTicketSelect?: () => void;
}

export const TicketList: React.FC<TicketListProps> = ({ onTicketSelect }) => {
    return (
        <div className="flex flex-col h-full bg-white">
            {/* Header / Filter */}
            <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-1 cursor-pointer hover:bg-gray-50 p-1 rounded transition-colors group">
                    <span className="font-semibold text-gray-800">My Tickets</span>
                    <ChevronDown size={16} className="text-gray-400 group-hover:text-gray-600" />
                </div>
                <button className="p-3 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded transition-colors">
                    <Filter size={20} />
                </button>
            </div>

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

                <TicketItem
                    id="OPS-216"
                    title="Soluta quam velit"
                    status="todo"
                    priority="high"
                    date="2 Jun"
                    onClick={onTicketSelect}
                />
                <TicketItem
                    id="OPS-102"
                    title="Laudantium neque veritatis"
                    status="todo"
                    priority="high"
                    date="2 Jun"
                    active
                    onClick={onTicketSelect}
                />
                <TicketItem
                    id="OPS-216"
                    title="Molestiae saepe illum"
                    status="done"
                    priority="medium"
                    date="1 Jun"
                    onClick={onTicketSelect}
                />

                <div className="px-2 py-2 mt-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Yesterday
                </div>

                <TicketItem
                    id="APP-992"
                    title="Deploy new authentication service"
                    status="inprogress"
                    priority="low"
                    date="31 May"
                    onClick={onTicketSelect}
                />
                <TicketItem
                    id="APP-881"
                    title="Fix CSS overflow in dashboard mobile view"
                    status="todo"
                    priority="medium"
                    date="31 May"
                    onClick={onTicketSelect}
                />
            </div>
        </div>
    );
};
