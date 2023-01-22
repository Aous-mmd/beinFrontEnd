<template>
    <div class="login">
        <v-container class="grey lighten-5">
            <v-row no-gutters>
                <v-col cols="12" sm="4" lg="12">
                    <div class="loginForm">
                        <v-card elevation="2" shaped class="pa-2" outlined tile>
                            <v-text-field @input="event => username = event.target.value" v-model="username"
                                label="Enter Username"></v-text-field>
                            <v-btn variant="tonal" v-on:click="moveToHome(username)">
                                Login
                            </v-btn>
                        </v-card>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import router from "@/router";
export default {
    name: 'LoginView',
    emits: {
        click: ({ username }) => {
            if (username.length > 0) {
                localStorage.setItem('username', username);
                router.push({ name: 'home' })
                return true
            } else {
                console.warn('Invalid submit event payload!')
                return false
            }
        },
    },
    data: () => ({ username: '' }),
    methods: {
        moveToHome(username) {
            this.$emit('click', { username });
        }
    }
}
</script>
