import React from 'react';
import { AlertCircle } from 'lucide-react';

interface TicketProps {
    id: string;
    title: string;
    status: 'todo' | 'inprogress' | 'done';
    priority: 'high' | 'medium' | 'low';
    assignee?: string;
    date: string;
    active?: boolean;
    onClick?: () => void;
}

export const TicketItem: React.FC<TicketProps> = ({ id, title, status, priority, date, active, onClick }) => {
    return (
        <div
            onClick={onClick}
            className={`flex flex-col gap-2 p-3 rounded-lg cursor-pointer transition-all border
      ${active
                    ? 'bg-blue-50 border-blue-200 shadow-sm'
                    : 'bg-white border-transparent hover:bg-gray-50 hover:border-gray-200'
                }`}
        >
            <div className="flex justify-between items-start">
                <h4 className={`text-sm font-medium line-clamp-2 ${active ? 'text-blue-900' : 'text-gray-800'}`}>
                    {title}
                </h4>
                <span className="text-[10px] text-gray-400 whitespace-nowrap ml-2">{date}</span>
            </div>

            <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-gray-500 font-mono">{id}</span>

                {status === 'todo' && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-gray-100 text-gray-600">To Do</span>
                )}
                {status === 'inprogress' && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-blue-100 text-blue-600">In Progress</span>
                )}
                {status === 'done' && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-green-100 text-green-600">Done</span>
                )}

                {priority === 'high' && (
                    <AlertCircle size={14} className="text-red-500 ml-auto" />
                )}
            </div>
        </div>
    );
};
