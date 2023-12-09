import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: {
        AssignmentList,
        AssignmentCreate
    },
    template: `
        <section class="space-y-4 flex gap-8">
            <AssignmentList title="In Progress" :assignments="filters.inProgress">
                <AssignmentCreate @add="add"></AssignmentCreate>
            </AssignmentList>
            <div v-if="showCompleted">
                <AssignmentList 
                    title="Completed" 
                    :assignments="filters.completed" 
                    can-toggle
                    @toggle="showCompleted = !showCompleted"
                ></AssignmentList>
            </div>
        </section>
    `,
    data() {
        return {
            assignments: [],
            showCompleted: true,
        };
    },

    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(assignment => !assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete)
            }
        },
    },

    created() {
        fetch("http://localhost:3001/assignments")
            .then(response => response.json())
            .then(assignments => {
                this.assignments = assignments;
            });
    },

    methods: {
        add(newAssignmentName) {
            this.assignments.push({
                id: this.assignments.legth + 1,
                name: newAssignmentName,
                complete: false,
                tag: 'math'
            });
        }
    }

}