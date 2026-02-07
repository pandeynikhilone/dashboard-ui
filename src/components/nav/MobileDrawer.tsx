import React, { useEffect, useRef } from 'react';
import { Sidebar } from './Sidebar';
import { X } from 'lucide-react';

interface MobileDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose }) => {
    const drawerRef = useRef<HTMLDivElement>(null);

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    // Prevent background scrolling when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isOpen]);

    return (
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 md:hidden
        ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
            />

            {/* Drawer */}
            <div
                ref={drawerRef}
                className={`fixed inset-y-0 left-0 w-64 bg-sidebar-dark z-[60] transform transition-transform duration-300 ease-in-out md:hidden flex flex-col items-center py-4 border-r border-slate-800
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-white"
                >
                    <X size={24} />
                </button>

                {/* Reuse existing Sidebar content (forced to vertical/desktop mode by not passing mobile prop) */}
                <Sidebar />
            </div>
        </>
    );
};
