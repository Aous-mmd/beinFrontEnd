<template>
    <div class="addButton">
        <div class="text-center">
            <v-dialog v-model="dialog" width="50%">
                <template v-slot:activator="{ props }">
                    <v-btn color="green" v-bind="props">
                        Add New Category
                    </v-btn>
                </template>
                <v-card>
                    <v-card-title>Add New Category</v-card-title>
                    <v-form v-model="valid">
                        <v-text-field v-model="firstname" :rules="nameRules" :counter="10" label="Category Name"
                            required></v-text-field>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="green-darken-1" variant="text" @click="dialog = false">
                                Cancel
                            </v-btn>
                            <v-btn color="green-darken-1" variant="text" @click="dialog = false">
                                Save
                            </v-btn>
                        </v-card-actions>
                    </v-form>
                </v-card>
            </v-dialog>
        </div>
    </div>
    <v-table>
        <thead>
            <tr>
                <th class="text-left">
                    Name
                </th>
                <th class="text-left">
                    Actions
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in desserts" :key="item.name">
                <td>{{ item.name }}</td>
                <td>
                    <v-icon icon="mdi-pen" color="blue"></v-icon>
                    <v-icon icon="mdi-delete" color="red"></v-icon>
                </td>
            </tr>
        </tbody>
    </v-table>
</template>

<script>
export default {
    data() {
        return {
            dialog: false,
            desserts: [
                {
                    name: 'Frozen Yogurt',
                },
                {
                    name: 'Ice cream sandwich',
                },
                {
                    name: 'Eclair',
                },
                {
                    name: 'Cupcake',
                },
                {
                    name: 'Gingerbread',
                },
                {
                    name: 'Jelly bean',
                },
                {
                    name: 'Lollipop',
                },
                {
                    name: 'Honeycomb',
                },
                {
                    name: 'Donut',
                },
                {
                    name: 'KitKat',
                },
            ],
        }
    },
}
</script>

<style>
.addButton {
    display: flex;
    justify-content: flex-end;
}
</style>