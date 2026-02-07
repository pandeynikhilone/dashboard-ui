import React from 'react';
import { Bold, Italic, Paperclip, Image, Smile, Send } from 'lucide-react';

export const Composer: React.FC = () => {
    return (
        <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex flex-col border border-gray-200 rounded-xl shadow-sm focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                {/* Toolbar */}
                <div className="flex items-center gap-1 p-2 border-b border-gray-50 bg-gray-50/50 rounded-t-xl">
                    <ToolbarButton icon={<Bold size={16} />} />
                    <ToolbarButton icon={<Italic size={16} />} />
                    <div className="h-4 w-px bg-gray-300 mx-1"></div>
                    <ToolbarButton icon={<Paperclip size={16} />} />
                    <ToolbarButton icon={<Image size={16} />} />
                    <ToolbarButton icon={<Smile size={16} />} />
                </div>

                {/* Input */}
                <textarea
                    placeholder="Write a reply..."
                    className="w-full p-3 min-h-[80px] text-sm text-gray-800 resize-none focus:outline-none bg-transparent"
                />

                {/* Footer Actions */}
                <div className="flex items-center justify-between p-2">
                    <div className="flex items-center gap-2">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                            <span className="text-xs text-gray-500 font-medium">Internal Note</span>
                        </label>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors flex items-center gap-2 text-sm font-medium pr-4">
                        <Send size={16} />
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

const ToolbarButton = ({ icon }: { icon: React.ReactNode }) => (
    <button className="p-2 md:p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-200 rounded transition-colors min-w-[32px] min-h-[32px] flex items-center justify-center">
        {icon}
    </button>
);
