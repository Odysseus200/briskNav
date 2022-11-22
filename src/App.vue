<template>
  <div class="container">
    <div class="icons-list">
      <div class="info" @click="aboutMe">
        <UserOutlined
          :style="{ fontSize: '96px', color: '#FFF' }"
          class="shake-opacity shake-freeze icon"
        />
        <span>我的简历</span>
      </div>
      <div class="info" @click="projectReact">
        <LayoutOutlined
          :style="{ fontSize: '96px', color: '#FFF' }"
          class="shake-opacity shake-freeze icon"
        />
        <span class="s1">SFL后台管理系统(React)</span>
        <span class="hideForMedium">React后台管理系统</span>
      </div>
      <div class="info">
        <WechatOutlined
          :style="{ fontSize: '96px', color: '#FFF' }"
          class="shake-opacity shake-freeze icon"
        />
        <span>Uniapp小程序</span>
      </div>
      <div class="info" @click="groupProject">
        <FireOutlined
          :style="{ fontSize: '96px', color: '#FFF' }"
          class="shake-opacity shake-freeze icon"
        />
        <span>牧夫天文项目组--前端</span>
      </div>
      <div class="info" @click="authentication">
        <TrophyOutlined
          :style="{ fontSize: '96px', color: '#FFF' }"
          class="shake-opacity shake-freeze icon"
        />
        <span>静态页面作品</span>
      </div>
      <div class="info" @click="github">
        <GithubOutlined
          :style="{ fontSize: '96px', color: '#FFF' }"
          class="shake-opacity shake-freeze icon"
        />
        <span>GitHub仓库</span>
      </div>
      <div class="info" @click="blog">
        <HomeOutlined
          :style="{ fontSize: '96px', color: '#FFF' }"
          class="shake-opacity shake-freeze icon"
        />
        <span>Blog</span>
      </div>
      <div class="info" @click="callMe">
        <WhatsAppOutlined
          :style="{ fontSize: '96px', color: '#FFF' }"
          class="shake-slow shake-constant icon"
        />
        <span>点击打给我</span>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import {
  UserOutlined,
  LayoutOutlined,
  WechatOutlined,
  HomeOutlined,
  FireOutlined,
  GithubOutlined,
  TrophyOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons-vue";
export default defineComponent({
  components: {
    UserOutlined,
    LayoutOutlined,
    WechatOutlined,
    HomeOutlined,
    FireOutlined,
    GithubOutlined,
    TrophyOutlined,
    WhatsAppOutlined,
  },
  data() {
    return {
      active: -1,
    };
  },
  methods: {
    aboutMe() {
      location.href = "https://www.baidu.com";
    },
    projectReact() {
      window.open("http://120.79.32.176:8080");
    },
    github() {
      location.href = "https://github.com/Odysseus200?tab=repositories";
    },
    groupProject() {
      location.href = "https://github.com/IMUFU-Develop";
    },
    authentication() {
      location.href =
        "https://www.credly.com/badges/68eaa42a-ff6b-4e0c-b69b-8371dc07156c";
    },
    blog() {
      location.href = "https://Odysseus200.github.io";
    },
    callMe() {
      window.location.href = "tel://" + 15911705341;
    },
  },
});
</script>
<style scoped></style>
