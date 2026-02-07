import React from 'react';
import { User, Flag, Tag, Calendar, CheckCircle } from 'lucide-react';

export const ProfileDetails: React.FC = () => {
    return (
        <div className="flex flex-col h-full bg-white">
            <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                <div className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-medium flex items-center gap-2">
                    <CheckCircle size={16} />
                    To Do
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                    <span className="text-xl">×</span>
                </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-6">

                {/* Priority */}
                <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-500 uppercase flex items-center gap-2">
                        <Flag size={14} /> Priority
                    </label>
                    <select className="w-full p-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 outline-none focus:ring-2 focus:ring-blue-100">
                        <option>Medium</option>
                        <option>High</option>
                        <option>Low</option>
                    </select>
                </div>

                {/* Assignee */}
                <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-500 uppercase flex items-center gap-2">
                        <User size={14} /> Assigned To
                    </label>
                    <div className="flex items-center gap-3 p-2 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                        <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-xs">
                            AH
                        </div>
                        <span className="text-sm font-medium text-gray-700">Allie Harmon</span>
                        <button className="ml-auto text-xs text-blue-600 hover:underline">Change</button>
                    </div>
                </div>

                {/* Project */}
                <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-500 uppercase flex items-center gap-2">
                        <Tag size={14} /> Project
                    </label>
                    <select className="w-full p-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 outline-none focus:ring-2 focus:ring-blue-100">
                        <option>Administrative</option>
                        <option>Development</option>
                        <option>Marketing</option>
                    </select>
                </div>

                {/* Due Date */}
                <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-500 uppercase flex items-center gap-2">
                        <Calendar size={14} /> Due Date
                    </label>
                    <input
                        type="date"
                        className="w-full p-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 outline-none focus:ring-2 focus:ring-blue-100"
                    />
                </div>

                {/* Tags */}
                <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-500 uppercase flex items-center gap-2">
                        <Tag size={14} /> Tags
                    </label>
                    <div className="flex flex-wrap gap-2">
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">Bug</span>
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">Frontend</span>
                        <button className="text-blue-600 text-xs hover:bg-blue-50 px-2 py-1 rounded border border-dashed border-blue-200">
                            + Add Tag
                        </button>
                    </div>
                </div>

            </div>

            {/* Footer Actions */}
            <div className="p-4 border-t border-gray-100 bg-gray-50">
                <div className="flex items-center justify-between text-xs text-gray-500 hover:bg-gray-100 p-2 rounded cursor-pointer">
                    <span>Tasks</span>
                    <span>&gt;</span>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500 hover:bg-gray-100 p-2 rounded cursor-pointer mt-1">
                    <span>History</span>
                    <span>&gt;</span>
                </div>
            </div>
        </div>
    );
};
