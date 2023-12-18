<script setup>
import TeamHeader from "@/components/Teams/TeamHeader.vue";
import TeamMembers from "@/components/Teams/TeamMembers.vue";
import TeamFooter from "@/components/Teams/TeamFooter.vue";
import team from "@/team.json";

</script>

<template>
    <div>
        <TeamHeader :team="team" />

        <div class="place-self-center flex flex-col gap-y-3">
            <TeamMembers :team="team" />
        </div>
        
        <TeamFooter :team="team" />
    </div>
</template>
