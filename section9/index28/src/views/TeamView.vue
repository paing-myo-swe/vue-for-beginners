<script setup>
import TeamHeader from "@/components/Teams/TeamHeader.vue";
import TeamMembers from "@/components/Teams/TeamMembers.vue";
import TeamFooter from "@/components/Teams/TeamFooter.vue";
import { useTeamStore } from "@/stores/TeamStore.js";
import Modal from "@/components/Modal.vue";
import { ref } from "vue";

let team = useTeamStore();
team.fill();

let showModal = ref(false);
</script>

<template>
    <div>
        <TeamHeader @add="showModal = true" />

        <div class="place-self-center flex flex-col gap-y-3">
            <TeamMembers />
        </div>
        
        <TeamFooter />

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
    </div>
</template>
