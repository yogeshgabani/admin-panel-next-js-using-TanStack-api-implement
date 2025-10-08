import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "@/lib/apiClient";

// Fetch all users
export function useUsers() {
    return useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const response = await apiClient.get("/users");
            return response.data;
        },
    });
}

// Fetch single user
export function useUser(userId) {
    return useQuery({
        queryKey: ["users", userId],
        queryFn: async () => {
            const response = await apiClient.get(`/users/${userId}`);
            return response.data;
        },
        enabled: !!userId,
    });
}

// Create user mutation
export function useCreateUser() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (userData) => {
            const response = await apiClient.post("/users", userData);
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["users"] });
        },
    });
}

// Update user mutation
export function useUpdateUser() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ userId, userData }) => {
            const response = await apiClient.put(`/users/${userId}`, userData);
            return response.data;
        },
        onSuccess: (data, variables) => {
            queryClient.invalidateQueries({ queryKey: ["users"] });
            queryClient.invalidateQueries({ queryKey: ["users", variables.userId] });
        },
    });
}

// Delete user mutation
export function useDeleteUser() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (userId) => {
            const response = await apiClient.delete(`/users/${userId}`);
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["users"] });
        },
    });
}

