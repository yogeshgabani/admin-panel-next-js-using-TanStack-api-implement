"use client";

import DashboardLayout from "@/components/DashboardLayout";
import { FiFileText, FiDownload } from "react-icons/fi";

export default function ReportsPage() {
    const reports = [
        { name: "Monthly Sales Report", date: "October 2024", size: "2.4 MB", type: "PDF" },
        { name: "Quarterly Analytics", date: "Q3 2024", size: "5.1 MB", type: "Excel" },
        { name: "Customer Insights", date: "September 2024", size: "1.8 MB", type: "PDF" },
        { name: "Inventory Report", date: "October 2024", size: "3.2 MB", type: "Excel" },
        { name: "Financial Summary", date: "Q3 2024", size: "4.5 MB", type: "PDF" },
    ];

    return (
        <DashboardLayout>
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Reports</h1>
                        <p className="text-gray-600 mt-1">Access and download reports</p>
                    </div>
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                        Generate Report
                    </button>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="divide-y divide-gray-200">
                        {reports.map((report, index) => (
                            <div
                                key={index}
                                className="p-6 hover:bg-gray-50 transition flex items-center justify-between"
                            >
                                <div className="flex items-center space-x-4">
                                    <div className="bg-indigo-100 p-3 rounded-lg">
                                        <FiFileText className="h-6 w-6 text-indigo-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-900">
                                            {report.name}
                                        </h3>
                                        <p className="text-sm text-gray-500 mt-1">
                                            {report.date} • {report.size} • {report.type}
                                        </p>
                                    </div>
                                </div>
                                <button className="flex items-center space-x-2 px-4 py-2 text-sm text-indigo-600 hover:bg-indigo-50 rounded-lg transition">
                                    <FiDownload className="h-4 w-4" />
                                    <span>Download</span>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}

