"use client";

import DashboardLayout from "@/components/DashboardLayout";
import { FiTrendingUp, FiTrendingDown } from "react-icons/fi";

export default function AnalyticsPage() {
    const metrics = [
        { title: "Revenue", value: "$45,231.89", change: "+20.1%", trend: "up" },
        { title: "Sales", value: "2,350", change: "+15.3%", trend: "up" },
        { title: "Visitors", value: "12,234", change: "-5.4%", trend: "down" },
        { title: "Conversion", value: "3.2%", change: "+2.5%", trend: "up" },
    ];

    return (
        <DashboardLayout>
            <div className="space-y-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
                    <p className="text-gray-600 mt-1">Track your business metrics</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {metrics.map((metric, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-sm font-medium text-gray-600">
                                    {metric.title}
                                </span>
                                {metric.trend === "up" ? (
                                    <FiTrendingUp className="h-5 w-5 text-green-500" />
                                ) : (
                                    <FiTrendingDown className="h-5 w-5 text-red-500" />
                                )}
                            </div>
                            <div className="text-2xl font-bold text-gray-900">
                                {metric.value}
                            </div>
                            <div
                                className={`text-sm mt-2 ${metric.trend === "up" ? "text-green-600" : "text-red-600"
                                    }`}
                            >
                                {metric.change} from last month
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">
                            Sales Overview
                        </h3>
                        <div className="h-64 flex items-center justify-center text-gray-400">
                            Chart placeholder - Integrate your charting library here
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">
                            Traffic Sources
                        </h3>
                        <div className="h-64 flex items-center justify-center text-gray-400">
                            Chart placeholder - Integrate your charting library here
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}

