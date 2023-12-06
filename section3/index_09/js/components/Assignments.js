import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: {
        AssignmentList,
        AssignmentCreate
    },
    template: `
        <section class="space-y-4">
            <AssignmentList title="In Progress" :assignments="filters.inProgress" />
            <AssignmentList title="Completed" :assignments="filters.completed" />
            <AssignmentCreate @add="add" />
        </section>
    `,
    data() {
        return {
            assignments: [
                { id:1, name: "Finish project", complete: false },
                { id:2, name: "Read chapter", complete: false },
                { id:3, name: "Turn in homework", complete: false },
            ],
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

    methods: {
        add(newAssignmentName) {
            this.assignments.push({
                id: this.assignments.legth + 1,
                name: newAssignmentName,
                complete: false
            });
        }
    }

}