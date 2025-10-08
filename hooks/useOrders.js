import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "@/lib/apiClient";

// Fetch all orders
export function useOrders(params = {}) {
    return useQuery({
        queryKey: ["orders", params],
        queryFn: async () => {
            const response = await apiClient.get("/orders", { params });
            return response.data;
        },
    });
}

// Fetch single order
export function useOrder(orderId) {
    return useQuery({
        queryKey: ["orders", orderId],
        queryFn: async () => {
            const response = await apiClient.get(`/orders/${orderId}`);
            return response.data;
        },
        enabled: !!orderId,
    });
}

// Update order status
export function useUpdateOrderStatus() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ orderId, status }) => {
            const response = await apiClient.patch(`/orders/${orderId}/status`, {
                status,
            });
            return response.data;
        },
        onSuccess: (data, variables) => {
            queryClient.invalidateQueries({ queryKey: ["orders"] });
            queryClient.invalidateQueries({ queryKey: ["orders", variables.orderId] });
        },
    });
}

