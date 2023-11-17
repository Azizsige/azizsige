<script setup>
import TheWindow from './../components/TheWindow.vue';
import TheTerminal from './../components/TheTerminal.vue';

import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const currentRoute = ref(router.currentRoute.value.path);

const projectsList = ref([
  {
    title: 'Redesign Website Burnerindo.com',
    description: 'Redesign Website Burnerindo.com',
    link: 'https://burnerindo.com',
    image: 'https://burnerindo.com/assets/images/logo.png',
    tag: "client_project"
  },
  {
    title: 'Maintenance Fajarcorp.com',
    description: 'Maintenance Fajarcorp.com',
    link: 'https://fajarcorp.com',
    image: 'https://fajarcorp.com/assets/images/logo.png',
    tag: "client_project"
  },
  {
    title: 'Change UI Website rumahsidoarjotamandhika.com',
    description: 'Change UI Website rumahsidoarjotamandhika.com',
    link: 'https://rumahsidoarjotamandhika.com',
    image: 'https://rumahsidoarjotamandhika.com/assets/images/logo.png',
    tag: "client_project"
  },
  {
    title: 'Slicing Beautieslife.id From Figma',
    description: 'Slicing Beautieslife.id From Figma',
    link: 'https://beautieslife.id',
    image: 'https://beautieslife.id/assets/images/logo.png',
    tag: "personal_project"
  },
  {
    title: 'Create UI PPOBWP Website',
    description: 'Create UI PPOBWP Website',
    link: 'https://ppobwp.vercel.app/',
    image: 'https://beautieslife.id/assets/images/logo.png',
    tag: "client_project"
  },
]);

onMounted(() => {
  // get the current route
})

</script>

<template>
  <main class="relative max-w-screen-md p-5 mx-auto sm:pt-20">
    <TheWindow class="mt-6 mb-3" title="about_me.md" :decorations="3">
      <div class="content-center text-5xl font-black">
        it's <span class="bg-[var(--color-quinary)]">azizsige!</span>
      </div>
      <div class="my-2 text-lg font-bold">
        I'm a Fulltime or Freelance Frontend Developer from Indonesia, currently living in Surabaya. My main focus is on
        building beautiful and functional websites. Technologies I use are HTML, CSS, JavaScript, Vue, Nuxt and
        TailwindCSS.
      </div>
    </TheWindow>

    <div class="flex gap-3 mb-3 max-sm:flex-col">
      <TheWindow class="sm:basis-1/3" :decorations="1" color="quaternary" title="list_skills.md">
        <div class="h-40 overflow-y-auto font-bold no-scrollbar">
          <div>- <s>HTML</s></div>
          <div>- <s>CSS</s></div>
          <div>- <s>JavaScript</s></div>
          <div>- <s>Bootstrap</s></div>
          <div>- <s>Tailwind</s></div>
          <div>- <s>Vue js</s></div>
          <div>- Nuxt</div>
          <div>- Node js</div>
          <div>- Mongodb</div>
          <div>- Express</div>
        </div>
      </TheWindow>

      <TheWindow class="sm:basis-2/3 sm:w-0" color="tertiary" title="projects.md" :decorations="1">
        <div class="flex flex-wrap justify-center w-full h-40 gap-4 overflow-y-auto no-scrollbar ">
          <TheWindow v-for="data in projectsList" class="w-auto" :decorations="1" color="quaternary"
            :title="`${data.tag}`">
            <div class="overflow-y-auto font-bold text-center no-scrollbar">
              <a :href="data.link" target="_blank" rel="noopener noreferrer">
                {{ data.title }}
              </a>
            </div>
          </TheWindow>
          <!-- <TheWindow class="w-auto" :decorations="1" color="quaternary" title="list_skills.md">
            <div class="overflow-y-auto font-bold no-scrollbar">
              Maintenance Fajarcorp.com
            </div>
          </TheWindow>
          <TheWindow class="w-auto" :decorations="1" color="quaternary" title="list_skills.md">
            <div class="overflow-y-auto font-bold no-scrollbar">
              Change UI Website rumahsidoarjotamandhika.com
            </div>
          </TheWindow>
          <TheWindow class="w-auto" :decorations="1" color="quaternary" title="list_skills.md">
            <div class="overflow-y-auto font-bold no-scrollbar">
              Slicing Beautieslife.id From Figma
            </div>
          </TheWindow> -->
        </div>
      </TheWindow>
    </div>

    <div class="flex items-center justify-between gap-3 max-sm:flex-col">
      <div class="flex flex-wrap justify-center gap-2 text-2xl">
        <a class="flex items-center justify-center w-12 h-12 text-2xl bg-[var(--color-secondary)] shadow-solid rounded-xl border-4 border-black hover:translate-y-[5px] hover:translate-x-[5px] hover:shadow-none duration-100"
          href="https://github.com/azizsige" target="_blank">
          <font-awesome-icon icon="fa-brands fa-github" />
        </a>
        <a class="flex items-center justify-center w-12 h-12 text-2xl bg-[var(--color-tertiary)] shadow-solid rounded-xl border-4 border-black hover:translate-y-[5px] hover:translate-x-[5px] hover:shadow-none duration-100"
          href="https://www.linkedin.com/in/azizsige/" target="_blank">
          <font-awesome-icon icon="fa-brands fa-linkedin" />
        </a>
        <a class="flex items-center justify-center w-12 h-12 text-2xl bg-[var(--color-senary)] shadow-solid rounded-xl border-4 border-black hover:translate-y-[5px] hover:translate-x-[5px] hover:shadow-none duration-100"
          href="https://wa.me/6289677144304" target="_blank">
          <font-awesome-icon icon="fa-brands fa-whatsapp" />
        </a>
      </div>
    </div>
  </main>
</template>