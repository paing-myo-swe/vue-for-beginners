import Assignments from "./Assignments.js";

export default {
    components: {
        Assignments: Assignments,
    },
    template: `
        <div class="grid gap-4">
            <Assignments></Assignments>
        </div>

    `,
}