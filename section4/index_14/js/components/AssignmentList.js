import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";

export default {
    components: { 
        Assignment : Assignment,
        AssignmentTags
    },
    template: `
        <section v-if="assignments.length" class="w-60">
            <div class="flex justify-between items-start">
                <h2 class="font-bold mb-2">{{ title }}
                    <span>({{ assignments.length }})</span>
                </h2>
                <button v-show="canToggle" @click="$emit('toggle')">&times</button>
            </div>
            <assignment-tags 
                :initial-tags="assignments.map(a => a.tag)"
                v-model:currentTag="currentTag" 
            ></assignment-tags>
            <ul class="border border-gray-600 divide-y mt-3">
                <Assignment 
                    v-for="assignment in filteredAssignments" 
                    :key="assignment.id" 
                    :assignment="assignment" 
                />
            </ul>
            <slot></slot>
        </section>
    `,

    props: {
        title: String,
        assignments: Object,
        canToggle: {
            type: Boolean,
            default: false,
        }
    },

    data() {
        return {
            currentTag: 'all',
        }
    },

    computed: {
        filteredAssignments() {
            if(this.currentTag === 'all') {
                return this.assignments;
            }
            return this.assignments.filter(a => a.tag === this.currentTag);
        }, 
    }

}