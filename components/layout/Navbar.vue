<script setup>
import { ref } from "vue";

const items = ref([
    { label: 'Home', icon: 'pi pi-home', route: '/home' },
    { label: 'Products', icon: 'pi pi-shopping-cart', route: '/products' }
]);

const menu = ref();

const toggle = (event) => {
    menu.value.toggle(event);
};
</script>

<template>
    
    <div class="card flex">
        <div class="hidden lg:flex">
            <Menu :model="items">
                <template #item="{ item, props }">
                    <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                        <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                            <span :class="item.icon" />
                            <span class="ml-2">{{ item.label }}</span>
                        </a>
                    </router-link>
                    <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
                        <span :class="item.icon" />
                        <span class="ml-2">{{ item.label }}</span>
                    </a>
                </template>
            </Menu>
        </div>

        <!-- Mobile Menu -->
        <div class="flex lg:hidden">
            <Button type="button" class="w-[40px] h-[40px]" icon="pi pi-ellipsis-v" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" />
            <Menu ref="menu" id="overlay_menu" :model="items" :popup="true">
                <template #item="{ item, props }">
                    <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                        <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                            <span :class="item.icon"></span>
                            <span class="ml-2">{{ item.label }}</span>
                        </a>
                    </router-link>
                    <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
                        <span :class="item.icon" />
                        <span class="ml-2">{{ item.label }}</span>
                    </a>
                </template>
            </Menu>
        </div>
    </div>
    
</template>