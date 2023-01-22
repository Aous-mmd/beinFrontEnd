<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app class="bg-green">
      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <router-link v-if="item.props.default.icon" class="Clink" v-bind:to=item.path>
            <div class="item">
              <v-list-item-icon class="p-2">
                <v-icon>{{ item.props.default.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ item.name }}</v-list-item-title>
              </v-list-item-content>
            </div>
          </router-link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="deep-green accent-4" dense dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Bein Test</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <div class="app">
        <router-view />
      </div>
    </v-main>
  </v-app>
</template>


<script>

import routes from '@/router';
console.log(routes.getRoutes())
export default {
  data() {
    return {
      drawer: null,
      items: routes.getRoutes(),
      right: null,
    }
  },
}
</script>


<style>
.bg-green {
  background-color: rgb(16, 32, 16);
}

.item {
  display: flex;
  align-items: center;
}

.app {
  padding: 5%;
}

.p-2 {
  padding-inline-end: 5px;
}

.Clink {
  color: white;
  text-decoration: none;
}

.router-link-active {
  color: black;
}
</style>