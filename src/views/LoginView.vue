<template>
    <div class="login">
        <v-container class="grey lighten-5">
            <v-row no-gutters>
                <v-col cols="12" sm="4">
                    <v-card elevation="2" shaped class="pa-2" outlined tile>
                        Login
                        <v-text-field label="Regular"></v-text-field>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'LoginView',
    data: () => ({
        rules: [
            value => !!value || 'Required.',
        ],
    }),
}
</script>
