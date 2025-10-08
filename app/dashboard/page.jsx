"use client";

import { useAuth } from "@/context/AuthContext";
import DashboardLayout from "@/components/DashboardLayout";
import { FiUsers, FiShoppingCart, FiDollarSign, FiTrendingUp } from "react-icons/fi";

export default function DashboardPage() {
    const { user } = useAuth();

    const stats = [
        {
            title: "Total Users",
            value: "2,543",
            icon: FiUsers,
            change: "+12.5%",
            changeType: "increase",
        },
        {
            title: "Total Orders",
            value: "1,423",
            icon: FiShoppingCart,
            change: "+8.2%",
            changeType: "increase",
        },
        {
            title: "Revenue",
            value: "$54,239",
            icon: FiDollarSign,
            change: "+23.1%",
            changeType: "increase",
        },
        {
            title: "Growth",
            value: "18.3%",
            icon: FiTrendingUp,
            change: "+4.3%",
            changeType: "increase",
        },
    ];

    return (
        <DashboardLayout>
            <div className="space-y-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">
                        Welcome back, {user?.name}!
                    </h1>
                    <p className="text-gray-600 mt-1">
                        Here&apos;s what&apos;s happening with your business today.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="bg-indigo-100 p-3 rounded-lg">
                                        <Icon className="h-6 w-6 text-indigo-600" />
                                    </div>
                                    <span
                                        className={`text-sm font-medium ${stat.changeType === "increase"
                                            ? "text-green-600"
                                            : "text-red-600"
                                            }`}
                                    >
                                        {stat.change}
                                    </span>
                                </div>
                                <h3 className="text-gray-600 text-sm font-medium">
                                    {stat.title}
                                </h3>
                                <p className="text-2xl font-bold text-gray-900 mt-1">
                                    {stat.value}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">
                        Recent Activity
                    </h2>
                    <div className="space-y-4">
                        {[1, 2, 3, 4, 5].map((item) => (
                            <div
                                key={item}
                                className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                            >
                                <div className="flex items-center space-x-4">
                                    <div className="bg-gray-100 h-10 w-10 rounded-full flex items-center justify-center">
                                        <span className="text-gray-600 font-medium">
                                            {item}
                                        </span>
                                    </div>
                                    <div>
                                        <p className="text-gray-900 font-medium">
                                            Activity Item {item}
                                        </p>
                                        <p className="text-gray-500 text-sm">
                                            Description for activity {item}
                                        </p>
                                    </div>
                                </div>
                                <span className="text-gray-500 text-sm">{item}h ago</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}

