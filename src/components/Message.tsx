import React from 'react';

interface MessageProps {
    id: string;
    sender: string;
    avatar?: string;
    content: string;
    timestamp: string;
    isMe?: boolean;
    attachments?: { name: string; url: string }[];
}

export const Message: React.FC<MessageProps> = ({ sender, avatar, content, timestamp, isMe, attachments }) => {
    return (
        <div className={`flex gap-3 mb-6 ${isMe ? 'flex-row-reverse' : 'flex-row'}`}>
            {/* Avatar */}
            <div className="shrink-0">
                <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                    {avatar ? (
                        <img src={avatar} alt={sender} className="w-full h-full object-cover" />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-blue-100 text-blue-600 text-xs font-bold">
                            {sender.charAt(0)}
                        </div>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className={`flex flex-col max-w-[70%] ${isMe ? 'items-end' : 'items-start'}`}>
                <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-sm font-semibold text-gray-900">{sender}</span>
                    <span className="text-xs text-gray-400">{timestamp}</span>
                </div>

                <div className={`p-4 rounded-xl text-sm leading-relaxed shadow-sm
                    ${isMe
                        ? 'bg-blue-600 text-white rounded-tr-none'
                        : 'bg-white border border-gray-100 text-gray-800 rounded-tl-none'
                    }`}
                >
                    {content}
                </div>

                {/* Attachments */}
                {attachments && attachments.length > 0 && (
                    <div className="mt-2 flex gap-2">
                        {attachments.map((file) => (
                            <div key={file.name} className="flex items-center gap-2 p-2 bg-gray-50 border border-gray-200 rounded-lg text-xs">
                                <span className="font-medium text-gray-700">{file.name}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
