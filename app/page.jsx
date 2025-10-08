"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function Home() {
    const router = useRouter();
    const { isAuthenticated } = useAuth();

    useEffect(() => {
        if (isAuthenticated) {
            router.push("/dashboard");
        } else {
            router.push("/login");
        }
    }, [isAuthenticated, router]);

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="text-xl">Loading...</div>
        </div>
    );
}

