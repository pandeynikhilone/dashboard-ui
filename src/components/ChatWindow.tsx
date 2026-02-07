import React from 'react';
import { MoreHorizontal, Phone, Star, UserPlus, ArrowLeft } from 'lucide-react';
import { Message } from './Message';
import { ChatInput } from './ChatInput';

interface ChatWindowProps {
    onBack?: () => void;
    onToggleDetails?: () => void;
}

export const ChatWindow: React.FC<ChatWindowProps> = ({ onBack, onToggleDetails }) => {
    return (
        <div className="flex flex-col h-full bg-slate-50 relative">
            {/* Header */}
            <div className="h-[60px] bg-white border-b border-gray-200 flex items-center justify-between px-6 shrink-0 z-10">
                <div className="flex items-center gap-3 min-w-0 pr-4">
                    {onBack && (
                        <button
                            onClick={onBack}
                            className="md:hidden p-3 -ml-3 text-gray-600 hover:bg-gray-100 rounded-full shrink-0"
                        >
                            <ArrowLeft size={20} />
                        </button>
                    )}
                    <h2 className="font-bold text-gray-800 text-lg truncate">Laudantium neque veritatis</h2>
                    <span className="shrink-0 px-2 py-0.5 rounded bg-gray-100 text-gray-500 text-xs font-mono">#OPS-102</span>
                </div>

                <div className="flex items-center gap-1">
                    <button className="p-3 text-gray-400 hover:text-yellow-400 transition-colors rounded-full hover:bg-gray-50"><Star size={20} /></button>
                    <button className="p-3 text-gray-400 hover:text-blue-600 transition-colors rounded-full hover:bg-gray-50"><UserPlus size={20} /></button>
                    <button className="p-3 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-50"><Phone size={20} /></button>
                    <button
                        onClick={onToggleDetails}
                        className="p-3 text-gray-400 hover:text-blue-600 transition-colors rounded-full hover:bg-gray-50 xl:hidden"
                    >
                        <MoreHorizontal size={20} />
                    </button>
                    <button className="p-3 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-50 hidden xl:block"><MoreHorizontal size={20} /></button>
                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6">
                <Message
                    id="1"
                    sender="Allie Harmon"
                    timestamp="10:31 AM"
                    content="Ex beatae aliquid mollitia. Enim doloremque molestiae voluptatem recusandae. Maxime beatae nostrum ut."
                />
                <Message
                    id="2"
                    sender="Me"
                    timestamp="10:35 AM"
                    isMe
                    content="Thinking about the layout for this new feature. It needs to be flexible enough to handle various screen sizes."
                />
                <Message
                    id="3"
                    sender="Allie Harmon"
                    timestamp="10:42 AM"
                    content="Dolorem similique et aliquid illum dolor. Vel quo magnam."
                />
            </div>

            {/* Composer */}
            <div className="shrink-0 z-20">
                <ChatInput />
            </div>
        </div>
    );
};
