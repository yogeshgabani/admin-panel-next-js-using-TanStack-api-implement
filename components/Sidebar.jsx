"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    FiHome,
    FiUsers,
    FiShoppingCart,
    FiSettings,
    FiBarChart2,
    FiFileText,
    FiX,
    FiMenu,
    FiChevronsLeft,
} from "react-icons/fi";

const menuItems = [
    { name: "Dashboard", href: "/dashboard", icon: FiHome },
    { name: "Users", href: "/dashboard/users", icon: FiUsers },
    { name: "Orders", href: "/dashboard/orders", icon: FiShoppingCart },
    { name: "Analytics", href: "/dashboard/analytics", icon: FiBarChart2 },
    { name: "Reports", href: "/dashboard/reports", icon: FiFileText },
    { name: "Settings", href: "/dashboard/settings", icon: FiSettings },
];

export default function Sidebar({ isOpen, setIsOpen }) {
    const pathname = usePathname();
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <>
            {/* Mobile overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-gray-600 bg-opacity-75 z-20 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`
          fixed lg:static inset-y-0 left-0 z-30
          ${isCollapsed ? "w-20" : "w-64"} bg-white shadow-lg
          transform transition-all duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
            >
                <div className="flex flex-col h-full">
                    {/* Logo */}
                    <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
                        <div className={`flex items-center ${isCollapsed ? "justify-center w-full" : ""}`}>
                            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">A</span>
                            </div>
                            {!isCollapsed && (
                                <span className="ml-2 text-xl font-bold text-gray-800">
                                    Admin Panel
                                </span>
                            )}
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="lg:hidden text-gray-500 hover:text-gray-700"
                        >
                            <FiX className="h-6 w-6" />
                        </button>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 px-4 py-6 space-y-1">
                        {menuItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = pathname === item.href;

                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`
                    flex items-center ${isCollapsed ? "justify-center px-2" : "px-4"} py-3 text-sm font-medium rounded-lg
                    transition-colors duration-150 group relative
                    ${isActive
                                            ? "bg-indigo-50 text-indigo-700 border-l-4 border-indigo-700"
                                            : "text-gray-700 hover:bg-gray-100"
                                        }
                  `}
                                    title={isCollapsed ? item.name : ""}
                                >
                                    <Icon className={`h-5 w-5 ${!isCollapsed ? "mr-3" : ""}`} />
                                    {!isCollapsed && <span>{item.name}</span>}

                                    {/* Tooltip on hover when collapsed */}
                                    {isCollapsed && (
                                        <span className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
                                            {item.name}
                                        </span>
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Toggle Button */}
                    <div className="px-4 pb-4">
                        <button
                            onClick={() => setIsCollapsed(!isCollapsed)}
                            className="hidden lg:flex items-center justify-center w-full py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                            title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
                        >
                            {isCollapsed ? (
                                <FiMenu className="h-5 w-5" />
                            ) : (
                                <>
                                    <FiChevronsLeft className="h-5 w-5 mr-2" />
                                    <span className="text-sm font-medium">Collapse</span>
                                </>
                            )}
                        </button>
                    </div>

                    {/* Footer */}
                    <div className="p-4 border-t border-gray-200">
                        <div className={`flex items-center ${isCollapsed ? "justify-center" : "px-4"} py-3 bg-gray-50 rounded-lg`}>
                            <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-white font-bold">JD</span>
                            </div>
                            {!isCollapsed && (
                                <div className="ml-3 flex-1">
                                    <p className="text-sm font-medium text-gray-900">John Doe</p>
                                    <p className="text-xs text-gray-500">Administrator</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
}

