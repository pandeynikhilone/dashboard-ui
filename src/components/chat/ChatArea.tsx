import React from 'react';
import { MoreHorizontal, Phone, Star, UserPlus, ArrowLeft } from 'lucide-react';
import { MessageBubble } from './MessageBubble';
import { Composer } from './Composer';

interface ChatAreaProps {
    onBack?: () => void;
}

export const ChatArea: React.FC<ChatAreaProps> = ({ onBack }) => {
    return (
        <div className="flex flex-col h-full bg-slate-50 relative">
            {/* Header */}
            <div className="h-[60px] bg-white border-b border-gray-200 flex items-center justify-between px-6 shrink-0 z-10">
                <div className="flex items-center gap-3">
                    {onBack && (
                        <button
                            onClick={onBack}
                            className="md:hidden p-2 -ml-2 text-gray-600 hover:bg-gray-100 rounded-full"
                        >
                            <ArrowLeft size={20} />
                        </button>
                    )}
                    <h2 className="font-bold text-gray-800 text-lg">Laudantium neque veritatis</h2>
                    <span className="px-2 py-0.5 rounded bg-gray-100 text-gray-500 text-xs font-mono">#OPS-102</span>
                </div>

                <div className="flex items-center gap-2">
                    <button className="p-2 text-gray-400 hover:text-yellow-400 transition-colors"><Star size={20} /></button>
                    <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors"><UserPlus size={20} /></button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors"><Phone size={20} /></button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors"><MoreHorizontal size={20} /></button>
                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6">
                <MessageBubble
                    id="1"
                    sender="Allie Harmon"
                    timestamp="10:31 AM"
                    content="Ex beatae aliquid mollitia. Enim doloremque molestiae voluptatem recusandae. Maxime beatae nostrum ut."
                />
                <MessageBubble
                    id="2"
                    sender="Me"
                    timestamp="10:35 AM"
                    isMe
                    content="Thinking about the layout for this new feature. It needs to be flexible enough to handle various screen sizes."
                />
                <MessageBubble
                    id="3"
                    sender="Allie Harmon"
                    timestamp="10:42 AM"
                    content="Dolorem similique et aliquid illum dolor. Vel quo magnam."
                />
            </div>

            {/* Composer */}
            <div className="shrink-0 z-20">
                <Composer />
            </div>
        </div>
    );
};
