<template>
    <div>
        <button 
            class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400" 
            :disabled="!team.spotsRemaining"
            @click="showModal = true"
        >Add Member ({{ team.spotsRemaining }} Spots Left)
        </button>
        <Teleport to="body">
            <Modal :show="showModal" @close="showModal = false">
                <template #default>
                    <p>Add New Member to Team</p>
                    <form class="mt-6">
                        <div class="flex gap-2">
                            <input type="email" placeholder="Email Address..." class="flex-1">
                            <button>Add</button>
                        </div>
                    </form>
                </template>
            </Modal>
        </Teleport>
    </div>
</template>

<script setup>
import Modal from "@/components/Modal.vue";
import { ref } from "vue";
import { useTeamStore } from "@/stores/TeamStore.js";

let team = useTeamStore();
let showModal = ref(false);
</script>