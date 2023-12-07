import Assignment from "./Assignment.js";

export default {
    components: { 
        Assignment : Assignment
    },
    template: `
        <section v-if="assignments.length">
            <h2 class="font-bold mb-2">{{ title }}
                <span>({{ assignments.length }})</span>
            </h2>
            <div class="flex gap-2">
                <button 
                    v-for="tag in tags" 
                    class="border rounded p-1 text-xs"
                    :class="{
                        'bg-blue-400': currentTag === tag
                    }"
                    @click="currentTag = tag"
                >
                    {{ tag }}</button>
            </div>
            <ul class="border border-gray-600 divide-y mt-3">
                <Assignment 
                    v-for="assignment in filteredAssignments" 
                    :key="assignment.id" 
                    :assignment="assignment" 
                />
            </ul>
        </section>
    `,

    props: {
        title: String,
        assignments: Object
    },

    data() {
        return {
            currentTag: 'all'
        }
    },

    computed: {
        filteredAssignments() {
            if(this.currentTag === 'all') {
                return this.assignments;
            }
            return this.assignments.filter(a => a.tag === this.currentTag);
        },
        tags() {
            return ['all', ...new Set(this.assignments.map(a => a.tag))];
        } 
    }

}