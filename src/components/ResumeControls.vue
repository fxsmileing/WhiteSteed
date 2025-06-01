<template>
  <div class="resume-controls">
    <section class="control-section">
      <h4>简历编辑</h4>
      <nav class="nav-menu">
        <div class="nav-item" 
          v-for="item in navItems" 
          :key="item.key"
          @click="handleNavClick(item.key)"
          :class="{ active: currentSection === item.key }">
          {{ item.label }}
        </div>
      </nav>
    </section>
<hr>
    <section class="control-section">
      <h4>模板选择</h4>
      <select v-model="selectedTemplate">
        <option value="classic">经典模板</option>
        <option value="modern">现代简约</option>
        <option value="professional">专业商务</option>
      </select>
    </section>
<hr>
    <section class="control-section">
      <h4>主题颜色</h4>
      <div class="color-picker">
        <div 
          v-for="color in themeColors" 
          :key="color"
          :style="{ backgroundColor: color }"
          @click="selectColor(color)"
          class="color-item"
        ></div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useResumeStore } from '../stores/resume'
import { storeToRefs } from 'pinia'

const selectedTemplate = ref('classic')
const themeColors = ['#2c3e50', '#3498db', '#e74c3c', '#2ecc71', '#f39c12']

const store = useResumeStore()
const { currentSection } = storeToRefs(store)

const navItems = [
  { key: 'basic', label: '基本信息' },
  { key: 'intention', label: '求职意向' },
  { key: 'education', label: '教育背景' },
  { key: 'skills', label: '专业技能' },
  { key: 'projects', label: '项目经验' },
  { key: 'evaluation', label: '自我评价' }
]

const handleNavClick = (key: string) => {
  currentSection.value = key
}

const selectColor = (color: string) => {
  // TODO: 实现主题色切换
}
</script>
