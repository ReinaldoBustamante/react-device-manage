import { QueryCache, QueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const queryClient = new QueryClient({
    queryCache: new QueryCache({
        onError: () => toast.error('Error al cargar los datos')
    })
});