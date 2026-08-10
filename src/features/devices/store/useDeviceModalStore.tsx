import { create } from "zustand"
import type { Device } from "../types"


interface DeviceModalStore {
    isCreateOpen: boolean;
    assignDevice: Device | null;
    editStatusDevice: Device | null;

    openCreate: () => void
    closeCreate: () => void

    openAssign: (device: Device) => void
    closeAssign: () => void

    openEditStatus: (device: Device) => void
    closeEditStatus: () => void
}

export const useDeviceModalStore = create<DeviceModalStore>((set) => ({
    isCreateOpen: false,
    assignDevice: null,
    editStatusDevice: null,

    openCreate: () => set({ isCreateOpen: true }),
    closeCreate: () => set({ isCreateOpen: false }),

    openAssign: (device: Device) => set({ assignDevice: device }),
    closeAssign: () => set({ assignDevice: null }),

    openEditStatus: (device: Device) => set({ editStatusDevice: device }),
    closeEditStatus: () => set({ editStatusDevice: null })

}))